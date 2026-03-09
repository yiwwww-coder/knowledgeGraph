<template>
  <div class="app-container">

    <!-- 导航栏 -->
    <header class="nav-bar">
      <img src="@/assets/logo.png" class="logo-img" alt="logo" />
      <nav class="nav-links">
        <span
          v-for="item in navItems"
          :key="item"
          :class="{ active: activeNav === item }"
        >
          {{ item }}
        </span>
        <span class="nav-more" aria-hidden="true">></span>
      </nav>
      <div class="user-avatar" />
    </header>

    <!-- 左侧统计数据 -->
    <aside class="left-stats">
      <div class="stat-list">
        <div v-for="(value, label) in statsData" :key="label" class="stat-unit">
          <div class="stat-value">{{ value }}</div>
          <div class="stat-label">{{ label }}</div>
        </div>
      </div>
      <div class="visit-list">
        <div class="visit-card">
          <strong>12541</strong>
          <span>累计总访问量</span>
        </div>
        <div class="visit-card">
          <strong>5</strong>
          <span>今日访问</span>
        </div>
        <div class="visit-card">
          <strong>+78</strong>
          <span>较上周</span>
        </div>
      </div>
    </aside>

    <!-- 中央主视觉 -->
    <main class="center-hero">
      <div class="hero-content">
        <h1 class="main-title">市场营销专业</h1>
        <div class="en-bg" aria-hidden="true">Marketing Studies</div>
        <h2 class="sub-title">未 来 学 习 空 间</h2>
      </div>
      <div class="bottom-btns">
        <div class="glass-btn">山西老字号</div>
        <div class="glass-btn">振东管理大讲堂</div>
      </div>
    </main>

    <!-- 右侧AI助手 -->
    <aside class="right-ai">
      <div class="ai-greeting">
        <div class="ai-avatar">
          <img src="@/assets/ai.png" alt="AI assistant" />
        </div>
        <div class="ai-message">
          嗨，我是AI营小销<br />有什么关于市场营销的问题，尽管问我吧
        </div>
      </div>

      <div class="ai-main-card">
        <div class="ai-nav-btns">
          <button type="button">新聊天</button>
          <button type="button">全屏对话</button>
          <button type="button">导出笔记</button>
          <button type="button">案例分析</button>
        </div>

        <div class="ai-data-line">
          累计问答：15820次 &nbsp; 准确率：94.7%
        </div>

        <div class="ai-chat-window">
          <div class="chat-tag">[ 历史对话 ]</div>
          <div class="chat-scroll-area">
            <p>我：4P 营销理论都是什么?</p>
            <p class="robot">营小销：1.产品 (Product) 2.价格 (Price) 3.渠道 (Place) 4.促销 (Promotion)</p>
          </div>
          <div class="chat-input-row">
            <i class="fas fa-camera input-icon camera-icon"></i>
            <input type="text" placeholder="试着输入您想了解的问题吧~" />
            <div class="input-btns">
              <i class="fas fa-plus input-icon plus-icon"></i>
              <i class="fas fa-arrow-up input-icon upload-icon"></i>
            </div>
          </div>
        </div>

        <div class="ai-tools-row">
          <div class="tool-box">
            <div class="tool-content">
              <p data-code="GCR">转化效率计算工具</p>
              <div class="tool-desc">输入活动数据，一键算出目标完成率，快速评估转化效果</div>
            </div>
            <div class="tool-btn">立即计算</div>
          </div>
          <div class="tool-box">
            <div class="tool-content">
              <p data-code="GAM">大客户管理案例库</p>
              <div class="tool-desc">聚焦山西老字号，拆解全球客户管理的本土实践方案</div>
            </div>
            <div class="tool-btn">查看案例</div>
          </div>
        </div>
      </div>
    </aside>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// 导航状态
const activeNav = ref('首页')

// 导航项列表
const navItems = [
  '首页',
  '专业概览',
  '课程体系',
  '前沿课程',
  '实践活动',
  '专业岗位',
  '学习认证'
]

