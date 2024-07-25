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
      this.post = this.posts.find(post => post.id == postId);
    }
  }
  </script>
  
  <style scoped>
  /* Styles pour Post.vue */
  </style>
  