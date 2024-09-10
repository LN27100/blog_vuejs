<template>
  <!-- Section titre -->
  <div>
    <BlogTitle />
    <ImgBoules />
  </div>

  <!-- Accordéons personnalisés pour afficher des sections repliables -->
  <div class="customAccordion">
    <AccordionOne />
    <AccordionTwo />
    <AccordionThree />
  </div>

  <!-- Section demande ajout personnages -->
  <SelectPersonnages />
  
  <!-- Signature site par images -->
  <div class="lettres">
    <img src="/img/lettreDBZ_P.png" alt="Lettre P">
    <img src="/img/lettreDBZ_H.png" alt="Lettre H">
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import BlogTitle from '../components/BlogTitle.vue';
import ImgBoules from '../components/ImgBoules.vue';
import AccordionOne from '../components/AccordionOne.vue';
import AccordionTwo from '../components/AccordionTwo.vue';
import AccordionThree from '../components/AccordionThree.vue';
import SelectPersonnages from '../components/SelectPersonnages.vue';

export default {
  components: {
    BlogTitle,
    ImgBoules,
    AccordionOne,
    AccordionTwo,
    AccordionThree,
    SelectPersonnages
  },
  setup() {
    // Utilisation du router
    const router = useRouter();
  }
};
</script>
