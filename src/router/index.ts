import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('../views/index.vue')
    },
    {
      path: '/homepage',
      name: 'homepage',
      component: () => import('../views/School of Mining Engineering/HomePage.vue')
    },
    {
      path: '/talent-cultivation',
      name: 'talent-cultivation',
      component: () => import('../views/School of Mining Engineering/Mining/TalentCultivation.vue')
    },
    {
      path: '/course-center',
      name: 'course-center',
      component: () => import('../views/School of Mining Engineering/Mining/CourseCenter.vue')
    },
    {
      path: '/course-detail',
      name: 'course-detail',
      component: () => import('../views/School of Mining Engineering/Mining/CourseDetail.vue')
    },
    {
      path: '/knowledge-graph',
      name: 'knowledge-graph',
      component: () => import('../views/School of Mining Engineering/Mining/KnowledgeGraph.vue')
    },
    {
      path: '/knowledge-graph-course',
      name: 'knowledge-graph-course',
      component: () => import('../views/School of Mining Engineering/Mining/KnowledgeGraphCourse.vue')
    },
    {
      path: '/qa-center',
      name: 'qa-center',
      component: () => import('../views/School of Mining Engineering/Mining/QACenter.vue')
    },
    {
      path: '/practice-training',
      name: 'practice-training',
      component: () => import('../views/School of Mining Engineering/Mining/PracticeTraining.vue')
    },
    {
      path: '/mining-engineering',
      name: 'mining-engineering',
      component: () => import('../views/School of Mining Engineering/Mining/MiningEngineering.vue')
    },
    {
      path: '/marketing-dashboard',
      name: 'marketing-dashboard',
      component: () => import('../views/Marketing Major/MarketingDashboard.vue')
    },
    {
      path: '/english',
      name: 'english',
      component: () => import('../views/Schllol of Foreign Languages/English/English.vue')
    }
  ]
})

export default router
