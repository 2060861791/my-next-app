// node-cron 定时任务示例
import * as cron from "node-cron";

// 定义每天9点执行的任务
cron.schedule("0 9 * * *", () => {
  console.log("【定时任务】启动浏览器环境");
});

console.log('定时任务已启动，每天9点会自动打印"启动浏览器环境"');
// 为了让脚本一直运行，防止进程退出
setInterval(() => {}, 1000 * 60 * 60);
