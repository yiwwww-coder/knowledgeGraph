<template>
  <div class="home-page">
    <!-- Header Banner with Mine Background -->
     <NavigationBar />
    <div class="header-banner">
      <!-- Top Navigation -->
      
      
<!-- 左侧统计数据 -->
    <div class="ai-achievement">AI已经为您建设了以下成果</div>
    <aside class="left-stats">
      <div class="stat-list">
        <div v-for="(value, label) in statsData" :key="label" class="stat-box">
          <div class="stat-value">{{ value }}</div>
          <div class="stat-label">{{ label }}</div>
        </div>
      </div>
    </aside>
    
    <!-- 右上角访问量数据 -->
    <aside class="right-visits">
      <div class="visit-list">
        <div class="visit-card">
          <strong>6789</strong>
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
      
      <!-- Main Title -->
      <div class="main-title-container">
        <h1 class="main-title">采矿工程专业</h1>
        <p class="subtitle">未来学习空间</p>
      </div>
      
      <!-- Action Buttons -->
      <div class="action-buttons">
        <button class="action-button">矿井实训基地</button>
        <button class="action-button">虚拟仿真实验入口</button>
        <button class="action-button">产学合作</button>
      </div>
      
      
      <!-- AI Assistant -->
<aside class="right-ai">
        <div class="ai-header">
          <div class="ai-avatar-wrapper">
            <img src="@/assets/ai.png" alt="AI assistant" class="avatar-img" />
          </div>
          <div class="greeting-bubble">
            <p>嗨，我是AI小矿</p>
            <p>您需要我为您做什么</p>
          </div>
        </div>

        <div class="ai-main-container">
          <div class="ai-nav-grid">
            <button class="nav-btn">新聊天</button>
            <button class="nav-btn">全屏聊天</button>
            <button class="nav-btn">导出对话</button>
            <button class="nav-btn">深度分析</button>
          </div>

          <div class="ai-stats-bar">
            <span>累计问答：15820次</span>
            <span>准确率：94.7%</span>
          </div>

          <div class="chat-window">
            <div class="history-label">[ 历史对话 ]</div>
            <div class="chat-item user-msg">
              <span class="chat-role">我：</span>
              <span class="chat-text">巷道支护的主要形式？</span>
            </div>
            <div class="chat-item ai-msg">
              <span class="chat-role">煤小炭：</span>
              <div class="chat-text">
                1.锚杆支护 2.喷射混凝土 3.钢支架 4.联合支护<br/>
                需要我详细解释某种支护形式吗？
              </div>
            </div>
            
            <div class="chat-input-wrapper">
              <i class="fas fa-camera"></i>
              <input type="text" placeholder="试着输入您想了解的问题吧 ~" />
              <div class="input-actions">
                <i class="fas fa-plus-circle"></i>
                <i class="fas fa-arrow-alt-circle-up"></i>
              </div>
            </div>
          </div>

          <div class="recommend-section">
            <div class="recommend-box common-questions">
              <div class="box-title">同学常问</div>
              <ul class="box-list">
                <li>1.瓦斯抽采孔距怎么算</li>
                <li>2.通风构筑物放哪阻力小</li>
              </ul>
            </div>
            <div class="recommend-box history-suggest">
              <div class="box-title">基于你的学习历史推荐：</div>
              <div class="suggest-item">
                <i class="fas fa-book"></i>
                <div class="suggest-info">
                  <p class="course-name">《矿井通风》课程相关</p>
                  <p class="course-desc">如何计算工作面所需风量</p>
                </div>
              </div>
              <div class="suggest-item warning">
                <i class="fas fa-exclamation-circle"></i>
                <div class="suggest-info">
                  <p>最近作业涉及：巷道支护不同岩性的支护参数差异？</p>
                  <p class="highlight">易错点提醒</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>

