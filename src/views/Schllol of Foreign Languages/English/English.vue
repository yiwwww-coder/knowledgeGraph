<template>
  <div class="container">
    <!-- <video class="background-video" autoplay loop muted playsinline>
            <source src="./images/背景视频.mp4" type="video/mp4">
        </video> -->
    <img class="background-image" src="@/assets/背景.png" alt="紫韵背景" />
    <div class="video-overlay"></div>
    <!-- 添加遮罩层 -->
    <div class="content-frame">
      <main class="main-content">
        <!-- 头部导航栏 -->
        <header class="header">
          <div class="header-left">
            <img class="university-logo" src="@/assets/外国语学院.png" alt="山西大学外国语学院 logo" />
            <div class="university-name-group">
              <div class="university-name">山西大学外国语学院</div>
              <div class="university-name-en">SCHOOL OF FOREIGN LANGUAGES, SHANXI UNIVERSITY</div>
            </div>
          </div>

          <!-- 导航栏 - 科技感布局 -->
          <nav class="main-nav-dropdown" role="navigation">
            <div class="nav-items-wrapper">
              <!-- 专业星枢 -->
              <div class="dropdown">
                <a href="#" class="dropbtn" @click.prevent>专业概况</a>
                <div class="dropdown-content">
                  <a href="#" @click.prevent>学院发展史</a>
                  <a href="#" @click.prevent>专业介绍</a>
                </div>
              </div>
              <!-- 专业图谱 -->
              <div class="dropdown">
                <a href="#" class="dropbtn" @click.prevent>专业图谱</a>
                <div class="dropdown-content">
                  <a href="#" @click.prevent>知识图谱</a>
                  <a href="#" @click.prevent>能力图谱</a>
                  <a href="#" @click.prevent>问题图谱</a>
                  <a href="#" @click.prevent>思政图谱</a>
                </div>
              </div>
              <!-- 学生画像 -->
              <div class="dropdown">
                <a href="#" class="dropbtn" @click.prevent>学生画像</a>
                <div class="dropdown-content">
                  <a href="#" @click.prevent>学情</a>
                  <a href="#" @click.prevent>生源</a>
                  <a href="#" @click.prevent>问卷调查</a>
                  <a href="#" @click.prevent>学生成果</a>
                  <a href="#" @click.prevent>毕业成绩</a>
                </div>
              </div>
              <!-- 教师图谱 -->
              <div class="dropdown">
                <a href="#" class="dropbtn" @click.prevent>教师图谱</a>
                <div class="dropdown-content">
                  <a href="#" @click.prevent>师资介绍</a>
                  <a href="#" @click.prevent>社会服务</a>
                  <a href="#" @click.prevent>教师成果</a>
                </div>
              </div>
              <!-- 育人成效 -->
              <div class="dropdown">
                <a href="#" class="dropbtn" @click.prevent>育人成效</a>
                <div class="dropdown-content wide-dropdown">
                  <a href="#" @click.prevent>优秀毕业论文</a>
                  <a href="#" @click.prevent>学生社会服务</a>
                  <a href="#" @click.prevent>获奖作品</a>
                  <a href="#" @click.prevent>科研项目</a>
                  <a href="#" @click.prevent>专利申请</a>
                  <a href="#" @click.prevent>证书展示</a>
                  <a href="#" @click.prevent>学科竞赛</a>
                  <a href="#" @click.prevent>在校生</a>
                  <a href="#" @click.prevent>毕业生</a>
                </div>
              </div>
              <!-- 专业特色 -->
              <div class="dropdown">
                <a href="#" class="dropbtn" @click.prevent>专业特色</a>
                <div class="dropdown-content">
                  <a href="#" @click.prevent>国际交流</a>
                  <a href="#" @click.prevent>地域特色</a>
                  <a href="#" @click.prevent>辅修专业</a>
                  <a href="#" @click.prevent>微专业</a>
                </div>
              </div>
              <!-- 专业诊脉 -->
              <div class="dropdown">
                <a href="#" class="dropbtn" @click.prevent>专业诊断</a>
                <div class="dropdown-content">
                  <a href="#" @click.prevent>权限设置</a>
                </div>
              </div>
              <!-- 驾驶舱 -->
              <div class="dropdown">
                <a href="#" class="dropbtn" @click.prevent>驾驶舱</a>
                <div class="dropdown-content">
                  <a href="#" @click.prevent>数据大屏</a>
                  <a href="#" @click.prevent>年度数据汇总</a>
                  <a href="#" @click.prevent>导出报告</a>
                </div>
              </div>
            </div>
          </nav>

          <div class="user-avatar" role="img" aria-label="用户头像">
            <i class="fas fa-user"></i>
          </div>
        </header>

        <!-- 漂浮的气泡 - 新增4个气泡 -->
        <div class="floating-bubbles">
          <div class="quote-bubble-wrapper bubble-1">
            <div
              class="quote-bubble"
              data-en="Master Languages Global, Pursue Knowledge with Action."
              data-zh="掌握全球语言，以行动追求知识"
            >
              <span class="bubble-text">Master Languages Global, Pursue Knowledge with Action.</span>
            </div>
          </div>
          <div class="quote-bubble-wrapper bubble-2">
            <div
              class="quote-bubble"
              data-en="Life hands us ashes, yet some of us turn them into fire."
              data-zh="生活给予我们灰烬，但我们中有人将其燃成火焰"
            >
              <span class="bubble-text">Life hands us ashes, yet some of us turn them into fire.</span>
            </div>
          </div>
          <div class="quote-bubble-wrapper bubble-3">
            <div
              class="quote-bubble"
              data-en="The road may be muddy, but a few of us keep our eyes on the peak."
              data-zh="道路可能泥泞，但我们中有人始终仰望顶峰"
            >
              <span class="bubble-text">The road may be muddy, but a few of us keep our eyes on the peak.</span>
            </div>
          </div>
          <div class="quote-bubble-wrapper bubble-4">
            <div class="quote-bubble" data-en="Language is the road map of a culture." data-zh="语言是文化的路线图">
              <span class="bubble-text">Language is the road map of a culture.</span>
            </div>
          </div>
          <div class="quote-bubble-wrapper bubble-5">
            <div
              class="quote-bubble"
              data-en="To have another language is to possess a second soul."
              data-zh="掌握另一门语言，就是拥有第二个灵魂"
            >
              <span class="bubble-text">To have another language is to possess a second soul.</span>
            </div>
          </div>
          <div class="quote-bubble-wrapper bubble-6">
            <div
              class="quote-bubble"
              data-en="Language is the blood of the soul into which thoughts run."
              data-zh="语言是灵魂的血液，思想在其中流淌"
            >
              <span class="bubble-text">Language is the blood of the soul into which thoughts run.</span>
            </div>
          </div>
        </div>

        <!-- 三栏布局容器 -->
        <div class="three-column-layout">
          <!-- 左侧：数据统计区 - 底部对齐 -->
          <div class="left-stats-area">
            <div class="stats-container">
              <section class="stats-section">
                <div class="stat-card" @click="handleStatClick">
                  <span class="stat-number">68%</span>
                  <span class="stat-label">知识关联度</span>
                </div>
                <div class="stat-card" @click="handleStatClick">
                  <span class="stat-number">5,564</span>
                  <span class="stat-label">知识点数量</span>
                </div>
                <div class="stat-card" @click="handleStatClick">
                  <span class="stat-number">14,527</span>
                  <span class="stat-label">教学资源总数</span>
                </div>
                <div class="stat-card" @click="handleStatClick">
                  <span class="stat-number">13,527</span>
                  <span class="stat-label">知识关系总数</span>
                </div>
                <div class="stat-card" @click="handleStatClick">
                  <span class="stat-number">36</span>
                  <span class="stat-label">课程数量</span>
                </div>
                <div class="stat-card" @click="handleStatClick">
                  <span class="stat-number">23</span>
                  <span class="stat-label">课程知识图谱</span>
                </div>
              </section>

              <section class="visit-stats">
                <div class="visit-card" @click="handleStatClick">
                  <span class="visit-number">6,789</span>
                  <span class="visit-label">累计总访问量</span>
                </div>
                <div class="visit-card" @click="handleStatClick">
                  <span class="visit-number">5</span>
                  <span class="visit-label">今日访问</span>
                </div>
                <div class="visit-card" @click="handleStatClick">
                  <span class="visit-number">+78</span>
                  <span class="visit-label">较上周增长</span>
                </div>
              </section>
            </div>
          </div>

          <!-- 中间：大标题区域 - 垂直居中，带流光边框 -->
          <div class="center-title-area">
            <div class="title-wrapper">
              <h1 class="major-title">英语专业</h1>
              <div class="flowing-border"></div>
            </div>
            <p class="page-subtitle" @click="handleSubtitleClick">未来学习空间</p>
            <p class="background-title">Future Learning Hub</p>
          </div>

          <!-- 右侧：AI区域 - 更窄且底部对齐 -->
          <div class="right-ai-area">
            <!-- AI侧边栏 -->
            <aside class="ai-sidebar">
              <!-- AI头像和气泡 -->
              <div class="ai-profile">
                <img class="ai-avatar" src="@/assets/ai-english.png" alt="AI小外头像" />
                <div class="ai-intro-bubble">
                  <p class="ai-greeting">嗨，我是AI小外<br />语法学习，专业咨询，找我就对啦～</p>
                </div>
              </div>
              <div class="ai-controls">
                <button class="ai-control-btn" @click="handleNewChat">新聊天</button>
                <button class="ai-control-btn" @click="handleFullscreenChat">全屏聊天</button>
              </div>
              <div class="ai-stats">
                <div class="ai-stats-content">
                  <span>累计问答：15,820次</span>
                  <span>准确率：94.7%</span>
                </div>
              </div>

              <section class="ai-tools">
                <h2 class="tools-title">英语学习工具</h2>

                <!-- 每日一句卡片 -->
                <div class="daily-sentence-card">
                  <div class="card-header">
                    <span class="badge purple">每日一句</span>
                  </div>
                  <div class="card-body">
                    <p class="english-sentence">Language is the archives of history.</p>
                    <p class="chinese-translation">一语言，一册史</p>
                  </div>
                  <div class="card-footer">
                    <span class="language-support">支持多语种切换</span>
                    <button type="button" class="play-btn-circle" @click="handlePlay">
                      <i class="fas fa-play"></i>
                    </button>
                  </div>
                </div>

                <!-- AI翻译助手卡片 -->
                <div class="translation-tool-card">
                  <div class="card-header">
                    <span class="badge light-purple">AI翻译助手</span>
                    <a href="#" class="use-now-link" @click.prevent="handleUseNow">立即使用 →</a>
                  </div>
                  <div class="card-body">
                    <p class="tool-description">支持多语言翻译 · Word/PDF上传翻译</p>
                    <div class="feature-buttons-row">
                      <button class="feature-nav-btn" id="prev-feature" @click="prevFeature" :disabled="currentIndex === 0">
                        <i class="fas fa-chevron-left"></i>
                      </button>

                      <div class="feature-btns-container" ref="featureContainer">
                        <button
                          v-for="(feature, index) in featureList"
                          :key="index"
                          class="feature-btn"
                          :class="{ active: currentIndex === index }"
                          @click="selectFeature(index, $event)"
                        >
                          {{ feature.text }}
                        </button>
                      </div>

                      <button class="feature-nav-btn" id="next-feature" @click="nextFeature" :disabled="currentIndex === featureList.length - 1">
                        <i class="fas fa-chevron-right"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </section>

              <!-- 重新设计的聊天输入区域 -->
              <form class="ai-chat-form" @submit.prevent="handleSendMessage">
                <div class="input-wrapper">
                  <input type="text" class="chat-input" v-model="chatMessage" placeholder="输入您的问题..." />
                  <button type="button" class="voice-btn" @click="handleVoice">
                    <i class="fas fa-microphone"></i>
                  </button>
                </div>
                <div class="action-buttons">
                  <button type="button" class="attach-btn" @click="handleAttach">
                    <i class="fas fa-paperclip"></i>
                  </button>
                  <button type="submit" class="send-btn">
                    <i class="fas fa-paper-plane"></i>
                  </button>
                </div>
              </form>
            </aside>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'

