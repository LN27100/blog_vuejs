<template>
    <div class="confirmMessage">
        <p class="textConfirm" v-html="confirmationMessage"></p>

        <button @click="goHome" class="back-button">Accueil</button>

    </div>
</template>

<script>
import { useRoute } from 'vue-router';

export default {
    setup() {
        const route = useRoute();
        // Utilisation de v-html pour permettre l'affichage du HTML
        const confirmationMessage = route.query.message || 'Aucune confirmation disponible.';

        return {
            confirmationMessage
        };
    },
    methods: {
        goHome() {
            this.$router.push('/'); // Redirige vers la page d'accueil
        }
    }
};
</script>

<style scoped>
.confirmMessage {
    text-align: center;
    margin-top: 20px;
    border: solid 2px #9f0c0c;
    border-radius: 10px;
    padding: 2rem;
    margin: 5rem;
}

.textConfirm {
    font-family: 'Chelsea Market';

}


</style>