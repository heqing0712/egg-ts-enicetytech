"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require('fs');
const path = require('path');
const base_1 = require("../../base");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const Config = require('../../../libs/egg-ueditor/lib/config');
/**
 * 文件服务
 */
class FileService extends base_1.default {
    // 获取路径
    setFullPath(dest) {
        const date = new Date();
        const map = {
            t: date.getTime(),
            m: date.getMonth() + 1,
            d: date.getDate(),
            h: date.getHours(),
            i: date.getMinutes(),
            s: date.getSeconds(),
        };
        dest = dest.replace(/\{([ymdhis])+\}|\{time\}|\{rand:(\d+)\}/g, function (all, t, r) {
            let v = map[t];
            if (v !== undefined) {
                if (all.length > 1) {
                    v = '0' + v;
                    v = v.substr(v.length - 2);
                }
                return v;
            }
            else if (t === 'y') {
                return (date.getFullYear() + '').substr(6 - all.length);
            }
            else if (all === '{time}') {
                return map.t;
            }
            else if (r >= 0) {
                return Math.random().toString().substr(2, r);
            }
            return all;
        });
        return dest;
    }
    // 同步创建文件目录
    mkdirsSync(dirname) {
        if (fs.existsSync(dirname)) {
            return true;
        }
        if (this.mkdirsSync(path.dirname(dirname))) {
            fs.mkdirSync(dirname);
            return true;
        }
    }
    // 创建上传路径
    mkUploadDir(uploadType = 'image') {
        let dir;
        const publicDir = 'public';
        let configDir = Config[uploadType + 'PathFormat'];
        if (!configDir) {
            configDir = Config['filePathFormat'];
        }
        dir = this.setFullPath(configDir);
        dir = path.join(publicDir, dir);
        this.mkdirsSync(dir);
        return dir;
    }
    /**
     * 单文件上传
     * @param file  要上传的文件
     * @return {Promise<{fileName: *, url: string}>}
     */
    async uploadFile(file) {
        // 读取文件
        let fileData = fs.readFileSync(file.filepath);
        // 将文件存到指定位置
        const folderPath = this.mkUploadDir();
        // 拼接文件路径
        let filePath = path.join(folderPath, file.filename); // 拼接文件路径
        fs.writeFileSync(filePath, fileData);
        // 返回文件信息
        return {
            fileName: file.filename,
            url: Config.baseUrl + '/' + filePath.replace(/\\/g, '/')
        };
    }
}
exports.default = FileService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUE7QUFDeEIsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0FBRzVCLHFDQUFxQztBQUVyQyw4REFBOEQ7QUFDOUQsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7QUFHL0Q7O0dBRUc7QUFDSCxNQUFxQixXQUFZLFNBQVEsY0FBVztJQUVoRCxPQUFPO0lBQ1AsV0FBVyxDQUFDLElBQVk7UUFDcEIsTUFBTSxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUV4QixNQUFNLEdBQUcsR0FBRztZQUNSLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2pCLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQztZQUN0QixDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNqQixDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixDQUFDLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNwQixDQUFDLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRTtTQUN2QixDQUFDO1FBRUYsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsMENBQTBDLEVBQUUsVUFBVSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDL0UsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2YsSUFBSSxDQUFDLEtBQUssU0FBUyxFQUFFO2dCQUNqQixJQUFJLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO29CQUNoQixDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztvQkFDWixDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENB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