// 统计数据
const statsData = {
  课程数量: '32',
  课程知识图谱: '18',
  知识点数量: '5564',
  知识关系总数: '10529',
  知识关联度: '68%',
  教学资源总数: '14527'
}

// 组件挂载后自动刷新
onMounted(() => {
  // 确保DOM完全加载后重新计算布局
  setTimeout(() => {
    // 触发一次重排
    window.dispatchEvent(new Event('resize'))
    // 强制重排
    document.body.offsetHeight
    
    // 直接操作 visit-list 元素，强制其重绘
    const visitList = document.querySelector('.visit-list')
    if (visitList) {
      visitList.style.display = 'none'
      visitList.offsetHeight // 强制重排
      visitList.style.display = 'block'
    }
  }, 500)
  
  // 再次触发重排，确保布局稳定
  setTimeout(() => {
    window.dispatchEvent(new Event('resize'))
    
    // 再次强制 visit-list 重绘
    const visitList = document.querySelector('.visit-list')
    if (visitList) {
      visitList.style.display = 'none'
      visitList.offsetHeight // 强制重排
      visitList.style.display = 'block'
    }
  }, 1000)
})
</script>

<style>
/* ===== 全局重置 ===== */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>

<style scoped>
/* ===== 布局容器 ===== */
.app-container {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  color: #ffffff;
  font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
  background-image: url('@/assets/bg1.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.app-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 0;
}

/* ===== 导航栏 ===== */
.nav-bar {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  padding: 0 30px;
  z-index: 100;
}

.logo-img {
  height: 50px;
  width: auto;
}

.nav-links {
  display: flex;
  gap: 50px;
  margin-left: 200px;
}

.nav-links span {
  font-size: 20px;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.2s;
}

.nav-links span:hover {
  opacity: 1;
}

.nav-links span.active {
  opacity: 1;
  font-weight: bold;
  border-bottom: 2px solid #ffffff;
}

.nav-more {
  font-weight: bold;
}

.user-avatar {
  width: 40px;
  height: 40px;
  margin-left: 250px;
  border-radius: 50%;
  background: #ffffff;
}

/* ===== 左侧统计区域 ===== */
.left-stats {
  position: absolute;
  top: 120px;
  bottom: 20px;
  left: 60px;
  width: 180px;
  display: flex;
  flex-direction: column;
  gap: 3.5vh;
}

.stat-unit {
  margin-bottom: 2vh;
}

.stat-value {
  font-size: 30px;
  line-height: 1.2;
}

.stat-label {
  font-size: 14px;
  opacity: 0.6;
  color: rgba(255, 255, 255, 0.8);
}

.visit-card {
  margin-bottom: 2vh;
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
  padding: 0 !important;
  display: block !important;
  flex-direction: row !important;
  align-items: flex-start !important;
  justify-content: flex-start !important;
  text-align: left !important;
  transition: none !important;
}

.visit-card strong {
  display: block;
  font-size: 20px;
  font-weight: 500;
  color: #ffffff !important;
}

.visit-card span {
  font-size: 12px;
  opacity: 0.5;
  color: #ffffff !important;
}

/* ===== 中央主视觉 ===== */
.center-hero {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: -25vw;
  margin-bottom: 10vh;
  pointer-events: none;
}

.hero-content {
  position: relative;
  text-align: center;
  pointer-events: auto;
}

.main-title {
  font-size: clamp(60px, 10vw, 100px);
  letter-spacing: 15px;
  font-weight: bold;
}

.en-bg {
  font-size: clamp(40px, 8vw, 80px);
  font-weight: bold;
  /* text-transform: uppercase; */
  margin-left: 20vw;
  opacity: 0.2;
  margin-top: -0.8em;
}

.sub-title {
  font-size: clamp(24px, 3vw, 32px);
  font-weight: 300;
  letter-spacing: 25px;
}

.bottom-btns {
  position: absolute;
  bottom: -20px;
  display: flex;
  gap: 50px;
  pointer-events: auto;
}

.glass-btn {
  width: 300px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  backdrop-filter: blur(1px);
  transition: background-color 0.2s;
  cursor: default;
}

.glass-btn:hover {
  background: rgba(255, 255, 255, 0.2);
}

/* ===== 右侧AI区域 ===== */
.right-ai {
  position: absolute;
  top: 90px;
  bottom: 100px;
  right: 60px;
  width: 450px;
  display: flex;
  flex-direction: column;
  z-index: 50;
}

.ai-greeting {
  display: flex;
  gap: 5px;
  align-items: center;
  margin-bottom: -15px;
  position: relative;
  z-index: 2;
  margin-left: 30px;
}

.ai-avatar {
  width: 70px;
  height: 70px;
  flex-shrink: 0;
  overflow: hidden;
}

.ai-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.ai-message {
  padding: 7px 13px;
  font-size: 13px;
  color: #333333;
  background: rgba(255, 255, 255, 1);
  border-radius: 15px;
}

.ai-main-card {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  overflow: hidden;
  background: transparent;
  border: 1.5px solid #ffffff;
  border-radius: 25px;
  backdrop-filter: blur(1px);
}

.ai-nav-btns {
  display: flex;
  gap: 2px;
  justify-content: space-between;
  margin-bottom: 15px;
}

.ai-nav-btns button {
  padding: 8px 22px;
  font-size: 14px;
  cursor: pointer;
  color: #000;
  background: rgba(255, 255, 255, 0.85);
  border: none;
  border-radius: 10px;
  transition: background-color 0.2s;
}

.ai-nav-btns button:hover {
  background: #dddddd;
}

.ai-data-line {
  padding: 8px 16px;
  margin:0 auto 15px;
  font-size: 14px;
  color: #000;
  text-align: center;
  background: rgba(255, 255, 255, 0.85);
  border-radius: 10px;
  width: 80%;
}

.ai-chat-window {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  padding: 20px;
  color: #000000;
  background: rgba(255, 255, 255, 0.85);
  border-radius: 15px;
}

.chat-tag {
  margin-bottom: 10px;
  font-size: 13px;
  color: #000000;
}

.chat-scroll-area {
  flex: 1;
  overflow-y: auto;
  font-size: 14px;
  line-height: 1.6;
}

.robot {
  margin-top: 15px;
  color: #333333;
  font-size: 14px;
}

.chat-input-row {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  margin-top: 20px;
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 25px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.input-icon {
  font-size: 16px;
  color: #666666;
  display: flex;
  align-items: center;
  justify-content: center;
}

.camera-icon {
  margin-right: 10px;
}

.chat-input-row input {
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-size: 14px;
  color: #333333;
}

.chat-input-row input::placeholder {
  color: #999999;
}

.input-btns {
  display: flex;
  align-items: center;
  gap: 15px;
}

.plus-icon,
.upload-icon {
  font-weight: bold;
}

.ai-tools-row {
  display: flex;
  gap: 15px;
  margin-top: 20px;
}

.tool-box {
  flex: 1;
  padding: 15px;
  text-align: left;
  color: #333333;
  background: rgba(255, 255, 255, 0.85);
  border-radius: 15px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
}

.tool-box p {
  margin-bottom: 12px;
  font-size: 14px;
  color: #000;
}

.tool-box p::before {
  content: attr(data-code);
  display: inline-block;
  font-size: 20px;
  font-weight: bold;
  color: #1e5fa0;
  margin-right: 3px;
}

.tool-box .tool-content {
  flex: 1;
  margin-bottom: 16px;
}

.tool-box .tool-desc {
  font-size: 14px;
  color: #333333;
  line-height: 1.5;
  margin-top: 8px;
}

.tool-btn {
  display: inline-block;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  color: #ffffff;
  background: #1e5fa0;
  border-radius: 25px;
  transition: background-color 0.2s;
  text-align: center;
  min-width: 120px;
  align-self: flex-end;
}

.tool-btn:hover {
  background: #154b80;
}


</style>