<template>
  <button @click="goHome" class="back-button">Accueil</button>

  <div>
    <div v-if="post">
      <h1>{{ post.title }}</h1>
      
      <!-- Affichage de l'image principale -->
      <img v-if="post.images && post.images.length > 0" 
           :src="post.images[0].url" 
           :alt="post.images[0].title" 
           class="picture"/>
      
      <div class="describ" v-html="post.content"></div>
      
      <!-- Affichage des autres images -->
      <div v-if="post.images && post.images.length > 1" class="image-gallery">
        <div v-for="(image, index) in post.images.slice(1)" 
             :key="index" 
             class="image-container">
          <img :src="image.url" :alt="image.title" class="picture"/>
          <p class="image-title">{{ image.title }}</p>
        </div>
      </div>
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
  width: 20rem; 
  height: 15rem;
  object-fit: cover; /* Assure que l'image remplit le conteneur sans déformation */
  display: block;
  margin: 0.5rem auto; /* Centre les images horizontalement et ajoute un espace vertical */
}

.image-gallery {
  display: flex;
  flex-wrap: wrap; /* Permet de passer à la ligne pour les images qui ne rentrent pas */
  gap: 1rem; /* Espace entre les images */
  justify-content: center;
}

.image-container {
  flex: 1 1 calc(50% - 1rem); /* Chaque conteneur prend 50% de la largeur moins l'espace */
  max-width: calc(50% - 1rem);
  box-sizing: border-box;
  text-align: center;
}

.image-title {
  font-size: 1rem;
  color: #666666;
  margin-top: 0.5rem;
}

.back-button {
  display: inline-block;
  padding: 0.5rem 1rem;
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
