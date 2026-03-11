<template>
  <div class="talent-cultivation" data-name="人才培养">
    <NavigationBar />
    <div class="banner">
      <!-- Top Navigation -->
      


      <div class="banner-content">
        <p class="banner-title">人才培养体系</p>
        <p class="banner-subtitle">Talent Development System</p>
        
        <div class="stats-group">
          <div class="stat-card">
            <p class="stat-value">5</p>
            <p class="stat-label">培养目标</p>
          </div>
          <div class="stat-card">
            <p class="stat-value">12</p>
            <p class="stat-label">培养规格</p>
          </div>
        </div>
      </div>
    </div>

    <div class="content-container">
      <div class="section-card">
        <p class="section-title">培养目标</p>
        <div class="training-goals-grid">
          <div 
            v-for="(goal, index) in trainingGoals" 
            :key="index"
            :class="[goal.bgClass, 'goal-card']"
          >
            <div class="goal-header">
              <span class="goal-number">{{ String(index + 1).padStart(2, '0') }}</span>
              <h3 class="goal-card-title">{{ goal.title }}</h3>
              <div class="requirements-badge">{{ goal.requirements }}个毕业要求</div>
            </div>
            <div class="goal-content-box">
              <p class="goal-description">{{ goal.description }}</p>
            </div>
          </div>
        </div>

        <p class="section-title mt-100">专业毕业要求</p>
        <div class="requirements-layout">
          <div class="requirements-sidebar">
            <div 
              v-for="(req, index) in graduationRequirements" 
              :key="index"
              :class="['req-nav-item', selectedRequirement === index ? 'active' : '']"
              @click="selectRequirement(index)"
            >
              <span class="req-nav-title">{{ req.title }}</span>
              <span class="req-nav-num">{{ String(index + 1).padStart(2, '0') }}</span>
            </div>
          </div>

          <div class="requirement-detail-panel">
            <div class="detail-white-box">
              <div v-if="selectedRequirement === 0" class="detail-text-content">
                <p>1.1 能够将数学、自然科学、工程基础和相关专业知识用于采矿及相关工程问题的表述。</p>
                <p>1.2 能够针对具体的采矿及相关工程问题构建合适的数学关系，建立数学模型，并用恰当的方法求解。</p>
                <p>1.3 能够将数学、自然科学、工程基础和相关专业知识推演、分析和解决采矿及相关工程问题。</p>
                <p>1.4 能够将数学、自然科学、工程基础和相关专业知识用于采矿及相关工程问题解决方案的比较与综合。</p>
              </div>
              <div v-else class="placeholder-text">此处显示 {{ graduationRequirements[selectedRequirement].title }} 的详细指标点内容...</div>
            </div>
            <div class="detail-info-side">
              <h2 class="detail-title">{{ graduationRequirements[selectedRequirement].title }}</h2>
              <p class="detail-desc">掌握从事采矿工程专业所需的数学、自然科学、工程基础和专业知识，并能将其用于解决采矿工程及其相关领域的复杂工程问题</p>
              <div class="detail-footer-badges">
                <span>1个培养目标</span>
                <span>15个课程</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section-card">
        <p class="section-title">毕业要求与培养目标支撑矩阵</p>
        <div class="matrix-wrapper">
          <table class="matrix-table">
            <thead>
              <tr>
                <th class="col-head-first">毕业要求类别</th>
                <th v-for="(goal, index) in trainingGoals" :key="goal.title" class="col-head">
                  {{ goal.title }}<br>
                  <span class="goal-subtitle">培养目标{{ index + 1 }}</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, rowIndex) in matrixData" :key="rowIndex">
                <td class="row-head-title">
                  {{ row.requirement }}<br>
                  <span class="requirement-subtitle">毕业要求{{ rowIndex + 1 }}</span>
                </td>
                <td 
                  v-for="(cell, cellIndex) in row.values" 
                  :key="cellIndex"
                  :class="['matrix-cell', cell === 'H' ? 'cell-h' : cell === 'M' ? 'cell-m' : '']"
                >
                  {{ cell }}
                </td>
              </tr>
            </tbody>
          </table>
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
import { ref, onMounted } from 'vue'
import NavigationBar from '@/components/NavigationBar.vue'

