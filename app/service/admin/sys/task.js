"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../base");
/**
 * 任务调度服务
 */
class SysTaskService extends base_1.default {
    /**
     * 初始化任务，系统启动前调用
     */
    async initTask() {
        const jobs = await this.app.queue.sys.getJobs(['active', 'delayed', 'failed', 'paused', 'waiting', 'completed']);
        for (let i = 0; i < jobs.length; i++) {
            // 先移除所有已存在的任务
            await jobs[i].remove();
        }
        // 查找所有需要运行的任务
        const tasks = await this.getRepo().admin.sys.Task.find({ status: 1 });
        if (tasks && tasks.length > 0) {
            for (const t of tasks) {
                this.start(t);
            }
        }
    }
    /**
     * 分页查询
     */
    async page(page, count) {
        const result = await this.getRepo().admin.sys.Task.find({
            order: {
                id: 'ASC',
            },
            take: count,
            skip: page * count,
        });
        return result;
    }
    /**
     * count task
     */
    async count() {
        return await this.getRepo().admin.sys.Task.count();
    }
    /**
     * task info
     */
    async info(id) {
        return await this.getRepo().admin.sys.Task.findOne({ id });
    }
    /**
     * delete task
     */
    async delete(task) {
        if (!task) {
            throw new Error('Task is Empty');
        }
        await this.stop(task);
        await this.getRepo().admin.sys.Task.delete(task.id);
    }
    /**
     * 添加任务
     */
    async addOrUpdate(param) {
        const result = await this.getRepo().admin.sys.Task.save(param);
        const task = await this.info(result.id);
        if (result.status === 0) {
            await this.stop(task);
        }
        else if (result.status === 1) {
            await this.start(task);
        }
    }
    /**
     * 手动执行一次
     */
    async once(task) {
        if (task) {
            await this.app.queue.sys.add({ id: task.id, service: task.service, args: task.data }, { jobId: task.id, removeOnComplete: true, removeOnFail: true });
        }
        else {
            throw new Error('Task is Empty');
        }
    }
    /**
     * 启动任务
     */
    async start(task) {
        if (!task) {
            throw new Error('Task is Empty');
        }
        // 先停掉之前存在的任务
        await this.stop(task);
        let repeat;
        if (task.type === 1) {
            // 间隔 Repeat every millis (cron setting cannot be used together with this setting.)
            repeat = {
                every: task.every,
            };
        }
        else {
            // cron
            repeat = {
                cron: task.cron,
            };
            // Start date when the repeat job should start repeating (only with cron).
            if (task.startTime) {
                repeat.startDate = task.startTime;
            }
            if (task.endTime) {
                repeat.endDate = task.endTime;
            }
        }
        if (task.limit > 0) {
            repeat.limit = task.limit;
        }
        const job = await this.app.queue.sys.add({ id: task.id, service: task.service, args: task.data }, { jobId: task.id, removeOnComplete: true, removeOnFail: true, repeat });
        if (job && job.opts) {
            await this.getRepo().admin.sys.Task.update(task.id, { jobOpts: JSON.stringify(job.opts.repeat), status: 1 });
        }
        else {
            // update status to 0，标识暂停任务，因为启动失败
            job && await job.remove();
            await this.getRepo().admin.sys.Task.update(task.id, { status: 0 });
            throw new Error('Task Start failed');
        }
    }
    /**
     * 停止任务
     */
    async stop(task) {
        if (!task) {
            throw new Error('Task is Empty');
        }
        const exist = await this.existJob(task.id.toString());
        if (!exist) {
            await this.getRepo().admin.sys.Task.update(task.id, { status: 0 });
            return;
        }
        const jobs = await this.app.queue.sys.getJobs(['active', 'delayed', 'failed', 'paused', 'waiting', 'completed']);
        for (let i = 0; i < jobs.length; i++) {
            if (jobs[i].data.id === task.id) {
                await jobs[i].remove();
            }
        }
        await this.getRepo().admin.sys.Task.update(task.id, { status: 0 });
        // if (task.jobOpts) {
        //   await this.app.queue.sys.removeRepeatable(JSON.parse(task.jobOpts));
        //   // update status
        //   await this.getRepo().admin.sys.Task.update(task.id, { status: 0 });
        // }
    }
    /**
     * 查看队列中任务是否存在
     */
    async existJob(jobId) {
        const jobs = await this.app.queue.sys.getRepeatableJobs();
        const ids = jobs.map(e => {
            return e.id;
        });
        return ids.includes(jobId);
    }
    /**
     * 更新任务完成状态
     */
    async updateTaskCompleteStatus(tid) {
        const result = await this.app.queue.sys.getRepeatableJobs();
        // 如果下次执行时间小于当前时间，则表示已经执行完成。
        for (const task of result) {
            if (task.id === tid.toString() && task.id && task.next < new Date().getTime()) {
                // 如果下次执行时间小于当前时间，则表示已经执行完成。
                await this.getRepo().admin.sys.Task.update(tid, { status: 2 });
                break;
            }
        }
        // const job = await this.app.queue.sys.getJob(jobId);
        // if (job) {
        //   // 移除队列
        //   await job.remove();
        //   // 如果下次执行时间小于当前时间，则表示已经执行完成。
        //   await this.getRepo().admin.sys.Task.update(job.data.id, { status: 2 });
        // }
    }
    /**
     * 根据serviceName调用service
     */
    async callService(serviceName, args) {
        if (serviceName) {
            let serviceTmp = this.service;
            const arr = serviceName.split('.');
            for (let i = 0; i < arr.length; i++) {
                if (i === arr.length - 1) {
                    if (args) {
                        await serviceTmp[arr[arr.length - 1]](JSON.parse(args));
                    }
                    else {
                        await serviceTmp[arr[arr.length - 1]]();
                    }
                }
                else {
                    serviceTmp = serviceTmp[arr[i]];
                }
            }
        }
    }
}
exports.default = SysTaskService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFzay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRhc2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxQ0FBcUM7QUFJckM7O0dBRUc7QUFDSCxNQUFxQixjQUFlLFNBQVEsY0FBVztJQUVyRDs7T0FFRztJQUNILEtBQUssQ0FBQyxRQUFRO1FBQ1osTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxXQUFXLENBQUUsQ0FBQyxDQUFDO1FBQ25ILEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3BDLGNBQWM7WUFDZCxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUN4QjtRQUNELGNBQWM7UUFDZCxNQUFNLEtBQUssR0FBRyxNQUFNLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN0RSxJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUM3QixLQUFLLE1BQU0sQ0FBQyxJQUFJLEtBQUssRUFBRTtnQkFDckIsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNmO1NBQ0Y7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxLQUFLLENBQUMsSUFBSSxDQUFDLElBQVksRUFBRSxLQUFhO1FBQ3BDLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZ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