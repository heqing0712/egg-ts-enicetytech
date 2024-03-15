"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../base");
const nodemailer = require("nodemailer");
/**
 * 邮件服务
 */
class EmailService extends base_1.default {
    /**
     * 发送邮件
     */
    async sendEmail(info) {
        const { host, port, user, pass, secure } = this.config.mailer;
        // let testAccount = await nodemailer.createTestAccount();
        // create reusable transporter object using the default SMTP transport
        const transporter = nodemailer.createTransport({
            host,
            port,
            secure,
            auth: {
                user,
                pass,
            },
        });
        // send mail with defined transport object
        const result = await transporter.sendMail(info);
        return result;
    }
}
exports.default = EmailService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1haWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJlbWFpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFDQUFxQztBQUNyQyx5Q0FBeUM7QUFHekM7O0dBRUc7QUFDSCxNQUFxQixZQUFhLFNBQVEsY0FBVztJQUVuRDs7T0FFRztJQUNILEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBa0I7UUFDaEMsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUM5RCwwREFBMEQ7UUFDMUQsc0VBQXNFO1FBQ3RFLE1BQU0sV0FBVyxHQUFHLFVBQVUsQ0FBQyxlQUFlLENBQUM7WUFDN0MsSUFBSTtZQUNKLElBQUk7WUFDSixNQUFNO1lBQ04sSUFBSSxFQUFFO2dCQUNKLElBQUk7Z0JBQ0osSUFBSTthQUNMO1NBQ0YsQ0FBQyxDQUFDO1FBRUgsMENBQTBDO1FBQzFDLE1BQU0sTUFBTSxHQUFHLE1BQU0sV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0NBRUY7QUF4QkQsK0JBd0JDIn0=