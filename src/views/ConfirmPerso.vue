<template>

    <div class="pictureConfirm">
        <img src="/public/img/dbzConfirm.png" alt="Nuage Goku" class="picture" />
    </div>

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
    background: linear-gradient(0deg, rgba(16, 75, 117, 1) 15%, rgba(22, 83, 126, 1) 30%, rgba(75, 112, 135, 1) 50%, rgba(88, 136, 159, 1) 63%, rgba(96, 153, 177, 1) 76%, rgba(185, 131, 84, 1) 100%);
    text-align: center;
    border: solid 3px #9f0c0c;
    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    padding: 2rem;
    margin: 0 5rem 0 5rem;
}

.textConfirm {
    font-family: 'Chelsea Market';
    color: white;

}

.pictureConfirm {
    margin-top: 1rem;
    margin-bottom: 0rem;
    text-align: center;
}

.picture {
    width: 20rem;
    height: auto;
}
</style>