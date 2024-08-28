import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Post from '../views/Post.vue';
import Post2 from '../views/Post2.vue';
import Post3 from '../views/Post3.vue';


// Définir les routes
const routes = [
  { path: '/', component: Home },
  { path: '/post/:id', component: Post, name: 'Post' },
  { path: '/post2/:id', component: Post2, name: 'Post2' },
  { path: '/post3/:id', component: Post3, name: 'Post3' } 
];

// Créer le routeur
const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
