<template>
     <div class="boules-container">
      <img src="/img/boule2.png" alt="dragon ball 2 étoiles" class="cristalBall2">
      <img src="/img/boule1.png" alt="dragon ball 1 étoile" class="cristalBall">
      <img src="/img/boule3.png" alt="dragon ball 3 étoiles" class="cristalBall3">
      <img src="/img/boule4.png" alt="dragon ball 4 étoiles" class="cristalBall4">
      <img src="/img/boule5.png" alt="dragon ball 5 étoiles" class="cristalBall5">
      <img src="/img/boule7.png" alt="dragon ball 7 étoiles" class="cristalBall7">
      <img src="/img/boule6.png" alt="dragon ball 6 étoiles" class="cristalBall6">
    </div>
</template>

<script>
export default {
   name: 'ImgBoules'
}
</script>

<style scoped>
/* Positionnement des boules de cristal en ligne */
.boules-container {
  display: flex;
  position: relative;
  /* positionnement personnalisé des images enfants */
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
  margin-top: 10rem;
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
</style>