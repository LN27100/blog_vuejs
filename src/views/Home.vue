<template>

  <div class="title-container">
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

  <div class="boules-container">
    <img src="/public/img/boule2.png" alt="dragon ball 2 étoiles" class="cristalBall2">
    <img src="/public/img/boule1.png" alt="dragon ball 1 étoile" class="cristalBall">
    <img src="/public/img/boule3.png" alt="dragon ball 3 étoiles" class="cristalBall3">
    <img src="/public/img/boule4.png" alt="dragon ball 4 étoiles" class="cristalBall4">
    <img src="/public/img/boule5.png" alt="dragon ball 5 étoiles" class="cristalBall5">
    <img src="/public/img/boule7.png" alt="dragon ball 7 étoiles" class="cristalBall7">
    <img src="/public/img/boule6.png" alt="dragon ball 6 étoiles" class="cristalBall6">
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
  margin-left: 15rem;
}

.title {
  display: inline-block;
  letter-spacing: -15px;
  font-size: 25px;
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
.warp__0 { transform: translate(20px, 90px) rotate(1.041106rad); }
.warp__1 { transform: translate(30px, 110px) rotate(0.952006rad); }
.warp__3 { transform: translate(60px, 150px) rotate(0.705882rad); }
.warp__4 { transform: translate(80px, 168px) rotate(0.600926rad); }
.warp__5 { transform: translate(90px, 180px) rotate(0.49481rad); }
.warp__6 { transform: translate(110px, 190px) rotate(0.350878rad); }
.warp__8 { transform: translate(150px, 195px) rotate(0.094828rad); color: #007acc; }
.warp__9 { transform: translate(170px, 195px) rotate(-0.01024rad); color: #007acc; }
.warp__11 { transform: translate(215px, 190px) rotate(-0.1833rad); color: #007acc; }
.warp__12 { transform: translate(240px, 185px) rotate(-0.242992rad); color: #007acc; }
.warp__13 { transform: translate(261px, 180px) rotate(-0.294055rad); color: #007acc; }
.warp__14 { transform: translate(285px, 170px) rotate(-0.345868rad); color: #53a3d7; }
.warp__15 { transform: translate(305px, 160px) rotate(-0.358303rad); color: #53a3d7; }
.warp__16 { transform: translate(325px, 150px) rotate(-0.327675rad); color: #53a3d7; }
.warp__18 { transform: translate(370px, 135px) rotate(-0.256447rad); color: #53a3d7; }
.warp__19 { transform: translate(392px, 130px) rotate(-0.212781rad); color: #53a3d7; }
.warp__20 { transform: translate(415px, 125px) rotate(-0.174111rad); color: #53a3d7; }
.warp__21 { transform: translate(430px, 120px) rotate(-0.14718rad); color: #53a3d7; }
.warp__22 { font-size: 35px; color: yellow; transform: translate(465px, 110px) rotate(-0.02699rad); }


/* Positionnement des boules de cristal en ligne */
.boules-container {
  display: flex;
  position: relative; /* positionnement personnalisé des images enfants */
}

.boules-container img {
  position: absolute;
  width: auto;
}

/* Positionnement personnalisé pour chaque boule */
.cristalBall {
  margin-top: -3rem;
  margin-left: 15rem;
  height: 5rem;
  width: auto;
}

.cristalBall2 {
  height: 4.7rem;
  width: auto;
  margin-top: 0rem;
  margin-left: 0rem;
}

.cristalBall3 {
  margin-top: 7rem;
  margin-left: 10rem;
  height: 7rem;
  width: auto;
}

.cristalBall4 {
  margin-top: 1rem;
  margin-left: 27rem;
  height: 4.5rem;
  width: auto;
}

.cristalBall5 {
  margin-top: 9rem;
  margin-left: 46rem;
  height: 4rem;
  width: auto;
}

.cristalBall6 {
  margin-top: 1.5rem;
  margin-left: 54rem;
  height: 4.5rem;
  width: auto;
}

.cristalBall7 {
  margin-top: -1rem;
  margin-left: 38rem;
  height: 3.5rem;
  width: auto;
}

ul {
  margin-top: 18rem;
  margin-left:2rem;
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



/* RESPONSIVE */
@media (max-width: 768px) {
  .title {
    font-size: 20px;
    letter-spacing: -10px;
  }

  .cristalBall, .cristalBall2 {
    height: 4rem;
    margin-left: 0;
    margin-bottom: 0.25rem;
  }

  /* Ajustement des transformations pour écrans plus petits */
  .warp__0 { transform: translate(15px, 75px) rotate(1.041106rad); }
  .warp__1 { transform: translate(25px, 95px) rotate(0.952006rad); }
  .warp__3 { transform: translate(40px, 135px) rotate(0.705882rad); }
  .warp__4 { transform: translate(55px, 155px) rotate(0.600926rad); }
  .warp__5 { transform: translate(70px, 165px) rotate(0.49481rad); }
  .warp__6 { transform: translate(90px, 175px) rotate(0.350878rad); }
  .warp__8 { transform: translate(120px, 180px) rotate(0.094828rad); }
  .warp__9 { transform: translate(140px, 180px) rotate(-0.01024rad); }
  .warp__11 { transform: translate(180px, 175px) rotate(-0.1833rad); }
  .warp__12 { transform: translate(200px, 170px) rotate(-0.242992rad); }
  .warp__13 { transform: translate(220px, 160px) rotate(-0.294055rad); }
  .warp__14 { transform: translate(250px, 155px) rotate(-0.345868rad); }
  .warp__15 { transform: translate(270px, 145px) rotate(-0.358303rad); }
  .warp__16 { transform: translate(290px, 135px) rotate(-0.327675rad); }
  .warp__18 { transform: translate(330px, 120px) rotate(-0.256447rad); }
  .warp__19 { transform: translate(350px, 115px) rotate(-0.212781rad); }
  .warp__20 { transform: translate(370px, 110px) rotate(-0.174111rad); }
  .warp__21 { transform: translate(390px, 110px) rotate(-0.14718rad); }
  .warp__22 { font-size: 25px; transform: translate(420px, 95px) rotate(-0.02699rad); }

  ul {
    margin-top: 5rem;
  }

  li {
    margin-bottom: 0.5rem;
  }
}

@media (max-width: 480px) {
  .title {
    font-size: 15px;
    letter-spacing: -12px;
  }

  .cristalBall, .cristalBall2 {
    height: 3rem;
  }


  ul {
    margin-top: 3rem;
  }

  li {
    margin-bottom: 0.25rem;
  }
}
</style>
