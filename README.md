 # 📚 Next.js 学习笔记项目（已Vercel部署）

这是一个专为 Next.js 初学者设计的简单学习项目，包含了 Next.js 框架的核心概念和最佳实践。

## 🎯 项目目标

通过一个简单的学习笔记应用，帮助你快速掌握 Next.js 的主要功能：

- **页面路由系统** - 基于文件系统的路由
- **React 组件开发** - 可复用的 UI 组件
- **状态管理** - 客户端状态处理
- **API 路由** - 后端接口开发
- **数据获取** - 前后端数据交互
- **样式管理** - CSS Modules 使用
- **表单处理** - 用户输入处理
- **错误处理** - 用户体验优化

## ✨ 主要功能

### 📄 页面路由
- **首页** (`/`) - 展示所有学习笔记
- **笔记详情** (`/note/[id]`) - 动态路由显示笔记详情
- **添加笔记** (`/add-note`) - 表单页面添加新笔记，样式已与其他页面风格统一（渐变背景、毛玻璃、圆角、按钮高亮等）
- **关于页面** (`/about`) - 项目介绍和学习要点

### 🎨 组件系统
- **NoteCard** - 可复用的笔记卡片组件
- **响应式设计** - 适配各种屏幕尺寸
- **现代化 UI** - 美观的渐变背景和毛玻璃效果

### 🔄 状态管理
- **客户端状态** - 使用 React Hooks 管理表单状态
- **加载状态** - 表单提交时的加载提示
- **错误处理** - 用户友好的错误提示

### 🌐 API 路由
- **GET /api/notes** - 获取所有笔记（数据直接读取自 `src/data/note.json` 文件）
- **POST /api/notes** - 创建新笔记（数据会追加到 `src/data/note.json` 文件）
- **数据验证** - 输入验证和错误处理

> **注意：** 所有笔记数据都存储在 `src/data/note.json` 文件中，数据结构为数组，每个元素包含 `id`、`title`、`content`、`date`、`tags` 字段。每次新增笔记会自动分配唯一 id 并写入文件。

## 🚀 快速开始

### 安装依赖
```bash
npm install
```

### 启动开发服务器
```bash
npm run dev
```

### 打开浏览器
访问 [http://localhost:3000](http://localhost:3000) 查看应用

## 📚 学习要点

### 1. Next.js 文件路由系统
- `app/page.tsx` - 首页路由
- `app/note/[id]/page.tsx` - 动态路由
- `app/add-note/page.tsx` - 静态路由
- `app/about/page.tsx` - 静态路由

### 2. React 组件和 Hooks
- 函数组件开发
- useState Hook 状态管理
- 组件 props 传递
- 事件处理

### 3. 客户端和服务器端渲染
- 服务器组件 (默认)
- 客户端组件 (`'use client'`)
- 静态生成 (generateStaticParams)

### 4. API 路由开发
- Route Handlers
- HTTP 方法处理 (GET, POST)
- 请求/响应处理
- 错误处理

### 5. CSS Modules 样式管理
- 组件级样式
- 响应式设计
- 现代化 UI 效果

### 6. 表单处理和状态管理
- 表单验证
- 状态更新
- API 调用
- 用户体验优化

### 7. 动态路由和参数传递
- 动态路由定义
- 参数获取
- 静态参数生成

### 8. 错误处理和用户体验
- 404 页面处理
- 加载状态
- 错误提示
- 导航优化

## 🛠️ 技术栈

- **Next.js 14** - React 全栈框架
- **React 18** - 用户界面库
- **TypeScript** - 类型安全的 JavaScript
- **CSS Modules** - 组件级样式
- **App Router** - 新的路由系统

## 📁 项目结构

```
src/
├── app/                    # App Router 目录
│   ├── page.tsx           # 首页
│   ├── layout.tsx         # 根布局
│   ├── globals.css        # 全局样式
│   ├── note/
│   │   └── [id]/
│   │       └── page.tsx   # 笔记详情页
│   ├── add-note/
│   │   └── page.tsx       # 添加笔记页
│   ├── about/
│   │   └── page.tsx       # 关于页面
│   └── api/
│       └── notes/
│           └── route.ts   # API 路由
├── components/            # 可复用组件
│   ├── NoteCard.tsx
│   └── NoteCard.module.css
└── ...
```

## 🎨 样式特点

- **渐变背景** - 美观的紫色渐变
- **毛玻璃效果** - backdrop-filter 模糊效果
- **响应式设计** - 适配手机、平板、桌面
- **交互动画** - hover 效果和过渡动画
- **现代化 UI** - 圆角、阴影、透明度
- **风格统一** - 添加笔记页与详情页、关于页等页面风格一致，整体体验更专业

## 🔧 开发命令

```bash
# 开发模式
npm run dev

# 构建生产版本
npm run build

# 启动生产服务器
npm start

# 代码检查
npm run lint
```

## 📄 许可证

MIT License - 自由使用和修改

## 🤖 自动化学习脚本

本项目根目录下新增了三个自动化学习脚本，适合初学者快速体验：

### 1. puppeteer-demo.js
- 功能：用 Puppeteer 启动4个无头浏览器，分别访问百度首页并截图保存为 baidu-1.png~baidu-4.png。
- 运行方法：
  ```bash
  node puppeteer-demo.js
  ```

### 2. totp-demo.js
- 功能：用 otplib 生成本地2FA密钥，生成验证码，并校验用户输入。
- 运行方法：
  ```bash
  node totp-demo.js
  ```

### 3. cron-demo.js
- 功能：用 node-cron 每天9点定时打印“启动浏览器环境”。
- 运行方法：
  ```bash
  node cron-demo.js
  ```

每个脚本都配有详细注释，适合初学者直接运行和理解。
