<template>
    <div class="containerSelect">
    <!-- Intégration du formulaire -->
    <form @submit.prevent="handleSubmit">
      <p v-if="errors.length">

      <h6 class="error" v-for="error in errors" :key="error">{{ error }}</h6>

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
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
 name: 'SelectPersonnages',
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
        // Aucune erreur, redirection vers la page de confirmation avec mise en forme du texte
        const message = `La demande pour le personnage <span style="color: #9f0c0c; font-weight: bold; font-family: Verdana; font-size: 1.5rem;">${movie.value}</span> a bien été prise en compte.`;
        router.push({
          name: 'ConfirmPerso',
          query: { message }
        });
      }
    };

    return {
      errors,
      movie,
      handleSubmit,
    };
  }
};
</script>


