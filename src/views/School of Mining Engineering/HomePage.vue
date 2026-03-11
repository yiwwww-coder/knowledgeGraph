<template>
  <div class="home-page">
    <!-- Header Banner with Mine Background -->
    <div class="header-banner">
      <!-- Top Navigation -->
      <div class="top-nav">
        <div class="logo-section">
          <img src="@/assets/专业logo.png" alt="山西工程技术学院" class="college-logo" />
        </div>
        <div class="nav-links">
          <a href="#" class="nav-link active">首页</a>
          <a href="#" class="nav-link">系部发展</a>
          <a href="#" class="nav-link">自主知识体系</a>
          <a href="#" class="nav-link">实践训练中心</a>
          <a href="#" class="nav-link">系部VR实景</a>
          <a href="#" class="nav-link">成果展示</a>
          <a href="#" class="nav-link">标杆示范</a>
          <span class="nav-arrow">></span>
        </div>
        <div class="user-icon">
          <div class="user-circle"></div>
        </div>
      </div>
      
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
      
      <!-- Main Title -->
      <div class="main-title-container">
        <img src="@/assets/学院logo.png" alt="山西工程技术学院" class="main-logo" />
        <h1 class="main-title">矿业工程系</h1>
        <p class="subtitle">数智化未来创新空间</p>
        <div class="lab-name">DigiIntelFutureLab</div>
      </div>
      
      <!-- Professional Images -->
      <div class="professional-images">
        <div class="image-container" @click="navigateToMiningEngineering" style="cursor: pointer;">
          <img src="@/assets/采矿工程.png" alt="采矿工程" class="professional-img" />
          <div class="image-dot"></div>
          <div class="image-name">采矿工程</div>
        </div>
        <div class="image-container">
          <img src="@/assets/安全工程.png" alt="安全工程" class="professional-img" /> 
          <div class="image-dot"></div>
          <div class="image-name">安全工程</div>
        </div>
        <div class="image-container">
          <img src="@/assets/矿物加工工程.png" alt="矿物加工工程" class="professional-img" />
          <div class="image-dot"></div>
          <div class="image-name">矿物加工工程</div>
        </div>
        <div class="image-container">
          <img src="@/assets/智能采矿工程.png" alt="智能采矿工程" class="professional-img" />
          <div class="image-dot"></div>
          <div class="image-name">智能采矿工程</div>
        </div>
        <div class="image-container">
          <img src="@/assets/能源化学工程.png" alt="能源化学工程" class="professional-img" />
          <div class="image-dot"></div>
          <div class="image-name">能源化学工程</div>
        </div>
      </div>
      
      <!-- AI Assistant -->
      <aside class="right-ai">
        <div class="ai-greeting">
          <div class="ai-avatar">
            <img src="@/assets/ai.png" alt="AI assistant" />
          </div>
          <div class="ai-message">
            嗨，我是AI小矿<br />学院专业大小事，找我就对啦～
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

          <div class="news-section">
            <div class="news-card">
              <div class="news-title">[ 学院新闻速递 ]</div>
              <div class="news-list">
                <div class="news-item">
                  <div class="news-content">
                    <h3>青春曜新年，逐梦启华章</h3>
                    <p>矿业工程系元旦晚会落幕</p>
                    <span class="news-date">2025年12月25日</span>
                  </div>
                  <div class="news-number">1</div>
                </div>
                <div class="news-item">
                  <div class="news-content">
                    <h3>矿业工程系学子获煤炭职教基金资助</h3>
                    <p>表彰大会点燃行业奋进热情</p>
                    <span class="news-date">2025年11月27日</span>
                  </div>
                  <div class="news-number">2</div>
                </div>
                <div class="news-item">
                  <div class="news-content">
                    <h3>共启智慧矿山新篇章</h3>
                    <p>深化AI赋能采矿融合创新</p>
                    <span class="news-date">2025年11月26日</span>
                  </div>
                  <div class="news-number">3</div>
                </div>
              </div>
              <div class="news-more">查看更多</div>
            </div>
            <div class="news-card">
              <div class="news-title">[ 专业最新动态 ]</div>
              <div class="news-list">
                <div class="news-item">
                  <div class="news-content">
                    <h3>青春曜新年，逐梦启华章</h3>
                    <p>矿业工程系元旦晚会落幕</p>
                    <span class="news-date">2025年12月25日</span>
                  </div>
                  <div class="news-number">1</div>
                </div>
                <div class="news-item">
                  <div class="news-content">
                    <h3>矿业工程系学子获煤炭职教基金资助</h3>
                    <p>表彰大会点燃行业奋进热情</p>
                    <span class="news-date">2025年11月27日</span>
                  </div>
                  <div class="news-number">2</div>
                </div>
                <div class="news-item">
                  <div class="news-content">
                    <h3>共启智慧矿山新篇章</h3>
                    <p>深化AI赋能采矿融合创新</p>
                    <span class="news-date">2025年11月26日</span>
                  </div>
                  <div class="news-number">3</div>
                </div>
              </div>
              <div class="news-more">查看更多</div>
            </div>
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
      </aside>
    </div>

    <!-- Department Introduction -->
    <div class="department-intro">
      <h2 class="intro-title">系介绍</h2>
      <div class="expand-button" :class="{ expanded: isExpanded }" @click="toggleExpand">
        <span class="expand-text">{{ isExpanded ? '收起' : '展开' }}</span>
        <i class="fas fa-chevron-down chevron-icon"></i>
      </div>
      <div class="intro-content">
        <p class="intro-text" :class="{ expanded: isExpanded }">
          山西工程技术学院矿业工程系前身为采煤工程系，始建于1984年，是建校以来最早设立的教学系部之一，现设有采矿工程、安全工程、矿物加工工程、智能采矿工程、能源化学工程5个本科专业，其中采矿工程是学院首批设置的本科专业，2017年获批省级优势专业，2020年获批省一流专业建设点。安全工程专业2021年获批校一流专业建设点，2022年获批2A批次专业。矿物加工工程专业2017年招收第一届本科生，2023年获批为校一流专业建设点。智能采矿工程专业2024年招收第一届本科生。
          <br><br>
          矿业工程系党总支充分发挥政治核心和战斗堡垒作用，入选全省高校党建工作标杆院系创建单位，采矿工程教研室党支部入选全省高校"双带头人"教师党支部书记工作室创建单位。系部获学院创新群体培育突出贡献集体、优秀教学单位荣誉称号。全系现有教职工48名，在校全日制本科生1183名。教师队伍中，自有专任教师42名，其中正高级职称5名、副高级职称12名，高级职称教师占比约40.5%；硕士及以上学位教师占比100%，其中博士学位教师17人，占比40.5%。拥有山西省模范教师1名，山西省"双师型"优秀教师2名，山西工程技术学院"双师双能型"教师18名。建有非常规天然气阳泉市重点科技创新团队、煤矿地压灾害防控阳泉市科技创新人才团队和砂陶材料多维利用阳泉市科技创新人才团队3个市级科技创新团队。
        </p>
        <p class="intro-english">Department Introduction</p>
      </div>
    </div>

    <!-- Professional Programs -->
    <div class="professional-programs">
      <div class="programs-header">
        <h2 class="programs-title">5个专业建设</h2>
        <div class="programs-stats">
          <div class="program-stat">
            <p class="program-stat-number">5</p>
            <p class="program-stat-label">专业数</p>
          </div>
          <div class="program-stat">
            <p class="program-stat-number">132</p>
            <p class="program-stat-label">课程数</p>
          </div>
          <div class="program-stat">
            <p class="program-stat-number">4769</p>
            <p class="program-stat-label">知识点数</p>
          </div>
          <div class="program-stat">
            <p class="program-stat-number">12413</p>
            <p class="program-stat-label">教学资源数</p>
          </div>
        </div>
      </div>
      
      <div class="programs-grid">
        <!-- Mining Engineering -->
        <div class="program-card">
          <img src="@/assets/采矿工程1.png" alt="采矿工程" class="program-image" />
          <h3 class="program-name">采矿工程</h3>
          <div class="program-details">
            <div class="details-row">
              <div class="detail-item">
                <p class="detail-number">36</p>
                <p class="detail-label">课程</p>
              </div>
              <div class="detail-item">
                <p class="detail-number">1512</p>
                <p class="detail-label">知识点</p>
              </div>
              <div class="detail-item">
                <p class="detail-number">4769</p>
                <p class="detail-label">教学资源</p>
              </div>
            </div>
            <div class="explore-button">
              <span class="explore-text">去探索</span>
              <i class="fas fa-arrow-right arrow-icon"></i>
            </div>
          </div>
        </div>
        
        <!-- Safety Engineering -->
        <div class="program-card">
          <img src="@/assets/安全工程1.png" alt="安全工程" class="program-image" />
          <h3 class="program-name">安全工程</h3>
          <div class="program-details">
            <div class="details-row">
              <div class="detail-item">
                <p class="detail-number">32</p>
                <p class="detail-label">课程</p>
              </div>
              <div class="detail-item">
                <p class="detail-number">1205</p>
                <p class="detail-label">知识点</p>
              </div>
              <div class="detail-item">
                <p class="detail-number">3987</p>
                <p class="detail-label">教学资源</p>
              </div>
            </div>
            <div class="explore-button">
              <span class="explore-text">去探索</span>
              <i class="fas fa-arrow-right arrow-icon"></i>
            </div>
          </div>
        </div>
        
        <!-- Mineral Processing Engineering -->
        <div class="program-card">  
          <img src="@/assets/矿物加工工程1.png" alt="矿物加工工程" class="program-image" />
          <h3 class="program-name">矿物加工工程</h3>
          <div class="program-details">
            <div class="details-row">
              <div class="detail-item">
                <p class="detail-number">28</p>
                <p class="detail-label">课程</p>
              </div>
              <div class="detail-item">
                <p class="detail-number">987</p>
                <p class="detail-label">知识点</p>
              </div>
              <div class="detail-item">
                <p class="detail-number">3456</p>
                <p class="detail-label">教学资源</p>
              </div>
            </div>
            <div class="explore-button">
              <span class="explore-text">去探索</span>
              <i class="fas fa-arrow-right arrow-icon"></i>
            </div>
          </div>
        </div>
        
        <!-- Intelligent Mining Engineering -->
        <div class="program-card">
          <img src="@/assets/智能采矿工程1.png" alt="智能采矿工程" class="program-image" />
          <h3 class="program-name">智能采矿工程</h3>
          <div class="program-details">
            <div class="details-row">
              <div class="detail-item">
                <p class="detail-number">24</p>
                <p class="detail-label">课程</p>
              </div>
              <div class="detail-item">
                <p class="detail-number">876</p>
                <p class="detail-label">知识点</p>
              </div>
              <div class="detail-item">
                <p class="detail-number">2987</p>
                <p class="detail-label">教学资源</p>
              </div>
            </div>
            <div class="explore-button">
              <span class="explore-text">去探索</span>
              <i class="fas fa-arrow-right arrow-icon"></i>
            </div>
          </div>
        </div>
        
        <!-- Energy Chemical Engineering -->
        <div class="program-card">
          <img src="@/assets/能源化学工程1.png" alt="能源化学工程" class="program-image" />
          <h3 class="program-name">能源化学工程</h3>
          <div class="program-details">
            <div class="details-row">
              <div class="detail-item">
                <p class="detail-number">30</p>
                <p class="detail-label">课程</p>
              </div>
              <div class="detail-item">
                <p class="detail-number">1098</p>
                <p class="detail-label">知识点</p>
              </div>
              <div class="detail-item">
                <p class="detail-number">3654</p>
                <p class="detail-label">教学资源</p>
              </div>
            </div>
            <div class="explore-button">
              <span class="explore-text">去探索</span>
              <i class="fas fa-arrow-right arrow-icon"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
