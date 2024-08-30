<template>
  <div>
    <div class="title-container">
      <div class="title">
        <!-- Titre du blog -->
        <span class="warp__0">L</span>
        <span class="warp__1">e</span>
        <span class="warp__3">b</span>
        <span class="warp__4">l</span>
        <span class="warp__5">o</span>
        <span class="warp__6">g</span>
        <span class="warp__8">d</span>
        <span class="warp__9">e</span>
        <span class="warp__11">D</span>
        <span class="warp__12">r</span>
        <span class="warp__13">a</span>
        <span class="warp__14">g</span>
        <span class="warp__15">o</span>
        <span class="warp__16">n</span>
        <span class="warp__18">B</span>
        <span class="warp__19">a</span>
        <span class="warp__20">l</span>
        <span class="warp__21">l</span>
        <span class="warp__22">Z</span>
      </div>
    </div>

    <div class="boules-container">
      <!-- Utilisez des chemins relatifs pour les images dans le répertoire public -->
      <img src="/img/boule2.png" alt="dragon ball 2 étoiles" class="cristalBall2">
      <img src="/img/boule1.png" alt="dragon ball 1 étoile" class="cristalBall">
      <img src="/img/boule3.png" alt="dragon ball 3 étoiles" class="cristalBall3">
      <img src="/img/boule4.png" alt="dragon ball 4 étoiles" class="cristalBall4">
      <img src="/img/boule5.png" alt="dragon ball 5 étoiles" class="cristalBall5">
      <img src="/img/boule7.png" alt="dragon ball 7 étoiles" class="cristalBall7">
      <img src="/img/boule6.png" alt="dragon ball 6 étoiles" class="cristalBall6">
    </div>
  </div>

   <!-- Accordion personnalisé pour afficher des sections repliables -->
   <div class="customAccordion">
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
                  :data-bs-target="'#collapse-' + index" aria-expanded="false"
                  :aria-controls="'collapse-' + index">
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
  </div>

  <div class="containerSelect">
    <!-- Intégration du formulaire -->
    <form @submit.prevent="handleSubmit">
      <p v-if="errors.length">
        <b>Veuillez corriger les erreurs suivantes :</b>
        <ul>
          <li v-for="error in errors" :key="error">{{ error }}</li>
        </ul>
      </p>

      <p>
        <label for="movie">Quel personnage aimeriez-vous trouver sur le blog qui n'y est pas encore?</label>
        <select name="movie" id="movie" v-model="movie">
          <option disabled value="">Veuillez sélectionner un personnage</option>
          <option>Shenron</option>
          <option>Dr. Brief</option>
          <option>Vegeto</option>
          <option>Gogeta</option>
          <option>Veku</option>
          <option>Maître Kaio (Kaiô du nord)</option>
          <option>Grégory</option>
          <option>Bubbles</option>
          <option>Mr Popo</option>
          <option>Kami-sama (Tout-puissant)</option>
          <option>Baba la voyante</option>
          <option>Grand roi Enma</option>
          <option>Karin</option>
          <option>C16</option>
          <option>Raditz</option>
          <option>Nappa</option>
          <option>Mr Satan</option>
          <option>Boo</option>
          <option>Cell</option>
          <option>Freezer</option>
          <option>Oob</option>
          <option>Chiaotzu</option>
          <option>Tien shin han</option>
          <option>Lunch</option>
          <option>Dabra</option>
          <option>Kaio Shin</option>
          <option>Dendé</option>
          <option>Recoome</option>
          <option>Jeice</option>
          <option>Spopovich</option>
          <option>Kibito</option>
          <option>Plume</option>
          <option>Madame Brief</option>
          <option>Tao Pai Pai</option>
          <option>Kaiō del Este</option>
          <option>Burter</option>
          <option>Dodoria</option>
          <option>Android 19</option>
          <option>Garlic Jr.</option>
          <option>Ginue</option>
          <option>Zabon</option>
          <option>Guru (grand doyen)</option>
          <option>Umigame</option>
          <option>Bra</option>
          <option>C17</option>
          <option>Païkuhan</option>
          <option>Babidi</option>
          <option>Bibidi</option>
          <option>Yajirobé</option>
          <option>Oolong</option>
          <option>Gyûmaô</option>
          <option>Arbitre du Tenkaichi Budôkai</option>
          <option>Kiwi</option>
          <option>Guldo</option>
          <option>Nail</option>
          <option>Cargo</option>
          <option>West Kai</option>
          <option>Saibaiman</option>
          <option>Cell Jr.</option>
          <option>Kibitoshin</option>
          <option>Yamu</option>
          <option>Spopovitch</option>
          <option>Bardock</option>
          <option>Beerus</option>
          <option>Wish</option>
          <option>Broly</option>
          <option>Spopovitch</option>
          <option>Cooler</option>
          <option>Jiren</option>
          <option>Kaiô de l'Est</option>
          <option>Kaiô de l'Ouest</option>
          <option>Kaiô du sud</option>
          <option>Roi Vegeta (père de Vegeta)</option>
          <option>Son Gonhan (grand-père)</option>
          <option>Vieux Kaiô Shin</option>          
        </select>
      </p>

      <p>
        <input type="submit" value="Soumettre">  
      </p>
    </form>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    // Utilisation du router
    const router = useRouter();

    // Variables réactives pour les données du formulaire
    const errors = ref([]);
    const movie = ref(null);

    // Fonction de validation et de soumission du formulaire
    const handleSubmit = () => {
      errors.value = [];

      // Vérifie si un film est sélectionné
      if (!movie.value) {
        errors.value.push("Veuillez sélectionner un personnage.");
      }

      if (!errors.value.length) {
        // Aucune erreur, redirection vers la page de confirmation
        router.push({ 
          name: 'ConfirmPerso', 
          query: { message: `La demande pour le personnage ${movie.value} a bien été prise en compte.` }
        });
      }
    };

    // Le reste de votre setup existant
    const posts = ref([]);
    const posts2 = ref([]);
    const posts3 = ref([]);

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
      fetchPosts();
      fetchPosts2();
      fetchPosts3();
    });

    return {
      errors,
      movie,
      handleSubmit,
      posts,
      posts2,
      posts3,
      getFilteredPosts,
      characters
    };
  }
};
</script>