<div class="talent-cultivation">
  <h2 class="section-title">人才培养</h2>
  <div class="cultivation-grid">
    <div class="cultivation-card">
      <div class="card-header">
        <h3 class="card-title">扎根行业，服务区域发展</h3>
      </div>
      <div class="card-body">
        <p class="card-content">立足阳泉、面向山西及周边煤炭产业，以“立德树人”为根本，培养德、智、体、美、劳全面发展的新时代本科应用型人才，专注解决煤炭开采复杂工程问题。</p>
      </div>
    </div>
    <div class="cultivation-card">
      <div class="card-header">
        <h3 class="card-title">多维素养，赋能职业成长</h3>
      </div>
      <div class="card-body">
        <p class="card-content">聚焦 12 项毕业要求，锤炼工程知识应用、复杂问题分析、解决方案设计、现代工具运用、团队协作与终身学习六大核心能力，助力毕业生成为行业技术或管理骨干。</p>
      </div>
    </div>

    <div class="cultivation-card">
      <div class="card-header">
        <h3 class="card-title">夯实基础，凸显专业特色</h3>
      </div>
      <div class="card-body">
        <p class="card-content">以矿业工程、工程力学为主学科，覆盖计算机、机械、安全科学等交叉领域；核心课程包括矿井通风与安全、采矿学、矿山压力与岩层控制等，构建"基础+专业+特色"的多层次课程结构。</p>
      </div>
    </div>
    <div class="cultivation-card">
      <div class="card-header">
        <h3 class="card-title">知行合一，提升应用能力</h3>
      </div>
      <div class="card-body">
        <p class="card-content">实践学分占比达37.88%，涵盖军事训练、金工实习、生产实习、课程设计、毕业设计等全流程实践环节，搭配产教融合、专创融合特色项目，打造"理论学习-实践应用-创新提升"闭环。</p>
      </div>
    </div>
        <div class="cultivation-card">
      <div class="card-header">
        <h3 class="card-title">多元路径，适配未来需求</h3>
      </div>
      <div class="card-body">
        <p class="card-content">毕业生可从事矿业开发规划、矿山设计、安全监理、生产管理等工作，也能拓展至隧道、铁路、市政工程等相关领域；支持自主创业或深造攻读硕士研究生，通过终身学习适应行业前沿发展。</p>
      </div>
    </div>
    </div>
</div>

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import NavigationBar from '@/components/NavigationBar.vue'

const router = useRouter()
// 统计数据
const statsData = {
  课程: '36',
  课程知识图谱: '16',
  知识点数量: '1512',
  知识关系总数: '3500',
  知识关联度: '88%',
  教学资源总数: '15210'
}
const majors = ref([
  {
    name: '采矿工程',
    students: 36,
    teachers: 1512,
    courses: 4769,
    route: '/talent-cultivation'
  },
  {
    name: '安全工程',
    students: 32,
    teachers: 1205,
    courses: 3987,
    route: '/talent-cultivation'
  },
  {
    name: '矿物加工工程',
    students: 28,
    teachers: 987,
    courses: 3456,
    route: '/talent-cultivation'
  },
  {
    name: '智能采矿工程',
    students: 24,
    teachers: 876,
    courses: 2987,
    route: '/talent-cultivation'
  },
  {
    name: '能源化学工程',
    students: 30,
    teachers: 1098,
    courses: 3654,
    route: '/talent-cultivation'
  }
])

// 展开/收起功能
const isExpanded = ref(false)

const toggleExpand = () => {
  isExpanded.value = !isExpanded.value
}

const navigateToMajor = (route: string) => {
  router.push(route)
}

onMounted(() => {
  // 修改页面标题为"采矿工程"
  document.title = "采矿工程"
})
</script>

<style scoped>
/* 覆盖 root 背景色 */
:global(:root) {
  --background: rgba(31, 41, 55, 0.9)!important;
}

/* 确保 html 和 body 占满屏幕 */
:global(html), :global(body) {
  margin: 0 !important;
  padding: 0 !important;
  height: 100% !important;
  width: 100% !important;
  overflow-x: hidden !important;
  background-color: rgba(31, 41, 55, 0.9)!important;
  min-height: 100vh !important;
}

/* 处理 #app 容器 */
:global(#app) {
  background-color: rgba(31, 41, 55, 0.9)!important;
  height: 100% !important;
  min-height: 100vh !important;
  margin: 0 !important;
  padding: 0 !important;
}

/* 处理 style="all: initial;" 的 div */
:global(body > div[style*="all: initial;"]) {
  height: 100% !important;
  min-height: 100vh !important;
  background-color: rgba(31, 41, 55, 0.9)!important;
}
/* Home Page Container */
.home-page {
  position: relative;
  width: 100% !important;
  min-height: 100vh !important;
  height: 100% !important;
  background-color: rgba(31, 41, 55, 0.9) !important;
  color: white;
  font-family: 'Noto Sans SC', sans-serif;
  margin: 0 !important;
  padding: 0 !important;
  z-index: 1;
}