// 统计数据
const statsData = {
  课程数量: '32',
  课程知识图谱: '18',
  知识点数量: '5564',
  知识关系总数: '10529',
  知识关联度: '68%',
  教学资源总数: '14527'
}

// 展开/收起功能
const isExpanded = ref(false)

const toggleExpand = () => {
  isExpanded.value = !isExpanded.value
}

const navigateToMiningEngineering = () => {
  router.push('/mining-engineering')
}

// 组件挂载后修改页面标题
onMounted(() => {
  // 修改页面标题为"采矿工程"
  document.title = "矿业工程系"
})
</script>

<style scoped>
/* Home Page Container */
.home-page {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-color: #6A5044;
  color: white;
  font-family: 'Noto Sans SC', sans-serif;
}

/* Header Banner with Mine Background */
.header-banner {
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('@/assets/bg.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
}

/* Top Navigation */
.top-nav {
  position: absolute;
  top: 15px;
  left: 0;
  right: 0;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  z-index: 100;
}

.logo-section {
  display: flex;
  align-items: center;
  gap: 15px;
}

.college-logo {
  height: 50px;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 40px;
  margin-left: -110px;
}

.nav-link {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 18px; 
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #fff;
}

.nav-link.active {
  color: #fff;
  font-weight: bold;
}

.nav-arrow {
  color: rgba(255, 255, 255, 0.7);
  font-size: 16px;
  font-weight: 400;
}

.user-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
}

