<template>
    <div>
      <button @click="goHome" class="back-button">Accueil</button>
  
      <div>
        <div v-if="post">
          <h1>{{ post.title }}</h1>
  
          <!-- Affichage de l'image principale -->
          <img v-if="post.images && post.images.length > 0" 
               :src="post.images[0].url" 
               :alt="post.title" 
               class="picture"/>
  
          <div class="describ" v-html="post.content"></div>
  
          <!-- Affichage des autres images -->
          <div v-if="post.images && post.images.length > 1" class="image-gallery">
            <div v-for="(image, index) in post.images.slice(1)" 
                 :key="index" 
                 class="image-container">
              <img :src="image.url" :alt="post.title" class="picture"/>
            </div>
          </div>
        </div>
        <div v-else>
          <p>Article non trouvé</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import posts2 from '@/data/posts2.json';
  
  export default {
    data() {
      return {
        post: null
      };
    },
    created() {
      const postId = Number(this.$route.params.id);
      this.post = posts2.find(post => post.id === postId);
  
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
    object-fit: cover;
    display: block;
    margin: 0.5rem auto;
  }
  
  .image-gallery {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
  }
  
  .image-container {
    flex: 1 1 calc(50% - 1rem);
    max-width: calc(50% - 1rem);
    box-sizing: border-box;
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
  