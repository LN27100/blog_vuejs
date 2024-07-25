<template>
  <div id="app">
    <router-view :posts="posts" />
  </div>
</template>

<script>
// Importer les images depuis les assets
import sangokuImage from '@/assets/img/sangoku.jpg';
import vegetaImage from '@/assets/img/vegeta.png';
import tortueGenialImage from '@/assets/img/vegeta.png';
import chichiImage from '@/assets/img/vegeta.png';
import sangohanImage from '@/assets/img/sangohan.jpg';
import sangotenImage from '@/assets/img/sangoten.jpg';
import videlImage from '@/assets/img/videl.jpg';
import panImage from '@/assets/img/pan.jpg';
import krillinImage from '@/assets/img/krillin.jpg';
import c18Image from '@/assets/img/c18.jpg';
import marronImage from '@/assets/img/marron.jpg';
import trunksImage from '@/assets/img/trunks.jpg';
import bulmaImage from '@/assets/img/bulma.jpg';
import yamchaImage from '@/assets/img/yamcha.jpg';

export default {
  data() {
    return {
      posts: [
        {
          id: 1,
          title: 'Sangoku',
          content: `<p>Sangoku dit Goku, est le personnage principal de drangon Ball Z.</p><img src="${sangokuImage}" alt="Sangoku">`
        },
        {
          id: 2,
          title: 'Vegeta',
          content: `<p>Végéta, prince de la planète Végéta</p><img src="${vegetaImage}" alt="Sangoku">`
        },
        {
          id: 3,
          title: 'Tortue géniale',
          content: `<p>Sangoku dit Goku, est le personnage principal de drangon Ball Z.</p><img src="${tortueGenialImage}" alt="Sangoku">`
        },
        {
          id: 4,
          title: 'Chichi',
          content: `<p>Sangoku dit Goku, est le personnage principal de drangon Ball Z.</p><img src="${chichiImage}" alt="Sangoku">`
        },
        {
          id: 5,
          title: 'Sangohan',
          content: `<p>Sangoku dit Goku, est le personnage principal de drangon Ball Z.</p><img src="${sangohanImage}" alt="Sangoku">`
        },
        {
          id: 6,
          title: 'Sangoten',
          content: `<p>Sangoku dit Goku, est le personnage principal de drangon Ball Z.</p><img src="${sangotenImage}" alt="Sangoku">`
        },
        {
          id: 7,
          title: 'Videl',
          content: `<p>Sangoku dit Goku, est le personnage principal de drangon Ball Z.</p><img src="${videlImage}" alt="Sangoku">`
        },
        {
          id: 8,
          title: 'Pan',
          content: `<p>Sangoku dit Goku, est le personnage principal de drangon Ball Z.</p><img src="${panImage}" alt="pan">`
        },
        {
          id: 9,
          title: 'Bulma',
          content: `<p>Sangoku dit Goku, est le personnage principal de drangon Ball Z.</p><img src="${bulmaImage}" alt="Sangoku">`
        },
        {
          id: 10,
          title: 'Trunks',
          content: `<p>Sangoku dit Goku, est le personnage principal de drangon Ball Z.</p><img src="${trunksImage}" alt="Sangoku">`
        },
        {
          id: 11,
          title: 'Krillin',
          content: `<p>Sangoku dit Goku, est le personnage principal de drangon Ball Z.</p><img src="${krillinImage}" alt="Sangoku">`
        },
        {
          id: 12,
          title: 'C18',
          content: `<p>Sangoku dit Goku, est le personnage principal de drangon Ball Z.</p><img src="${c18Image}" alt="Sangoku">`
        },
        {
          id: 13,
          title: 'Marron',
          content: `<p>Sangoku dit Goku, est le personnage principal de drangon Ball Z.</p><img src="${marronImage}" alt="Sangoku">`
        },
        {
          id: 14,
          title: 'Yamcha',
          content: `<p>Sangoku dit Goku, est le personnage principal de drangon Ball Z.</p><img src="${yamchaImage}" alt="Sangoku">`
        },
      ]
    };
  }
}
</script>

<style>
/* Styles globaux */
</style>
