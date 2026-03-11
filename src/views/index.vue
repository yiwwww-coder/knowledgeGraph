<template>
<div class="home">

<!-- 深邃星空背景 - 调亮 -->
<canvas ref="bgCanvas" class="bg-canvas"></canvas>

<!-- 增强版极光背景 - 调亮 -->
<div class="aurora-deep"></div>
<div class="aurora-overlay-light"></div>

<!-- 动态网格背景 - 调亮 -->
<div class="grid-bg-light"></div>

<!-- 鼠标光圈增强版 -->
<div class="cursor-glow" ref="cursorGlow"></div>
<div class="cursor-glow-secondary" ref="cursorGlowSecondary"></div>

<!-- 导航 -->
<header class="nav" :class="{ scrolled: isScrolled }">
<div class="nav-container">
<div class="left">
<img src="../assets/网站图标.png" class="logo">
<span class="title">AI未来学习空间</span>
</div>

<div class="menu">
<span v-for="(item, index) in menuItems" :key="index" class="menu-item" :data-text="item">{{item}}</span>
</div>

<div class="right">
<button class="doc">文档中心</button>
<button class="login">登录</button>
<button class="ai-nav-btn">
<span class="ai-nav-icon">🤖</span>
<span class="ai-nav-text">AI助手</span>
</button>
</div>
</div>
</header>

<!-- Hero 区域增强版 -->
<section class="hero">
<div class="hero-content">
<div class="hero-badge" @mouseenter="handleBadgeHover">✨以引领未来教育为奋斗目标</div>
<h1 class="hero-title">
<span class="gradient-text">AI未来学习空间</span>
</h1>
<p class="hero-subtitle">AI Knowledge Graph · Smart Courses · Future Majors</p>

<div class="search-wrapper">
<div class="search-box" @mouseenter="handleSearchHover" @mouseleave="handleSearchLeave">
<input type="text" placeholder="搜索 学校 / 专业 / 课程 / 知识图谱">
<button class="search-btn">
<span>AI搜索</span>
<svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
<path d="M21 21L15 15M17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9Z" stroke-width="2" stroke-linecap="round"/>
</svg>
</button>
</div>
</div>

<div class="hero-stats">
<div class="stat-item" v-for="stat in stats" :key="stat.label" @mouseenter="handleStatHover">
<span class="stat-number">{{stat.number}}</span>
<span class="stat-label">{{stat.label}}</span>
</div>
</div>
</div>

<!-- 动态波浪效果 -->

</section>

<!-- 模块标签增强版 -->
<section class="module-tabs-wrapper">
<div class="module-tabs">
<div v-for="(item,index) in modulesList" :key="index" 
     class="tab-btn" 
     :class="{active:activeTab===index}" 
     @click="activeTab=index"
     @mouseenter="handleTabHover(index)"
     @mouseleave="handleTabLeave(index)">
<span class="tab-num">{{ String(index+1).padStart(2,'0') }}</span>
<div class="tab-text">
<h3>{{item.name}}</h3>
<p>{{item.english}}</p>
</div>
<div class="tab-glow" :ref="el => { if(el) tabGlowRefs[index] = el }"></div>
</div>
</div>
</section>

<!-- 专业列表 - 直接放在模块标签下方 -->
<section class="majors-section">
<div class="major-grid">
<div class="major-item" v-for="major in majors" :key="major.major" @click="goDetail(major)" @mouseenter="handleMajorHover" @mouseleave="handleMajorLeave">
<div class="major-info">
<span class="major-name">{{major.major}}</span>
<span class="college-name">{{major.college}}</span>
</div>
<div class="school-badge">{{major.school}}</div>
<div class="item-glow"></div>
</div>
</div>
</section>



<!-- 装饰元素增强版 -->
<div class="floating-shapes">
<div class="shape shape-1" ref="shape1"></div>
<div class="shape shape-2" ref="shape2"></div>
<div class="shape shape-3" ref="shape3"></div>
</div>

<!-- 动态光点 - 调亮 -->
<div class="light-spots-light">
<div v-for="n in 30" :key="n" class="light-spot" :style="getRandomSpotStyle()"></div>
</div>
</div>
</template>

