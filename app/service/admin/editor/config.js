"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* 前后端通信相关的配置,注释只允许使用多行方式 */
exports.default = {
    baseUrl: 'https://jetechbatteries.com',
    publicDir: 'public',
    /* 上传图片配置项 */
    imageActionName: 'uploadimage',
    imageFieldName: 'upfile',
    imageMaxSize: 2048000,
    imageAllowFiles: ['.png', '.jpg', '.jpeg', '.gif', '.bmp'],
    imageCompressEnable: true,
    imageCompressBorder: 1600,
    imageInsertAlign: 'none',
    imageUrlPrefix: '',
    imagePathFormat: '/upload/ueditor/image/{yyyy}{mm}{dd}/{time}{rand:6}',
    /* {filename} 会替换成原文件名,配置这项需要注意中文乱码问题 */
    /* {rand:6} 会替换成随机数,后面的数字是随机数的位数 */
    /* {time} 会替换成时间戳 */
    /* {yyyy} 会替换成四位年份 */
    /* {yy} 会替换成两位年份 */
    /* {mm} 会替换成两位月份 */
    /* {dd} 会替换成两位日期 */
    /* {hh} 会替换成两位小时 */
    /* {ii} 会替换成两位分钟 */
    /* {ss} 会替换成两位秒 */
    /* 非法字符 \ : * ? " < > | */
    /* 具请体看线上文档: fex.baidu.com/ueditor/#use-format_upload_filename */
    /* 涂鸦图片上传配置项 */
    scrawlActionName: 'uploadscrawl',
    scrawlFieldName: 'upfile',
    scrawlPathFormat: '/upload/ueditor/image/{yyyy}{mm}{dd}/{time}{rand:6}',
    scrawlMaxSize: 2048000,
    scrawlUrlPrefix: '',
    scrawlInsertAlign: 'none',
    /* 截图工具上传 */
    snapscreenActionName: 'uploadimage',
    snapscreenPathFormat: '/upload/ueditor/image/{yyyy}{mm}{dd}/{time}{rand:6}',
    snapscreenUrlPrefix: '',
    snapscreenInsertAlign: 'none',
    /* 抓取远程图片配置 */
    catcherLocalDomain: ['127.0.0.1', 'localhost', 'img.baidu.com'],
    catcherActionName: 'catchimage',
    catcherFieldName: 'source',
    catcherPathFormat: '/upload/ueditor/image/{yyyy}{mm}{dd}/{time}{rand:6}',
    catcherUrlPrefix: '',
    catcherMaxSize: 2048000,
    catcherAllowFiles: ['.png', '.jpg', '.jpeg', '.gif', '.bmp'],
    /* 上传视频配置 */
    videoActionName: 'uploadvideo',
    videoFieldName: 'upfile',
    videoPathFormat: '/upload/ueditor/video/{yyyy}{mm}{dd}/{time}{rand:6}',
    videoUrlPrefix: '',
    videoMaxSize: 102400000,
    videoAllowFiles: [
        '.flv', '.swf', '.mkv', '.avi', '.rm', '.rmvb', '.mpeg', '.mpg',
        '.ogg', '.ogv', '.mov', '.wmv', '.mp4', '.webm', '.mp3', '.wav', '.mid'
    ],
    /* 上传文件配置 */
    fileActionName: 'uploadfile',
    fileFieldName: 'upfile',
    filePathFormat: '/upload/ueditor/file/{yyyy}{mm}{dd}/{time}{rand:6}',
    fileUrlPrefix: '',
    fileMaxSize: 51200000,
    fileAllowFiles: [
        '.png', '.jpg', '.jpeg', '.gif', '.bmp',
        '.flv', '.swf', '.mkv', '.avi', '.rm', '.rmvb', '.mpeg', '.mpg',
        '.ogg', '.ogv', '.mov', '.wmv', '.mp4', '.webm', '.mp3', '.wav', '.mid',
        '.rar', '.zip', '.tar', '.gz', '.7z', '.bz2', '.cab', '.iso',
        '.doc', '.docx', '.xls', '.xlsx', '.ppt', '.pptx', '.pdf', '.txt', '.md', '.xml',
    ],
    /* 列出指定目录下的图片 */
    imageManagerActionName: 'listimage',
    imageManagerListPath: '/upload/ueditor/image/',
    imageManagerListSize: 20,
    imageManagerUrlPrefix: '',
    imageManagerInsertAlign: 'none',
    imageManagerAllowFiles: ['.png', '.jpg', '.jpeg', '.gif', '.bmp'],
    /* 列出指定目录下的文件 */
    fileManagerActionName: 'listfile',
    fileManagerListPath: '/upload/ueditor/file/',
    fileManagerUrlPrefix: '',
    fileManagerListSize: 20,
    fileManagerAllowFiles: [
        '.png', '.jpg', '.jpeg', '.gif', '.bmp',
        '.flv', '.swf', '.mkv', '.avi', '.rm', '.rmvb', '.mpeg', '.mpg',
        '.ogg', '.ogv', '.mov', '.wmv', '.mp4', '.webm', '.mp3', '.wav', '.mid',
        '.rar', '.zip', '.tar', '.gz', '.7z', '.bz2', '.cab', '.iso',
        '.doc', '.docx', '.xls', '.xlsx', '.ppt', '.pptx', '.pdf', '.txt', '.md', '.xml',
    ],
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsNEJBQTRCO0FBQzVCLGtCQUFlO0lBQ1gsT0FBTyxFQUFDLDZCQUE2QjtJQUNyQyxTQUFTLEVBQUUsUUFBUTtJQUVuQixhQUFhO0lBQ2IsZUFBZSxFQUFFLGFBQWE7SUFDOUIsY0FBYyxFQUFFLFFBQVE7SUFDeEIsWUFBWSxFQUFFLE9BQU87SUFDckIsZUFBZSxFQUFFLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQztJQUMxRCxtQkFBbUIsRUFBRSxJQUFJO0lBQ3pCLG1CQUFtQixFQUFFLElBQUk7SUFDekIsZ0JBQWdCLEVBQUUsTUFBTTtJQUN4QixjQUFjLEVBQUUsRUFBRTtJQUNsQixlQUFlLEVBQUUscURBQXFEO0lBQ3RFLHdDQUF3QztJQUN4QyxtQ0FBbUM7SUFDbkMsb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIsaUVBQWlFO0lBRWpFLGVBQWU7SUFDZixnQkFBZ0IsRUFBRSxjQUFjO0lBQ2hDLGVBQWUsRUFBRSxRQUFRO0lBQ3pCLGdCQUFnQixFQUFFLHFEQUFxRDtJQUN2RSxhQUFhLEVBQUUsT0FBTztJQUN0QixlQUFlLEVBQUUsRUFBRTtJQUNuQixpQkFBaUIsRUFBRSxNQUFNO0lBRXpCLFlBQVk7SUFDWixvQkFBb0IsRUFBRSxhQUFhO0lBQ25DLG9CQUFvQixFQUFFLHFEQUFxRDtJQUMzRSxtQkFBbUIsRUFBRSxFQUFFO0lBQ3ZCLHFCQUFxQixFQUFFLE1BQU07SUFFN0IsY0FBYztJQUNkLGtCQUFrQixFQUFFLENBQUMsV0FBVyxFQUFFLFdBQVcsRUFBRSxlQUFlLENBQUM7SUFDL0QsaUJBQWlC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