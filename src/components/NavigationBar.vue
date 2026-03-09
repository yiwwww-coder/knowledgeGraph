<template>
  <div class="top-nav">
    <div class="side-section left">
      <div class="logo-section">
        <span v-if=" currentPath !== '/mining-engineering'" class="major-name">采矿工程专业</span>
        <img v-else src="@/assets/学院logo.png" alt="山西工程技术学院" class="college-logo" @click="goToHomePage" style="cursor: pointer;" />
      </div>
    </div>

    <div class="nav-links">
      <a href="/mining-engineering" class="nav-link" :class="{ active: currentPath === '/mining-engineering' }">首页</a>
      <a href="/talent-cultivation" class="nav-link" :class="{ active: currentPath === '/talent-cultivation' }">人才培养</a>
      <a href="/course-center" class="nav-link" :class="{ active: currentPath === '/course-center' }">课程中心</a>
      <a href="/knowledge-graph" class="nav-link" :class="{ active: currentPath === '/knowledge-graph' }">知识图谱</a>
      <a href="/qa-center" class="nav-link" :class="{ active: currentPath === '/qa-center' }">答疑中心</a>
      <a href="/practice-training" class="nav-link" :class="{ active: currentPath === '/practice-training' }">实训中心</a>
      <a href="/cross-analysis-center" class="nav-link" :class="{ active: currentPath === '/cross-analysis-center' }">交叉分析</a>
      <a href="/survey-center" class="nav-link" :class="{ active: currentPath === '/survey-center' }">岗位调研</a>
      <a href="/think-center" class="nav-link" :class="{ active: currentPath === '/think-center' }">专业思政</a>
      <a href="/ai-center" class="nav-link" :class="{ active: currentPath === '/ai-center' }">AI对话</a>
      <span class="nav-arrow">></span>
    </div>

    <div class="side-section right">
      <div class="user-icon">
        <div class="user-circle"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const currentPath = computed(() => route.path)

const goToHomePage = () => {
  router.push('/')
}
</script>

<style scoped>
.top-nav {
  position: absolute;
  top: 15px;
  left: 0;
  right: 0;
  height: 60px;
  display: flex;
  align-items: center;
  /* 关键：不再使用 space-between，而是通过子元素的 flex 属性控制 */
  padding: 0 40px;
  z-index: 100;
}

/* 左右两侧包装容器，确保它们占据相同的空间 */
.side-section {
  flex: 1; /* 左右各占一份剩余空间 */
  display: flex;
  align-items: center;
}

.side-section.left {
  justify-content: flex-start;
}

.side-section.right {
  justify-content: flex-end;
}

.logo-section {
  margin-left: 15px;
  display: flex;
  align-items: center;
  gap: 15px;
  white-space: nowrap; /* 防止名字换行影响宽度 */
}

/* 导航链接部分 */
.nav-links {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex-shrink: 0; /* 防止导航栏被左右挤压 */
  flex-wrap: nowrap;
}

/* 以下样式保持不变 */
.college-logo { height: 70px; }
.major-name { color: white; font-size: 22px; font-weight: bold; }
.nav-link {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 18px;
  transition: color 0.3s ease;
  white-space: nowrap;
}
.nav-link:hover, .nav-link.active { color: #fff; }
.nav-link.active { font-weight: bold; }
.nav-arrow { color: rgba(255, 255, 255, 0.7); margin-left: -5px; }

.user-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.2); /* 建议改用半透明，配合深色背景 */
  display: flex;
  align-items: center;
  justify-content: center;
}
.user-circle {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.4);
}
</style>