import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Post from '../views/Post.vue';

// Définir les routes
const routes = [
  { path: '/', component: Home },
  { path: '/post/:id', component: Post, name: 'Post' }
];

// Créer le routeur
const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
