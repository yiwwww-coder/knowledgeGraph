# 快速入门指南

## 🚀 快速开始

### 1. 安装依赖

```bash
# 使用 pnpm (推荐)
pnpm install

# 或使用 npm
npm install
```

### 2. 启动开发服务器

```bash
pnpm dev
```

浏览器访问：http://localhost:5173

### 3. 构建生产版本

```bash
pnpm build
```

## 📁 项目结构说明

```
采矿工程专业系统/
│
├── src/
│   ├── views/              # 页面组件
│   │   ├── HomePage.vue           # 首页 - 系统概览
│   │   ├── TalentCultivation.vue  # 人才培养 - 培养目标和要求
│   │   ├── CourseCenter.vue       # 课程中心 - 课程浏览
│   │   ├── CourseDetail.vue       # 课程详情 - 单课程信息
│   │   ├── KnowledgeGraph.vue     # 知识图谱 - 总览
│   │   ├── KnowledgeGraphCourse.vue # 课程知识图谱
│   │   ├── QACenter.vue           # 答疑中心 - AI问答
│   │   └── PracticeTraining.vue   # 实践实训
│   │
│   ├── components/         # 公共组件
│   │   └── NavigationBar.vue      # 顶部导航栏
│   │
│   ├── router/            # 路由配置
│   │   └── index.ts              # 路由定义
│   │
│   ├── styles/            # 样式文件
│   │   ├── index.css            # 主样式
│   │   ├── tailwind.css         # Tailwind配置
│   │   ├── theme.css            # 主题变量
│   │   └── fonts.css            # 字体定义
│   │
│   ├── utils/             # 工具函数
│   │   └── cn.ts                # 类名合并工具
│   │
│   ├── App.vue            # 根组件
│   ├── main.ts            # 应用入口
│   └── env.d.ts           # 类型声明
│
├── public/                # 静态资源
│   └── README.md                # 资源说明
│
├── index.html             # HTML模板
├── vite.config.ts         # Vite配置
├── tsconfig.json          # TypeScript配置
├── package.json           # 项目依赖
└── README.md             # 项目说明
```

## 🎨 开发技巧

### 1. 使用 Composition API

```vue
<script setup lang="ts">
import { ref, computed } from 'vue'

// 响应式数据
const count = ref(0)

// 计算属性
const doubled = computed(() => count.value * 2)

// 方法
const increment = () => {
  count.value++
}
</script>
```

### 2. 路由导航

```vue
<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goToPage = () => {
  router.push('/course-center')
}
</script>
```

### 3. Tailwind CSS 使用

```vue
<template>
  <!-- 使用 Tailwind 类名 -->
  <div class="bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600">
    按钮
  </div>
</template>
```

### 4. 条件渲染和列表渲染

```vue
<template>
  <!-- 条件渲染 -->
  <div v-if="isVisible">显示内容</div>
  <div v-else>隐藏时显示</div>

  <!-- 列表渲染 -->
  <div v-for="(item, index) in items" :key="item.id">
    {{ index + 1 }}. {{ item.name }}
  </div>
</template>
```

## 🔧 常用命令

```bash
# 开发
pnpm dev              # 启动开发服务器
pnpm build            # 构建生产版本
pnpm preview          # 预览生产构建

# 类型检查
pnpm vue-tsc --noEmit # 运行TypeScript类型检查
```

## 📝 页面功能说明

### 首页 (/)
- 系统概览和介绍
- 统计数据展示
- 5个专业建设导航

### 人才培养 (/talent-cultivation)
- 5个培养目标卡片
- 12个专业毕业要求
- 毕业要求与培养目标支撑矩阵

### 课程中心 (/course-center)
- 课程筛选（类型、形式、学期）
- 课程卡片网格展示
- 搜索功能
- AI推荐课程

### 课程详情 (/course-detail)
- 课程基本信息
- 课程拓扑链
- 课程简介和目标
- 相关课程推荐

### 知识图谱 (/knowledge-graph)
- 知识网络可视化
- 热门图谱推荐
- 最近访问记录

### 知识图谱课程 (/knowledge-graph-course)
- 课程知识网络图
- 多种视图模式（网状、树状、环状）
- 节点和关系详情
- 全屏展示功能

### 答疑中心 (/qa-center)
- AI智能问答
- 多种输入方式（文字、图片、语音）
- 热门问题推荐
- 问题分类导航

### 实践实训 (/practice-training)
- 实体矿井基地介绍
- 虚拟仿真实验平台
- 专业技能实训分类

## 🎯 下一步开发建议

1. **集成知识图谱可视化库**
   - 推荐使用 ECharts 或 D3.js
   - 实现交互式节点和关系展示

2. **添加后端API集成**
   - 使用 Axios 或 Fetch
   - 实现数据的增删改查

3. **用户认证系统**
   - 登录/注册功能
   - 权限管理

4. **优化性能**
   - 图片懒加载
   - 路由懒加载
   - 组件代码分割

5. **添加动画效果**
   - 页面切换动画
   - 元素进入/离开动画
   - 使用 Motion (Framer Motion for Vue)

## 💡 常见问题

### Q: 如何添加新页面？
A: 
1. 在 `src/views/` 创建新的 `.vue` 文件
2. 在 `src/router/index.ts` 添加路由配置
3. 在导航栏中添加链接

### Q: 如何修改样式主题？
A: 编辑 `src/styles/theme.css` 中的 CSS 变量

### Q: 图片资源放在哪里？
A: 所有静态资源放在 `/public` 目录下

### Q: 如何使用环境变量？
A: 创建 `.env` 文件，变量名以 `VITE_` 开头

## 📚 参考文档

- [Vue 3 官方文档](https://cn.vuejs.org/)
- [Vue Router 文档](https://router.vuejs.org/zh/)
- [Pinia 文档](https://pinia.vuejs.org/zh/)
- [Tailwind CSS 文档](https://tailwindcss.com/docs)
- [Vite 文档](https://cn.vitejs.dev/)

## 🤝 贡献指南

1. Fork 项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

---

如有问题，请查看 [README.md](./README.md) 或提交 Issue。