<style scoped>
.title-container {
  margin-left: 10rem;
}

.title {
  display: inline-block;
  letter-spacing: -15px;
  font-size: 40px;
  font-family: 'Chelsea Market', cursive;
  font-weight: bold;
  color: #005a99;
  text-shadow: -1.5px -1.5px 0 black, 1.5px -1.5px 0 black,
    -1.5px 1.5px 0 black, 1.5px 1.5px 0 black;
  margin-top: 0.5rem;
}

[class*='warp__'] {
  display: inline-block;
  position: relative;
}

/* transformations spécifiques */
.warp__0 {
  transform: translate(20px, 90px) rotate(1.041106rad);
}

.warp__1 {
  transform: translate(30px, 110px) rotate(0.952006rad);
}

.warp__3 {
  transform: translate(60px, 150px) rotate(0.705882rad);
}

.warp__4 {
  transform: translate(80px, 168px) rotate(0.600926rad);
}

.warp__5 {
  transform: translate(90px, 180px) rotate(0.49481rad);
}

.warp__6 {
  transform: translate(110px, 190px) rotate(0.350878rad);
}

.warp__8 {
  transform: translate(150px, 195px) rotate(0.094828rad);
  color: #007acc;
}

.warp__9 {
  transform: translate(170px, 195px) rotate(-0.01024rad);
  color: #007acc;
}

.warp__11 {
  transform: translate(215px, 190px) rotate(-0.1833rad);
  color: #007acc;
}

.warp__12 {
  transform: translate(240px, 185px) rotate(-0.242992rad);
  color: #007acc;
}

.warp__13 {
  transform: translate(261px, 180px) rotate(-0.294055rad);
  color: #007acc;
}

.warp__14 {
  transform: translate(285px, 170px) rotate(-0.345868rad);
  color: #53a3d7;
}

.warp__15 {
  transform: translate(305px, 160px) rotate(-0.358303rad);
  color: #53a3d7;
}

.warp__16 {
  transform: translate(325px, 150px) rotate(-0.327675rad);
  color: #53a3d7;
}

.warp__18 {
  transform: translate(370px, 135px) rotate(-0.256447rad);
  color: #53a3d7;
}

.warp__19 {
  transform: translate(392px, 130px) rotate(-0.212781rad);
  color: #53a3d7;
}

