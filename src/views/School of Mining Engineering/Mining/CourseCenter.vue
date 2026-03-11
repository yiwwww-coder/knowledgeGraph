<template>
  <div class="course-center" data-name="课程中心">
    <NavigationBar />
    <div class="banner">
      <div class="banner-content">
        <p class="banner-title">课程资源中心</p>
        <p class="banner-subtitle">Course Resource Center</p>
        
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

    <div class="main-container">
      <div class="content-card">
        <div class="card-header">
          <h2 class="section-main-title">课程资源库</h2>
          <div class="search-box">
            <input type="text" v-model="searchQuery" placeholder="请输入课程名" />
            <span class="search-icon">🔍</span>
          </div>
        </div>

        <div class="layout-body">
          <aside class="filter-sidebar">
            <div class="filter-group">
              <p class="filter-label">课程类型</p>
              <div 
                v-for="type in courseTypes" :key="type.value"
                :class="['filter-item', selectedType === type.value ? 'active' : '']"
                @click="selectedType = type.value"
              >
                {{ type.label }}
              </div>
            </div>
            <div class="filter-group">
              <p class="filter-label">教学形式</p>
              <div 
                v-for="format in teachingFormats" :key="format.value"
                :class="['filter-item', selectedFormat === format.value ? 'active' : '']"
                @click="selectedFormat = format.value"
              >
                {{ format.label }}
              </div>
            </div>
          </aside>

          <main class="course-list-area">
            <div class="semester-tabs">
              <button 
                v-for="(s, index) in semesters" :key="index"
                :class="['tab-btn', selectedSemester === index ? 'active' : '']"
                @click="selectedSemester = index"
              >
                {{ s }}
              </button>
            </div>

            <div class="course-grid">
              <div v-for="(course, index) in filteredCourses" :key="index" class="course-item-card" @click="navigateToCourse(course)">
                <div class="course-thumb">
                  <img :src="getCourseImage(course.name)" />
                  <div v-if="course.hasKnowledgeGraph" class="kg-badge">
                    <span>⚙️ 知识图谱</span>
                  </div>
                  <div class="course-info-overlay">
                    <p class="c-name">{{ course.name }}</p>
                    <p class="c-meta">{{ course.type }} | {{ course.credits }}学分</p>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      <div class="content-card recommended-section">
        <h2 class="section-main-title">AI推荐课程</h2>
        <div class="recommended-grid">
          <div v-for="(course, index) in courses.slice(0, 4)" :key="index" class="course-item-card" @click="navigateToCourse(course)">
            <div class="course-thumb">
              <img :src="getCourseImage(course.name)" />
              <div v-if="course.hasKnowledgeGraph" class="kg-badge">
                <span>⚙️ 知识图谱</span>
              </div>
              <div class="course-info-overlay">
                <p class="c-name">{{ course.name }}</p>
                <p class="c-meta">{{ course.type }} | {{ course.credits }}学分</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="ai-assistant">
      <div class="ai-bubble">嗨，我是AI小矿，有什么问题都可以问我</div>
      <div class="ai-avatar"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import NavigationBar from '@/components/NavigationBar.vue'

const router = useRouter()

onMounted(() => {
  document.title = "采矿工程"
})

const navigateToCourse = (course: any) => {
  if (course.hasKnowledgeGraph) {
    router.push('/knowledge-graph-course')
  } else {
    router.push('/course-detail')
  }
}

const searchQuery = ref('')
const selectedType = ref('all')
const selectedFormat = ref('all')
const selectedSemester = ref(4) // 默认第五学期

const courseTypes = [
  { label: '全部', value: 'all' },
  { label: '专业必修课', value: 'required' },
  { label: '专业选修课', value: 'elective' }
]

const teachingFormats = [
  { label: '全部', value: 'all' },
  { label: '理论课', value: 'theory' },
  { label: '实践课', value: 'practice' }
]

const semesters = ['第一学期', '第二学期', '第三学期', '第四学期', '第五学期', '第六学期', '第七学期', '第八学期']

