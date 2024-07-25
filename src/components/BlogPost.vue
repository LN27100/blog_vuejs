<template>
    <article>
      <h2>{{ post.title }}</h2>
      <p>{{ post.content }}</p>
    </article>
  </template>
  
  <script>
  export default {
    props: {
      post: Object
    }
  }
  </script>
  
  <style scoped>
  /* Styles pour BlogPost.vue */
  </style>
  