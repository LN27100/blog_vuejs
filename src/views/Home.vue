<template>
    <div>
      <h1>Bienvenue sur mon blog</h1>
      <BlogList :posts="posts" />
    </div>
  </template>
  
  <script>
  import BlogList from '../components/BlogList.vue';
  
  export default {
    components: {
      BlogList
    },
    data() {
      return {
        posts: [
          { id: 1, title: 'Premier Article', content: 'Contenu du premier article.' },
          { id: 2, title: 'Deuxième Article', content: 'Contenu du deuxième article.' }
        ]
      };
    }
  }
  </script>
  
  <style scoped>
  /* Styles pour Home.vue */

  h1 {
color: white;
  }

  </style>
  