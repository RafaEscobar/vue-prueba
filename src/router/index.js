import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/counter',
      name: 'counter',
      component: () => import('../components/Counter.vue'),
    },
    {
      path: '/todo-list',
      name: 'todolist',
      component: () => import('../components/TodoList.vue'),
    },
  ],
})

export default router