/* Header Banner with Mine Background */
.header-banner {
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('@/assets/bg2.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  display: block;
}

/* Talent Cultivation Section */
.talent-cultivation {
  position: relative;
  padding-bottom: 100px;
  width: 90%;
  margin: 0 auto;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  padding: 30px;
  color: #333;
  margin-bottom: 50px;
  margin-top: 0;
}



.ai-achievement {
  position: absolute;
  bottom: 390px;
  left: 55px;
  font-size: 16px;
  color: white;
  z-index: 20;
  margin-bottom: 15px;
}

/* ===== 左侧统计区域 ===== */
.left-stats {
  position: absolute;
  bottom: 170px;
  left: 50px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  z-index: 20;
}

.stat-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
}

.stat-box {
  background-color: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(5px);
  border-radius: 8px;
  padding: 8px 10px;
  min-width: 110px;
  text-align: left;
}

.stat-value {
  font-size: 24px;
  line-height: 1.2;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.8);
  text-align: left;
}

.stat-label {
  font-size: 12px;
  opacity: 0.8;
  color: rgba(0, 0, 0, 0.6);
  text-align: left;
}

/* ===== 右上角访问量数据 ===== */
.right-visits {
  position: absolute;
  top: 80px;
  right: 35px;
  display: flex;
  gap: 15px;
  z-index: 20;
}

.visit-list {
  display: flex;
  gap: 15px;
}

.visit-card {
  background-color: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(5px);
  border-radius: 15px;
  padding: 3px 10px;
  min-width: 110px;
  text-align: left;
}

.visit-card strong {
  display: block;
  font-size: 20px;
  font-weight: 550;
  line-height: 1.2;
  color: rgba(0, 0, 0, 0.8);
  margin-left: 5px;
  text-align: left;
}

.visit-card span {
  font-size: 12px;
  opacity: 0.8;
  color: rgba(0, 0, 0, 0.6);
  display: block;
  margin-left: 5px;
  text-align: left;
}

/* Main Title */
.main-title-container {
  position: absolute;
  left: 3%;
  top: 20%;
  transform: translateY(-50%);
  text-align: left;
}

.main-logo {
  height: 80px;
  margin: 0 0 20px 0;
  display: block;
}

.main-title {
  font-size: 80px;
  font-weight: bold;
  color: white;
  margin-bottom: 10px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  text-align: left;
}

.subtitle {
  font-size: 30px;
  color: white;
  margin-bottom: -80px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  text-align: left;
}

.lab-name {
  font-size: 86px;
  color: rgba(255, 255, 255, 0.2);
  font-weight: 500;
  letter-spacing: 1px;
  margin-left: 350px;
  -webkit-text-stroke: 1px #2d251e3d;
  text-stroke: 1px #321f0e;
}

/* Action Buttons */
.action-buttons {
  position: absolute;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 50px;
  z-index: 20;
}

.action-button {
    width: 250px;
    height: 80px;
  margin: auto;
  background-color: rgba(255, 255, 255, 0.8);
  color: #000;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.action-button:hover {
  background-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

/* Professional Images */
.professional-images {
  position: absolute;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 30px;
  align-items: flex-end;
  height: 150px;
}

.image-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  z-index: 10;
  position: relative;
  flex-shrink: 0;
  width: 160px;
  height: 160px;
  text-align: center;
  justify-content: flex-end;
}

.image-container:hover {
  transform: scale(1.1);
}

.professional-img {
  width: 160px;
  height: 90px;
  border-radius: 8px;
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  transition: box-shadow 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.image-container:hover .professional-img {
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.8);
}

.image-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: white;
  transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.image-container:hover .image-dot {
  transform: scale(1.2);
  background-color: #ac6208a8;
}

.image-name {
  font-size: 14px;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.image-container:hover .image-name {
  font-size: 16px;
  font-weight: bold;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.8);
}

/* 人才培养容器：增加 padding-bottom 解决下方空隙问题 */
.talent-cultivation {
  position: relative;
  width: 90%;
  margin: 60px auto 100px; /* 增加了底部外边距 (100px) */
  background-color: rgba(255, 255, 255, 0.95);
  border-radius: 16px;
  padding: 40px;
  color: #333;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.section-title {
  font-size: 32px;
  font-weight: bold;
  color: #1a1a1a;
  text-align: left; /* 依照图示通常靠左或居中，这里设为左对齐 */
  margin-bottom: 40px;
  padding-left: 10px;
  border-left: 6px solid #3b2014; /* 增加一个装饰性左边框 */
}

