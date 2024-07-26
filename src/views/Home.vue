<template>
  <div>
    <!-- Conteneur pour centrer le texte -->
    <div class="warp-container">
      <div class="warp" aria-labelledby="warp-label">
        <span aria-role="presentation">
          <!-- Lettres séparées comme dans votre code original -->
          <span class="warp__0">L</span>
          <span class="warp__1">e</span>
          <span class="warp__2"></span>
          <span class="warp__3">b</span>
          <span class="warp__4">l</span>
          <span class="warp__5">o</span>
          <span class="warp__6">g</span>
          <span class="warp__7"></span>
          <span class="warp__8">d</span>
          <span class="warp__9">e</span>
          <span class="warp__10"></span>
          <span class="warp__11">D</span>
          <span class="warp__12">r</span>
          <span class="warp__13">a</span>
          <span class="warp__14">g</span>
          <span class="warp__15">o</span>
          <span class="warp__16">n</span>
          <span class="warp__17"></span>
          <span class="warp__18">B</span>
          <span class="warp__19">a</span>
          <span class="warp__20">l</span>
          <span class="warp__21">l</span>
          <span class="warp__22"></span>
          <span class="warp__23">Z</span>
        </span>
      </div>
    </div>

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
ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 15px;
}


/* Conteneur de la phrase */
.warp-container {
  display: flex;
  justify-content: center; 
  align-items: flex-start; 
  height: 230px;
  margin: 0;
  padding: 0;
  top: 0; 
  transform: translateX(-50%); /* Ajuste le conteneur pour un centrage exact */
}

/* Style de la phrase */
.warp {
  position: relative;
  font: normal 30px/1 'Chelsea Market';
  color: #2986cc;
  white-space: nowrap; /* Empêche le texte de se casser sur plusieurs lignes */
}

[class*='warp__'] {
  display: block;
  position: absolute;
}
.warp__0 {
  transform-origin: 50% 34px;
  transform: translate(20.4765px, 96.8363px) rotate(1.041106rad);
}

.warp__1 {
  transform-origin: 50% 34px;
  transform: translate(29.799999999999997px, 115.91820000000001px) rotate(0.952006rad);
}

.warp__2 {
  transform-origin: 50% 34px;
  transform: translate(45.7798px, 136.4852px) rotate(0.836371rad);
}

.warp__3 {
  transform-origin: 50% 34px;
  transform: translate(64.5144px, 155.2149px) rotate(0.705882rad);
}

.warp__4 {
  transform-origin: 50% 34px;
  transform: translate(88.0992px, 167.5382px) rotate(0.600926rad);
}

.warp__5 {
  transform-origin: 50% 34px;
  transform: translate(98.1284px, 177.9316px) rotate(0.49481rad);
}

.warp__6 {
  transform-origin: 50% 34px;
  transform: translate(122.4804px, 189.1036px) rotate(0.350878rad);
}

.warp__7 {
  transform-origin: 50% 34px;
  transform: translate(148.4939px, 196.5405px) rotate(0.218142rad);
}

.warp__8 {
  transform-origin: 50% 34px;
  transform: translate(174.9594px, 200.761px) rotate(0.094828rad);
}

.warp__9 {
  transform-origin: 50% 34px;
  transform: translate(202.454px, 201.8496px) rotate(-0.01024rad);
}

.warp__10 {
  transform-origin: 50% 34px;
  transform: translate(229.0243px, 200.2847px) rotate(-0.102849rad);
}

.warp__11 {
  transform-origin: 50% 34px;
  transform: translate(255.8571px, 196.3169px) rotate(-0.1833rad);
}

.warp__12 {
  transform-origin: 50% 34px;
  transform: translate(284.1316px, 191.2629px) rotate(-0.242992rad);
}

.warp__13 {
  transform-origin: 50% 34px;
  transform: translate(301.5984px, 185.0673px) rotate(-0.294055rad);
}

.warp__14 {
  transform-origin: 50% 34px;
  transform: translate(327.3747px, 176.5083px) rotate(-0.345868rad);
}

.warp__15 {
  transform-origin: 50% 34px;
  transform: translate(355.8px, 165.9019px) rotate(-0.358303rad);
}

.warp__16 {
  transform-origin: 50% 34px;
  transform: translate(380.5973px, 157.0402px) rotate(-0.327675rad);
}

.warp__17 {
  transform-origin: 50% 34px;
  transform: translate(406.3153px, 148.7839px) rotate(-0.292972rad);
}

.warp__18 {
  transform-origin: 50% 34px;
  transform: translate(431.6917px, 141.904px) rotate(-0.256447rad);
}

.warp__19 {
  transform-origin: 50% 34px;
  transform: translate(455.8316px, 135.7603px) rotate(-0.212781rad);
}

.warp__20 {
  transform-origin: 50% 34px;
  transform: translate(483.0262px, 131.8926px) rotate(-0.174111rad);
}

.warp__21 {
  transform-origin: 50% 34px;
  transform: translate(495.184px, 129.9196px) rotate(-0.14718rad);
}

.warp__22 {
  transform-origin: 50% 34px;
  transform: translate(507.2047px, 127.55590000000001px) rotate(-0.098505rad);
}

.warp__23 {
  transform-origin: 50% 34px;
  transform: translate(533.2073px, 126.13470000000001px) rotate(-0.026954rad);
}

</style>
