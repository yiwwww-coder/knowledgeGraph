<template>
  <div class="course-detail-container">
    <div class="detail-banner">
      <div class="banner-mask"></div>
      
      <div class="back-btn" @click="goBack">
        <span class="arrow">←</span>
      </div>

      <div class="banner-main-info">
        <h1 class="course-name-large">采掘机械</h1>
        
        <div class="badge-row">
          <div class="glass-badge">总学时:32  理论:24  实验:8</div>
        </div>
        <div class="badge-row mt-15">
          <div class="glass-badge">2学分</div>
          <div class="glass-badge">必修</div>
        </div>
      </div>
    </div>

    <nav class="sub-navigation">
      <div class="nav-capsule">
        <button 
          v-for="(item, index) in menuItems" 
          :key="index"
          :class="{ 'active': activeMenu === index }"
          @click="scrollToSection(index)"
        >
          {{ item }}
        </button>
      </div>
    </nav>

    <div class="content-section" id="topology">
      <h2 class="section-title">课程拓扑链</h2>
      <div class="topology-wrapper">
        <div class="topo-column">
          <div class="semester-label">第四学期</div>
          <div class="topo-card pre-course">
            <div class="card-body">
              <p class="c-title">煤矿地质学</p>
              <div class="c-tags">
                <span class="tag-blue">专业必修课</span>
                <span class="tag-gray">2学分</span>
              </div>
            </div>
          </div>
        </div>

        <div class="topo-column">
          <div class="semester-label">第五学期</div>
          <div class="topo-card current-course">
            <div class="card-body">
              <p class="c-title">采掘机械</p>
              <div class="c-tags">
                <span class="tag-green">专业必修课</span>
                <span class="tag-gray">2学分</span>
              </div>
            </div>
          </div>
        </div>

        <div class="topo-column">
          <div class="semester-label">第六学期</div>
          <div class="topo-card post-course">
            <div class="card-body">
              <p class="c-title">采矿学1</p>
              <div class="c-tags">
                <span class="tag-blue">专业必修课</span>
                <span class="tag-gray">4学分</span>
              </div>
            </div>
          </div>
          <div class="topo-card post-course">
            <div class="card-body">
              <p class="c-title">井巷工程</p>
              <div class="c-tags">
                <span class="tag-blue">专业必修课</span>
                <span class="tag-gray">3学分</span>
              </div>
            </div>
          </div>
        </div>

        <div class="topo-column">
          <div class="semester-label">第七学期</div>
          <div class="topo-card future-course">
            <div class="card-body">
              <p class="c-title">采矿学2</p>
              <div class="c-tags">
                <span class="tag-pink">专业必修课</span>
                <span class="tag-gray">3学分</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="info-grid" id="intro">
      <div class="info-card-beige intro-box">
        <h2 class="section-title">课程简介</h2>
        <p class="intro-content">
          《采掘机械》是采矿工程专业第五学期开设的专业核心必修课（2学分，32学时），其中理论教学24学时、实验教学8学时。本课程系统讲授采掘机械的工作原理、结构组成、性能参数、操作维护等内容，培养学生掌握采掘机械的基本理论和工程应用能力，为学习后续专业课程和从事采矿工程实践奠定扎实基础。
        </p>
      </div>

      <div class="info-card-beige objectives-box" id="objectives">
        <h2 class="section-title">课程目标</h2>
        <div class="obj-item">
          <span class="check-icon">✓</span>
          <div>
            <strong>知识目标：</strong>
            <p>使学生系统掌握采掘机械的工作原理、结构组成、性能参数、选型原则等核心理论知识。</p>
          </div>
        </div>
        <div class="obj-item">
          <span class="check-icon">✓</span>
          <div>
            <strong>能力目标：</strong>
            <p>培养学生具备采掘机械操作、维护、故障诊断与排除等实践能力，能够运用所学知识分析解决实际工程问题。</p>
          </div>
        </div>
        <div class="obj-item">
          <span class="check-icon">✓</span>
          <div>
            <strong>素质目标：</strong>
            <p>引导学生树立严谨求实、精益求精的科学态度，培养吃苦耐劳、开拓创新的工程精神，增强社会责任感与使命意识，实现知识传授与价值引领的有机统一。</p>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section graph-section" id="graph">
      <h2 class="section-title text-white">知识图谱</h2>
      <div class="graph-placeholder">
          <img src="@/assets/知识图谱.png" alt="知识图谱" />
        </div>
    </div>

    <div class="content-section" id="recommend">
      <h2 class="section-title">AI推荐课程</h2>
      <div class="recommend-row">
        <div class="mini-course-card">
          <div class="mini-thumb">
            <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=mining%20machinery%20underground%20coal%20mine&image_size=landscape_4_3" />
            <div class="kg-mini-badge">知识图谱</div>
            <div class="mini-overlay">
              <p>采矿机械</p>
              <span>必修 | 3学分</span>
            </div>
          </div>
        </div>
        <div class="mini-course-card">
          <div class="mini-thumb">
            <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=mining%20shaft%20engineering%20underground%20construction&image_size=landscape_4_3" />
            <div class="kg-mini-badge">知识图谱</div>
            <div class="mini-overlay">
              <p>采矿系统工程</p>
              <span>必修 | 2学分</span>
            </div>
          </div>
        </div>
        <div class="mini-course-card">
          <div class="mini-thumb">
            <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=mining%20system%20engineering%20technical%20drawings&image_size=landscape_4_3" />
            <div class="kg-mini-badge">知识图谱</div>
            <div class="mini-overlay">
              <p>采矿系统工程</p>
              <span>必修 | 2学分</span>
            </div>
          </div>
        </div>
        <div class="mini-course-card">
          <div class="mini-thumb">
            <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=mining%20system%20engineering%20computer%20modeling&image_size=landscape_4_3" />
            <div class="kg-mini-badge">知识图谱</div>
            <div class="mini-overlay">
              <p>采矿系统工程</p>
              <span>必修 | 2学分</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

