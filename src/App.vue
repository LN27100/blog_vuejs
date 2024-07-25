<template>
  <div id="app">
    <router-view :posts="posts" />
  </div>
</template>

<script>
export default {
    data() {
      return {
        posts: [
          { id: 1, title: 'Premier Article', content: "L'article ici est un essai pour voir la possibilité du texte avec les différentes options de tailles, couleurs, positions etc." },
          { id: 2, title: 'Deuxième Article', content: 'Contenu du deuxième article.' }
        ]
      };
    }
  }
</script>

<style>
/* Styles globaux */
</style>