onMounted(() => {
  document.title = "采矿工程"
})

const selectedRequirement = ref(0)

const trainingGoals = [
  { title: '立德树人与责任担当', bgClass: 'bg-blue-1', requirements: 4, description: '具有较高的社会责任感、良好的职业道德和人文科学素养。能够在采矿工程及相关领域实践中综合考虑社会、健康、安全、法律以及经济可持续发展的影响。' },
  { title: '专业核心与工程实践', bgClass: 'bg-blue-2', requirements: 3, description: '能够运用采矿工程专业及其相关领域工程基础知识与专业知识，能够胜任煤矿采掘、机电、运输、提升、通风和监控等方面的技术与管理工作。' },
  { title: '创新思维与问题解决', bgClass: 'bg-red-1', requirements: 4, description: '具有创新能力，能够独立发现、研究与解决现实中复杂采矿工程问题的能力，成为所在工作领域的专业技术骨干。' },
  { title: '团队协作与管理能力', bgClass: 'bg-blue-2', requirements: 3, description: '在工作中具有团队合作精神、沟通交流能力、组织协调及管理能力，能够成为项目负责人或管理骨干。' },
  { title: '终身学习与国际视野', bgClass: 'bg-blue-1', requirements: 1, description: '具有自主学习和终身学习的意识和能力、具有国际视野，能够通过继续教育或其他渠道进行知识更新。' }
]

const graduationRequirements = [
  { title: '工程知识' }, { title: '问题分析' }, { title: '设计开发解决方案' },
  { title: '研究' }, { title: '使用现代工具' }, { title: '工程与社会' },
  { title: '环境和可持续发展' }, { title: '职业规范' }, { title: '个人和团队' },
  { title: '沟通' }, { title: '项目管理' }, { title: '终身学习' }
]

const matrixData = [
  { requirement: '工程知识', values: ['', '', 'M', '', ''] },
  { requirement: '问题分析', values: ['', '', 'M', '', ''] },
  { requirement: '设计/开发解决方案', values: ['M', 'M', 'H', '', ''] },
  { requirement: '研究', values: ['', '', 'M', '', ''] },
  { requirement: '使用现代工具', values: ['', 'M', '', '', ''] },
  { requirement: '工程与社会', values: ['M', '', '', '', ''] },
  { requirement: '环境和可持续发展', values: ['M', '', '', '', ''] },
  { requirement: '职业规范', values: ['M', '', '', '', ''] }
]

const selectRequirement = (index: number) => {
  selectedRequirement.value = index
}
</script>

