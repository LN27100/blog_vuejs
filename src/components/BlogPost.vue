<template>
  <article>
    <h2>{{ post.title }}</h2>
    <p v-html="post.content"></p>
  </article>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
article {
  margin-bottom: 20px;
}
h2 {
  font-size: 1.5em;
}
</style>