// 功能按钮列表
const featureList = ref([
  { feature: 'case', text: '翻译案例库' },
  { feature: 'format', text: '格式保留' },
  { feature: 'compare', text: '翻译对比' },
  { feature: 'export', text: '一键导出' }
])

const currentIndex = ref(0)
const chatMessage = ref('')
const featureContainer = ref(null)

// 处理导航下拉菜单（触摸设备）
const handleTouchDropdown = () => {
  const dropdowns = document.querySelectorAll('.dropdown')
  if ('ontouchstart' in window) {
    dropdowns.forEach(dropdown => {
      const btn = dropdown.querySelector('.dropbtn')
      const content = dropdown.querySelector('.dropdown-content')

      btn.addEventListener('click', (e) => {
        e.preventDefault()
        e.stopPropagation()

        dropdowns.forEach(d => {
          if (d !== dropdown) {
            const c = d.querySelector('.dropdown-content')
            if (c) {
              c.style.opacity = '0'
              c.style.visibility = 'hidden'
            }
          }
        })

        if (content.style.visibility === 'visible') {
          content.style.opacity = '0'
          content.style.visibility = 'hidden'
        } else {
          content.style.opacity = '1'
          content.style.visibility = 'visible'
        }
      })
    })

    document.addEventListener('click', () => {
      dropdowns.forEach(dropdown => {
        const content = dropdown.querySelector('.dropdown-content')
        if (content) {
          content.style.opacity = '0'
          content.style.visibility = 'hidden'
        }
      })
    })
  }
}

