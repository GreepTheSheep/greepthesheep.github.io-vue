import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
        path: '/',
        name: 'Home',
        component: () => import('./views/HomeView.vue')
    },
    {
      path: '/trackmania',
      name: 'Trackmania',
      component: () => import('./views/Trackmania.vue')
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('./views/Contact.vue')
    },
    {
      path: '/github-repos',
      name: 'GitHub Repos',
      component: () => import('./views/GitHubRepos.vue')
    },
    {
      path: '/techstack',
      name: 'Teckstack',
      component: () => import('./views/Techstack.vue')
    }
  ]
});

export default router;