.warp__20 {
  transform: translate(415px, 125px) rotate(-0.174111rad);
  color: #53a3d7;
}

.warp__21 {
  transform: translate(430px, 120px) rotate(-0.14718rad);
  color: #53a3d7;
}

.warp__22 {
  font-size: 45px;
  color: yellow;
  transform: translate(465px, 110px) rotate(-0.02699rad);
}


/* Positionnement des boules de cristal en ligne */
.boules-container {
  display: flex;
  position: relative;
  /* positionnement personnalisé des images enfants */
}

.boules-container img {
  position: absolute;
  width: auto;
}

/* Positionnement personnalisé pour chaque boule */
.cristalBall {
  margin-top: -3rem;
  margin-left: 15rem;
  height: 5rem;
  width: auto;
}

.cristalBall2 {
  height: 4.7rem;
  width: auto;
  margin-top: 0rem;
  margin-left: 0rem;
}

.cristalBall3 {
  margin-top: 10rem;
  margin-left: 10rem;
  height: 7rem;
  width: auto;
}

.cristalBall4 {
  margin-top: 1rem;
  margin-left: 27rem;
  height: 4.5rem;
  width: auto;
}

.cristalBall5 {
  margin-top: 9rem;
  margin-left: 46rem;
  height: 4rem;
  width: auto;
}

.cristalBall6 {
  margin-top: 1.5rem;
  margin-left: 54rem;
  height: 4.5rem;
  width: auto;
}

.cristalBall7 {
  margin-top: -1rem;
  margin-left: 38rem;
  height: 3.5rem;
  width: auto;
}

.customAccordion {
  margin-top: 20rem;
    /* Transition pour les propriétés liées à l'accordéon */
  --bs-accordion-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, border-radius 0.15s ease;
  --bs-accordion-border-color: var(--bs-border-color);
  --bs-accordion-border-width: var(--bs-border-width);
  --bs-accordion-border-radius: var(--bs-border-radius);
  --bs-accordion-inner-border-radius: calc(var(--bs-border-radius) -(var(--bs-border-width)));
    /* Padding horizontal pour les boutons de l'accordéon */
  --bs-accordion-btn-padding-x: 1.25rem;
    /* Padding vertical pour les boutons de l'accordéon */
  --bs-accordion-btn-padding-y: 1rem;
  --bs-accordion-btn-color: var(--bs-body-color);
  --bs-accordion-btn-bg: var(--bs-accordion-bg);
    /* Ombre portée de la boîte lors du focus sur les boutons de l'accordéon */
  --bs-accordion-btn-focus-box-shadow: 0 0 0 0.1rem #9f0c0c;
  --bs-accordion-body-padding-x: 1.25rem;
  --bs-accordion-body-padding-y: 1rem;
    /* Couleur de fond lorsque l'accordéon est actif, héritée d'une couleur de fond secondaire */
  --bs-accordion-active-bg: var(--bs-primary-bg-subtle);
}

.customAccordion2 {
  --bs-accordion-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, border-radius 0.15s ease;
  --bs-accordion-border-color: var(--bs-border-color);
  --bs-accordion-border-width: var(--bs-border-width);
  --bs-accordion-border-radius: var(--bs-border-radius);
  --bs-accordion-inner-border-radius: calc(var(--bs-border-radius) -(var(--bs-border-width)));
  --bs-accordion-btn-padding-x: 1.25rem;
  --bs-accordion-btn-padding-y: 1rem;
  --bs-accordion-btn-color: var(--bs-body-color);
  --bs-accordion-btn-bg: var(--bs-accordion-bg);
  --bs-accordion-btn-focus-box-shadow: 0 0 0 0.1rem #9f0c0c;
  --bs-accordion-body-padding-x: 1.25rem;
  --bs-accordion-body-padding-y: 1rem;
  --bs-accordion-active-bg: var(--bs-primary-bg-subtle);
}

/* cibler l'élément accordion-button en mode focus pour ajouter un bord arrondi*/
.customAccordion .accordion-button:focus {
  border-radius: 5px;
  box-shadow: var(--bs-accordion-btn-focus-box-shadow);
}

/* Style de l'accordéon  replié */
.accordion-button.collapsed {
  color: black;
}

