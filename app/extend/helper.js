"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.now = void 0;
const yaml = require("js-yaml");
const fs = require("fs");
const path = require("path");
const CryptoJS = require("crypto-js");
const nanoid_1 = require("nanoid");
const moment = require("moment");
const jwt = require("jsonwebtoken");
const uuid_1 = require("uuid");
/**
 * 格式化时间
 */
exports.now = function () {
    return moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
};
/**
 * 错误信息map
 */
let errorMap = null;
exports.default = {
    /**
     * 获取请求IP
     */
    getReqIP() {
        const req = this.ctx.req;
        return (req.headers['x-forwarded-for'] || // 判断是否有反向代理 IP
            req.connection.remoteAddress || // 判断 connection 的远程 IP
            req.socket.remoteAddress || // 判断后端的 socket 的 IP
            req.connection.socket.remoteAddress).replace('::ffff:', '');
    },
    /**
     * 根据code获取错误信息
     */
    getErrorMessageByCode(code) {
        if (!errorMap) {
            errorMap = yaml.safeLoad(fs.readFileSync(path.resolve(__dirname, '../../config/error_constants.yaml'), 'utf8'));
        }
        return errorMap[code];
    },
    /**
     * AES加密
     */
    aesEncrypt(msg, secret) {
        return CryptoJS.AES.encrypt(msg, secret).toString();
    },
    /**
     * AES解密
     */
    aesDecrypt(encrypted, secret) {
        return CryptoJS.AES.decrypt(encrypted, secret).toString(CryptoJS.enc.Utf8);
    },
    /**
     * md5加密
     */
    md5(msg) {
        return CryptoJS.MD5(msg).toString();
    },
    /**
     * 生成一个随机的值
     */
    generateRandomValue(length, placeholder = '1234567890qwertyuiopasdfghjklzxcvbnm') {
        const nanoid = nanoid_1.customAlphabet(placeholder, length);
        return nanoid();
    },
    /**
     * 生成一个UUID
     */
    generateUUID() {
        return uuid_1.v4();
    },
    /**
     * 获取当前时间
     */
    getDate() {
        return exports.now();
    },
    /**
     * JsonWebToken Sign
     * https://github.com/auth0/node-jsonwebtoken
     */
    jwtSign(sign, options) {
        return jwt.sign(sign, this.config.jwt.secret, options);
    },
    /**
     * JsonWebToken Verify
     * https://github.com/auth0/node-jsonwebtoken
     */
    jwtVerify(token, options) {
        return jwt.verify(token, this.config.jwt.secret, options);
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGdDQUFnQztBQUNoQyx5QkFBeUI7QUFDekIsNkJBQTZCO0FBQzdCLHNDQUFzQztBQUV0QyxtQ0FBd0M7QUFDeEMsaUNBQWlDO0FBQ2pDLG9DQUFvQztBQUNwQywrQkFBb0M7QUFFcEM7O0dBRUc7QUFDVSxRQUFBLEdBQUcsR0FBRztJQUNqQixPQUFPLE1BQU0sQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFDMUQsQ0FBQyxDQUFDO0FBRUY7O0dBRUc7QUFDSCxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUM7QUFFcEIsa0JBQWU7SUFFYjs7T0FFRztJQUNILFFBQVE7UUFDTixNQUFNLEdBQUcsR0FBUSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztRQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLGVBQWU7WUFDakQsR0FBRyxDQUFDLFVBQVUsQ0FBQyxhQUFhLElBQUksdUJBQXVCO1lBQ3ZELEdBQUcsQ0FBQyxNQUFNLENBQUMsYUFBYSxJQUFJLG9CQUFvQjtZQUNoRCxHQUFHLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFFRDs7T0FFRztJQUNILHFCQUFxQixDQUFDLElBQVk7UUFDaEMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNiLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsbUNBQW1DLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQ2pIO1FBQ0QsT0FBTyxRQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsVUFBVSxDQUFnQixHQUFXLEVBQUUsTUFBYztRQUNuRCxPQUFPLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN0RCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxVQUFVLENBQWdCLFNBQWlCLEVBQUUsTUFBYztRQUN6RCxPQUFPLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3RSxDQUFDO0lBRUQ7O09BRUc7SUFDSCxHQUFHLENBQUMsR0FBVztRQUNiLE9BQU8sUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN0QyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxtQkFBbUIsQ0FBQyxNQUFjLEVBQUUsV0FBVyxHQUFHLHNDQUFzQztRQUN0RixNQUFNLE1BQU0sR0FBRyx1QkFBYyxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNuRCxPQUFPLE1BQU0sRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7T0FFRztJQUNILFlBQVk7UUFDVixPQUFPLFNBQU0sRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7T0FFRztJQUNILE9BQU87UUFDTCxPQUFPLFdBQUcsRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUVEOzs7T0FHRztJQUNILE9BQU8sQ0FBZ0IsSUFBUyxFQUFFLE9BQWE7UUFDN0MsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVEOzs7T0FHRztJQUNILFNBQVMsQ0FBZ0IsS0FBYSxFQUFFLE9BQWE7UUFDbkQsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDNUQsQ0FBQztDQUVGLENBQUMifQ==