// 更新按钮状态和滚动
const updateFeatureButtons = (index) => {
  currentIndex.value = index
  // 滚动到可见区域
  if (featureContainer.value) {
    const container = featureContainer.value
    const buttons = container.querySelectorAll('.feature-btn')
    if (buttons.length > index) {
      const btn = buttons[index]
      const btnWidth = btn.offsetWidth
      const containerWidth = container.offsetWidth
      const scrollLeft = btn.offsetLeft - (containerWidth / 2) + (btnWidth / 2)
      container.scrollTo({
        left: Math.max(0, scrollLeft),
        behavior: 'smooth'
      })
    }
  }
  // 触发自定义事件
  const event = new CustomEvent('featureChanged', {
    detail: {
      index: currentIndex.value,
      feature: featureList.value[currentIndex.value].feature,
      text: featureList.value[currentIndex.value].text
    }
  })
  document.dispatchEvent(event)
  console.log('当前选中功能:', featureList.value[currentIndex.value].text)
}

const prevFeature = (e) => {
  e.preventDefault()
  if (currentIndex.value > 0) {
    const newIndex = currentIndex.value - 1
    updateFeatureButtons(newIndex)
    // 按钮动画
    const btn = e.currentTarget
    btn.style.transform = 'scale(0.9)'
    setTimeout(() => {
      btn.style.transform = 'scale(1)'
    }, 200)
  }
}

const nextFeature = (e) => {
  e.preventDefault()
  if (currentIndex.value < featureList.value.length - 1) {
    const newIndex = currentIndex.value + 1
    updateFeatureButtons(newIndex)
    const btn = e.currentTarget
    btn.style.transform = 'scale(0.9)'
    setTimeout(() => {
      btn.style.transform = 'scale(1)'
    }, 200)
  }
}

const selectFeature = (index, e) => {
  e.preventDefault()
  if (currentIndex.value !== index) {
    updateFeatureButtons(index)
    const btn = e.currentTarget
    btn.style.transform = 'scale(0.95)'
    setTimeout(() => {
      btn.style.transform = 'scale(1)'
    }, 200)
  }
}

// 聊天发送
const handleSendMessage = () => {
  if (chatMessage.value.trim()) {
    const sendBtn = document.querySelector('.send-btn')
    if (sendBtn) {
      sendBtn.style.transform = 'scale(0.9)'
      setTimeout(() => {
        sendBtn.style.transform = 'scale(1)'
      }, 200)
    }
    console.log('发送消息:', chatMessage.value)
    chatMessage.value = ''
    // 显示发送成功提示
    const originalIcon = sendBtn?.innerHTML
    if (sendBtn) {
      sendBtn.innerHTML = '<i class="fas fa-check"></i>'
      setTimeout(() => {
        sendBtn.innerHTML = originalIcon
      }, 1000)
    }
  }
}

// 新聊天
const handleNewChat = (e) => {
  const btn = e.currentTarget
  btn.style.transform = 'scale(0.95)'
  setTimeout(() => {
    btn.style.transform = 'scale(1)'
  }, 200)

  chatMessage.value = ''
  const input = document.querySelector('.chat-input')
  if (input) {
    input.placeholder = '开始新的对话...'
  }
  const inputWrapper = document.querySelector('.input-wrapper')
  if (inputWrapper) {
    inputWrapper.style.backgroundColor = '#f3eaff'
    inputWrapper.style.transition = 'background-color 0.3s'
    setTimeout(() => {
      inputWrapper.style.backgroundColor = ''
    }, 500)
  }
}

// 全屏聊天
const handleFullscreenChat = (e) => {
  const btn = e.currentTarget
  btn.style.transform = 'scale(0.95)'
  setTimeout(() => {
    btn.style.transform = 'scale(1)'
  }, 200)

  const sidebar = document.querySelector('.ai-sidebar')
  if (sidebar) {
    sidebar.style.transition = 'all 0.5s'
    sidebar.style.transform = 'scale(1.02)'
    setTimeout(() => {
      sidebar.style.transform = 'scale(1)'
    }, 500)
  }
  alert('✨ 全屏聊天模式开发中，敬请期待...')
}

