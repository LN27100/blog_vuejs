<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { ref, onMounted, provide } from 'vue';
import axios from 'axios';

export default {
  setup() {
    const posts = ref([]);

    onMounted(() => {
      axios.get('/data/posts.json')
        .then(response => {
          posts.value = response.data;
        })
        .catch(error => {
          console.error('Erreur lors de la récupération des articles:', error);
        });
    });

    // Fournir les `posts` pour les composants enfants
    provide('posts', posts);

    return { posts };
  }
}
</script>