/* 网格布局：改为两列或三列（图示通常为两列排布更清晰） */
.cultivation-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  gap: 30px;
}

/* 卡片样式重构 */
.cultivation-card {
  background: #D9D9D9;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  border: 1px solid #eee;
}

.cultivation-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
}

/* 卡片标题区：浅灰色背景 */
.card-header {
  background-color: #D9D9D9; /* 对应图中浅灰色头部 */
  padding: 15px 20px;
}

.card-title {
  font-size: 20px;
  font-weight: bold;
  color: #3b2014;
  margin: 0;
}

/* 卡片内容区 */
.card-body {
  padding: 20px;
  background-color: #fff;
  border-radius: 12px;
}

.card-content {
  font-size: 15px;
  line-height: 1.8;
  color: #555;
  margin: 0;
  text-align: justify;
}

/* 响应式调整 */
@media (max-width: 992px) {
  .cultivation-grid {
    grid-template-columns: 1fr; /* 移动端改为单列 */
  }
}
/* Department Introduction */
.department-intro {
  position: relative;
  width: 90%;
  margin: 50px auto;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  padding: 30px;
  color: #333;
  min-height: 150px;
  position: relative;
  overflow: hidden;
}

.intro-title {
  font-size: 34px;
  font-weight: bold;
  color: #3B2014;
  text-align: center;
  margin-bottom: 20px;
  position: relative;
  z-index: 2;
}

.expand-button {
  position: absolute;
  bottom: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  color: #333;
  background-color: #fff;
  padding: 8px 16px;
  border-radius: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  z-index: 3;
  transition: all 0.3s ease;
}

.expand-button:hover {
  background-color: #f5f5f5;
  box-shadow: 0 4px 8px rgba(0,0,0,0.15);
}

.expand-text {
  font-size: 14px;
  color: #333;
}

.chevron-icon {
  font-size: 14px;
  color: #333;
  transition: transform 0.3s ease;
}

.expand-button.expanded .chevron-icon {
  transform: rotate(180deg);
}

.intro-content {
  position: relative;
  width: 80%;
  margin: 0 auto;
  text-align: center;
  z-index: 2;
}

.intro-text {
  font-size: 20px;
  color: #000;
  line-height: 1.6;
  margin-bottom: 35px;
  max-height: 100px;
  overflow: hidden;
  transition: max-height 0.5s ease;
  position: relative;
  text-align: left;
}

.intro-text::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 32px;
  /* background: linear-gradient(transparent, rgba(255,255,255,1)); */
  pointer-events: none;
}

.intro-text.expanded {
  max-height: 800px;
}

.intro-text.expanded::after {
  display: none;
}

.intro-english {
  color: #54382b;
  font-style: italic;
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.1;
  font-size: 120px;
  font-weight: bold;
  z-index: 1;
  pointer-events: none;
  white-space: nowrap;
}

/* Professional Programs */
.professional-programs {
  position: relative;
  width: 90%;
  margin: 50px auto;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 10px;
  padding: 30px;
  color: #333;
  margin-bottom: 200px;
}

.programs-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  margin-top: 10px;
}

.programs-title {
  font-size: 32px;
  font-weight: bold;
  color: #3B2014;
}

.programs-stats {
  display: flex;
  gap: 20px;
}

.program-stat {
  width: 107px;
  background-color: #6A5044;
  color: white;
  padding: 3px 20px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.program-stat-number {
  font-size: 24px;
  font-weight: bold;
  color: white;
}

.program-stat-label {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.7);
}

.programs-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  margin-top: 30px;
}

.program-card {
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 380px;
}

.program-card:hover {
  transform: translateY(-5px);
  background-color: rgba(0, 0, 0, 0.1);
}

.program-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.program-card:hover .program-image {
  transform: scale(1.05);
}

.program-name {
  position: absolute;
  top: 20px;
  left: 0;
  right: 0;
  font-size: 18px;
  font-weight: bold;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
  text-align: center;
  z-index: 2;
}

.program-details {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 30px 20px;
  transform: translateY(100%);
  transition: transform 0.3s ease;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.program-card:hover .program-details {
  transform: translateY(0);
}

.details-row {
  display: flex;
  justify-content: space-around;
  width: 100%;
  gap: 20px;
}

.detail-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
}

.detail-number {
  font-size: 24px;
  font-weight: bold;
  color: white;
}

.detail-label {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.8);
}

