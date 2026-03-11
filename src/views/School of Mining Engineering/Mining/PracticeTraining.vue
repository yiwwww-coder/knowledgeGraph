<template>
  <div class="practice-training" data-name="实践实训">
    <NavigationBar />
    <div class="banner">
      <div class="banner-content">
        <p class="banner-title">实践实训平台</p>
        <p class="banner-subtitle">Practice and Training Platform</p>
        
        <div class="stats-group">
          <div class="stat-card">
            <p class="stat-value">3600㎡</p>
            <p class="stat-label">占地面积</p>
          </div>
          <div class="stat-card">
            <p class="stat-value">800m</p>
            <p class="stat-label">巷道总长</p>
          </div>
          <div class="stat-card">
            <p class="stat-value">1984</p>
            <p class="stat-label">建成时间</p>
          </div>
        </div>
      </div>
    </div>

    <div class="content-container">
      <div class="section-card">
        <p class="section-title">实体矿井实践基地</p>
        <div class="base-layout">
          <div class="base-left">
            <div class="top-row">
              <div class="feature-section">
                <div class="section-header">
                  <i class="fas fa-star icon-blue"></i>
                  <h3>特色亮点</h3>
                </div>
                <ul class="feature-list">
                  <li>双重国家级基地认证</li>
                  <li>"真实+虚拟"双轨教学</li>
                  <li>近40年办学积淀（1984年建）</li>
                  <li>坐拥全国最大无烟煤生产基地</li>
                </ul>
              </div>

              <div class="data-section">
                <div class="section-header">
                  <i class="fas fa-chart-bar icon-blue"></i>
                  <h3>数据展示</h3>
                </div>
                <div class="data-cards">
                  <div class="data-card">
                    <p class="data-value">3600㎡</p>
                    <p class="data-label">占地面积</p>
                    <p class="data-note">相当于2个操场</p>
                  </div>
                  <div class="data-card">
                    <p class="data-value">800m</p>
                    <p class="data-label">巷道总长</p>
                    <p class="data-note">可服务多种矿业</p>
                  </div>
                  <div class="data-card">
                    <p class="data-value">1984年</p>
                    <p class="data-label">建成时间</p>
                    <p class="data-note">持续升级中</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="honor-section">
              <div class="section-header">
                <i class="fas fa-certificate icon-blue"></i>
                <h3>荣誉资质</h3>
              </div>
              <ul class="honor-list">
                <li>2008年获评国家煤矿安全实训基地</li>
                <li>2006年评为山西省煤矿开采技术专业示范实训基地</li>
                <li>2013年起相继获批省级实验教学中心、市级重点实验室</li>
              </ul>
            </div>
          </div>

          <div class="base-right">
            <div class="base-image-wrapper">
              <img src="@/assets/矿井实践.png" alt="矿井实景" />
              <div class="image-button">走进实体矿井基地</div>
            </div>
          </div>
        </div>
      </div>

      <div class="section-card sim-card">
        <div class="sim-header">
          <p class="sim-title">虚拟仿真实验</p>
          <p class="sim-subtitle">沉浸式 · 零风险 · 可重复</p>
        </div>
        
        <div class="sim-layout">
          <div class="sim-text">
            <p class="sim-desc">
              本虚拟仿真实验模块基于三维建模与交互技术，1:1还原矿井真实环境。学生可在虚拟场景中完成设备操作、流程演练、应急处理等训练，突破时间、空间与安全限制。系统提供实时操作反馈与考核评价，是理论知识与实践技能融合的重要桥梁。
            </p>
            <div class="core-advantages">
              <h3>核心优势</h3>
              <ul>
                <li>• 安全无风险：高危操作虚拟演练</li>
                <li>• 场景全覆盖：采掘机运通全流程</li>
                <li>• 操作可重复：无限次练习与纠错</li>
                <li>• 数据可追溯：学习过程全程记录</li>
              </ul>
            </div>
          </div>

          <div class="sim-player">
            <div class="player-container">
              <div class="screen-with-controls">
                <div class="player-screen">
                  <img src="@/assets/虚拟仿真实验.png" alt="仿真界面" />
                </div>
                <div class="player-controls">
                  <button class="control-btn play-btn"><i class="fas fa-play"></i></button>
                  <button class="control-btn pause-btn"><i class="fas fa-pause"></i></button>
                </div>
              </div>
              <div class="player-actions">
                <button class="btn-primary main-btn">点击体验虚拟仿真</button>
                <div class="sub-actions">
                  <button class="btn-secondary">查看操作指南</button>
                  <button class="btn-secondary">常见问题</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section-card">
        <p class="section-title">专业技能实训</p>
        
        <div v-for="cat in trainingData" :key="cat.title" class="skill-category">
          <div class="category-header">
            <span class="cat-badge" :style="{ backgroundColor: cat.color }">{{ cat.count }}</span>
            <h3>{{ cat.title }}（{{ cat.count }}个）</h3>
          </div>
          
          <div class="skill-grid">
            <div v-for="n in cat.count" :key="n" class="skill-item">
              <h4>{{ cat.placeholderName }}实训</h4>
              <div class="item-tags">
                <span class="tag">12课时</span>
                <span class="tag">中等难度</span>
                <span class="tag">1学分</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="ai-assistant" :class="{ active: isAiOpen }">
      <div class="ai-container">
        <div class="ai-header">
          <div class="ai-title">
            <img src="@/assets/ai.png" class="ai-small-avatar" />
            <h3>AI 答疑中心</h3>
          </div>
          <button class="ai-close" @click="closeAiAssistant">×</button>
        </div>
        <div class="ai-messages">
          <div class="ai-message">
            <div class="ai-message-content">
              <p>嗨，我是 <strong>AI小矿</strong>，你的智能采矿学习助手！</p>
              <p>有什么问题都可以问我，我会尽力为你解答。</p>
            </div>
          </div>
        </div>
        <div class="ai-quick-questions">
          <p class="quick-questions-title">常见问题</p>
          <div class="quick-questions-list">
            <button class="quick-question-btn" @click="handleQuickQuestion('如何使用虚拟仿真系统？')">如何使用虚拟仿真系统？</button>
            <button class="quick-question-btn" @click="handleQuickQuestion('实体矿井基地开放时间？')">实体矿井基地开放时间？</button>
            <button class="quick-question-btn" @click="handleQuickQuestion('技能实训如何报名？')">技能实训如何报名？</button>
            <button class="quick-question-btn" @click="handleQuickQuestion('如何获取实训成绩？')">如何获取实训成绩？</button>
          </div>
        </div>
        <div class="ai-input-area">
          <input type="text" class="ai-input" placeholder="输入你的问题..." />
          <button class="ai-send-btn">发送</button>
        </div>
      </div>
      <div class="ai-toggle" @click="toggleAiAssistant">
        <img src="@/assets/ai.png" class="ai-avatar" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import NavigationBar from '@/components/NavigationBar.vue'