const courses = ref([
  { name: '采掘机械', type: '必修', credits: 2, semester: 4, courseType: 'required', format: 'theory', hasKnowledgeGraph: true },
  { name: '岩体力学与工程', type: '必修', credits: 2, semester: 4, courseType: 'required', format: 'theory', hasKnowledgeGraph: false },
  { name: '工程认知实习1', type: '必修', credits: 0.5, semester: 4, courseType: 'required', format: 'practice', hasKnowledgeGraph: false },
  { name: '岩土工程测试技术', type: '选修', credits: 2, semester: 4, courseType: 'elective', format: 'theory', hasKnowledgeGraph: false },
  { name: '二氧化碳封存技术', type: '选修', credits: 2, semester: 4, courseType: 'elective', format: 'theory', hasKnowledgeGraph: false },
  { name: '智能采掘装备', type: '必修', credits: 2, semester: 4, courseType: 'required', format: 'theory', hasKnowledgeGraph: false },
  { name: '矿山电工学', type: '选修', credits: 2, semester: 4, courseType: 'elective', format: 'theory', hasKnowledgeGraph: false },
  { name: '采矿工程专业英语', type: '选修', credits: 2, semester: 4, courseType: 'elective', format: 'theory', hasKnowledgeGraph: false },
  { name: '采矿系统工程', type: '必修', credits: 2, semester: 4, courseType: 'required', format: 'theory', hasKnowledgeGraph: true }
])

const filteredCourses = computed(() => {
  return courses.value.filter(c => {
    const mSearch = c.name.includes(searchQuery.value)
    const mType = selectedType.value === 'all' || c.courseType === selectedType.value
    const mFormat = selectedFormat.value === 'all' || c.format === selectedFormat.value
    return mSearch && mType && mFormat
  })
})

const getCourseImage = (name: string) => {
  // 这里返回您的本地图片路径
  return `https://via.placeholder.com/350x220/333/fff?text=${name}` 
}
</script>

<style scoped>
.course-center {
  background-color: #f4f7fb;
  min-height: 100vh;
  padding: 20px;
  font-family: "PingFang SC", "Microsoft YaHei", sans-serif;
}

/* Banner & Navigation */
.banner {
  background: linear-gradient(135deg, #60b676 0%, #4da25f 100%);
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
.main-container { margin-top: 30px; position: relative; z-index: 10; }
.content-card {
  background: white;
  border-radius: 35px;
  padding: 50px;
  margin-bottom: 30px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.04);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
}
.section-main-title { font-size: 42px; font-weight: bold; margin-bottom: 30px; color: #1d2129; }

.search-box {
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 8px 15px;
  display: flex;
  align-items: center;
  width: 300px;
}
.search-box input { border: none; outline: none; width: 100%; font-size: 16px; }

/* 侧边筛选与列表布局 */
.layout-body { display: flex; gap: 40px; }
.filter-sidebar { width: 220px; }
.filter-group { margin-bottom: 30px; }
.filter-label { font-size: 20px; font-weight: bold; margin-bottom: 15px; }
.filter-item {
  padding: 10px 20px;
  margin-bottom: 8px;
  border-radius: 20px;
  cursor: pointer;
  transition: 0.3s;
  color: #666;
}
.filter-item.active {
  background: rgba(173, 250, 175, 0.4);
  color: #2d6138;
  font-weight: bold;
}

/* 学期切换与网格 */
.course-list-area { flex: 1; }
.semester-tabs {
  display: flex;
  gap: 15px;
  margin-bottom: 30px;
  border-bottom: 1px solid #eee;
  padding-bottom: 15px;
}
.tab-btn {
  border: 1px solid #ddd;
  background: white;
  padding: 8px 20px;
  border-radius: 20px;
  cursor: pointer;
}
.tab-btn.active {
  background: #adefaf;
  border-color: #adefaf;
  color: #2d6138;
}

.course-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
}

/* 课程卡片视觉实现 */
.course-item-card {
  border-radius: 20px;
  overflow: hidden;
  height: 220px;
  position: relative;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.course-item-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.1);
}
.course-thumb { width: 100%; height: 100%; position: relative; }
.course-thumb img { width: 100%; height: 100%; object-fit: cover; }

.kg-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #ff871f;
  color: white;
  padding: 4px 10px;
  border-radius: 15px;
  font-size: 12px;
}

.course-info-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0,0,0,0.5);
  padding: 15px;
  color: white;
}
.c-name { font-size: 20px; font-weight: bold; margin: 0; }
.c-meta { font-size: 14px; opacity: 0.8; margin-top: 5px; }

/* AI 推荐 */
.recommended-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
  margin-top: 30px;
}


/* AI 助手 */
.ai-assistant {
  position: fixed;
  right: 40px;
  bottom: 40px;
  display: flex;
  align-items: center;
  gap: 15px;
  z-index: 100;
}
.ai-bubble {
  background: #eef2f1;
  padding: 12px 20px;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}
.ai-avatar {
  width: 60px; height: 60px;
  background-image: url('@/assets/ai.png');
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>