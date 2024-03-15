"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../base");
/**
 * 小说爬虫Service
 */
class ReptileBookService extends base_1.default {
    /**
     * 获取纵横书籍最新章节
     */
    async getZonghengBookLastchapter(param) {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const puppeteer = require('puppeteer-core');
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const cheerio = require('cheerio');
        const browser = await puppeteer.launch(this.config.puppeteer.launchOptions);
        const page = await browser.newPage();
        await page.goto(`http://book.zongheng.com/book/${param.id}.html`, { waitUntil: 'networkidle0' });
        const content = await page.content();
        const $ = cheerio.load(content);
        const chapter = $('.book-html-box .book-top .book-main .book-new-chapter .tit').text();
        const bookname = $('.book-html-box .book-top .book-main .book-info .book-name').text().trim();
        await this.service.admin.comm.email.sendEmail({
            from: 'noreply@mail.si-yee.com',
            text: `${bookname} 最新章节 ： ${chapter}`,
            to: param.emails,
            subject: '小说最新章节',
            html: `<h2>${bookname} 最新章节 ： ${chapter}</h2>`,
        });
        await browser.close();
    }
}
exports.default = ReptileBookService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJvb2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxrQ0FBa0M7QUFFbEM7O0dBRUc7QUFDSCxNQUFxQixrQkFBbUIsU0FBUSxjQUFXO0lBRXpEOztPQUVHO0lBQ0gsS0FBSyxDQUFDLDBCQUEwQixDQUFDLEtBQVU7UUFDekMsOERBQThEO1FBQzlELE1BQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzVDLDhEQUE4RDtRQUM5RCxNQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDbkMsTUFBTSxPQUFPLEdBQUcsTUFBTSxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzVFLE1BQU0sSUFBSSxHQUFHLE1BQU0sT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3JDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxpQ0FBaUMsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLEVBQUUsU0FBUyxFQUFFLGNBQWMsRUFBRSxDQUFDLENBQUM7UUFDakcsTUFBTSxPQUFPLEdBQUcsTUFBTSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDckMsTUFBTSxDQUFDLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNoQyxNQUFNLE9BQU8sR0FBRyxDQUFDLENBQUMsNERBQTRELENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN2RixNQUFNLFFBQVEsR0FBRyxDQUFDLENBQUMsMkRBQTJELENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUM5RixNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDO1lBQzVDLElBQUksRUFBRSx5QkFBeUI7WUFDL0IsSUFBSSxFQUFFLEdBQUcsUUFBUSxXQUFXLE9BQU8sRUFBRTtZQUNyQyxFQUFFLEVBQUUsS0FBSyxDQUFDLE1BQU07WUFDaEIsT0FBTyxFQUFFLFFBQVE7WUFDakIsSUFBSSxFQUFFLE9BQU8sUUFBUSxXQUFXLE9BQU8sT0FBTztTQUMvQyxDQUFDLENBQUM7UUFDSCxNQUFNLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN4QixDQUFDO0NBRUY7QUEzQkQscUNBMkJDIn0=