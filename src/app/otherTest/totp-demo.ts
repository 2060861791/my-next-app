// otplib 2FA 本地密钥生成与校验示例
import * as otplib from "otplib";
import * as readline from "readline";

// 生成一个新的TOTP密钥
const secret = otplib.authenticator.generateSecret();
console.log("你的2FA密钥:", secret);

// 生成当前6位验证码
const token = otplib.authenticator.generate(secret);
console.log("当前验证码:", token);

// 创建命令行输入接口
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 提示用户输入验证码
rl.question("请输入你要校验的验证码: ", (input: string) => {
  const isValid = otplib.authenticator.check(input, secret);
  if (isValid) {
    console.log("✅ 验证码正确！");
  } else {
    console.log("❌ 验证码错误！");
  }
  rl.close();
});
