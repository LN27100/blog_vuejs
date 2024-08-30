<template>
    <div>
      <p>{{ confirmationMessage }}</p>
    </div>
  </template>
  
  <script>
  import { useRoute } from 'vue-router';
  
  export default {
    setup() {
      const route = useRoute();
      const confirmationMessage = route.query.message || 'Aucune confirmation disponible.';
  
      return {
        confirmationMessage
      };
    }
  };
  </script>
  