<template>
  <div class="knowledge-graph" data-name="知识图谱">
    <NavigationBar />
    <div class="banner">
      <div class="banner-content">
        <p class="banner-title">知识图谱</p>
        <p class="banner-subtitle">Knowledge Graph</p>
        
        <div class="stats-group">
          <div class="stat-card">
            <p class="stat-value">21</p>
            <p class="stat-label">知识模块</p>
          </div>
          <div class="stat-card">
            <p class="stat-value">435</p>
            <p class="stat-label">知识点数量</p>
          </div>
          <div class="stat-card">
            <p class="stat-value">98%</p>
            <p class="stat-label">覆盖率</p>
          </div>
        </div>
        

      </div>
    </div>

    <div class="content-container">
      <div class="section-card">
        <p class="section-title">知识图谱可视化</p>
        <div class="graph-visualization">
          <div class="graph-container">
            <!-- Knowledge graph visualization image -->
            <img src="@/assets/知识图谱2.png" alt="知识图谱可视化" class="graph-image" />
            
            <!-- Explore button -->
            <button class="explore-button">
              去探索
              <svg class="explore-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div class="section-card">
        <p class="section-title">热门图谱推荐</p>
        <div class="hot-topics-content">
          <!-- Left Column - Image -->
          <div class="hot-topics-image">
            <img src="@/assets/知识图谱.png" alt="Knowledge Graph Preview" class="hot-topics-img" />
          </div>

          <!-- Right Column - List -->
          <div class="hot-topics-list">
            <div 
              v-for="(topic, index) in hotTopics" 
              :key="index"
              class="hot-topic-item"
            >
              <div class="hot-topic-content">
                <div class="hot-topic-rank">
                  <span class="hot-topic-rank-text">{{ index + 1 }}</span>
                </div>
                <div class="hot-topic-info">
                  <h3 class="hot-topic-title">{{ topic.title }}</h3>
                  <p class="hot-topic-description">{{ topic.description }}</p>
                  <div class="hot-topic-meta">
                    <span>点击量: {{ topic.views }}</span>
                    <span>节点数: {{ topic.nodes }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section-card">
        <p class="section-title">最近访问</p>
        
        <div class="recently-visited-grid">
          <div 
            v-for="(item, index) in recentlyVisited" 
            :key="index"
            class="recently-visited-item"
          >
            <div class="recently-visited-header">
              <h3 class="recently-visited-title">{{ item.name }}</h3>
              <div class="recently-visited-icon">
                <svg class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
            </div>
            <div class="recently-visited-meta">
              <div class="meta-item">
                <svg class="meta-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{{ item.time }}</span>
              </div>
              <div class="meta-item">
                <svg class="meta-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{{ item.duration }}</span>
              </div>
              <div class="meta-item">
                <svg class="meta-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{{ item.nodes }} 节点</span>
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

const hotTopics = ref([
  {
    title: '采矿安全与灾害防治',
    description: '涵盖矿井瓦斯、水害、火灾、顶板等灾害的预防与控制技术',
    views: 1521,
    nodes: 127
  },
  {
    title: '智能采矿技术体系',
    description: '包括智能采掘装备、自动化控制、数字孪生等前沿技术',
    views: 1403,
    nodes: 98
  },
  {
    title: '岩层控制理论与技术',
    description: '系统梳理岩层移动规律、支护设计、地压监测等核心知识',
    views: 1287,
    nodes: 115
  }
])

const recentlyVisited = ref([
  {
    name: '采矿方法',
    time: '2026-11-15',
    duration: '15分钟',
    nodes: 45
  },
  {
    name: '矿井通风',
    time: '2026-11-14',
    duration: '22分钟',
    nodes: 38
  },
  {
    name: '巷道工程',
    time: '2026-11-13',
    duration: '18分钟',
    nodes: 52
  },
  {
    name: '矿山机械',
    time: '2026-11-12',
    duration: '25分钟',
    nodes: 63
  }
])
</script>

<style scoped>
/* 基础容器 */
.knowledge-graph {
  background-color: #f4f7fb;
  min-height: 100vh;
  padding: 20px;
  font-family: "PingFang SC", "Microsoft YaHei", sans-serif;
}

/* Banner & Navigation */
.banner {
  background: linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%);
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

/* Explore Button */
.explore-button {
  position: absolute;
  right: 40px;
  bottom: 40px;
  background-color: #6131f2;
  color: white;
  padding: 12px 32px;
  border-radius: 25px;
  font-size: 24px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: background-color 0.3s ease;
  cursor: pointer;
  border: none;
}

.explore-button:hover {
  background-color: #5028d1;
}

.explore-icon {
  width: 20px;
  height: 20px;
}

/* Content Cards */
.content-container { margin-top: 30px; position: relative; z-index: 10; }
.section-card {
  background: white;
  border-radius: 35px;
  padding: 50px;
  margin-bottom: 30px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.04);
}

.section-title { font-size: 42px; font-weight: bold; margin-bottom: 30px; color: #1d2129; }

/* Knowledge Graph Visualization Area */
.graph-visualization {
  width: 100%;
  height: 600px;
  background-color: #1a1a1a;
  border-radius: 30px;
  overflow: clip;
}

.graph-container {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.graph-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 30px;
}

.graph-container .explore-button {
  position: absolute;
  bottom: 30px;
  right: 30px;
  z-index: 10;
}



/* Hot Topics Section */
.hot-topics-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
}

.hot-topics-image {
  background-color: #f0f0f0;
  border-radius: 30px;
  overflow: hidden;
  height: 400px;
}

.hot-topics-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hot-topics-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.hot-topic-item {
  background-color: white;
  border: 2px solid #e8f0fa;
  border-radius: 20px;
  padding: 24px;
  transition: all 0.3s ease;
  cursor: pointer;
}

.hot-topic-item:hover {
  border-color: #8b5cf6;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.hot-topic-content {
  display: flex;
  align-items: flex-start;
  gap: 16px;
}

.hot-topic-rank {
  background-color: #f3e8ff;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.hot-topic-rank-text {
  font-size: 24px;
  font-weight: bold;
  color: #8b5cf6;
  line-height: normal;
}

.hot-topic-info {
  flex: 1;
}

.hot-topic-title {
  font-size: 24px;
  font-weight: bold;
  color: #1d2129;
  margin-bottom: 8px;
  line-height: normal;
}

.hot-topic-description {
  font-size: 16px;
  color: #4e5969;
  margin-bottom: 12px;
  line-height: normal;
}

.hot-topic-meta {
  display: flex;
  gap: 16px;
  font-size: 14px;
  color: #888;
  line-height: normal;
}

/* Recently Visited Section */
.recently-visited-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.recently-visited-item {
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  border-radius: 24px;
  padding: 28px;
  transition: all 0.3s ease;
  cursor: pointer;
  border: 1px solid #e8f0fa;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
}

.recently-visited-item:hover {
  box-shadow: 0 8px 24px rgba(139, 92, 246, 0.15);
  transform: translateY(-4px);
  border-color: #8b5cf6;
}

.recently-visited-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.recently-visited-title {
  font-size: 20px;
  font-weight: bold;
  color: #1d2129;
  margin: 0;
  line-height: normal;
  flex: 1;
}

.recently-visited-icon {
  width: 40px;
  height: 40px;
  background-color: #f3e8ff;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 12px;
}

.recently-visited-icon .icon {
  width: 20px;
  height: 20px;
  color: #8b5cf6;
}

.recently-visited-meta {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #4e5969;
  line-height: normal;
}

.meta-icon {
  width: 16px;
  height: 16px;
  color: #8b5cf6;
  flex-shrink: 0;
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