// 播放按钮
const handlePlay = (e) => {
  const btn = e.currentTarget
  btn.style.transform = 'rotate(360deg)'
  btn.style.transition = 'transform 0.5s'
  setTimeout(() => {
    btn.style.transform = 'rotate(0deg)'
  }, 500)
  setTimeout(() => {
    alert('🔊 语音播放：The limits of my language mean the limits of my world')
  }, 300)
}

// 语音按钮
const handleVoice = (e) => {
  const btn = e.currentTarget
  btn.style.backgroundColor = '#ff4444'
  btn.style.transform = 'scale(1.2)'
  let count = 0
  const interval = setInterval(() => {
    btn.style.transform = count % 2 === 0 ? 'scale(1.3)' : 'scale(1.1)'
    count++
    if (count > 5) {
      clearInterval(interval)
      btn.style.backgroundColor = ''
      btn.style.transform = 'scale(1)'
    }
  }, 200)
  setTimeout(() => {
    alert('🎤 语音识别功能开发中...')
  }, 1200)
}

// 附件按钮
const handleAttach = (e) => {
  const btn = e.currentTarget
  btn.style.transform = 'rotate(180deg) scale(1.1)'
  btn.style.transition = 'transform 0.3s'
  setTimeout(() => {
    btn.style.transform = 'rotate(0deg) scale(1)'
  }, 300)
  const fileTypes = ['PDF', 'Word', 'Excel', 'PPT', 'TXT']
  const randomType = fileTypes[Math.floor(Math.random() * fileTypes.length)]
  alert(`📎 附件上传功能开发中...\n支持格式：${randomType}、图片、音频等`)
}

// 立即使用链接
const handleUseNow = (e) => {
  const link = e.currentTarget
  link.style.transform = 'translateX(5px)'
  setTimeout(() => {
    link.style.transform = 'translateX(0)'
  }, 200)
  alert('🚀 AI翻译助手即将上线，敬请期待！')
}

// 气泡点击
const handleBubbleClick = (e) => {
  const wrapper = e.currentTarget
  wrapper.style.transform = 'scale(1.1)'
  setTimeout(() => {
    wrapper.style.transform = 'scale(1)'
  }, 200)
  const quoteElement = wrapper.querySelector('.quote-bubble')
  if (quoteElement) {
    const enText = quoteElement.getAttribute('data-en')
    const zhText = quoteElement.getAttribute('data-zh')
    console.log('点击名言:', enText)
    console.log('中文翻译:', zhText)
  }
}

// 数据卡片点击
const handleStatClick = (e) => {
  const card = e.currentTarget
  card.style.transform = 'scale(0.98)'
  card.style.boxShadow = '0 0 0 3px rgba(106, 62, 156, 0.3)'
  setTimeout(() => {
    card.style.transform = 'scale(1)'
    card.style.boxShadow = ''
  }, 200)
  const number = card.querySelector('.stat-number, .visit-number')?.textContent
  const label = card.querySelector('.stat-label, .visit-label')?.textContent
  if (number && label) {
    console.log(`点击数据: ${number} - ${label}`)
  }
}

// 副标题点击
const handleSubtitleClick = (e) => {
  const el = e.currentTarget
  el.style.transform = 'translateY(-2px)'
  setTimeout(() => {
    el.style.transform = 'translateY(0)'
  }, 200)
}

onMounted(() => {
  // 修改页面标题为"英语"
  document.title = "英语"

  // 初始化触摸设备下拉
  handleTouchDropdown()

  // 给气泡添加点击监听
  const bubbles = document.querySelectorAll('.quote-bubble-wrapper')
  bubbles.forEach(bubble => {
    bubble.addEventListener('click', handleBubbleClick)
  })

  // 初始激活第一个按钮
  if (featureList.value.length > 0) {
    updateFeatureButtons(0)
  }

  // 监听自定义事件
  document.addEventListener('featureChanged', (e) => {
    // 可以在这里处理其他逻辑
  })

  // 欢迎提示
  setTimeout(() => {
    console.log('🌟 欢迎使用山西大学外国语学院未来学习空间')
  }, 1000)
})
</script>

