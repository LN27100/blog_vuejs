<template>

   <!-- Troisième item de l'accordéon pour afficher les combats -->
   <div class="accordion-item">
      <h2 class="accordion-header">
        <!-- Bouton pour ouvrir/fermer la section 'Combats' -->
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Combats</button>
      </h2>
      <!-- Contenu de la section 'Combats' -->
      <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <ul>
            <!-- Boucle sur les posts pour afficher chaque post avec un lien vers sa page dédiée -->
            <li v-for="post in posts3" :key="post.id">
              <router-link :to="{ name: 'Post3', params: { id: post.id } }">
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
      name: 'AccordionThree',
      setup() {
    
        // Fonction pour récupérer les posts des personnages
        const posts3 = ref([]);

    const fetchPosts3 = async () => {
      try {
        const response = await fetch('/data/posts3.json');
        if (!response.ok) {
          throw new Error('Failed to load posts3.json');
        }
        posts3.value = await response.json();
      } catch (error) {
        console.error('Error fetching posts3.json:', error);
      }
    };
    
    
    
        onMounted(() => {
          fetchPosts3();
        });
    
        return {
          posts3,
        };
      }
    };
    </script>
    