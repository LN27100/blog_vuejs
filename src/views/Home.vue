<template>
  <div class="title-container">
    <img src="/public/img/boule2.png" alt="dragon ball 2 étoiles" class="cristalBall2">
    <div class="title">
      <span class="warp__0">L</span>
      <span class="warp__1">e</span>
      <span class="warp__3">b</span>
      <span class="warp__4">l</span>
      <span class="warp__5">o</span>
      <span class="warp__6">g</span>
      <span class="warp__8">d</span>
      <span class="warp__9">e</span>
      <span class="warp__11">D</span>
      <span class="warp__12">r</span>
      <span class="warp__13">a</span>
      <span class="warp__14">g</span>
      <span class="warp__15">o</span>
      <span class="warp__16">n</span>
      <span class="warp__18">B</span>
      <span class="warp__19">a</span>
      <span class="warp__20">l</span>
      <span class="warp__21">l</span>
      <span class="warp__22">Z</span>
    </div>
  </div>

  <div>
    <img src="/public/img/boule1.png" alt="dragon ball 1 étoile" class="cristalBall">
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

.title-container {
  text-align: center; 
  margin-top: 2rem;
}

.title {
  display: inline-block;
  letter-spacing: -2px; /* Réduction de l'espacement entre les lettres */
  font-size: 30px;
  font-family: 'Chelsea Market', cursive;
  font-weight: bold;
  color: #005a99;
  text-shadow: -1.5px -1.5px 0 black, 1.5px -1.5px 0 black, 
               -1.5px 1.5px 0 black, 1.5px 1.5px 0 black;
  margin-top: 0.5rem;
}

[class*='warp__'] {
  display: inline-block;
  position: relative;
}

/* transformations spécifiques */
.warp__0 { transform: translate(20.4765px, 96.8363px) rotate(1.041106rad); }
.warp__1 { transform: translate(29.799999999999997px, 115.91820000000001px) rotate(0.952006rad); }
.warp__3 { transform: translate(64.5144px, 155.2149px) rotate(0.705882rad); }
.warp__4 { transform: translate(88.0992px, 167.5382px) rotate(0.600926rad); }
.warp__5 { transform: translate(98.1284px, 177.9316px) rotate(0.49481rad); }
.warp__6 { transform: translate(122.4804px, 189.1036px) rotate(0.350878rad); }
.warp__8 { transform: translate(174.9594px, 200.761px) rotate(0.094828rad); color: #007acc; }
.warp__9 { transform: translate(202.454px, 201.8496px) rotate(-0.01024rad); color: #007acc; }
.warp__11 { transform: translate(255.8571px, 196.3169px) rotate(-0.1833rad); color: #007acc; }
.warp__12 { transform: translate(284.1316px, 191.2629px) rotate(-0.242992rad); color: #007acc; }
.warp__13 { transform: translate(301.5984px, 185.0673px) rotate(-0.294055rad); color: #007acc; }
.warp__14 { transform: translate(327.3747px, 176.5083px) rotate(-0.345868rad); color: #53a3d7; }
.warp__15 { transform: translate(355.8px, 165.9019px) rotate(-0.358303rad); color: #53a3d7; }
.warp__16 { transform: translate(380.6973px, 157.0402px) rotate(-0.327675rad); color: #53a3d7; }
.warp__18 { transform: translate(431.6917px, 141.904px) rotate(-0.256447rad); color: #53a3d7; }
.warp__19 { transform: translate(455.8316px, 135.7603px) rotate(-0.212781rad); color: #53a3d7; }
.warp__20 { transform: translate(483.0262px, 131.8926px) rotate(-0.174111rad); color: #53a3d7; }
.warp__21 { transform: translate(495.184px, 129.9196px) rotate(-0.14718rad); color: #53a3d7; }
.warp__22 { font-size: 45px; color: yellow; transform: translate(530.2073px, 116.13470000000001px) rotate(-0.02699rad); }

.cristalBall {
  height: 5rem;
  width: auto;
  margin-left: 5rem;
}

.cristalBall2 {
  height: 5rem;
  width: auto;
  margin-bottom: 0.5rem; /* Réduction de l'espace entre l'image et le titre */
}

ul {
  margin-top: 10rem;
  padding: 0;
  list-style-type: none;
}

li {
  margin-bottom: 1rem;
  border-bottom: 1px solid #2986cc;
}

a {
  color: #800000;
  font-size: 1.2rem;
  font-weight: bold;
}

p {
  color: #333333;
  font-weight: bold;
}
</style>