<style>
:root {
  --primary-purple: #6a3e9c;
  --light-purple: #9b7bcf;
  --dark-purple: #4a2c7a;
  --soft-purple: #f3eaff;
  --gradient-purple: linear-gradient(135deg, #6a3e9c, #8a5fc0);
  --gradient-flow: linear-gradient(90deg, transparent, #fff, #9b7bcf, #6a3e9c, #9b7bcf, #fff, transparent);
  --shadow-purple: rgba(106, 62, 156, 0.25);
  --card-bg: rgba(255, 255, 255, 0.95);
  --nav-bg: rgba(255, 255, 255, 0.85);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,
body {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  font-family: "Noto Sans SC", "PingFang SC", Helvetica, Arial, sans-serif;
}

.container {
  position: relative;
  width: 100%;
  height: 100vh;
  background: linear-gradient(145deg, #f8f2ff 0%, #ffffff 100%);
  overflow: hidden;
}

.background-image,
.background-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 1;
  z-index: 0;
}

.video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(106, 62, 156, 0.2);
  /* 紫色半透明遮罩 */
  z-index: 0;
  pointer-events: none;
  /* 确保遮罩层不会阻挡点击事件 */
}

.content-frame,
.main-content {
  width: 100%;
  height: 100vh;
  position: relative;
  z-index: 1;
}

/* ===== 头部导航栏 ===== */
.header {
  position: relative;
  height: 12%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2%;
  background: transparent;
  backdrop-filter: blur(12px);
  z-index: 100;
}

.header-left {
  display: flex;
  align-items: center;
  height: 100%;
}

.university-logo {
  height: 70%;
  width: auto;
}

.university-name-group {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.university-name {
  font-weight: 700;
  font-size: clamp(1.1rem, 2.2vh, 1.6rem);
  color: white;
  line-height: 1.2;
  white-space: nowrap;
  letter-spacing: 0.5px;
  margin-bottom: 10px;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.university-name-en {
  font-weight: 400;
  font-size: clamp(0.55rem, 1.1vh, 0.8rem);
  color: rgba(255, 255, 255, 0.9);
  white-space: nowrap;
  letter-spacing: 0.3px;
  text-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
}

/* ===== 导航栏 - 科技感布局 ===== */
.main-nav-dropdown {
  position: absolute;
  left: 55%;
  transform: translateX(-50%);
  height: 100%;
  display: flex;
  align-items: center;
}

.nav-items-wrapper {
  display: flex;
  align-items: center;
  gap: 0.2rem;
  background: rgba(255, 255, 255, 0.15);
  padding: 0.3rem;
  border-radius: 3rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
  white-space: nowrap;
}

.dropdown {
  position: relative;
}

.dropbtn {
  display: block;
  padding: 0.6rem 1.2rem;
  color: white;
  font-weight: 500;
  font-size: 1rem;
  text-decoration: none;
  border-radius: 2rem;
  transition: all 0.3s ease;
  white-space: nowrap;
  letter-spacing: 0.3px;
  position: relative;
  background: transparent;
  text-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
}

.dropbtn:hover {
  background: var(--gradient-purple);
  color: white;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px var(--shadow-purple);
}

.dropdown-content {
  position: absolute;
  top: 120%;
  left: 50%;
  transform: translateX(-50%);
  min-width: 200px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(106, 62, 156, 0.3);
  border: 1px solid var(--light-purple);
  opacity: 0;
  visibility: hidden;
  transition: all 0.2s ease;
  padding: 0.5rem 0;
  z-index: 1000;
}

.dropdown:hover .dropdown-content {
  opacity: 1;
  visibility: visible;
  top: 140%;
}

.wide-dropdown {
  min-width: 350px;
  column-count: 2;
  column-gap: 0;
}

.dropdown-content a {
  color: var(--dark-purple);
  padding: 0.7rem 1.5rem;
  text-decoration: none;
  display: block;
  font-size: 0.9rem;
  transition: all 0.2s;
  white-space: nowrap;
}

.dropdown-content a:hover {
  background: var(--soft-purple);
  color: var(--primary-purple);
  padding-left: 2rem;
}

.user-avatar {
  width: 2.8%;
  aspect-ratio: 1/1;
  background: var(--gradient-purple);
  border-radius: 50%;
  border: 2px solid white;
  box-shadow: 0 0 0 2px var(--primary-purple);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
}

/* ===== 漂浮气泡动画 ===== */
.floating-bubbles {
  position: absolute;
  top: 12%;
  left: 0;
  width: 100%;
  height: 150px;
  pointer-events: none;
  z-index: 50;
}

.quote-bubble-wrapper {
  position: absolute;
  pointer-events: auto;
  cursor: pointer;
}

.quote-bubble {
  position: relative;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(2px);
  border: 1px solid rgba(106, 62, 156, 0.3);
  border-radius: 40px;
  padding: 0.6rem 1.8rem;
  font-size: clamp(0.85rem, 1.5vh, 1rem);
  color: var(--dark-purple);
  white-space: nowrap;
  font-weight: 400;
  letter-spacing: 0.2px;
  box-shadow: 0 2px 10px rgba(106, 62, 156, 0.1);
  transition: all 0.3s ease;
  opacity: 0.8;
}

/* 使用伪元素实现中文翻译的平滑过渡 */
.quote-bubble::before {
  content: attr(data-zh);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--gradient-purple);
  color: white;
  border-radius: 40px;
  opacity: 0;
  transition: opacity 0.3s ease;
  white-space: nowrap;
  padding: 0.6rem 1.8rem;
  box-sizing: border-box;
  border: 1px solid transparent;
}

.quote-bubble-wrapper:hover .quote-bubble {
  opacity: 1;
  background: transparent;
  border-color: transparent;
  color: transparent;
  box-shadow: 0 8px 20px var(--shadow-purple);
  transform: scale(1.02);
}

.quote-bubble-wrapper:hover .quote-bubble::before {
  opacity: 1;
}

/* 6个气泡的不同位置和动画延迟 */
.bubble-1 {
  top: 0%;
  animation: floatRightToLeft 38s linear infinite;
  right: -400px;
}

.bubble-2 {
  top: 40%;
  animation: floatRightToLeft 38s linear infinite;
  animation-delay: 6s;
  right: -600px;
}

.bubble-3 {
  top: 5%;
  animation: floatRightToLeft 38s linear infinite;
  animation-delay: 12s;
  right: -600px;
}

.bubble-4 {
  top: 30%;
  animation: floatRightToLeft 38s linear infinite;
  animation-delay: 18s;
  right: -600px;
}

.bubble-5 {
  top: 5%;
  animation: floatRightToLeft 38s linear infinite;
  animation-delay: 24s;
  right: -600px;
}

.bubble-6 {
  top: 35%;
  animation: floatRightToLeft 38s linear infinite;
  animation-delay: 30s;
  right: -600px;
}

@keyframes floatRightToLeft {
  0% {
    right: -500px;
    opacity: 0;
  }

  5% {
    opacity: 0.8;
  }

  95% {
    opacity: 0.8;
  }

  100% {
    right: 100%;
    opacity: 0;
  }
}

/* ===== 三栏布局 ===== */
.three-column-layout {
  display: flex;
  height: 88%;
  width: 100%;
  padding: 0 1%;
  gap: 1%;
  position: relative;
}

/* 左侧：数据统计区 */
.left-stats-area {
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 10vh;
  align-items: flex-start;
}

.stats-container {
  width: 100%;
  margin-left: 2rem;
  display: flex;
  flex-direction: column;
}

.stats-section {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.8rem;
  margin-bottom: 1.5rem;
  width: 95%;
}

.stat-card,
.visit-card {
  background: rgba(255, 255, 255, 0.8);
  border-radius: 18px;
  border: 1px solid var(--shadow-purple);
  box-shadow: 0 6px 16px var(--shadow-purple);
  padding: 1rem 0.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: transform 0.2s ease;
}

.stat-card:hover,
.visit-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px var(--shadow-purple);
}

.stat-number,
.visit-number {
  font-size: clamp(1.3rem, 2.2vw, 1.8rem);
  font-weight: 700;
  background: var(--gradient-purple);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.2;
  margin-bottom: 0.2rem;
}

.stat-label,
.visit-label {
  font-size: clamp(0.6rem, 1.1vw, 0.8rem);
  color: var(--dark-purple);
  opacity: 0.8;
  font-weight: 500;
  letter-spacing: 0.2px;
}

.visit-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.6rem;
  min-height: 70px;
  width: 115%;
  margin: 0 auto;
}

/* 中间：大标题区域 - 带流光边框 */
.center-title-area {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  transform: translateY(0px) translateX(20px);
}

.title-wrapper {
  position: relative;
  display: inline-block;
  margin-bottom: 3rem;
}

.major-title {
  font-size: clamp(4rem, 10vw, 9rem);
  font-weight: 600;
  color: white;
  text-shadow: 10px 10px 3px var(--shadow-purple);
  letter-spacing: 10px;
  position: relative;
  text-stroke: 1px rgba(155, 123, 207, 0.3);
  z-index: 2;
}

/* 添加小星星装饰 - 围绕主标题 */
.major-title::before {
  content: '✦';
  position: absolute;
  top: -20px;
  left: -30px;
  font-size: 1.8rem;
  color: rgba(255, 255, 255, 0.5);
  text-shadow: 0 0 10px rgba(106, 62, 156, 0.3);
  animation: sparkle 3s ease-in-out infinite;
}

.major-title::after {
  content: '✦';
  position: absolute;
  bottom: -20px;
  right: -30px;
  font-size: 1.8rem;
  color: rgba(155, 123, 207, 0.5);
  text-shadow: 0 0 10px rgba(106, 62, 156, 0.3);
  animation: sparkle 3s ease-in-out infinite 1.5s;
}

@keyframes sparkle {

  0%,
  100% {
    opacity: 0.5;
    transform: scale(1) rotate(0deg);
  }

  50% {
    opacity: 1;
    transform: scale(1.2) rotate(10deg);
  }
}

.flowing-border {
  position: absolute;
  top: -25px;
  left: -20px;
  right: -20px;
  bottom: -30px;
  border: 2px solid transparent;
  border-radius: 20px;
  background: linear-gradient(90deg, transparent, #fff, #9b7bcf, #6a3e9c, #9b7bcf, #fff, transparent) border-box;

  -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  animation: flowBorder 1s linear infinite;
  z-index: 1;
}

@keyframes flowBorder {
  0% {
    background-position: 0% 50%;
  }

  100% {
    background-position: 100% 50%;
  }
}

.page-subtitle {
  font-size: clamp(1.1rem, 2.2vw, 1.4rem);
  color: white;
  letter-spacing: 0.4em;
  margin-bottom: 1rem;
  font-weight: 400;
  position: relative;
  top: 1rem;
  left: 14rem;
  padding: 0.8rem 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-block;
  text-decoration: none;
  border: 1px solid rgba(155, 123, 207, 0.3);
  border-radius: 40px;
  backdrop-filter: blur(5px);
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 4px 15px rgba(106, 62, 156, 0.15);
  overflow: hidden;
  z-index: 1;
}

/* 微光流动效果 */
.page-subtitle::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg,
      transparent,
      rgba(155, 123, 207, 0.8),
      rgba(155, 123, 207, 0.6),
      transparent);
  transition: left 2s ease;
  z-index: -1;
}

