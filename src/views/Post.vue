<template>
  <div>
    <h1>{{ post.title }}</h1>
    <div v-html="post.content"></div>
  </div>
</template>

<script>
export default {
  props: ['posts'],
  data() {
    return {
      post: {}
    };
  },
  created() {
    const postId = this.$route.params.id;
    this.post = this.posts.find(post => post.id == postId);
  }
}
</script>