.user-circle {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #555;
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

/* Main Title */
.main-title-container {
  position: absolute;
  left: 40%;
  top: 40%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.main-logo {
  height: 80px;
  margin: 0 auto;
  display: block;
}

.main-title {
  font-size: 72px;
  font-weight: bold;
  color: white;
  margin-bottom: -20px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.subtitle {
  font-size: 72px;
  color: white;
  margin-bottom: -80px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
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
  width: 200px;
  height: 200px;
  text-align: center;
  justify-content: flex-end;
}

.image-container:hover {
  transform: scale(1.2);
}

.professional-img {
  width: 200px;
  height: 115px;
  border-radius: 8px;
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  transition: box-shadow 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.image-container:hover .professional-img {
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.8);
}

.image-dot {
  width: 10px;
  height: 10px;
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

/* ===== 右侧AI区域 ===== */
.right-ai {
  position: absolute;
  top: 90px;
  bottom: 260px;
  right: 60px;
  width: 475px;
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
  margin-left: 80px;
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
  margin-bottom: 10px;
}

.ai-nav-btns button {
  padding: 8px 25px;
  font-size: 14px;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.85);
  color: rgba(0,0, 0, 0.65);
  border: none;
  border-radius: 10px;
  transition: background-color 0.2s;
}

.ai-nav-btns button:hover {
  background: #dddddd;
}

.ai-data-line {
  padding: 8px 16px;
  margin:0 auto 10px;
  font-size: 14px;
  color: #000;
  text-align: center;
  background: rgba(255, 255, 255, 0.85);
  border-radius: 10px;
  width: 80%;
}

/* News Section */
.news-section {
  display: flex;
  gap: 10px;
  height: 100%;
  overflow-y: auto;
  margin-bottom: 10px;
}

.news-card {
  flex: 1;
  padding: 20px 10px 10px;
  background: rgba(255, 255, 255, 0.85);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
}

.news-title {
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin-bottom: 15px;
}

.news-list {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: auto;
  padding-right: 8px;
}

/* 自定义滚动条样式 */
.news-list::-webkit-scrollbar {
  width: 4px;
}

.news-list::-webkit-scrollbar-track {
  background: transparent;
  border-radius: 3px;
}

.news-list::-webkit-scrollbar-thumb {
  background: #ffffff;
  border-radius: 3px;
}

.news-list::-webkit-scrollbar-thumb:hover {
  background: #fff;
}

.news-item {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px 5px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  position: relative;
}


.news-content {
  flex: 1;
  z-index: 1;
  display: flex;
  flex-direction: column;
}

.news-content h3 {
  font-size: 13px;
  font-weight: bold;
  color: #333;
  padding-bottom: 5px;
}

.news-content p {
  font-size: 12px;
  color: #666;
}

.news-date {
  font-size: 12px;
  color: #999;
  text-align: right;
}

.news-number {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #ff4d4f;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
  z-index: 1;
}

.news-item:nth-child(2) .news-number {
  background: #faad14;
}

.news-item:nth-child(3) .news-number {
  background: #52c41a;
}

.news-more {
  text-align: right;
  font-size: 13px;
  color: #666;
  cursor: pointer;
  padding: 5px 0;
}

.news-more:hover {
  color: #333;
}

.chat-input-row {
  display: flex;
  align-items: center;
  padding: 12px 16px;
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

/* 移除原有的媒体查询，因为vw会自动处理响应式 */
/* @media (max-width: 1200px) { ... } */
/* @media (max-width: 768px) { ... } */
</style>