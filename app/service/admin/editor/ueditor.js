"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../base");
const config_1 = require("./config");
const path = require('path');
const fs = require('fs');
// 获取文件后缀
function getSuffix(filename) {
    return filename.substr(filename.lastIndexOf('.')).toLowerCase();
}
// 同步遍历文件
function eachFileSync(dir, findOneFile) {
    const stats = fs.statSync(dir);
    if (stats.isDirectory()) {
        fs.readdirSync(dir).forEach(file => {
            eachFileSync(path.join(dir, file), findOneFile);
        });
    }
    else {
        findOneFile(dir, stats);
    }
}
/**
 * 文件服务
 */
class UeditorService extends base_1.default {
    // 文件上传
    async filesUpload() {
        try {
            const file = this.ctx.request.files[0];
            const resInfo = await this.service.admin.comm.file.uploadFile(file);
            return Object.assign({ state: 'SUCCESS' }, resInfo);
        }
        catch (e) {
            return Object.assign({ state: 'FAIL' }, e);
        }
    }
    // 文件管理
    async filesMange({ listType }) {
        const publicDir = config_1.default.publicDir;
        const { start, action } = this.ctx.query;
        const actionName = listType[action];
        const files = [];
        eachFileSync(path.join(publicDir, config_1.default[actionName + 'ManagerListPath']), (file, stat) => {
            if (config_1.default[actionName + 'ManagerAllowFiles'].includes(getSuffix(file))) {
                const url = config_1.default.baseUrl + '/' + file.replace(/\\/g, '\/');
                const mtime = stat.mtimeMs;
                files.push({ url, mtime });
            }
        });
        const _start = Number(start);
        return {
            list: files.slice(_start, _start + config_1.default[actionName + 'ManagerListSize']),
            start,
            total: files.length,
            state: 'SUCCESS',
        };
    }
    // 百度编辑器控制器
    async ueController() {
        let result = {};
        const ctx = this.ctx;
        const conf = config_1.default;
        const { action } = ctx.query;
        const uploadType = {
            [conf.imageActionName]: 'image',
            [conf.scrawlActionName]: 'scrawl',
            [conf.catcherActionName]: 'catcher',
            [conf.videoActionName]: 'video',
            [conf.fileActionName]: 'file',
        };
        const listType = {
            [conf.imageManagerActionName]: 'image',
            [conf.fileManagerActionName]: 'file',
        };
        // 上传文件
        if (Object.keys(uploadType).includes(action)) {
            try {
                switch (action) {
                    // 涂鸦类型图片
                    case conf.scrawlActionName:
                        break;
                    // 抓取远程图片
                    case conf.catcherActionName:
                        break;
                    // 表单上传图片、文件
                    default:
                        result = await this.filesUpload();
                }
            }
            catch (err) {
                result = { state: err.message };
            }
        }
        // 获取图片/文件列表
        else if (Object.keys(listType).includes(action)) {
            result = await this.filesMange({
                listType
            });
        }
        // 返回Ueditor配置给前端
        else if (action === 'config') {
            result = conf;
        }
        else {
            result = { state: 'FAIL' };
        }
        return result;
    }
}
exports.default = UeditorService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWVkaXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVlZGl0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxxQ0FBcUM7QUFDckMscUNBQTZCO0FBQzdCLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQTtBQUM1QixNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUE7QUFFeEIsU0FBUztBQUNULFNBQVMsU0FBUyxDQUFDLFFBQWU7SUFDOUIsT0FBTyxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUNwRSxDQUFDO0FBRUQsU0FBUztBQUNULFNBQVUsWUFBWSxDQUFDLEdBQVUsRUFBRSxXQUFXO0lBQzlDLE1BQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDL0IsSUFBSSxLQUFLLENBQUMsV0FBVyxFQUFFLEVBQUU7UUFDckIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDL0IsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQ3BELENBQUMsQ0FBQyxDQUFDO0tBQ047U0FBTTtRQUNILFdBQVcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7S0FDM0I7QUFDRCxDQUFDO0FBR0Q7O0dBRUc7QUFDSCxNQUFxQixjQUFlLFNBQVEsY0FBVztJQUduRCxPQUFPO0lBQ1AsS0FBSyxDQUFDLFdBQVc7UUFDYixJQUFJO1lBQ0EsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZDLE1BQU0sT0FBTyxHQUFHLE1BQU0sSUFBSSxD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