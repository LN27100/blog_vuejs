<template>
     <!-- Premier item de l'accordéon pour afficher les personnages -->
     <div class="accordion-item">
      <h2 class="accordion-header">
        <!-- Bouton pour ouvrir/fermer la section 'Techniques de combat et pouvoirs' -->
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
          aria-expanded="false" aria-controls="collapseOne">
          Personnages
        </button>
      </h2>
      <!-- Contenu de la section 'Personnages' -->
      <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <!-- Liste des posts pour chaque personnage -->
          <ul>
            <!-- Boucle sur les posts pour afficher chaque post avec un lien vers sa page dédiée -->
            <li v-for="post in posts" :key="post.id">
              <router-link :to="{ name: 'Post', params: { id: post.id } }">
                {{ post.title }}
              </router-link>
              <p>{{ post.summary }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  name: 'AccordionOne',
  setup() {
    const posts = ref([]);

    // Fonction pour récupérer les posts des personnages
    const fetchPosts = async () => {
      try {
        const response = await fetch('/data/posts.json');
        if (!response.ok) {
          throw new Error('Failed to load posts.json');
        }
        posts.value = await response.json();
      } catch (error) {
        console.error('Error fetching posts.json:', error);
      }
    };

    onMounted(() => {
      fetchPosts();
    });

    return {
      posts
    };
  }
};
</script>


