<template>
  <div class="qa-center" data-name="智慧答疑中心">
    <NavigationBar />
    <div class="banner">
      <div class="banner-content">
        <p class="banner-title">智慧答疑中心</p>
        <p class="banner-subtitle">Intelligent Q&A Service Center</p>
        
        <div class="stats-group">
          <div class="stat-card">
            <p class="stat-value">24/7</p>
            <p class="stat-label">全天候服务</p>
          </div>
          <div class="stat-card">
            <p class="stat-value">1000+</p>
            <p class="stat-label">知识库条目</p>
          </div>
          <div class="stat-card">
            <p class="stat-value">98%</p>
            <p class="stat-label">满意度</p>
          </div>
        </div>
      </div>
    </div>

    <div class="content-container">
      <div class="section-card">
        <!-- Category Tabs -->
        <div class="tabs-container">
          <div class="tabs-wrapper">
            <div 
              v-for="(tab, index) in tabs" 
              :key="index"
              :class="selectedTab === index ? 'tab-active' : 'tab'"
              @click="selectedTab = index"
            >
              <p class="tab-text">{{ tab }}</p>
            </div>
          </div>
        </div>

        <!-- Main Content Area -->
        <div class="main-content">
          <div class="left-panel">
            <!-- Main Input Area -->
            <div class="main-input">
              <input 
                type="text"
                v-model="mainQuery"
                placeholder="请输入采矿工程问题，支持文字、图片或语音输入"
                class="main-input-field"
              />
            </div>

            <!-- Try Input Area -->
            <div class="try-input">
              <!-- Emoji Icon -->
              <svg class="emoji-icon" fill="none" viewBox="0 0 24 24" stroke="#5D5D6C" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              
              <input 
                type="text"
                v-model="tryQuery"
                placeholder="试着输入您想了解的问题吧 ~"
                class="try-input-field"
              />

              <!-- Action Icons -->
              <div class="action-icons">
                <!-- Image Upload -->
                <button class="action-button">
                  <svg class="action-icon" fill="none" viewBox="0 0 24 24" stroke="#5D5D6C" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </button>

                <!-- Voice Input -->
                <button class="action-button">
                  <svg class="action-icon" fill="none" viewBox="0 0 24 24" stroke="#5D5D6C" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                </button>
              </div>
            </div>

            <!-- Suggested Questions -->
            <div class="suggested-questions">
              <p class="suggested-questions-title">热门问题推荐：</p>
              <div class="suggested-questions-grid">
                <div 
                  v-for="(question, index) in suggestedQuestions" 
                  :key="index"
                  class="suggested-question"
                >
                  <p class="suggested-question-text">{{ question }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Panel - AI Assistant Info -->
          <div class="right-panel">
            <div class="ai-assistant">
              <div class="ai-avatar">
                <img src="@/assets/ai.png" class="ai-avatar-img" />
              </div>
              <h3 class="ai-title">AI智能答疑助手</h3>
              <p class="ai-description">
                为您提供采矿工程专业相关问题的智能解答
              </p>
              <div class="ai-stats">
                <div class="ai-stat">
                  <p class="ai-stat-number">24/7</p>
                  <p class="ai-stat-label">全天候服务</p>
                </div>
                <div class="ai-stat">
                  <p class="ai-stat-number">1000+</p>
                  <p class="ai-stat-label">知识库条目</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="ai-float">
      <div class="ai-msg-bubble">
        嗨，我是 <strong>AI小矿</strong><br/>
        有什么问题都可以问我
      </div>
      <div class="ai-icon-container">
        <img src="@/assets/ai.png" class="ai-avatar" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import NavigationBar from '@/components/NavigationBar.vue'

const selectedTab = ref(0)
const tabs = ref([
  '智能问答',
  '课程体系答疑',
  '实践工具箱',
  '资源中心',
  '专家与社区',
  '我的学习'
])

const mainQuery = ref('')
const tryQuery = ref('')

const suggestedQuestions = ref([
  '采矿方法有哪些分类？',
  '井下通风系统的设计原则是什么？',
  '岩体力学的主要研究内容包括哪些？',
  '煤矿安全生产的主要措施有哪些？',
  '智能采矿技术的发展趋势如何？',
  '矿井提升设备的选型依据是什么？'
])
</script>

<style scoped>
/* 基础容器 */
.qa-center {
  background-color: #f4f7fb;
  min-height: 100vh;
  padding: 20px;
  font-family: "PingFang SC", "Microsoft YaHei", sans-serif;
}

/* Banner & Navigation */
.banner {
  background: linear-gradient(135deg, #447fd1 0%, #8cb5f1 100%);
  height: 350px;
  border-radius: 40px;
  position: relative;
  color: white;
  padding: 20px 60px;
  overflow: hidden;
}

/* Banner Text */
.banner-content { margin-top: 80px; position: relative; }
.banner-title { font-size: 86px; font-weight: 800; margin: 0; }
.banner-subtitle { font-size: 32px; opacity: 0.7; letter-spacing: 6px; margin-top: 10px; text-transform: uppercase; }

/* Banner Stats */
.stats-group { position: absolute; right: 40px; top: 100px; display: flex; gap: 20px; }
.stat-card {
  background: rgba(255, 255, 255, 0.45);
  width: 180px;
  height: 90px;
  border-radius: 18px;
  padding: 12px 18px;
  backdrop-filter: blur(10px);
}
.stat-value { font-size: 40px; font-weight: bold; color: #4e5969; margin: 0; line-height: 1; }
.stat-label { font-size: 14px; color: #4e5969; margin-top: 8px; font-weight: 500; }

/* Content Cards */
.content-container { margin-top: 30px; position: relative; z-index: 10; }
.section-card {
  background: white;
  border-radius: 35px;
  padding: 50px;
  margin-bottom: 30px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.04);
}

/* Category Tabs */
.tabs-container {
  margin: 0 auto;
  width: 1225px;
  height: 82px;
  background-color: rgba(113,113,127,0.1);
  border-radius: 60px;
  overflow: clip;
  margin-bottom: 30px;
}

.tabs-wrapper {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.tab {
  padding: 12px 24px;
  border-radius: 40px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.tab:hover {
  background-color: rgba(255,255,255,0.5);
}

.tab-active {
  background-color: white;
  padding: 12px 24px;
  border-radius: 40px;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.tab-text {
  font-size: 16px;
  font-weight: 500;
  color: #333;
  line-height: normal;
}

/* Main Content Area */
.main-content {
  display: flex;
  gap: 30px;
}

/* Left Panel */
.left-panel {
  flex: 2;
  border-right: 1px solid #e8f0fa;
  padding-right: 30px;
}

/* Main Input Area */
.main-input {
  width: 100%;
  height: 95px;
  border: 1px solid #e8f0fa;
  border-radius: 50px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.04);
  padding: 0 24px;
  display: flex;
  align-items: center;
  overflow: clip;
  margin-bottom: 30px;
}

.main-input-field {
  flex: 1;
  border: none;
  outline: none;
  font-size: 18px;
  color: #333;
}

/* Try Input Area */
.try-input {
  width: 100%;
  height: 100px;
  background-color: white;
  border: 1px solid #e8f0fa;
  border-radius: 50px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.04);
  padding: 0 32px;
  display: flex;
  align-items: center;
  gap: 16px;
  overflow: clip;
  margin-bottom: 30px;
}

.emoji-icon {
  width: 24px;
  height: 24px;
}

.try-input-field {
  flex: 1;
  border: none;
  outline: none;
  font-size: 16px;
  color: #bcbcbc;
}

.action-icons {
  display: flex;
  gap: 16px;
}

.action-button {
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border: none;
  background: none;
}

.action-button:hover {
  background-color: #f5f5f5;
}

.action-icon {
  width: 24px;
  height: 24px;
}

/* Suggested Questions */
.suggested-questions {
  width: 100%;
}

.suggested-questions-title {
  font-size: 16px;
  font-weight: 500;
  color: #333;
  margin-bottom: 16px;
  line-height: normal;
}

.suggested-questions-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.suggested-question {
  background-color: #f9fafb;
  border: 1px solid #e8f0fa;
  border-radius: 20px;
  padding: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.suggested-question:hover {
  background-color: #f0f0f0;
}

.suggested-question-text {
  font-size: 14px;
  color: #333;
  line-height: normal;
}

/* Right Panel */
.right-panel {
  flex: 1;
  padding: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f4f7fb;
  border-radius: 30px;
}

.ai-assistant {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 500px;
}

.ai-avatar {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: linear-gradient(135deg, #447fd1 0%, #8cb5f1 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
  overflow: hidden;
}

.ai-avatar-img {
  width: 150px;
  height: 150px;
  object-fit: cover;
}

.ai-title {
  font-size: 24px;
  font-weight: bold;
  color: #1d2129;
  margin-bottom: 16px;
  line-height: normal;
}

.ai-description {
  font-size: 16px;
  color: #4e5969;
  text-align: center;
  margin-bottom: 32px;
  line-height: normal;
}

.ai-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  width: 100%;
}

.ai-stat {
  background-color: #e8f0fa;
  border-radius: 15px;
  padding: 16px;
  text-align: center;
}

.ai-stat-number {
  font-size: 24px;
  font-weight: bold;
  color: #447fd1;
  line-height: normal;
}

.ai-stat-label {
  font-size: 14px;
  color: #4e5969;
  line-height: normal;
}

/* AI Assistant */
.ai-float { position: fixed; right: 50px; bottom: 50px; display: flex; align-items: center; gap: 15px; z-index: 100; }
.ai-msg-bubble { 
  background: #e5e6eb; padding: 15px 25px; border-radius: 18px; font-size: 15px; color: #1d2129; 
  box-shadow: 0 4px 16px rgba(0,0,0,0.1); line-height: 1.5;
}
.ai-icon-container { width: 70px; height: 70px;  border-radius: 50%; display: flex; align-items: center; justify-content: center; overflow: hidden; }
.ai-avatar { width: 70px; height: 70px; }
</style>
