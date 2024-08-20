<template>
  <button @click="goHome" class="back-button">Accueil</button>

  <div>
    <div v-if="post">
      <h1>{{ post.title }}</h1>
      <img v-if="post.image" :src="post.image" :alt="post.title" class="picture"/>
      <div class="describ" v-html="post.content"></div>
      <img v-if="post.image1" :src="post.image1" :alt="post.title" class="picture"/>
      <img v-if="post.image2" :src="post.image2" :alt="post.title" class="picture"/>
      <img v-if="post.image3" :src="post.image3" :alt="post.title" class="picture"/>
      <img v-if="post.image4" :src="post.image4" :alt="post.title" class="picture"/>
      <img v-if="post.image5" :src="post.image5" :alt="post.title" class="picture"/>
      <img v-if="post.image6" :src="post.image6" :alt="post.title" class="picture"/>
      <img v-if="post.image7" :src="post.image7" :alt="post.title" class="picture"/>
      <img v-if="post.image8" :src="post.image8" :alt="post.title" class="picture"/>
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

.picture {
  width: 20rem; /* Vous pouvez ajuster cette largeur selon vos besoins */
  height: 15rem; /* Vous pouvez ajuster cette hauteur selon vos besoins */
  object-fit: cover; /* Assure que l'image remplit le conteneur sans déformation */
  display: block;
  margin: 1rem auto; /* Centre les images horizontalement et ajoute un espace vertical */
}

.back-button {
  display: inline-block;
  padding: 0.5rem 1rem; /* Ajusté pour être plus visible */
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