.page-subtitle:hover::before {
  left: 100%;
}

.page-subtitle:hover {
  border-color: rgba(155, 123, 207, 0.6);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(106, 62, 156, 0.3);
  letter-spacing: 0.45em;
}

/* 点击效果 */
.page-subtitle:active {
  transform: translateY(0);
  transition: transform 0.1s;
}

.background-title {
  font-size: clamp(2.2rem, 4.5vw, 7rem);
  color: rgba(249, 250, 250, 0.3);
  font-weight: 800;
  letter-spacing: 2px;
  position: relative;
  z-index: 1;
}

/* 添加两个对角的小装饰 */
.center-title-area::before {
  content: '◇';
  position: absolute;
  top: 10%;
  left: 5%;
  font-size: 2rem;
  color: rgba(255, 255, 255, 0.2);
  transform: rotate(15deg);
  animation: gentleFloat 4s ease-in-out infinite;
}

.center-title-area::after {
  content: '◇';
  position: absolute;
  bottom: 15%;
  right: 5%;
  font-size: 2.5rem;
  color: rgba(155, 123, 207, 0.15);
  transform: rotate(-10deg);
  animation: gentleFloat 4s ease-in-out infinite 2s;
}

@keyframes gentleFloat {

  0%,
  100% {
    transform: rotate(15deg) translateY(0);
  }

  50% {
    transform: rotate(15deg) translateY(-10px);
  }
}

/* 右侧：AI区域 */
.right-ai-area {
  width: 22%;
  margin-left: 4rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 5vh;
}

/* AI侧边栏 */
.ai-sidebar {
  position: relative;
  height: auto;
  max-height: 80vh;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px) brightness(1.1);
  border-radius: 30px;
  border: 2px solid var(--shadow-purple);
  box-shadow: 0 15px 35px var(--shadow-purple);
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
}

/* AI头像和气泡 */
.ai-profile {
  position: absolute;
  bottom: 98%;
  right: 4rem;
  /* margin-bottom: -10px; */
  display: flex;
  align-items: flex-end;
  gap: 0.6rem;
  z-index: 200;
}

.ai-avatar {
  width: 3.8rem;
  height: 3.8rem;
  border-radius: 50%;
  border: 1.5px solid white;
  box-shadow: 0 6px 18px var(--shadow-purple);
  transition: transform 0.3s ease;
}

