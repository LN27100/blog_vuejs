<template>

<!-- Deuxième item de l'accordéon pour afficher les techniques de combat et pouvoirs -->
<div class="accordion-item">
    <h2 class="accordion-header">
      <!-- Bouton pour ouvrir/fermer la section 'Techniques de combat et pouvoirs' -->
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo"
        aria-expanded="false" aria-controls="collapseTwo">
        Techniques de combat et pouvoirs
      </button>
    </h2>
    <!-- Contenu de la section 'Techniques de combat et pouvoirs' -->
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <!-- Accordéon interne pour afficher les détails de chaque personnage -->
        <div class="customAccordion2" id="accordionPanelsStayOpenExample">
          <!-- Boucle sur les personnages pour créer un accordéon pour chaque personnage -->
          <div v-for="(character, index) in characters" :key="index" class="accordion-item2">
            <h2 class="accordion-header">
              <!-- Bouton pour ouvrir/fermer la section de chaque personnage -->
              <button class="accordion-button collapsed" type="button" :data-bs-toggle="'collapse'"
                :data-bs-target="'#collapse-' + index" aria-expanded="false" :aria-controls="'collapse-' + index">
                {{ character.name }}
              </button>
            </h2>
            <!-- Contenu de la section de chaque personnage -->
            <div :id="'collapse-' + index" class="accordion-collapse collapse">
              <div class="accordion-body">
                <!-- Liste des posts filtrés pour chaque personnage -->
                <ul>
                  <!-- Boucle sur les posts filtrés pour afficher chaque post -->
                  <li v-for="post in getFilteredPosts(character.ids)" :key="post.id">
                    <router-link :to="{ name: 'Post2', params: { id: post.id } }">
                      {{ post.title }}
                    </router-link>
                    <p>{{ post.summary }}</p>
                  </li>
                  <!-- Message affiché s'il n'y a pas de posts pour un personnage donné -->
                  <li v-if="!getFilteredPosts(character.ids).length">Aucun article disponible</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  name: 'AccordionTwo',
  setup() {
    const posts2 = ref([]);

    // Fonction pour récupérer les posts des personnages
    const fetchPosts2 = async () => {
      try {
        const response = await fetch('/data/posts2.json');
        if (!response.ok) {
          throw new Error('Failed to load posts2.json');
        }
        posts2.value = await response.json();
      } catch (error) {
        console.error('Error fetching posts2.json:', error);
      }
    };

    const getFilteredPosts = (filterIds) => {
      return posts2.value.filter(post => filterIds.includes(post.id));
    };

    const characters = [
      { name: 'Sangoku', ids: [1, 2, 5, 28, 29] },
      { name: 'Sangohan', ids: [23, 10, 33, 34, 35, 70] },
      { name: 'Sangoten', ids: [24] },
      { name: 'Vegeta', ids: [3, 4, 30] },
      { name: 'Trunks', ids: [11, 12, 36, 37] },
      { name: 'Gotenks', ids: [54, 55, 56] },
      { name: 'Piccolo', ids: [7, 8, 9, 32] },
      { name: 'Krillin', ids: [13, 14, 25] },
      { name: 'C18', ids: [48, 49] },
      { name: 'Tien Shinhan', ids: [15, 16, 38, 44] },
      { name: 'Yamcha', ids: [26, 27] },
      { name: 'Chiaotzu', ids: [46, 47, 42] },
      { name: 'C16', ids: [61] },
      { name: 'Whish', ids: [62] },
      { name: 'Beerus', ids: [64, 65] },
      { name: 'Majin Vegeta', ids: [57, 58] },
      { name: 'Buu', ids: [21, 41, 68, 69] },
      { name: 'Freezer', ids: [19, 20, 22, 40] },
      { name: 'Cell', ids: [17, 18] },
      { name: 'Jiren', ids: [66, 67] },
      { name: 'Dabura', ids: [52, 53] },
      { name: 'Dr Gero', ids: [59] }
    ];

    onMounted(() => {
      fetchPosts2();
    });

    return {
      posts2,
      getFilteredPosts,
      characters
    };
  }
};
</script>