/* Style de l'accordéon déroulé */
.accordion-button:not(.collapsed) {
  background-color: #F89544;
  font-weight: bold;
  font-family: 'Chelsea Market', cursive;
  color: white;

}

.accordion-item {
  background-color: #F89544;
  border: solid 1px #a43131;
  border-radius: 5px;

}

.accordion-item2 {
  background-color: #F89544;
  border: solid 1px #16537e;
  border-radius: 5px;

}

ul {
  margin-left: 2rem;
  padding: 0;
  list-style-type: none;
}

li {
  margin-bottom: 1rem;
  border-bottom: 1px solid #2986cc;
}

a {
  color: #800000;
  font-size: 1.2rem;
  font-weight: bold;
}

p {
  color: #333333;
  font-weight: bold;
}

containerSelect {
  display: flex; /* Utilisation de flexbox */
  justify-content: center; /* Centre horizontalement */
  align-items: center; /* Centre verticalement */
  height: 100vh; /* Hauteur de la fenêtre */
}

/* Styles pour le formulaire */
form {
  display: flex; /* Flexbox pour aligner les éléments du formulaire */
  flex-direction: column; /* Alignement des éléments en colonne */
  align-items: center; /* Centre horizontalement les éléments du formulaire */
  padding: 2rem; 
  background-color: #F89544; 
}

/* Styles pour le select */
select {
  margin-top: 1rem;
  margin-left:1rem;
  width: 15rem;
}

/* Styles pour le bouton d'envoi */
input[type="submit"] {
  margin-top: 1rem;
  padding: 0.3rem 0.5rem;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  background-color: #16537e;
  color: white;
  transition: background-color 0.3s;
}

input[type="submit"]:hover {
  background-color: #2986cc;
}


/* RESPONSIVE */
@media (max-width: 768px) {
  .title {
    font-size: 20px;
    letter-spacing: -10px;
  }

  .cristalBall,
  .cristalBall2 {
    height: 4rem;
    margin-left: 0;
    margin-bottom: 0.25rem;
  }

  /* Ajustement des transformations pour écrans plus petits */
  .warp__0 {
    transform: translate(15px, 75px) rotate(1.041106rad);
  }

  .warp__1 {
    transform: translate(25px, 95px) rotate(0.952006rad);
  }

  .warp__3 {
    transform: translate(40px, 135px) rotate(0.705882rad);
  }

  .warp__4 {
    transform: translate(55px, 155px) rotate(0.600926rad);
  }

  .warp__5 {
    transform: translate(70px, 165px) rotate(0.49481rad);
  }

  .warp__6 {
    transform: translate(90px, 175px) rotate(0.350878rad);
  }

  .warp__8 {
    transform: translate(120px, 180px) rotate(0.094828rad);
  }

  .warp__9 {
    transform: translate(140px, 180px) rotate(-0.01024rad);
  }

  .warp__11 {
    transform: translate(180px, 175px) rotate(-0.1833rad);
  }

  .warp__12 {
    transform: translate(200px, 170px) rotate(-0.242992rad);
  }

  .warp__13 {
    transform: translate(220px, 160px) rotate(-0.294055rad);
  }

  .warp__14 {
    transform: translate(250px, 155px) rotate(-0.345868rad);
  }

  .warp__15 {
    transform: translate(270px, 145px) rotate(-0.358303rad);
  }

  .warp__16 {
    transform: translate(290px, 135px) rotate(-0.327675rad);
  }

  .warp__18 {
    transform: translate(330px, 120px) rotate(-0.256447rad);
  }

  .warp__19 {
    transform: translate(350px, 115px) rotate(-0.212781rad);
  }

  .warp__20 {
    transform: translate(370px, 110px) rotate(-0.174111rad);
  }

  .warp__21 {
    transform: translate(390px, 110px) rotate(-0.14718rad);
  }

  .warp__22 {
    font-size: 25px;
    transform: translate(420px, 95px) rotate(-0.02699rad);
  }


  li {
    margin-bottom: 0.5rem;
  }
}

@media (max-width: 480px) {
  .title {
    font-size: 15px;
    letter-spacing: -12px;
  }

  .cristalBall,
  .cristalBall2 {
    height: 3rem;
  }


  ul {
    margin-top: 3rem;
  }

  li {
    margin-bottom: 0.25rem;
  }
}
</style>