<script setup>
import {ref,onMounted,onUnmounted} from "vue"
import {useRouter} from "vue-router"

const router=useRouter()
const activeTab=ref(0)
const bgCanvas=ref(null)
const cursorGlow=ref(null)
const cursorGlowSecondary=ref(null)
const isScrolled=ref(false)
const shape1=ref(null)
const shape2=ref(null)
const shape3=ref(null)
const tabGlowRefs=ref([])

const menuItems = ref(['首页', '资源', '课程', '专业', '院系','学院'])

const stats = ref([
{ number: '10+', label: '合作高校' },
{ number: '90+', label: '合作院系' },
{ number: '800+', label: '合作课程' },
{ number: '4000+', label: '知识图谱' }
])

const modulesList=ref([
{name:"AI知识图谱",english:"Knowledge Graph"},
{name:"AI智慧课程",english:"Smart Courses"},
{name:"未来专业学校空间",english:"Future Major Space"},
{name:"AI专业资源库",english:"Major Resource Library"},
{name:"未来学校学习空间",english:"Future School Space"}
])

const majors=ref([
{school:"山西大学",college:"外国语学院",major:"英语"},
{school:"山西财经大学",college:"市场营销学院",major:"市场营销"},
{school:"山西工程技术学院",college:"矿业工程系",major:"采矿工程"}
])

const goDetail=(item)=>{
if(item.major==="英语"){
window.open("/english", "_blank")
} else if(item.major==="市场营销"){
window.open("/marketing-dashboard", "_blank")
} else {
window.open("/homepage", "_blank")
}
}

// 鼠标交互效果
const handleBadgeHover = (e) => {
e.target.style.transform = 'scale(1.05)'
}

const handleSearchHover = (e) => {
e.target.style.transform = 'scale(1.02)'
e.target.style.boxShadow = '0 30px 50px rgba(37, 99, 235, 0.3)'
}

const handleSearchLeave = (e) => {
e.target.style.transform = 'scale(1)'
e.target.style.boxShadow = '0 20px 40px rgba(37, 99, 235, 0.15)'
}

const handleStatHover = (e) => {
e.currentTarget.style.transform = 'translateY(-5px)'
}

const handleTabHover = (index) => {
if (tabGlowRefs.value[index]) {
tabGlowRefs.value[index].style.opacity = '1'
}
}

const handleTabLeave = (index) => {
if (tabGlowRefs.value[index]) {
tabGlowRefs.value[index].style.opacity = '0'
}
}

const handleMajorHover = (e) => {
e.currentTarget.style.transform = 'translateX(10px) scale(1.02)'
e.currentTarget.style.boxShadow = '0 20px 40px rgba(37, 99, 235, 0.3)'
e.currentTarget.style.borderColor = '#3b82f6'
}

const handleMajorLeave = (e) => {
e.currentTarget.style.transform = 'translateX(0) scale(1)'
e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.2)'
e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.3)'
}

const handleAIHover = (e) => {
e.currentTarget.style.transform = 'scale(1.1)'
}

const handleAILeave = (e) => {
e.currentTarget.style.transform = 'scale(1)'
}

const getRandomSpotStyle = () => {
return {
left: Math.random() * 100 + '%',
top: Math.random() * 100 + '%',
animationDelay: Math.random() * 5 + 's',
width: Math.random() * 6 + 2 + 'px',
height: Math.random() * 6 + 2 + 'px',
opacity: Math.random() * 0.6 + 0.2
}
}

