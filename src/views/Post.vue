<template>
  <div v-if="post">
    <h1>{{ post.title }}</h1>
    <div v-html="post.content"></div>
    <img v-if="post.image" :src="post.image" :alt="post.title" />
  </div>
  <div v-else>
    <p>Article non trouvé</p>
  </div>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      post: null
    };
  },
  created() {
    // Vérifiez si les données des posts sont disponibles avant d'essayer de les utiliser
    if (!Array.isArray(this.posts)) {
      console.error('Les données des posts sont manquantes ou mal formatées.', this.posts);
      return;
    }
    
    const postId = Number(this.$route.params.id); // Assurez-vous que l'id est un nombre
    this.post = this.posts.find(post => post.id === postId);

    if (!this.post) {
      console.error('Aucun article trouvé avec l\'id:', postId);
    }
  }
}
</script>
