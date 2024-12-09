import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/counter',
      name: 'counter',
      component: () => import('../modules/counter/components/Counter.vue'),
    },
    {
      path: '/todo-list',
      name: 'todolist',
      component: () => import('../modules/todolist/components/TodoList.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../modules/register/views/FormView.vue')
    }
  ],
})

export default router
