<template>
  <div>
    <h1>Bienvenue sur le blog de Dragon Ball Z</h1>
    <h2>Les personnages</h2>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <router-link :to="{ name: 'Post', params: { id: post.id }}">{{ post.title }}</router-link>
        <p>{{ post.summary }}</p>
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  props: {
    posts: Array,
  }
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