// 增强的粒子系统 - 调亮
class EnhancedParticleSystem {
constructor(canvas) {
this.canvas = canvas
this.ctx = canvas.getContext('2d')
this.particles = []
this.mouseX = null
this.mouseY = null
this.init()
}

init() {
this.resize()
window.addEventListener('resize', () => this.resize())
this.createParticles(250)
this.animate()
}

resize() {
this.canvas.width = window.innerWidth
this.canvas.height = window.innerHeight
}

createParticles(count) {
for (let i = 0; i < count; i++) {
this.particles.push({
x: Math.random() * this.canvas.width,
y: Math.random() * this.canvas.height,
vx: (Math.random() - 0.5) * 0.6,
vy: (Math.random() - 0.5) * 0.6,
size: Math.random() * 5 + 1,
color: `rgba(${59 + Math.random() * 70}, ${130 + Math.random() * 70}, ${246}, ${Math.random() * 0.5 + 0.3})`,
life: Math.random() * 100,
maxLife: 100
})
}
}

updateParticles() {
this.particles.forEach(p => {
p.x += p.vx
p.y += p.vy
p.life -= 0.5

if (p.life <= 0 || p.x < 0 || p.x > this.canvas.width || p.y < 0 || p.y > this.canvas.height) {
p.x = Math.random() * this.canvas.width
p.y = Math.random() * this.canvas.height
p.life = p.maxLife
}

// 鼠标交互
if (this.mouseX && this.mouseY) {
const dx = this.mouseX - p.x
const dy = this.mouseY - p.y
const distance = Math.sqrt(dx * dx + dy * dy)
if (distance < 150) {
const angle = Math.atan2(dy, dx)
const force = (150 - distance) / 800
p.vx -= Math.cos(angle) * force
p.vy -= Math.sin(angle) * force
}
}
})
}

drawParticles() {
this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
this.particles.forEach(p => {
this.ctx.beginPath()
this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
this.ctx.fillStyle = p.color
this.ctx.fill()
})
}

animate() {
this.updateParticles()
this.drawParticles()
requestAnimationFrame(() => this.animate())
}
}

let particleSystem

onMounted(() => {
// 鼠标光圈增强
const handleMouseMove = (e) => {
if (cursorGlow.value) {
cursorGlow.value.style.left = e.clientX + 'px'
cursorGlow.value.style.top = e.clientY + 'px'
}
if (cursorGlowSecondary.value) {
cursorGlowSecondary.value.style.left = e.clientX + 'px'
cursorGlowSecondary.value.style.top = e.clientY + 'px'
}

// 更新粒子系统鼠标位置
if (particleSystem) {
particleSystem.mouseX = e.clientX
particleSystem.mouseY = e.clientY
}
}
window.addEventListener('mousemove', handleMouseMove)

// 滚动导航效果
const handleScroll = () => {
isScrolled.value = window.scrollY > 50
}
window.addEventListener('scroll', handleScroll)

// 初始化增强粒子系统
if (bgCanvas.value) {
particleSystem = new EnhancedParticleSystem(bgCanvas.value)
}

// 初始化形状动画
if (shape1.value) {
shape1.value.style.animation = 'floatShape1 20s infinite'
}
if (shape2.value) {
shape2.value.style.animation = 'floatShape2 25s infinite'
}
if (shape3.value) {
shape3.value.style.animation = 'floatShape3 15s infinite'
}

onUnmounted(() => {
window.removeEventListener('mousemove', handleMouseMove)
window.removeEventListener('scroll', handleScroll)
})
})
</script>

<style scoped>
* {
margin: 0;
padding: 0;
box-sizing: border-box;
}

.home {
min-height: 100vh;
position: relative;
overflow-x: hidden;
font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
background: #f8fafc;
}

/* 深邃星空背景 */
.bg-canvas {
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
z-index: 0;
pointer-events: none;
}

/* 增强版极光背景 - 调亮 */
.aurora-deep {
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: 
radial-gradient(circle at 20% 30%, rgba(96, 165, 250, 0.2) 0%, transparent 45%),
radial-gradient(circle at 80% 70%, rgba(129, 140, 248, 0.25) 0%, transparent 50%),
radial-gradient(circle at 40% 80%, rgba(192, 132, 252, 0.2) 0%, transparent 55%),
radial-gradient(circle at 60% 20%, rgba(59, 130, 246, 0.3) 0%, transparent 45%);
animation: auroraDeepFloat 25s ease-in-out infinite;
z-index: 1;
opacity: 0.8;
}

.aurora-overlay-light {
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: 
linear-gradient(125deg, rgba(248, 250, 252, 0.7) 0%, rgba(241, 245, 249, 0.65) 50%, rgba(248, 250, 252, 0.7) 100%);
z-index: 2;
}