.ai-avatar:hover {
  transform: scale(1.05) rotate(5deg);
}

.ai-intro-bubble {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 20px 20px 20px 0;
  padding: 0.8rem 1.2rem;
  border: 1px solid var(--primary-purple);
  box-shadow: 0 6px 18px var(--shadow-purple);
  font-size: clamp(0.7rem, 1.3vh, 0.85rem);
  color: var(--dark-purple);
  line-height: 1.4;
  max-width: 220px;
  position: relative;
  animation: bubbleFloat 3s ease-in-out infinite;
}

@keyframes bubbleFloat {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-3px);
  }
}

.ai-controls {
  display: flex;
  gap: 0.8rem;
  margin-bottom: 0.5rem;
}

.ai-control-btn {
  flex: 1;
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid var(--primary-purple);
  border-radius: 30px;
  color: var(--dark-purple);
  font-weight: 500;
  font-size: clamp(0.9rem, 1.2vh, 0.8rem);
  padding: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.ai-control-btn:hover {
  background: var(--gradient-purple);
  color: white;
  border-color: transparent;
  transform: translateY(-1px);
}

.ai-stats {
  background: rgba(255, 255, 255, 0.8);
  border-radius: 30px;
  padding: 0.6rem;
  margin-bottom: 1rem;
}

.ai-stats-content {
  display: flex;
  justify-content: space-around;
  font-size: clamp(0.8rem, 1.1vh, 0.7rem);
  color: var(--dark-purple);
  font-weight: 500;
}

/* AI工具卡片 */
.ai-tools {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;
  max-height: 50vh;
  overflow-y: auto;
  padding-right: 0.2rem;
}

.ai-tools::-webkit-scrollbar {
  width: 3px;
}

.ai-tools::-webkit-scrollbar-thumb {
  background: var(--light-purple);
  border-radius: 10px;
}

.tools-title {
  font-size: clamp(1rem, 1.3vh, 0.85rem);
  color: var(--primary-purple);
  font-weight: 600;
  margin-bottom: 0.2rem;
  letter-spacing: 0.3px;
}

.daily-sentence-card,
.translation-tool-card {
  background: transparent;
  backdrop-filter: blur(10px) brightness(1.2);
  border-radius: 22px;
  border: 1px solid var(--light-purple);
  box-shadow: 0 6px 18px var(--shadow-purple);
  padding: 1rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.daily-sentence-card:hover,
.translation-tool-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px var(--shadow-purple);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.8rem;
}

.badge {
  padding: 0.2rem 0.8rem;
  border-radius: 30px;
  font-size: clamp(0.55rem, 1.1vh, 0.7rem);
  font-weight: 600;
}

.badge.purple {
  background: var(--gradient-purple);
  color: white;
}

.badge.light-purple {
  background: var(--soft-purple);
  color: var(--primary-purple);
  border: 1px solid var(--light-purple);
}

.english-sentence {
  font-size: clamp(0.9rem, 1.2vh, 0.8rem);
  color: var(--dark-purple);
  font-style: italic;
  margin-bottom: 0.5rem;
  line-height: 1.4;
}

.chinese-translation {
  font-size: clamp(0.65rem, 1.1vh, 0.7rem);
  color: #666;
}

.tool-description {
  font-size: clamp(0.75rem, 1.1vh, 0.7rem);
  color: #666;
  margin-bottom: 0.8rem;
  text-align: center;
}

/* feature-buttons 居中显示 */
.feature-buttons-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
  flex-wrap: wrap;
  padding: 0.2rem 0;
  position: relative;
}

.feature-btns-container {
  display: flex;
  gap: 0.3rem;
  overflow-x: auto;
  scroll-behavior: smooth;
  max-width: 300px;
  padding: 0.2rem 0;
  scrollbar-width: none;
  /* Firefox隐藏滚动条 */
  -ms-overflow-style: none;
  /* IE隐藏滚动条 */
  position: relative;
  flex: 1;
}

.feature-btns-container::-webkit-scrollbar {
  display: none;
  /* Chrome/Safari隐藏滚动条 */
}

.feature-btn {
  background: rgba(106, 62, 156, 0.08);
  border: 1px solid var(--light-purple);
  border-radius: 30px;
  padding: 0.4rem 0.8rem;
  font-size: clamp(0.55rem, 1.1vh, 0.7rem);
  color: var(--dark-purple);
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  /* 防止按钮被压缩 */
}

.feature-btn.active {
  background: var(--gradient-purple);
  color: white;
  border-color: transparent;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px var(--shadow-purple);
}

.feature-btn:hover {
  background: var(--gradient-purple);
  color: white;
  border-color: transparent;
  transform: translateY(-1px);
}

.feature-nav-btn {
  width: 2rem;
  height: 2rem;
  background: rgba(106, 62, 156, 0.08);
  border: 1px solid var(--light-purple);
  border-radius: 50%;
  color: var(--dark-purple);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.feature-nav-btn:hover {
  background: var(--gradient-purple);
  color: white;
  border-color: transparent;
  transform: scale(1.1);
}

.feature-nav-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
  pointer-events: none;
}

.use-now-link {
  color: var(--primary-purple);
  text-decoration: none;
  font-size: clamp(0.55rem, 1.1vh, 0.7rem);
  font-weight: 600;
  transition: transform 0.2s ease;
  display: inline-block;
}

.use-now-link:hover {
  transform: translateX(3px);
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.6rem;
}

.language-support {
  font-size: clamp(0.7rem, 1vh, 0.65rem);
  color: #999;
}

/* 播放按钮 - 与 voice-btn 样式一致 */
.play-btn-circle {
  width: 2rem;
  height: 2rem;
  border: none;
  background: var(--gradient-purple);
  /* 使用紫色渐变 */
  color: white;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  transition: all 0.3s ease;
  margin: 2px;
  box-shadow: 0 4px 10px var(--shadow-purple);
}

