"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require('path');
const fs = require('fs');
const Busboy = require("busboy");
async function Upload(ctx) {
    const busboy = new Busboy({ headers: ctx.req.headers });
    // 后续处理
    ctx.req.pipe(busboy);
    // 监听文件解析事件
    busboy.on('file', function (fieldname, file, filename) {
        console.log('监听文件解析事件');
        console.log(`File [${fieldname}]: filename: ${filename}`);
        // 将文件保存到特定路径 
        file.pipe(fs.createWriteStream(path.join('public/images/', filename)));
        // 开始解析文件流
        file.on('data', function (data) {
            console.log(`File [${fieldname}] got ${data.length} bytes`);
        });
        // 解析文件结束 
        file.on('end', function () {
            console.log(`File [${fieldname}] Finishied`);
        });
    });
    // 监听请求中的字段
    busboy.on('field', function () {
        //console.log(`Field [${fieldname}]: value: ${inspect(val)}`);
    });
    // 监听结束事件
    busboy.on('finish', function () {
        console.log('Done parsing form!');
    });
}
exports.default = Upload;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXBsb2FkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0FBQzVCLE1BQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUN4QixNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUE7QUFFaEMsS0FBSyxVQUFVLE1BQU0sQ0FBQyxHQUFHO0lBQ3JCLE1BQU0sTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLEVBQUUsT0FBTyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQTtJQUV2RCxPQUFPO0lBQ1AsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7SUFFcEIsV0FBVztJQUNYLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLFVBQVUsU0FBUyxFQUFFLElBQUksRUFBRSxRQUFRO1FBQ2pELE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUE7UUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLFNBQVMsZ0JBQWdCLFFBQVEsRUFBRSxDQUFDLENBQUE7UUFDekQsY0FBYztRQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3JFLFVBQVU7UUFDVixJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxVQUFVLElBQUk7WUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLFNBQVMsU0FBUyxJQUFJLENBQUMsTUFBTSxRQUFRLENBQUMsQ0FBQTtRQUMvRCxDQUFDLENBQUMsQ0FBQTtRQUNGLFVBQVU7UUFDVixJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRTtZQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxTQUFTLGFBQWEsQ0FBQyxDQUFDO1FBQ2pELENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQyxDQUFDLENBQUE7SUFFRixXQUFXO0lBQ1gsTUFBTSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUU7UUFDZiw4REFBOEQ7SUFDbEUsQ0FBQyxDQUFDLENBQUE7SUFDRixTQUFTO0lBQ1QsTUFBTSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUU7UUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQ3RDLENBQUMsQ0FBQyxDQUFBO0FBR04sQ0FBQztBQUVBLGtCQUFlLE1BQU0sQ0FBQSJ9