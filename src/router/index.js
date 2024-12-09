import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      //? El path que usaremos para navegar
      path: '/counter',
      //? El nombre de la ruta
      name: 'counter',
      //? Ruta física del archivo que usa esta ruta
      component: () => import('../modules/counter/components/Counter.vue'),
    },
    {
      path: '/todo-list',
      name: 'todolist',
      component: () => import('../modules/todolist/components/TodoList.vue'),
    },
  ],
})

export default router
