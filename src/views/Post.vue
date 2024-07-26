<template>
  <div v-if="post">
    <h1>{{ post.title }}</h1>
    <div v-html="post.content"></div> <!-- Contenu HTML de l'article -->
    <img v-if="post.image" :src="post.image" :alt="post.title" /> <!-- Affichage de l'image -->
  </div>
</template>

<script>
export default {
  props: ['posts'],
  data() {
    return {
      post: null
    };
  },
  created() {
    const postId = Number(this.$route.params.id); // Assurez-vous que l'id est un nombre
    this.post = this.posts.find(post => post.id === postId); // Trouver le bon post
  }
}
</script>
