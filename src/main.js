import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import Post from './views/Post.vue';
import './assets/styles.css';

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

// Créer et monter l'application Vue
const app = createApp(App);
app.use(router);
app.mount('#app');