<style scoped>
/* 基础容器 */
.talent-cultivation {
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

/* Goal Cards Grid */
.training-goals-grid { display: flex; gap: 20px; }
.goal-card { flex: 1; height: 310px; border-radius: 16px; position: relative; color: white; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
.bg-blue-1 { background-color: #1a73e8; border: 1px solid #1a73e8;}
.bg-blue-2 { background-color: #5c59e8;border: 1px solid #5c59e8;}
.bg-red-1 { background-color: #ac0808;border: 1px solid #ac0808;}

.goal-header { position: relative; padding: 20px; display: flex; flex-direction: column; height: 120px; }
.goal-number { font-size: 100px; font-weight: 900; opacity: 0.3; line-height: 1; position: absolute; top: 10px; left: 5px; z-index: 1; }
.goal-card-title { font-size: 28px; font-weight: bold; position: relative; z-index: 2; margin-bottom: 10px ; text-align: center; }
.requirements-badge { background: rgba(255,255,255,0.3); border-radius: 20px; padding: 6px 16px; font-size: 14px; align-self: flex-end; position: relative; z-index: 2; }

.goal-content-box {
  background: white; color: #5D5D6C; position: absolute; bottom: 0; left: 0; right: 0; height: 180px;
  border-radius: 20px 20px 0 0; padding: 24px; font-size: 16px; line-height: 1.7;
  box-shadow: 0 -2px 10px rgba(0,0,0,0.05);
}

/* Requirements UI */
.mt-100 { margin-top: 80px; }
.requirements-layout { display: flex; gap: 30px; height: 640px; }
.requirements-sidebar { width: 300px; display: flex; flex-direction: column; gap: 4px; overflow-y: hidden; }

.req-nav-item {
  height: 50px; border-radius: 35px; background: #D7D7DB; display: flex; align-items: center;
  padding: 0 30px; cursor: pointer; transition: all 0.3s; position: relative;
}
.req-nav-item.active { background: #447fd1; color: white; }
.req-nav-title { font-size: 20px; font-weight: bold; z-index: 2; }
.req-nav-num { position: absolute; right: 5px;top:-5px; font-size: 50px; font-weight: 550; background: linear-gradient(to bottom, rgba(255,255,255,1), rgba(255,255,255,0)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }

/* Detail Panel */
.requirement-detail-panel { flex: 1; background: #447fd1; border-radius: 30px; display: flex; padding: 15px; gap: 20px; }
.detail-white-box { flex: 2.2; background: rgba(255,255,255,0.98); border-radius: 25px; padding: 50px; color: #4e5969; font-size: 20px; line-height: 2; }
.detail-info-side { flex: 1; color: white; padding: 30px 10px; }
.detail-title { font-size: 40px; font-weight: bold; margin-bottom: 25px; }
.detail-desc { font-size: 20px; opacity: 0.9; line-height: 1.6; }
.detail-footer-badges { display: flex; gap: 12px; margin-top: 320px; }
.detail-footer-badges span { background: rgba(255,255,255,0.3); padding: 6px 20px; border-radius: 25px; font-size: 18px; }

/* Matrix Table */
.matrix-wrapper { border: 2px solid #447fd1; border-radius: 30px; overflow: hidden; margin-top: 20px; width: 90%; margin-left: auto; margin-right: auto; }
.matrix-table { width: 100%; border-collapse: collapse; }
.col-head-first { background: #447fd1; color: white; padding: 15px; text-align: left; font-size: 16px; width: 180px; }
.col-head { background: #447fd1; color: white; padding: 12px; font-size: 14px; border-left: 1px solid rgba(255,255,255,0.2); }
.row-head-title { background: #e8f0fa; color: #1d2129; font-weight: bold; padding: 12px; border-bottom: 1px solid #d0deee; font-size: 14px; width: 180px; }
.matrix-cell { text-align: center; border-bottom: 1px solid #f2f3f5; border-left: 1px solid #f2f3f5; font-size: 20px; font-weight: bold; width: 15%; height: 40px; }
.goal-subtitle { font-size: 12px; font-weight: normal; margin-top: 5px; display: block; }
.requirement-subtitle { font-size: 12px; font-weight: normal; margin-top: 5px; display: block; }
.cell-m { background: #fff7e6; color: #ff7d00; }
.cell-h { background: #fff1f0; color: #f53f3f; }

/* AI Assistant */
.ai-float { position: fixed; right: 50px; bottom: 50px; display: flex; align-items: center; gap: 15px; z-index: 100; }
.ai-msg-bubble { 
  background: #e5e6eb; padding: 15px 25px; border-radius: 18px; font-size: 15px; color: #1d2129; 
  box-shadow: 0 4px 16px rgba(0,0,0,0.1); line-height: 1.5;
}
.ai-icon-container { width: 70px; height: 70px;  border-radius: 50%; display: flex; align-items: center; justify-content: center; overflow: hidden; }
.ai-avatar { width: 70px; height: 70px; }
</style>