.explore-button {
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  cursor: pointer;
  color: #333;
  font-size: 16px;
  font-weight: bold;
  background: white;
  padding: 12px 24px;
  border-radius: 30px;
  z-index: 3;
  transition: all 0.3s ease;
}

.explore-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.arrow-icon {
  font-size: 14px;
  color: #6b4423;
  margin-left: 5px;
}

/* ===== 右侧AI区域重构 ===== */
.right-ai {
  position: absolute;
  top: 140px;
  right: 40px;
  width: 420px;
  display: flex;
  flex-direction: column;
  z-index: 50;
  font-family: "Microsoft YaHei", sans-serif;
}

/* AI 头部 */
.ai-header {
  display: flex;
  align-items: center;
  margin-bottom: -30px;
  padding-left: 20px;
  z-index: 100;
}

.ai-avatar-wrapper {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
}

.avatar-img {
  width: 65px;
  height: 65px;
}

.greeting-bubble {
  background: white;
  color: #8c939d;
  padding: 5px 10px;
  border-radius: 15px;
  margin-left: 15px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  font-size: 12px;
  width: 200px;
  line-height: 1.4;
}

/* 主卡片容器 */
.ai-main-container {
  border: 2px solid rgba(255,255,255,0.8);
  border-radius: 30px;
  padding: 20px;
  /* backdrop-filter: blur(10px); */
}

/* 导航按钮 */
.ai-nav-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 6px;
  margin-bottom: 10px;
}

.nav-btn {
  background: rgba(255,255,255,0.8); /* 按钮灰色 */
  border: none;
  color: #5D5D6C;
  padding: 4px 0;
  border-radius: 10px;
  font-size: 14px;
  cursor: pointer;
  font-weight: 500;
  backdrop-filter: blur(5px);
}

/* 统计条 */
.ai-stats-bar {
    width: 90%;
  background: rgba(255,255,255,0.8);
  backdrop-filter: blur(5px);
  color: #5D5D6C;
  border-radius: 10px;
  padding: 4px 20px;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  margin: 0 auto 10px;
  font-weight: 500;
}

/* 聊天窗口 */
.chat-window {
  background: rgba(255,255,255,0.8);
  backdrop-filter: blur(5px);
  border-radius: 10px;
  padding: 10px;
  color: #363648;
  margin-bottom: 10px;
}

.history-label {
  color: #5D5D6C;
  font-size: 12px;
  margin-bottom: 5px;
}

.chat-item {
  margin-bottom: 15px;
  font-size: 14px;
  display: flex;
}

.chat-role {
  white-space: nowrap;
}

.chat-text {
  line-height: 1.6;
}

.user-msg { justify-content: flex-end; text-align: right; }
.ai-msg { text-align: left; }

/* 输入框样式 */
.chat-input-wrapper {
  background: white;
  border-radius: 25px;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  margin-top: 10px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.chat-input-wrapper input {
  flex: 1;
  border: none;
  outline: none;
  padding: 0 10px;
  font-size: 13px;
}

.input-actions {
  display: flex;
  gap: 10px;
  color: #7f8c8d;
  font-size: 18px;
}

/* 底部推荐 */
.recommend-section {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 15px;
}

.recommend-box {
  background: rgba(255,255,255,0.8);
  backdrop-filter: blur(5px);
  border-radius: 15px;
  padding: 6px;
  color: #333;
}

.box-title {
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 5px;
  margin-left: 5px;
}

.box-list {
  list-style: none;
  padding: 0;
  font-size: 12px;
  line-height: 2;
}

.suggest-item {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  font-size: 11px;
}
.suggest-info{
    margin-top: -2px;
}
.suggest-info p { margin-bottom: 5px; line-height: 1.3; }

.course-name { font-weight: bold; }
.course-desc { color: #555; }
.course-time { color: #888; }
.highlight { color: #d35400; font-weight: bold; }
/* Responsive Adjustments */
@media (max-width: 1200px) {
  .professional-images {
    gap: 20px;
  }
  
  .professional-img {
    width: 120px;
    height: 80px;
  }
  
  .programs-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .main-title {
    font-size: 48px;
  }
  
  .subtitle {
    font-size: 18px;
  }
  
  .stats-column {
    display: none;
  }
  
  .visits-stats {
    display: none;
  }
  
  .professional-images {
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .programs-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .ai-assistant {
    position: fixed;
    bottom: 20px;
    right: 20px;
    top: auto;
    width: 250px;
  }
}
</style>
