<template>
    <div>
      <h1>Bienvenue le blog Dragon Ball Z</h1>
      <BlogList :posts="posts" />
    </div>
  </template>
  
  <script>
  import BlogList from '../components/BlogList.vue';
  
  export default {
    components: {
      BlogList
    },
 props: ['posts']
  }
  </script>
  
  <style scoped>
  /* Styles pour Home.vue */

  h1 {
color: #2986cc;
text-align: center;
font-weight: bold;
  }

  </style>
  