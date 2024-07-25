<template>
    <div>
      <BlogPost v-for="post in posts" :key="post.id" :post="post" />
    </div>
  </template>
  
  <script>
  import BlogPost from './BlogPost.vue';
  
  export default {
    components: {
      BlogPost
    },
    props: {
      posts: Array
    }
  }
  </script>
  
  <style scoped>
  /* Styles pour BlogList.vue */
  </style>
  