onMounted(() => {
  document.title = "采矿工程"
});

const activeMenu = ref(0);
const menuItems = ['课程拓扑链', '课程简介', '课程目标', '知识图谱', 'AI推荐课程'];
const sections = ['topology', 'intro', 'objectives', 'graph', 'recommend'];

const goBack = () => window.history.back();

const scrollToSection = (index) => {
  activeMenu.value = index;
  const sectionId = sections[index];
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<style scoped>
.course-detail-container {
  background-color: #f6f7f9;
  min-height: 100vh;
  padding: 30px 60px;
  font-family: "PingFang SC", sans-serif;
}

/* 导航栏 */
.sub-navigation {
  display: flex;
  justify-content: center;
  margin-top: 32px;
  position: relative;
  z-index: 10;
}
.nav-capsule {
  background: rgba(255,255,255,0.9);
  padding: 10px;
  border-radius: 50px;
  display: flex;
  gap: 10px;
  box-shadow: 0 15px 35px rgba(0,0,0,0.1);
  backdrop-filter: blur(15px);
  border: 1px solid white;
}
.nav-capsule button {
  border: none;
  background: transparent;
  padding: 12px 35px;
  border-radius: 40px;
  font-size: 18px;
  color: #666;
  font-weight: 500;
  transition: all 0.3s;
  cursor: pointer;
}
.nav-capsule button:hover {
  background: rgba(0,0,0,0.05);
}
.nav-capsule button.active {
  background: #000;
  color: white;
}

/* Banner 样式 */
.detail-banner {
  height: 480px;
  border-radius: 40px;
  background-image: url('@/assets/采掘机械.png');
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
  color: white;
  padding: 100px 60px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
}

.banner-mask {
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, rgba(0,0,0,0.45), rgba(0,0,0,0.4));
}

.back-btn {
  position: absolute;
  top: 40px;
  left: 40px;
  width: 120px;
  height: 60px;
  background: rgba(0,0,0,0.3);
  border: 1px solid rgba(255,255,255,0.4);
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
}
.back-btn .arrow { font-size: 30px; }

.course-name-large { font-size: 72px; font-weight: bold; margin-bottom: 140px; position: relative; }

.badge-row { display: flex; gap: 15px; position: relative; }
.mt-15 { margin-top: 15px; }
.glass-badge {
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(10px);
  padding: 10px 30px;
  border-radius: 25px;
  font-size: 20px;
  border: 1px solid rgba(255,255,255,0.2);
}