.play-btn-circle:hover {
  transform: scale(1.1) rotate(10deg);
  box-shadow: 0 6px 15px var(--shadow-purple);
}

/* 可选：添加点击效果 */
.play-btn-circle:active {
  transform: scale(0.95);
}

/* 重新设计的聊天输入区域 */
.ai-chat-form {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
  background: transparent;
}

.input-wrapper {
  flex: 1;
  display: flex;
  align-items: center;
  background: transparent;
  backdrop-filter: blur(10px);
  border-radius: 50px;
  border: 2px solid var(--primary-purple);
  padding: 0.2rem 0.2rem 0.2rem 1rem;
  transition: all 0.3s ease;
}

.input-wrapper:focus-within {
  box-shadow: 0 0 0 3px rgba(106, 62, 156, 0.2);
  transform: scale(1.02);
}

.chat-input {
  flex: 1;
  border: none;
  background: transparent;
  font-size: clamp(0.9rem, 1.2vh, 0.8rem);
  outline: none;
  color: var(--dark-purple);
}

.chat-input::placeholder {
  color: #aaa;
  font-style: italic;
}

.voice-btn {
  width: 2rem;
  height: 2rem;
  border: none;
  background: var(--gradient-purple);
  color: white;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  transition: all 0.3s ease;
  margin: 2px;
}

.voice-btn:hover {
  transform: scale(1.1) rotate(10deg);
  box-shadow: 0 4px 12px var(--shadow-purple);
}

.action-buttons {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.attach-btn,
.send-btn {
  width: 2.4rem;
  height: 2.4rem;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px var(--shadow-purple);
}

.attach-btn {
  background: white;
  color: var(--primary-purple);
  border: 2px solid var(--primary-purple);
}

.attach-btn:hover {
  background: var(--gradient-purple);
  color: white;
  transform: scale(1.1) rotate(15deg);
  border-color: transparent;
}

.send-btn {
  background: var(--gradient-purple);
  color: white;
  border: 2px solid transparent;
}

.send-btn:hover {
  transform: scale(1.1) translateX(3px);
  box-shadow: 0 6px 15px var(--shadow-purple);
}

/* 移除旧的圆圈样式 */
.attach-circle,
.send-circle {
  display: none;
}

@media screen and (min-width: 1919px) {
  .major-title {
    font-size: 170px;
  }

  .left-stats-area {
    padding-bottom: 10%;
  }

  .dropbtn {
    font-size: 1.4rem;
  }

  .dropdown-content a {
    font-size: 1rem;
  }

  .right-ai-area {
    padding-bottom: 7%;

    .ai-profile {
      position: absolute;
      bottom: 98%;
      right: 6rem;
      display: flex;
      align-items: flex-end;
      gap: 0.6rem;
      z-index: 200;
    }
  }

  .floating-bubbles {
    top: 15%;
    height: 200px;
  }
}

@media screen and (min-width: 2559px) {
  .major-title {
    font-size: 220px;
  }

  .header-left {
    gap: 0;
    margin-left: 3rem;
  }

  .university-name {
    font-size: 1.6rem;
  }

  .university-name-en {
    font-size: 0.9rem;
  }

  .header-left {
    margin-left: 3rem;
  }

  .dropbtn {
    font-size: 1.6rem;
  }

  .dropdown-content a {
    font-size: 1.2rem;
  }

  .left-stats-area {
    padding-bottom: 13%;
    margin-left: 3rem;
  }

  .stats-section {
    gap: 1.8rem;
  }

  .stat-card,
  .visit-card {
    padding: 2rem 1rem;
  }

  .visit-stats {
    gap: 1.6rem;
    width: 125%;
  }

  .right-ai-area {
    padding-bottom: 13%;
    margin-left: 5rem;

    .ai-profile {
      position: absolute;
      bottom: 98%;
      right: 30%;
      display: flex;
      align-items: flex-end;
      gap: 1rem;
      z-index: 200;
    }

    .translation-tool-card {
      margin-bottom: 7rem;
    }
  }

  .ai-sidebar {
    padding: 2.5rem 2rem;
  }

  .ai-control-btn {
    font-size: 1.2rem;
  }

  .ai-stats-content {
    font-size: 1.1rem;
  }

  .tools-title {
    font-size: 1rem;
  }

  .badge {
    font-size: 1.1rem;
  }

  .english-sentence,
  .chinese-translation,
  .language-support {
    font-size: 1.1rem;
  }

  .tool-description {
    font-size: 0.9rem;
  }

  .feature-btn {
    font-size: 1rem;
  }

  .ai-avatar {
    width: 5rem;
    height: 5rem;
  }

  .ai-intro-bubble {
    font-size: 1rem;
  }

  .center-title-area {
    transform: translateY(-60px);
  }

  .page-subtitle {
    font-size: 2rem;
  }

  .stat-number,
  .visit-number {
    font-size: 2rem;
    font-weight: 600;
    background: var(--gradient-purple);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    line-height: 1.2;
    margin-bottom: 0.2rem;
  }

  .stat-label,
  .visit-label {
    font-size: 1.3rem;
    color: var(--dark-purple);
    opacity: 0.8;
    font-weight: 500;
    letter-spacing: 0.2px;
  }

  .floating-bubbles {
    top: 12%;
    height: 400px;
  }

  .quote-bubble {
    font-size: 1.6rem;
  }

  .bubble-1 {
    top: 0%;
    animation: floatRightToLeft 50s linear infinite;
    right: -800px;
  }

  .bubble-2,
  .bubble-3,
  .bubble-4,
  .bubble-5,
  .bubble-6 {
    right: -1000px;
    animation: floatRightToLeft 50s linear infinite;
  }


  .bubble-2 {
    animation-delay: 9s;
  }

  .bubble-3 {
    animation-delay: 18s;
  }

  .bubble-4 {
    animation-delay: 27s;
  }

  .bubble-5 {
    animation-delay: 36s;
  }

  .bubble-6 {
    animation-delay: 45s;
  }
}
</style>