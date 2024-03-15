"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Queue = require("bull");
/**
 * 自定义任务队列
 */
exports.default = (app) => {
    const ctx = app.createAnonymousContext();
    const tq = new Queue('sys-task', app.config.bull.default);
    // 处理任务
    tq.process(async function (job) {
        let id = -1;
        try {
            id = await ctx.service.admin.sys.taskLog.record(job.data.id, 0);
            await ctx.service.admin.sys.task.callService(job.data.service, job.data.args);
            await ctx.service.admin.sys.taskLog.updateTaskStatus(id, 1);
        }
        catch (e) {
            await ctx.service.admin.sys.taskLog.updateTaskStatus(id, 2, `${e.message}`);
        }
    });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    tq.on('completed', (job, _result) => {
        ctx.service.admin.sys.task.updateTaskCompleteStatus(job.data.id);
    });
    // tq.on('global:completed', (jobId, _result) => {
    //   ctx.service.admin.sys.task.updateTaskCompleteStatus(jobId);
    // });
    return tq;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3lzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3lzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOEJBQThCO0FBRzlCOztHQUVHO0FBQ0gsa0JBQWUsQ0FBQyxHQUFnQixFQUFFLEVBQUU7SUFDbEMsTUFBTSxHQUFHLEdBQUcsR0FBRyxDQUFDLHNCQUFzQixFQUFFLENBQUM7SUFDekMsTUFBTSxFQUFFLEdBQUcsSUFBSSxLQUFLLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRTFELE9BQU87SUFDUCxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssV0FBVSxHQUFHO1FBQzNCLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ1osSUFBSTtZQUNGLEVBQUUsR0FBRyxNQUFNLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2hFLE1BQU0sR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM5RSxNQUFNLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQzdEO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixNQUFNLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1NBQzdFO0lBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDSCw2REFBNkQ7SUFDN0QsRUFBRSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxHQUFHLEVBQUUsT0FBTyxFQUFFLEVBQUU7UUFDbEMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ25FLENBQUMsQ0FBQyxDQUFDO0lBQ0gsa0RBQWtEO0lBQ2xELGdFQUFnRTtJQUNoRSxNQUFNO0lBQ04sT0FBTyxFQUFFLENBQUM7QUFDWixDQUFDLENBQUMifQ==