onMounted(() => {
  document.title = "采矿工程"
})

const trainingData = [
  { title: '矿井通风与安全', count: 8, color: '#4a90e2', placeholderName: '通风网络解算' },
  { title: '井巷工程', count: 6, color: '#50e3c2', placeholderName: '井巷施工工艺' },
  { title: '采掘机械', count: 7, color: '#f5a623', placeholderName: '采煤机维护' }
];

const isAiOpen = ref(false)

const toggleAiAssistant = () => {
  isAiOpen.value = !isAiOpen.value
}

const closeAiAssistant = () => {
  isAiOpen.value = false
}

const handleQuickQuestion = (question: string) => {
  console.log('Quick question:', question)
  // 这里可以添加处理快速问题的逻辑
}
</script>

<style scoped>
/* 基础容器 */
.practice-training {
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

.section-title { font-size: 42px; font-weight: bold; margin-bottom: 30px; color: #1d2129; }

/* 实体基地布局 */
.base-layout { display: flex; gap: 40px; align-items: flex-start; }
.base-left { flex: 1; }
.base-right { flex: 1; }

/* 顶部行布局 */
.top-row { display: flex; gap: 30px; margin-bottom: 30px; }
.feature-section, .data-section { flex: 0 0 1; }
.data-section{
  margin-left: 50px;
}
.honor-section { margin-bottom: 30px; }

/* 特色亮点 */
.section-header { display: flex; align-items: center; gap: 10px; margin-bottom: 15px; }
.section-header h3 { font-size: 22px; margin: 0; color: #2d3748; font-weight: bold; }
.icon-blue { color: #447fd1; font-size: 20px; }

.feature-list, .honor-list { list-style: none; padding: 0; margin: 0; }
.feature-list li, .honor-list li { margin: 12px 0; color: #4e5969; font-size: 16px; line-height: 1.5; }

/* 数据展示 */
.data-cards { display: flex; gap: 20px; margin-top: 20px; }
.data-card { width: 130px;;background: #f8fafc; border-radius: 12px; padding: 20px; flex: 1; text-align: center; border: 1px solid #e2e8f0; }
.data-value { font-size: 24px; font-weight: bold; color: #447fd1; margin: 0; }
.data-label { font-size: 14px; color: #4e5969; margin: 8px 0 4px 0; font-weight: 600; }
.data-note { font-size: 12px; color: #94a3b8; margin: 0; }

/* 图片区域 */
.base-image-wrapper { height: 370px;;position: relative; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
.base-image-wrapper img { width: 100%; height: 100%; object-fit: cover; min-height: 400px; }
.image-button { position: absolute; bottom: 30px; right: 30px; background: #447fd1; color: white; padding: 12px 24px; border-radius: 30px; font-weight: 600; cursor: pointer; transition: 0.3s; }
.image-button:hover { background: #3a6fc9; transform: translateY(-2px); }

/* 仿真实验布局 */
.sim-card { background: #2d3748; color: #cbd5e0; border-radius: 35px; }
.sim-header { display: flex; align-items: center; gap: 20px; margin-bottom: 30px; }
.sim-title { font-size: 42px; font-weight: bold; margin: 0; color: white; }
.sim-subtitle { font-size: 20px; color: #a0aec0; margin: 0; }

.sim-layout { display: flex; gap: 50px; align-items: flex-start; }
.sim-text { flex: 1; }
.sim-desc { font-size: 16px; line-height: 1.8; margin-bottom: 30px; color: #e2e8f0; }
.core-advantages h3 { color: #63b3ed; font-size: 22px; margin-bottom: 15px; font-weight: bold; }
.core-advantages ul { list-style: none; padding: 0; margin: 0; }
.core-advantages li { margin: 10px 0; color: #e2e8f0; font-size: 16px; }

.sim-player { flex: 1.2; }
.player-container { display: flex; gap: 20px; align-items: flex-start; }
.screen-with-controls { display: flex; flex-direction: column; gap: 10px; flex: 1; }
.player-screen { flex: 1; background: #1a202c; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.3); }
.player-screen img { width: 100%; height: auto; min-height: 300px; }
.player-controls { display: flex; gap: 15px; justify-content: center; }
.control-btn { background: #4a5568; border: none; color: white; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: 0.3s; }
.control-btn:hover { background: #2d3748; }

.player-actions { flex: 0 0 auto; display: flex; flex-direction: column; gap: 15px; align-items: center; justify-content: center; height: 100%;margin-top: 100px; }
.btn-primary.main-btn { background: #4299e1; color: white; border: none; padding: 12px 30px; border-radius: 8px; font-size: 16px; font-weight: 600; cursor: pointer; transition: 0.3s; }
.btn-primary.main-btn:hover { background: #3182ce; transform: translateY(-2px); }
.sub-actions { display: flex; gap: 10px; }
.btn-secondary { background: #4a5568; color: white; border: none; padding: 8px 20px; border-radius: 6px; font-size: 14px; cursor: pointer; transition: 0.3s; text-align: center; }
.btn-secondary:hover { background: #2d3748; }

/* 技能实训类别 */
.skill-category { margin-bottom: 40px; }
.category-header { display: flex; align-items: center; gap: 15px; margin-bottom: 20px; }
.cat-badge { width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; }
.category-header h3 { font-size: 24px; margin: 0; color: #2d3748; }

.skill-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; }
.skill-item { background: white; padding: 25px; border-radius: 12px; border: 1px solid #edf2f7; transition: 0.3s; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
.skill-item:hover { transform: translateY(-5px); box-shadow: 0 10px 20px rgba(0,0,0,0.08); }
.skill-item h4 { margin: 0 0 15px 0; color: #2d3748; font-size: 18px; }
.item-tags { display: flex; gap: 10px; }
.tag { background: #f7fafc; color: #718096; font-size: 12px; padding: 4px 8px; border-radius: 4px; }

/* AI 答疑中心 */
.ai-assistant { position: fixed; right: 50px; bottom: 50px; z-index: 1000; }
.ai-container { background: white; border-radius: 20px; box-shadow: 0 10px 40px rgba(0,0,0,0.15); width: 350px; max-height: 500px; display: flex; flex-direction: column; overflow: hidden; transform: translateY(100%); opacity: 0; transition: all 0.3s ease; }
.ai-assistant.active .ai-container { transform: translateY(0); opacity: 1; }

.ai-header { background: #447fd1; color: white; padding: 20px; display: flex; justify-content: space-between; align-items: center; }
.ai-title { display: flex; align-items: center; gap: 10px; }
.ai-small-avatar { width: 30px; height: 30px; border-radius: 50%; }
.ai-title h3 { margin: 0; font-size: 18px; font-weight: bold; }
.ai-close { background: none; border: none; color: white; font-size: 24px; cursor: pointer; padding: 0; width: 30px; height: 30px; display: flex; align-items: center; justify-content: center; border-radius: 50%; transition: 0.3s; }
.ai-close:hover { background: rgba(255,255,255,0.2); }

.ai-messages { padding: 20px; flex: 1; overflow-y: auto; border-bottom: 1px solid #e2e8f0; }
.ai-message { margin-bottom: 20px; }
.ai-message-content { background: #f1f5f9; padding: 15px; border-radius: 18px 18px 18px 4px; color: #4e5969; line-height: 1.5; }
.ai-message-content p { margin: 5px 0; }

.ai-quick-questions { padding: 20px; border-bottom: 1px solid #e2e8f0; }
.quick-questions-title { font-size: 14px; font-weight: bold; color: #4e5969; margin: 0 0 10px 0; }
.quick-questions-list { display: flex; flex-direction: column; gap: 8px; }
.quick-question-btn { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 10px 15px; text-align: left; font-size: 14px; color: #4e5969; cursor: pointer; transition: 0.3s; }
.quick-question-btn:hover { background: #e2e8f0; transform: translateY(-2px); }

.ai-input-area { padding: 20px; display: flex; gap: 10px; align-items: center; }
.ai-input { flex: 1; border: 1px solid #e2e8f0; border-radius: 20px; padding: 12px 15px; font-size: 14px; outline: none; transition: 0.3s; }
.ai-input:focus { border-color: #447fd1; box-shadow: 0 0 0 2px rgba(68, 127, 209, 0.1); }
.ai-send-btn { background: #447fd1; color: white; border: none; border-radius: 50%; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: 0.3s; }
.ai-send-btn:hover { background: #3a6fc9; transform: translateY(-2px); }

.ai-toggle { position: relative; cursor: pointer; }
.ai-avatar { width: 70px; height: 70px; border-radius: 50%; box-shadow: 0 4px 16px rgba(0,0,0,0.15); transition: 0.3s; }
.ai-toggle:hover .ai-avatar { transform: scale(1.05); box-shadow: 0 6px 20px rgba(0,0,0,0.2); }

/* 响应式调整 */
@media (max-width: 768px) {
  .ai-container { width: 300px; }
  .ai-assistant { right: 20px; bottom: 20px; }
}
</style>