@keyframes auroraDeepFloat {
0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.95; }
33% { transform: scale(1.15) rotate(2deg); opacity: 1; }
66% { transform: scale(0.95) rotate(-2deg); opacity: 0.9; }
}

/* 动态网格背景 - 调亮 */
.grid-bg-light {
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-image: 
linear-gradient(rgba(96, 165, 250, 0.15) 1px, transparent 1px),
linear-gradient(90deg, rgba(96, 165, 250, 0.15) 1px, transparent 1px);
background-size: 60px 60px;
animation: gridMove 30s linear infinite;
z-index: 3;
opacity: 0.4;
}

@keyframes gridMove {
0% { transform: translate(0, 0); }
100% { transform: translate(60px, 60px); }
}

/* 鼠标光圈增强版 */
.cursor-glow {
position: fixed;
width: 800px;
height: 800px;
background: radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%);
border-radius: 50%;
filter: blur(100px);
pointer-events: none;
transform: translate(-50%, -50%);
z-index: 4;
transition: width 0.3s, height 0.3s, opacity 0.3s;
mix-blend-mode: screen;
}

.cursor-glow-secondary {
position: fixed;
width: 500px;
height: 500px;
background: radial-gradient(circle, rgba(139, 92, 246, 0.25) 0%, transparent 70%);
border-radius: 50%;
filter: blur(80px);
pointer-events: none;
transform: translate(-50%, -50%);
z-index: 4;
transition: all 0.2s;
mix-blend-mode: screen;
}

/* 动态光点 - 调亮 */
.light-spots-light {
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
pointer-events: none;
z-index: 5;
}

.light-spot {
position: absolute;
background: rgba(96, 165, 250, 0.5);
border-radius: 50%;
filter: blur(3px);
animation: spotPulse 4s infinite;
}

@keyframes spotPulse {
0%, 100% { opacity: 0.4; transform: scale(1); }
50% { opacity: 1; transform: scale(1.8); }
}

/* 导航 */
.nav {
position: fixed;
top: 0;
left: 0;
width: 100%;
padding: 20px 0;
z-index: 100;
transition: all 0.3s ease;
}

.nav.scrolled {
background: rgba(255, 255, 255, 0.85);
backdrop-filter: blur(20px);
box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
border-bottom: 1px solid rgba(59, 130, 246, 0.3);
}

.nav-container {
max-width: 1280px;
margin: 0 auto;
padding: 0 40px;
display: flex;
justify-content: space-between;
align-items: center;
}

.left {
display: flex;
align-items: center;
gap: 12px;
}

.logo {
width: 40px;
height: 40px;
border-radius: 12px;
box-shadow: 0 0 25px rgba(59, 130, 246, 0.2);
}

