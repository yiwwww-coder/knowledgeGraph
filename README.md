# 采矿工程专业系统 - Vue 3 版本

这是一个基于 Vue 3 + TypeScript + Tailwind CSS 的采矿工程专业教学管理系统。

## 功能模块

- **首页** - 系统概览和专业介绍
- **人才培养** - 培养目标和毕业要求展示
- **课程中心** - 课程资源库浏览和搜索
- **课程详情** - 单个课程的详细信息和拓扑链
- **知识图谱** - 知识可视化展示
- **知识图谱(课程)** - 课程知识网络图谱
- **答疑中心** - AI智能答疑服务
- **实践实训** - 虚拟仿真和实践基地

## 技术栈

- Vue 3 - 渐进式JavaScript框架
- TypeScript - 类型安全的JavaScript超集
- Vue Router - 官方路由管理器
- Pinia - Vue状态管理库
- Tailwind CSS v4 - 实用优先的CSS框架
- Vite - 下一代前端构建工具

## 项目结构

```
├── src/
│   ├── views/          # 页面组件
│   │   ├── HomePage.vue
│   │   ├── TalentCultivation.vue
│   │   ├── CourseCenter.vue
│   │   ├── CourseDetail.vue
│   │   ├── KnowledgeGraph.vue
│   │   ├── KnowledgeGraphCourse.vue
│   │   ├── QACenter.vue
│   │   └── PracticeTraining.vue
│   ├── components/     # 公共组件
│   │   └── NavigationBar.vue
│   ├── router/         # 路由配置
│   ├── styles/         # 样式文件
│   ├── utils/          # 工具函数
│   ├── App.vue         # 根组件
│   └── main.ts         # 应用入口
├── index.html
├── vite.config.ts
├── package.json
└── README.md
```

## 开发指南

### 环境要求

- Node.js >= 18.0.0
- pnpm >= 8.0.0 (推荐) 或 npm >= 9.0.0

### 安装依赖

```bash
pnpm install
# 或
npm install
```

### 启动开发服务器

```bash
pnpm dev
# 或
npm run dev
```

应用将在 http://localhost:5173 启动

### 构建生产版本

```bash
pnpm build
# 或
npm run build
```

### 预览生产构建

```bash
pnpm preview
# 或
npm run preview
```

## 页面路由

- `/` - 首页
- `/talent-cultivation` - 人才培养
- `/course-center` - 课程中心
- `/course-detail` - 课程详情
- `/knowledge-graph` - 知识图谱
- `/knowledge-graph-course` - 课程知识图谱
- `/qa-center` - 答疑中心
- `/practice-training` - 实践实训

## 自定义样式

项目使用 Tailwind CSS v4，所有自定义样式都在 `/src/styles/` 目录下：

- `index.css` - 主样式入口
- `tailwind.css` - Tailwind 配置
- `theme.css` - 主题变量
- `fonts.css` - 字体引入

## 组件开发规范

1. 使用 `<script setup lang="ts">` 语法
2. 使用 Composition API
3. Props 使用 TypeScript 类型定义
4. 样式优先使用 Tailwind 类名
5. 复杂交互逻辑抽取到 composables

## 注意事项

1. 图片资源路径：所有图片应放在 `/public` 目录下
2. 字体文件：自定义字体应在 `fonts.css` 中引入
3. SVG 路径：SVG 数据已从原 React 代码导入，保存在 `/src/imports/svg-*.ts` 文件中

## 从 React 迁移的说明

本项目从 React 版本转换而来，主要变化：

1. JSX → Vue 模板语法
2. React Hooks → Vue Composition API
3. Props 类型定义方式改变
4. 事件处理从 `onClick` 变为 `@click`
5. 条件渲染从 `&&` 变为 `v-if`
6. 列表渲染从 `map()` 变为 `v-for`

## 待完成功能

- [ ] 完善知识图谱可视化（可使用 D3.js 或 ECharts）
- [ ] 添加课程详情的拓扑链可视化
- [ ] 集成真实的 API 数据
- [ ] 添加用户认证系统
- [ ] 完善 AI 答疑功能
- [ ] 添加虚拟仿真交互功能

## License

MIT
