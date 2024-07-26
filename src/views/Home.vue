<template>

  <!-- Conteneur pour centrer le texte -->
  <div class="warp-container">
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
      </div>

  <div>
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
export default {
  props: {
    posts: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      // Créer une copie pour une utilisation interne
      //Cette copie (localPosts) peut être manipulée (triée, filtrée, etc.) sans affecter directement le tableau original posts reçu du parent.
      localPosts: this.posts.slice() 
    };
  }
}
</script>


<style scoped>
ul {
  list-style-type: none;
  padding: 2rem;
}

li {
margin-bottom: 1rem;
border-bottom: 1px solid #2986cc;
}

a {
  color: #9B2E06;
  font-size: 1.2rem;
  font-weight: bold;
}

/* Conteneur de la phrase */
.warp-container {
  left: 0;
  right: 0;
  display: flex;
  justify-content: center; 
  align-items: flex-start; 
  width: 100vw; /* Assure que le conteneur prend la largeur de l'écran */
  height: 220px;
  margin: 0;
  padding: 0;
  box-sizing: border-box; /* Inclus padding et bordure dans la largeur */
  transform: translateX(-27%); /* Ajuste le conteneur pour un centrage exact */
}

[class*='warp__'] {
  display: block;
  position: absolute;
}

.warp__0 {
  font: normal 30px/1 'Chelsea Market';
  color: #2986cc;
  transform-origin: 50% 34px;
  transform: translate(20.4765px, 96.8363px) rotate(1.041106rad);
}

.warp__1 {
  font: normal 30px/1 'Chelsea Market';
  color: #2986cc;
  transform-origin: 50% 34px;
  transform: translate(29.799999999999997px, 115.91820000000001px) rotate(0.952006rad);
}

.warp__2 {
  font: normal 30px/1 'Chelsea Market';
  color: #2986cc;
  transform-origin: 50% 34px;
  transform: translate(45.7798px, 136.4852px) rotate(0.836371rad);
}

.warp__3 {
  font: normal 30px/1 'Chelsea Market';
  color: #2986cc;
  transform-origin: 50% 34px;
  transform: translate(64.5144px, 155.2149px) rotate(0.705882rad);
}

.warp__4 {
  font: normal 30px/1 'Chelsea Market';
  color: #2986cc;
  transform-origin: 50% 34px;
  transform: translate(88.0992px, 167.5382px) rotate(0.600926rad);
}

.warp__5 {
  font: normal 30px/1 'Chelsea Market';
  color: #2986cc;
  transform-origin: 50% 34px;
  transform: translate(98.1284px, 177.9316px) rotate(0.49481rad);
}

.warp__6 {
  font: normal 30px/1 'Chelsea Market';
  color: #2986cc;
  transform-origin: 50% 34px;
  transform: translate(122.4804px, 189.1036px) rotate(0.350878rad);
}

.warp__7 {
  font: normal 30px/1 'Chelsea Market';
  color: #2986cc;
  transform-origin: 50% 34px;
  transform: translate(148.4939px, 196.5405px) rotate(0.218142rad);
}

.warp__8 {
  font: normal 30px/1 'Chelsea Market';
  color: #2986cc;
  transform-origin: 50% 34px;
  transform: translate(174.9594px, 200.761px) rotate(0.094828rad);
}

.warp__9 {
  font: normal 30px/1 'Chelsea Market';
  color: #2986cc;
  transform-origin: 50% 34px;
  transform: translate(202.454px, 201.8496px) rotate(-0.01024rad);
}

.warp__10 {
  font: normal 30px/1 'Chelsea Market';
  color: #2986cc;
  transform-origin: 50% 34px;
  transform: translate(229.0243px, 200.2847px) rotate(-0.102849rad);
}

.warp__11 {
  font: normal 30px/1 'Chelsea Market';
  color: #2986cc;
  transform-origin: 50% 34px;
  transform: translate(255.8571px, 196.3169px) rotate(-0.1833rad);
}

.warp__12 {
  font: normal 30px/1 'Chelsea Market';
  color: #2986cc;
  transform-origin: 50% 34px;
  transform: translate(284.1316px, 191.2629px) rotate(-0.242992rad);
}

.warp__13 {
  font: normal 30px/1 'Chelsea Market';
  color: #2986cc;
  transform-origin: 50% 34px;
  transform: translate(301.5984px, 185.0673px) rotate(-0.294055rad);
}

.warp__14 {
  font: normal 30px/1 'Chelsea Market';
  color: #2986cc;
  transform-origin: 50% 34px;
  transform: translate(327.3747px, 176.5083px) rotate(-0.345868rad);
}

.warp__15 {
  font: normal 30px/1 'Chelsea Market';
  color: #2986cc;
  transform-origin: 50% 34px;
  transform: translate(355.8px, 165.9019px) rotate(-0.358303rad);
}

.warp__16 {
  font: normal 30px/1 'Chelsea Market';
  color: #2986cc;
  transform-origin: 50% 34px;
  transform: translate(380.5973px, 157.0402px) rotate(-0.327675rad);
}

.warp__17 {
  font: normal 30px/1 'Chelsea Market';
  color: #2986cc;
  transform-origin: 50% 34px;
  transform: translate(406.3153px, 148.7839px) rotate(-0.292972rad);
}

.warp__18 {
  font: normal 30px/1 'Chelsea Market';
  color: #2986cc;
  transform-origin: 50% 34px;
  transform: translate(431.6917px, 141.904px) rotate(-0.256447rad);
}

.warp__19 {
  font: normal 30px/1 'Chelsea Market';
  color: #2986cc;
  transform-origin: 50% 34px;
  transform: translate(455.8316px, 135.7603px) rotate(-0.212781rad);
}

.warp__20 {
  font: normal 30px/1 'Chelsea Market';
  color: #2986cc;
  transform-origin: 50% 34px;
  transform: translate(483.0262px, 131.8926px) rotate(-0.174111rad);
}

.warp__21 {
  font: normal 30px/1 'Chelsea Market';
  color: #2986cc;
  transform-origin: 50% 34px;
  transform: translate(495.184px, 129.9196px) rotate(-0.14718rad);
}

.warp__22 {
  font: normal 30px/1 'Chelsea Market';
  color: #2986cc;
  transform-origin: 50% 34px;
  transform: translate(507.2047px, 127.55590000000001px) rotate(-0.098505rad);
}

.warp__23 {
  font: normal 30px/1 'Chelsea Market';
  color: #2986cc;
  transform-origin: 50% 34px;
  transform: translate(533.2073px, 126.13470000000001px) rotate(-0.026954rad);
}

</style>