.title {
font-size: 18px;
font-weight: 600;
background: linear-gradient(135deg, #334155, #1e293b);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
}

.menu {
display: flex;
gap: 40px;
}

.menu-item {
font-size: 16px;
font-weight: 500;
color: #334155;
cursor: pointer;
position: relative;
padding: 5px 0;
transition: color 0.3s;
}

.menu-item::before {
content: attr(data-text);
position: absolute;
top: 0;
left: 0;
width: 0;
color: #3b82f6;
white-space: nowrap;
overflow: hidden;
transition: width 0.3s ease;
}

.menu-item:hover::before {
width: 100%;
}

.menu-item::after {
content: '';
position: absolute;
bottom: 0;
left: 0;
width: 0;
height: 2px;
background: linear-gradient(90deg, #2563eb, #3b82f6, #8b5cf6);
transition: width 0.3s;
box-shadow: 0 0 15px #3b82f6;
}

.menu-item:hover {
color: transparent;
}

.menu-item:hover::after {
width: 100%;
}

.right {
display: flex;
gap: 12px;
}

.doc, .login, .register {
padding: 8px 20px;
border-radius: 30px;
font-size: 14px;
font-weight: 500;
cursor: pointer;
transition: all 0.3s;
border: none;
position: relative;
overflow: hidden;
}

.doc {
background: transparent;
color: #334155;
border: 1px solid rgba(59, 130, 246, 0.4);
}

.doc:hover {
background: rgba(37, 99, 235, 0.15);
border-color: #3b82f6;
box-shadow: 0 0 25px rgba(59, 130, 246, 0.4);
}

.login {
background: transparent;
border: 1px solid rgba(59, 130, 246, 0.4);
color: #334155;
}

.login:hover {
border-color: #3b82f6;
color: #3b82f6;
box-shadow: 0 0 25px rgba(59, 130, 246, 0.3);
}

.register {
background: linear-gradient(90deg, #2563eb, #3b82f6, #8b5cf6);
color: white;
box-shadow: 0 4px 20px rgba(37, 99, 235, 0.5);
background-size: 200% 100%;
animation: gradientShift 3s infinite;
}

@keyframes gradientShift {
0%, 100% { background-position: 0% 50%; }
50% { background-position: 100% 50%; }
}

.register:hover {
transform: translateY(-2px);
box-shadow: 0 8px 35px rgba(37, 99, 235, 0.7);
}

.register::before {
content: '';
position: absolute;
top: -50%;
left: -50%;
width: 200%;
height: 200%;
background: radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 70%);
opacity: 0;
transition: opacity 0.3s;
}

.register:hover::before {
opacity: 1;
animation: rotate 2s linear infinite;
}

.ai-nav-btn {
padding: 8px 16px;
border-radius: 30px;
font-size: 14px;
font-weight: 500;
cursor: pointer;
transition: all 0.3s;
border: 1px solid rgba(59, 130, 246, 0.4);
position: relative;
overflow: hidden;
display: flex;
align-items: center;
gap: 6px;
background: linear-gradient(135deg, #2563eb, #3b82f6, #8b5cf6);
color: white;
box-shadow: 0 4px 20px rgba(37, 99, 235, 0.5);
background-size: 200% 100%;
animation: gradientShift 3s infinite;
}

.ai-nav-btn:hover {
transform: translateY(-2px);
box-shadow: 0 8px 35px rgba(37, 99, 235, 0.7);
}

.ai-nav-btn::before {
content: '';
position: absolute;
top: -50%;
left: -50%;
width: 200%;
height: 200%;
background: radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 70%);
opacity: 0;
transition: opacity 0.3s;
}

.ai-nav-btn:hover::before {
opacity: 1;
animation: rotate 2s linear infinite;
}

.ai-nav-icon {
font-size: 16px;
filter: drop-shadow(0 0 4px white);
}

.ai-nav-text {
font-size: 14px;
font-weight: 500;
}

@keyframes rotate {
from { transform: rotate(0deg); }
to { transform: rotate(360deg); }
}

/* Hero 区域增强版 */
.hero {
position: relative;
min-height: 80vh;
display: flex;
align-items: center;
justify-content: center;
padding: 100px 20px 60px;
z-index: 10;
overflow: hidden;
}

.hero-content {
max-width: 1000px;
margin: 0 auto;
text-align: center;
position: relative;
}

.hero-badge {
display: inline-block;
padding: 10px 24px;
background: rgba(37, 99, 235, 0.15);
border-radius: 40px;
color: #1e40af;
font-size: 15px;
font-weight: 500;
margin-bottom: 30px;
backdrop-filter: blur(10px);
border: 1px solid rgba(59, 130, 246, 0.4);
box-shadow: 0 0 40px rgba(37, 99, 235, 0.2);
transition: all 0.3s;
cursor: default;
}

.hero-badge:hover {
transform: scale(1.05);
box-shadow: 0 0 50px rgba(37, 99, 235, 0.5);
}

.hero-title {
font-size: 72px;
font-weight: 700;
margin-bottom: 20px;
line-height: 1.1;
text-shadow: 0 0 40px rgba(37, 99, 235, 0.4);
}

.gradient-text {
background: linear-gradient(135deg, #60a5fa, #3b82f6, #8b5cf6, #c084fc);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-size: 300% 300%;
animation: gradientFlow 8s ease infinite;
filter: drop-shadow(0 0 25px rgba(59, 130, 246, 0.4));
}

@keyframes gradientFlow {
0%, 100% { background-position: 0% 50%; }
50% { background-position: 100% 50%; }
}

.hero-subtitle {
font-size: 20px;
color: #64748b;
margin-bottom: 40px;
letter-spacing: 1px;
}

.search-wrapper {
max-width: 600px;
margin: 0 auto 50px;
}

.search-box {
display: flex;
gap: 12px;
background: rgba(255, 255, 255, 0.8);
padding: 5px;
border-radius: 60px;
box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(59, 130, 246, 0.4);
border: 1px solid rgba(59, 130, 246, 0.3);
backdrop-filter: blur(10px);
transition: all 0.3s;
}

.search-box:hover {
transform: scale(1.02);
box-shadow: 0 30px 50px rgba(37, 99, 235, 0.2), 0 0 0 2px rgba(59, 130, 246, 0.5);
}

.search-box input {
flex: 1;
padding: 18px 25px;
border: none;
border-radius: 60px;
font-size: 16px;
outline: none;
background: transparent;
color: #334155;
}

.search-box input::placeholder {
color: #94a3b8;
}

.search-btn {
padding: 12px 30px;
background: linear-gradient(90deg, #2563eb, #3b82f6, #8b5cf6);
border: none;
border-radius: 60px;
color: white;
font-size: 16px;
font-weight: 500;
cursor: pointer;
display: flex;
align-items: center;
gap: 8px;
transition: all 0.3s;
position: relative;
overflow: hidden;
background-size: 200% 100%;
}

.search-btn::before {
content: '';
position: absolute;
top: -50%;
left: -50%;
width: 200%;
height: 200%;
background: radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 70%);
opacity: 0;
transition: opacity 0.3s;
}

.search-btn:hover::before {
opacity: 1;
animation: rotate 2s linear infinite;
}

.search-btn:hover {
transform: translateX(5px);
box-shadow: 0 10px 35px rgba(37, 99, 235, 0.6);
}

.search-icon {
width: 20px;
height: 20px;
}

.hero-stats {
display: flex;
justify-content: center;
gap: 60px;
}

.stat-item {
text-align: center;
cursor: default;
transition: all 0.3s;
padding: 15px 25px;
border-radius: 20px;
background: rgba(255, 255, 255, 0.7);
backdrop-filter: blur(5px);
border: 1px solid rgba(59, 130, 246, 0.3);
box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.stat-item:hover {
transform: translateY(-5px);
background: rgba(37, 99, 235, 0.15);
border-color: #3b82f6;
box-shadow: 0 10px 35px rgba(37, 99, 235, 0.3);
}

.stat-number {
display: block;
font-size: 36px;
font-weight: 700;
background: linear-gradient(135deg, #334155, #1e293b);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
margin-bottom: 5px;
}

.stat-label {
color: #64748b;
font-size: 16px;
font-weight: 500;
}

/* 动态波浪 */
.hero-wave {
position: absolute;
bottom: 0;
left: 0;
width: 100%;
z-index: 5;
}

.hero-wave svg {
width: 100%;
height: auto;
display: block;
}

/* 模块标签增强版 */
.module-tabs-wrapper {
position: relative;
z-index: 20;
padding: 20px 20px 30px;
}

.module-tabs {
max-width: 1200px;
margin: 0 auto;
display: flex;
gap: 15px;
padding: 12px;
background: rgba(255, 255, 255, 0.8);
backdrop-filter: blur(20px);
border-radius: 60px;
border: 1px solid rgba(59, 130, 246, 0.3);
box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.tab-btn {
flex: 1;
display: flex;
align-items: center;
gap: 12px;
padding: 15px 20px;
border-radius: 50px;
cursor: pointer;
transition: all 0.3s;
background: transparent;
position: relative;
overflow: hidden;
border: 1px solid transparent;
}

.tab-btn::before {
content: '';
position: absolute;
top: -100%;
left: -100%;
width: 300%;
height: 300%;
background: radial-gradient(circle, rgba(59, 130, 246, 0.25) 0%, transparent 70%);
opacity: 0;
transition: opacity 0.3s;
}

.tab-btn:hover::before {
opacity: 1;
animation: rotate 3s linear infinite;
}

.tab-glow {
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(59, 130, 246, 0.4) 0%, transparent 70%);
opacity: 0;
transition: opacity 0.3s;
pointer-events: none;
}

.tab-btn:hover .tab-glow {
opacity: 1;
}

.tab-btn.active {
background: linear-gradient(135deg, rgba(37, 99, 235, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%);
border-color: rgba(59, 130, 246, 0.8);
box-shadow: 0 10px 25px rgba(37, 99, 235, 0.4), 0 0 30px rgba(139, 92, 246, 0.3);
animation: gradientShift 3s infinite;
background-size: 200% 100%;
}

.tab-num {
font-size: 24px;
font-weight: 700;
color: #60a5fa;
opacity: 0.6;
transition: all 0.3s;
}

.tab-btn.active .tab-num {
opacity: 1;
color: #3b82f6;
text-shadow: 0 0 25px #60a5fa;
}

.tab-btn.active .tab-text h3 {
color: #1e40af;
}

.tab-btn.active .tab-text p {
color: #3b82f6;
}

.tab-text h3 {
font-size: 16px;
font-weight: 600;
color: #334155;
margin-bottom: 4px;
}

.tab-text p {
font-size: 12px;
color: #64748b;
}

/* 专业列表区域 */
.majors-section {
position: relative;
z-index: 20;
padding: 0 20px 60px;
max-width: 1000px;
margin: 0 auto;
}

.major-grid {
display: flex;
flex-direction: column;
gap: 16px;
}

.major-item {
display: flex;
justify-content: space-between;
align-items: center;
padding: 24px 30px;
background: rgba(255, 255, 255, 0.7);
backdrop-filter: blur(10px);
border-radius: 24px;
cursor: pointer;
transition: all 0.3s;
border: 1px solid rgba(59, 130, 246, 0.3);
position: relative;
overflow: hidden;
box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.item-glow {
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(59, 130, 246, 0.25) 0%, transparent 70%);
opacity: 0;
transition: opacity 0.3s;
pointer-events: none;
}

.major-item:hover .item-glow {
opacity: 1;
}

.major-item:hover {
transform: translateX(10px) scale(1.02);
border-color: #60a5fa;
box-shadow: 0 25px 45px rgba(37, 99, 235, 0.4);
}

.major-info {
display: flex;
flex-direction: column;
gap: 6px;
}

.major-name {
font-size: 20px;
font-weight: 600;
color: #334155;
}

.college-name {
font-size: 15px;
color: #64748b;
}

.school-badge {
padding: 10px 20px;
background: rgba(37, 99, 235, 0.15);
border-radius: 40px;
color: #1e40af;
font-size: 15px;
font-weight: 500;
border: 1px solid rgba(59, 130, 246, 0.4);
box-shadow: 0 0 15px rgba(37, 99, 235, 0.2);
}

/* AI助手增强版 */
.ai-assistant {
position: fixed;
right: 40px;
bottom: 40px;
z-index: 100;
transition: all 0.3s;
}

.ai-button {
position: relative;
display: flex;
align-items: center;
gap: 12px;
padding: 18px 36px;
background: linear-gradient(135deg, #2563eb, #3b82f6, #8b5cf6);
border-radius: 60px;
color: white;
cursor: pointer;
box-shadow: 0 15px 35px rgba(37, 99, 235, 0.5);
transition: all 0.3s;
overflow: hidden;
background-size: 200% 100%;
animation: gradientShift 3s infinite;
}

.ai-glow {
position: absolute;
top: -50%;
left: -50%;
width: 200%;
height: 200%;
background: radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 70%);
opacity: 0;
transition: opacity 0.3s;
animation: rotate 3s linear infinite;
}

.ai-button:hover .ai-glow {
opacity: 1;
}

.ai-button:hover {
transform: translateY(-5px) scale(1.1);
box-shadow: 0 25px 45px rgba(37, 99, 235, 0.7);
}

.ai-icon {
font-size: 26px;
filter: drop-shadow(0 0 8px white);
}

.ai-text {
font-size: 18px;
font-weight: 500;
}

.ai-pulse {
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
border-radius: 60px;
background: linear-gradient(135deg, #2563eb, #3b82f6);
animation: pulse 2s infinite;
z-index: -1;
}

@keyframes pulse {
0% {
transform: scale(1);
opacity: 0.6;
}
100% {
transform: scale(1.6);
opacity: 0;
}
}

/* 浮动装饰形状增强版 - 调亮 */
.floating-shapes {
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
pointer-events: none;
z-index: 6;
}

.shape {
position: absolute;
background: linear-gradient(135deg, rgba(37, 99, 235, 0.25), rgba(139, 92, 246, 0.25));
border-radius: 50%;
filter: blur(80px);
}

.shape-1 {
width: 500px;
height: 500px;
top: 10%;
left: 5%;
animation: floatShape1 20s infinite;
}

.shape-2 {
width: 600px;
height: 600px;
bottom: 10%;
right: 5%;
background: linear-gradient(135deg, rgba(139, 92, 246, 0.25), rgba(37, 99, 235, 0.25));
animation: floatShape2 25s infinite reverse;
}

.shape-3 {
width: 400px;
height: 400px;
top: 40%;
right: 20%;
background: linear-gradient(135deg, rgba(59, 130, 246, 0.25), rgba(147, 197, 253, 0.25));
animation: floatShape3 15s infinite;
}

@keyframes floatShape1 {
0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
33% { transform: translate(50px, -50px) rotate(120deg) scale(1.15); }
66% { transform: translate(-40px, 40px) rotate(240deg) scale(0.95); }
}

@keyframes floatShape2 {
0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
33% { transform: translate(-60px, 40px) rotate(-120deg) scale(1.2); }
66% { transform: translate(50px, -50px) rotate(-240deg) scale(0.9); }
}

@keyframes floatShape3 {
0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
33% { transform: translate(40px, 50px) rotate(180deg) scale(1.15); }
66% { transform: translate(-50px, -40px) rotate(360deg) scale(0.95); }
}

/* 响应式 */
/* 移动设备 */
@media (max-width: 768px) {
.nav-container {
padding: 0 20px;
flex-direction: column;
gap: 15px;
}

.menu {
display: none;
}

.right {
flex-wrap: wrap;
justify-content: center;
}

.hero-title {
font-size: 48px;
}

.hero-stats {
gap: 30px;
flex-direction: column;
}

.module-tabs {
flex-direction: column;
border-radius: 30px;
}

.major-item {
padding: 20px;
flex-direction: column;
align-items: flex-start;
gap: 15px;
}

.school-badge {
align-self: flex-start;
}

.ai-nav-btn {
font-size: 12px;
padding: 6px 12px;
}

.ai-nav-text {
font-size: 12px;
}
}

/* 小屏幕笔记本电脑 */
@media (min-width: 769px) and (max-width: 1024px) {
.nav-container {
padding: 0 30px;
}

.menu {
gap: 25px;
}

.menu-item {
font-size: 14px;
}

.hero-title {
font-size: 60px;
}

.hero-stats {
gap: 40px;
}

.module-tabs {
padding: 10px;
}

.tab-btn {
padding: 12px 16px;
}

.tab-text h3 {
font-size: 14px;
}

.tab-text p {
font-size: 11px;
}

.major-item {
padding: 20px 25px;
}

.major-name {
font-size: 18px;
}

.college-name {
font-size: 14px;
}
}

/* 中等屏幕电脑 */
@media (min-width: 1025px) and (max-width: 1440px) {
.nav-container {
padding: 0 40px;
}

.hero-title {
font-size: 72px;
}

.hero-stats {
gap: 50px;
}

.module-tabs {
max-width: 1100px;
}

.majors-section {
max-width: 900px;
}
}

/* 大屏幕电脑 */
@media (min-width: 1441px) {
.nav-container {
max-width: 1400px;
padding: 0 50px;
}

.hero-title {
font-size: 84px;
}

.hero-content {
max-width: 1200px;
}

.module-tabs {
max-width: 1300px;
}

.majors-section {
max-width: 1100px;
}

.major-item {
padding: 28px 35px;
}

.major-name {
font-size: 22px;
}

.college-name {
font-size: 16px;
}
}
</style>