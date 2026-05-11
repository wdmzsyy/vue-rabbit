# VUE-RABBIT
## 🐰 小兔鲜儿 – 黑马电商前端项目

> 基于 Vue 3 构建的移动端/PC端电商平台前端，包含首页、分类、购物车、订单等核心模块。

## ✨ 主要功能

- 用户登录/注册（JWT）
- 商品分类浏览（一级/二级）
- 商品详情、加入购物车
- 购物车管理（数量增减、删除）
- 订单确认、订单列表（待付款、待收货等状态）
- 图片懒加载
- 路由懒加载
- 响应式适配（部分）

## 🛠️ 技术栈

- **核心框架**：Vue 3 (Composition API)
- **构建工具**：Vite
- **状态管理**：Pinia + 持久化插件
- **路由**：Vue Router 4
- **UI 组件库**：Element Plus
- **HTTP 请求**：Axios（封装拦截器）
- **样式**：SCSS + 全局样式变量
- **代码规范**：ESLint + Prettier

## 📁 项目结构

vue-rabbit/
├── .vscode/ # VSCode 工作区配置
├── public/ # 静态资源（不经过构建）
├── src/
│ ├── apis/ # API 请求函数（按模块划分）
│ ├── assets/ # 全局样式、图片、字体等
│ ├── components/ # 公共组件
│ ├── composables/ # 组合式函数（可复用的逻辑）
│ ├── directives/ # 自定义指令（如图片懒加载）
│ ├── router/ # Vue Router 路由配置
│ ├── stores/ # Pinia 状态管理（购物车、用户等）
│ ├── styles/ # 全局 SCSS 样式（common.scss 等）
│ ├── utils/ # 工具函数（axios 封装、拦截器等）
│ ├── views/ # 页面视图组件
│ ├── App.vue # 根组件
│ └── main.js # 入口文件
├── .gitattributes # Git 换行符配置
├── .gitignore # Git 忽略文件
├── index.html # HTML 模板
├── package.json # 项目依赖与脚本
├── README.md # 项目说明文档
└── vite.config.js # Vite 构建配置