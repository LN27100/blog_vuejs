<template>
  <div>
    <h1>Bienvenue sur le blog de Dragon Ball Z</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <router-link :to="{ name: 'Post', params: { id: post.id } }">
          {{ post.title }}
        </router-link>
        <p>{{ post.summary }}</p> 
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      posts: [] // Stockage des articles ici
    };
  },
  mounted() {
    axios.get('/data/posts.json') // Chargement des données JSON
      .then(response => {
        this.posts = response.data;
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des articles:', error);
      });
  }
}
</script>


<style scoped>
h1 {
  color: #2986cc;
  text-align: center;
  font-weight: bold;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin-bottom: 15px;
}
</style>
