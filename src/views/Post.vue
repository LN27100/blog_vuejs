<template>
    <div>
      <h1>{{ post.title }}</h1>
      <p>{{ post.content }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        post: { title: 'Article Non Trouvé', content: 'Aucun contenu disponible.' }
      };
    },
    created() {
      const postId = this.$route.params.id;
      // Ici, tu peux ajouter la logique pour récupérer l'article par son ID
    }
  }
  </script>
  
  <style scoped>
  /* Styles pour Post.vue */
  </style>
  