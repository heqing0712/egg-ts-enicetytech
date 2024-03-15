"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../base");
const qiniu = require("qiniu");
const path = require("path");
const moment = require("moment");
/**
 * OSS Service
 */
class OssService extends base_1.default {
    /**
     * 将文件上传至七牛
     */
    async upload(file, namespace) {
        const { bucket, accessKey, secretKey, zone } = this.config.qiniu;
        const key = `${namespace}/${moment().format('YYYYMMDD_hhmmss')}${path.extname(file.filename)}`;
        const mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
        const options = {
            scope: `${bucket}:${key}`,
        };
        const putPolicy = new qiniu.rs.PutPolicy(options);
        const qiniuConfig = new qiniu.conf.Config();
        qiniuConfig.zone = qiniu.zone[zone];
        const uploadToken = putPolicy.uploadToken(mac);
        return new Promise((resole, reject) => {
            const localFile = file.filepath;
            const formUploader = new qiniu.form_up.FormUploader(qiniuConfig);
            const putExtra = new qiniu.form_up.PutExtra();
            // 文件上传
            formUploader.putFile(uploadToken, key, localFile, putExtra, function (respErr, respBody, respInfo) {
                if (respErr) {
                    reject(respErr);
                }
                if (respInfo.statusCode === 200) {
                    resole(respBody);
                }
                else {
                    reject(respErr);
                }
            });
        });
    }
    /**
     * 批量删除文件
     */
    async delete(images) {
        const { bucket, accessKey, secretKey, zone } = this.config.qiniu;
        if (images && images.length > 0) {
            const keys = images.map(e => {
                const { key } = JSON.parse(e.extra);
                return qiniu.rs.deleteOp(bucket, key);
            });
            const mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
            const qiniuConfig = new qiniu.conf.Config();
            qiniuConfig.zone = qiniu.zone[zone];
            const bucketManager = new qiniu.rs.BucketManager(mac, qiniuConfig);
            return new Promise((resolve, reject) => {
                bucketManager.batch(keys, (err, respBody, respInfo) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        // 200 is success, 298 is part success
                        if (parseInt(respInfo.statusCode) / 100 === 2) {
                            resolve();
                        }
                        else {
                            reject(respInfo.deleteusCode);
                            console.log(respInfo.deleteusCode);
                            console.log(respBody);
                        }
                    }
                });
            });
        }
    }
}
exports.default = OssService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3NzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsib3NzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQXFDO0FBQ3JDLCtCQUErQjtBQUMvQiw2QkFBNkI7QUFDN0IsaUNBQWlDO0FBR2pDOztHQUVHO0FBQ0gsTUFBcUIsVUFBVyxTQUFRLGNBQVc7SUFFakQ7O09BRUc7SUFDSCxLQUFLLENBQUMsTUFBTSxDQUFDLElBQVMsRUFBRSxTQUFpQjtRQUN2QyxNQUFNLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDakUsTUFBTSxHQUFHLEdBQUcsR0FBRyxTQUFTLElBQUksTUFBTSxFQUFFLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztRQUMvRixNQUFNLEdBQUcsR0FBRyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDNUQsTUFBTSxPQUFPLEdBQUc7WUFDZCxLQUFLLEVBQUUsR0FBRyxNQUFNLElBQUksR0FBRyxFQUFFO1NBQzFCLENBQUM7UUFDRixNQUFNLFNBQVMsR0FBRyxJQUFJLEtBQUssQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2xELE1BQU0sV0FBVyxHQUFRLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNqRCxXQUFXLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEMsTUFBTSxXQUFXLEdBQUcsU0FBUyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMvQyxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsTUFBTSxF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