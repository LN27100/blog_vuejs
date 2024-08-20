<template>
      <button @click="goHome" class="back-button">Accueil</button>

  <div>
    <div v-if="post">
      <h1>{{ post.title }}</h1>
      <img v-if="post.image" :src="post.image" :alt="post.title" class="pictures"/>
      <div class="describ" v-html="post.content"></div>
    </div>
    <div v-else>
      <p>Article non trouvé</p>
    </div>
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
    if (!Array.isArray(this.posts)) {
      console.error('Les données des posts sont manquantes ou mal formatées.', this.posts);
      return;
    }
    
    const postId = Number(this.$route.params.id);
    this.post = this.posts.find(post => post.id === postId);

    if (!this.post) {
      console.error('Aucun article trouvé avec l\'id:', postId);
    }
  },
  methods: {
    goHome() {
      this.$router.push('/'); // Redirige vers la page d'accueil
    }
  }
}
</script>

<style scoped>
.describ {
  margin-left: 2rem;
  color: #333333;
}

.pictures {
  display: block;
  margin: 0 auto;
  width: 20rem;
  height: auto;
}

.back-button {
  display: inline-block;
  padding: 0.5rem 0.5rem;
  margin-top: 1rem;
  margin-left: 1rem;
  background-color: yellow;
  color: black;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
}

.back-button:hover {
  background-color: #005a99;
  color: white;
}
</style>
