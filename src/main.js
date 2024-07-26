import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; 
import './assets/styles.css'; // Import des styles globaux

// Créer et monter l'application Vue
createApp(App)
  .use(router)
  .mount('#app');