/* 拓扑链样式 */
.content-section {
  background: white;
  border-radius: 40px;
  padding: 40px;
  margin-top: 30px;
}
.section-title { font-size: 32px; font-weight: bold; margin-bottom: 30px; color: #333; }

.topology-wrapper {
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  position: relative;
}

.topology-wrapper::before {
  content: '';
  position: absolute;
  top: 60px;
  left: 5%;
  right: 5%;
  height: 2px;
  background: #e0e0e0;
  z-index: 0;
}

.topo-column {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  position: relative;
  z-index: 1;
}

.semester-label {
  background: #f0e6e0;
  color: #8c6d59;
  padding: 5px 30px;
  border-radius: 15px;
  font-weight: bold;
  margin-bottom: 10px;
}

.topo-card {
  width: 280px;
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 15px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  position: relative;
}

.pre-course {
  border-top: 3px solid #5bb4ff;
}

.current-course {
  border-top: 3px solid #28a745;
  transform: translateY(-10px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.post-course {
  border-top: 3px solid #5bb4ff;
}

.future-course {
  border-top: 3px solid #ff4d6d;
}

.c-title { font-weight: bold; font-size: 18px; margin: 0 0 10px 0; }
.c-tags { display: flex; gap: 8px; justify-content: center; flex-wrap: wrap; }
.c-tags span { font-size: 12px; padding: 3px 10px; border-radius: 12px; }
.tag-blue { background: #e1f0ff; color: #007bff; }
.tag-green { background: #dfffe5; color: #28a745; }
.tag-pink { background: #ffe1e6; color: #ff4d6d; }
.tag-gray { background: #f0f0f0; color: #999; }

/* 拓扑连线 */
.topo-column:nth-child(1) .topo-card::after {
  content: '';
  position: absolute;
  right: -40px;
  top: 50%;
  width: 40px;
  height: 2px;
  background: #5bb4ff;
  z-index: -1;
}

.topo-column:nth-child(2) .topo-card::after {
  content: '';
  position: absolute;
  right: -40px;
  top: 50%;
  width: 40px;
  height: 2px;
  background: #5bb4ff;
  z-index: -1;
}

.topo-column:nth-child(2) .topo-card::before {
  content: '前修课程';
  position: absolute;
  left: -80px;
  top: -30px;
  color: #5bb4ff;
  font-size: 14px;
}

.topo-column:nth-child(3) .topo-card:nth-child(2)::after {
  content: '后续课程';
  position: absolute;
  right: -80px;
  top: -30px;
  color: #ff4d6d;
  font-size: 14px;
}

.topo-column:nth-child(3) .topo-card:nth-child(2)::before {
  content: '';
  position: absolute;
  right: -40px;
  top: 50%;
  width: 40px;
  height: 2px;
  background: #ff4d6d;
  z-index: -1;
}

/* 简介与目标 */
.info-grid { display: grid; grid-template-columns: 1fr 1.2fr; gap: 30px; margin-top: 30px; }
.info-card-beige {
  background: #fdf8f5;
  border-radius: 40px;
  padding: 40px;
}
.intro-content { font-size: 20px; line-height: 1.8; color: #555; }

.obj-item { display: flex; gap: 20px; margin-bottom: 25px; }
.check-icon {
  width: 30px; height: 30px; border: 2px solid #333; border-radius: 50%;
  display: flex; align-items: center; justify-content: center; flex-shrink: 0;
  font-weight: bold;
}
.obj-item p { margin: 5px 0 0; color: #666; font-size: 18px; line-height: 1.6; }

/* 知识图谱 */
.graph-section {
  background: rgba(0, 0, 0, 0.85);
  color: white;
}
.text-white {
  color: white;
}
.graph-placeholder {
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
  margin-top: 20px;
}
.graph-placeholder img {
  width: 100%;
  height: 400px;
  object-fit: cover;
}

/* AI 推荐 */
.recommend-row { display: flex; gap: 25px; overflow-x: auto; padding-bottom: 20px; }
.mini-course-card { flex: 0 0 280px; border-radius: 20px; overflow: hidden; height: 180px; position: relative; }
.mini-thumb img { width: 100%; height: 100%; object-fit: cover; }
.mini-overlay {
  position: absolute; bottom: 0; left: 0; right: 0;
  background: rgba(0,0,0,0.6); padding: 15px;
  color: white;
  text-align: left;
}
.mini-overlay p {
  margin: 0 0 5px 0;
  font-weight: bold;
  font-size: 16px;
}
.mini-overlay span {
  font-size: 12px;
  opacity: 0.9;
}
.kg-mini-badge {
  position: absolute; top: 10px; right: 10px;
  background: #ff871f; color: white; padding: 2px 10px; border-radius: 10px; font-size: 12px;
}

/* 响应式调整 */
@media (max-width: 1200px) {
  .topology-wrapper {
    flex-wrap: wrap;
  }
  .topo-column {
    flex: 0 0 48%;
    margin-bottom: 40px;
  }
  .info-grid {
    grid-template-columns: 1fr;
  }
}
</style>