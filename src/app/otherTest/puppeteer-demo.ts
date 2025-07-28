// Puppeteer 多窗口自动化示例
// 启动4个无头浏览器实例，访问百度首页并截图
import puppeteer from "puppeteer";

(async () => {
  for (let i = 1; i <= 2; i++) {
    // 启动无头浏览器
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    // 访问百度首页
    await page.goto("https://www.baidu.com");
    // 截图并保存
    await page.screenshot({ path: `baidu-${i}.png` });
    console.log(`第${i}个浏览器已截图: baidu-${i}.png`);
    await browser.close();
  }
  console.log("全部截图完成！");
})();
