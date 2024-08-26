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

    <div class="customAccordion">
      <!-- Accordéon pour les sections -->
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
            aria-expanded="true" aria-controls="collapseOne">Personnages</button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <ul>
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

      <div class="accordion-item">
    <h2 class="accordion-header">
      <button
        class="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseTwo"
        aria-expanded="false"
        aria-controls="collapseTwo"
      >
        Techniques de combat et pouvoirs
      </button>
    </h2>
    <div
      data-bs-parent="#accordionExample"
    >

        <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <div class="customAccordion2" id="accordionPanelsStayOpenExample">
              <div class="accordion-item2">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseOne">
                    Sangoku
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse">
                  <div class="accordion-body">
                    <ul>
                      <li v-if="posts2.length > 0" v-for="post in getFilteredPosts([1, 2, 5, 28, 29])" :key="post.id">
                        <router-link :to="{ name: 'Post2', params: { id: post.id } }">
                          {{ post.title }}
                        </router-link>
                        <p>{{ post.summary }}</p>
                      </li>
                      <li v-else>Chargement des articles...</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item2">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseTwo">
                    Vegeta
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
                  <div class="accordion-body">
                    <ul>
                      <li v-if="posts2.length > 0" v-for="post in getFilteredPosts([3, 4, 30])" :key="post.id">
                        <router-link :to="{ name: 'Post2', params: { id: post.id } }">
                          {{ post.title }}
                        </router-link>
                        <p>{{ post.summary }}</p>
                      </li>
                      <li v-else>Chargement des articles...</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item2">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseThree">
                    Piccolo
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
                  <div class="accordion-body">
                    <ul>
                      <li v-if="posts2.length > 0" v-for="post in getFilteredPosts([7, 8, 9, 32])" :key="post.id">
                        <router-link :to="{ name: 'Post2', params: { id: post.id } }">
                          {{ post.title }}
                        </router-link>
                        <p>{{ post.summary }}</p>
                      </li>
                      <li v-else>Chargement des articles...</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item2">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseFour">
                    Sangohan
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse">
                  <div class="accordion-body">
                    <ul>
                      <li v-if="posts2.length > 0" v-for="post in getFilteredPosts([23, 10, 33, 34, 35])" :key="post.id">
                        <router-link :to="{ name: 'Post2', params: { id: post.id } }">
                          {{ post.title }}
                        </router-link>
                        <p>{{ post.summary }}</p>
                      </li>
                      <li v-else>Chargement des articles...</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item2">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseFive">
                    Trunks
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseFive" class="accordion-collapse collapse">
                  <div class="accordion-body">
                    <ul>
                      <li v-if="posts2.length > 0" v-for="post in getFilteredPosts([11, 12, 36, 37])" :key="post.id">
                        <router-link :to="{ name: 'Post2', params: { id: post.id } }">
                          {{ post.title }}
                        </router-link>
                        <p>{{ post.summary }}</p>
                      </li>
                      <li v-else>Chargement des articles...</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item2">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseSix" aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseSix">
                    Goten
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseSix" class="accordion-collapse collapse">
                  <div class="accordion-body">
                    <ul>
                      <li v-if="posts2.length > 0" v-for="post in getFilteredPosts([24])" :key="post.id">
                        <router-link :to="{ name: 'Post2', params: { id: post.id } }">
                          {{ post.title }}
                        </router-link>
                        <p>{{ post.summary }}</p>
                      </li>
                      <li v-else>Chargement des articles...</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item2">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseSeven" aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseSeven">
                    Krillin
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseSeven" class="accordion-collapse collapse">
                  <div class="accordion-body">
                    <ul>
                      <li v-if="posts2.length > 0" v-for="post in getFilteredPosts([13, 14, 25, 43])" :key="post.id">
                        <router-link :to="{ name: 'Post2', params: { id: post.id } }">
                          {{ post.title }}
                        </router-link>
                        <p>{{ post.summary }}</p>
                      </li>
                      <li v-else>Chargement des articles...</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item2">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseEight" aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseEight">
                    Tien Shinhan
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseEight" class="accordion-collapse collapse">
                  <div class="accordion-body">
                    <ul>
                      <li v-if="posts2.length > 0" v-for="post in getFilteredPosts([15, 44, 45])" :key="post.id">
                        <router-link :to="{ name: 'Post2', params: { id: post.id } }">
                          {{ post.title }}
                        </router-link>
                        <p>{{ post.summary }}</p>
                      </li>
                      <li v-else>Chargement des articles...</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item2">
                <h2 class="accordion-header">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseNine" aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseNine">
                    Yamcha </button>
                </h2>
                <div id="panelsStayOpen-collapseNine" class="accordion-collapse collapse">
                  <div class="accordion-body">
                    <ul>
                      <li v-if="posts2.length > 0" v-for="post in getFilteredPosts([26, 27])" :key="post.id">
                        <router-link :to="{ name: 'Post2', params: { id: post.id } }">
                          {{ post.title }}
                        </router-link>
                        <p>{{ post.summary }}</p>
                      </li>
                      <li v-else>Chargement des articles...</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item2">
                <h2 class="accordion-header">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseTen" aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseTen">
                    C18 </button>
                </h2>
                <div id="panelsStayOpen-collapseTen" class="accordion-collapse collapse">
                  <div class="accordion-body">
                    <ul>
                      <li v-if="posts2.length > 0" v-for="post in getFilteredPosts([48, 49])" :key="post.id">
                        <router-link :to="{ name: 'Post2', params: { id: post.id } }">
                          {{ post.title }}
                        </router-link>
                        <p>{{ post.summary }}</p>
                      </li>
                      <li v-else>Chargement des articles...</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item2">
                <h2 class="accordion-header">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseEleven" aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseEleven">
                    Chiaotzu </button>
                </h2>
                <div id="panelsStayOpen-collapseEleven" class="accordion-collapse collapse">
                  <div class="accordion-body">
                    <ul>
                      <li v-if="posts2.length > 0" v-for="post in getFilteredPosts([46, 47])" :key="post.id">
                        <router-link :to="{ name: 'Post2', params: { id: post.id } }">
                          {{ post.title }}
                        </router-link>
                        <p>{{ post.summary }}</p>
                      </li>
                      <li v-else>Chargement des articles...</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item2">
                <h2 class="accordion-header">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseTwelve" aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseTwelve">
                    Gotenks </button>
                </h2>
                <div id="panelsStayOpen-collapseTwelve" class="accordion-collapse collapse">
                  <div class="accordion-body">
                    <ul>
                      <li v-if="posts2.length > 0" v-for="post in getFilteredPosts([54, 55, 56])" :key="post.id">
                        <router-link :to="{ name: 'Post2', params: { id: post.id } }">
                          {{ post.title }}
                        </router-link>
                        <p>{{ post.summary }}</p>
                      </li>
                      <li v-else>Chargement des articles...</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item2">
                <h2 class="accordion-header">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapsethirteen" aria-expanded="true"
                    aria-controls="panelsStayOpen-collapsethirteen">
                    C16 </button>
                </h2>
                <div id="panelsStayOpen-collapsethirteen" class="accordion-collapse collapse">
                  <div class="accordion-body">
                    <ul>
                      <li v-if="posts2.length > 0" v-for="post in getFilteredPosts([60, 61])" :key="post.id">
                        <router-link :to="{ name: 'Post2', params: { id: post.id } }">
                          {{ post.title }}
                        </router-link>
                        <p>{{ post.summary }}</p>
                      </li>
                      <li v-else>Chargement des articles...</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item2">
                <h2 class="accordion-header">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseFourteen" aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseFourteen">
                    C17 </button>
                </h2>
                <div id="panelsStayOpen-collapseFourteen" class="accordion-collapse collapse">
                  <div class="accordion-body">
                    <ul>
                      <li v-if="posts2.length > 0" v-for="post in getFilteredPosts([50, 51])" :key="post.id">
                        <router-link :to="{ name: 'Post2', params: { id: post.id } }">
                          {{ post.title }}
                        </router-link>
                        <p>{{ post.summary }}</p>
                      </li>
                      <li v-else>Chargement des articles...</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item2">
                <h2 class="accordion-header">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseFifteen" aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseFifteen">
                    Cell </button>
                </h2>
                <div id="panelsStayOpen-collapseFifteen" class="accordion-collapse collapse">
                  <div class="accordion-body">
                    <ul>
                      <li v-if="posts2.length > 0" v-for="post in getFilteredPosts([17, 18])" :key="post.id">
                        <router-link :to="{ name: 'Post2', params: { id: post.id } }">
                          {{ post.title }}
                        </router-link>
                        <p>{{ post.summary }}</p>
                      </li>
                      <li v-else>Chargement des articles...</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item2">
                <h2 class="accordion-header">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseSixteen" aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseSixteen">
                    Freezer </button>
                </h2>
                <div id="panelsStayOpen-collapseSixteen" class="accordion-collapse collapse">
                  <div class="accordion-body">
                    <ul>
                      <li v-if="posts2.length > 0" v-for="post in getFilteredPosts([19, 20, 22, 39, 40])" :key="post.id">
                        <router-link :to="{ name: 'Post2', params: { id: post.id } }">
                          {{ post.title }}
                        </router-link>
                        <p>{{ post.summary }}</p>
                      </li>
                      <li v-else>Chargement des articles...</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item2">
                <h2 class="accordion-header">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseSeventeen" aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseSeventeen">
                    Buu </button>
                </h2>
                <div id="panelsStayOpen-collapseSeventeen" class="accordion-collapse collapse">
                  <div class="accordion-body">
                    <ul>
                      <li v-if="posts2.length > 0" v-for="post in getFilteredPosts([21,41, 42, 68, 69])" :key="post.id">
                        <router-link :to="{ name: 'Post2', params: { id: post.id } }">
                          {{ post.title }}
                        </router-link>
                        <p>{{ post.summary }}</p>
                      </li>
                      <li v-else>Chargement des articles...</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item2">
                <h2 class="accordion-header">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseEigthteen" aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseEigthteen">
                    Dabura </button>
                </h2>
                <div id="panelsStayOpen-collapseEigthteen" class="accordion-collapse collapse">
                  <div class="accordion-body">
                    <ul>
                      <li v-if="posts2.length > 0" v-for="post in getFilteredPosts([52, 53])" :key="post.id">
                        <router-link :to="{ name: 'Post2', params: { id: post.id } }">
                          {{ post.title }}
                        </router-link>
                        <p>{{ post.summary }}</p>
                      </li>
                      <li v-else>Chargement des articles...</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item2">
                <h2 class="accordion-header">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseNineteen" aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseNineteen">
                    Majin Vegeta </button>
                </h2>
                <div id="panelsStayOpen-collapseNineteen" class="accordion-collapse collapse">
                  <div class="accordion-body">
                    <ul>
                      <li v-if="posts2.length > 0" v-for="post in getFilteredPosts([57, 58])" :key="post.id">
                        <router-link :to="{ name: 'Post2', params: { id: post.id } }">
                          {{ post.title }}
                        </router-link>
                        <p>{{ post.summary }}</p>
                      </li>
                      <li v-else>Chargement des articles...</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item2">
                <h2 class="accordion-header">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseTwenty" aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseTwenty">
                    Dr Gero </button>
                </h2>
                <div id="panelsStayOpen-collapseTwenty" class="accordion-collapse collapse">
                  <div class="accordion-body">
                    <ul>
                      <li v-if="posts2.length > 0" v-for="post in getFilteredPosts([59])" :key="post.id">
                        <router-link :to="{ name: 'Post2', params: { id: post.id } }">
                          {{ post.title }}
                        </router-link>
                        <p>{{ post.summary }}</p>
                      </li>
                      <li v-else>Chargement des articles...</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item2">
                <h2 class="accordion-header">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseTwentyOne" aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseTwentyOne">
                    Whish </button>
                </h2>
                <div id="panelsStayOpen-collapseTwentyOne" class="accordion-collapse collapse">
                  <div class="accordion-body">
                    <ul>
                      <li v-if="posts2.length > 0" v-for="post in getFilteredPosts([62, 63])" :key="post.id">
                        <router-link :to="{ name: 'Post2', params: { id: post.id } }">
                          {{ post.title }}
                        </router-link>
                        <p>{{ post.summary }}</p>
                      </li>
                      <li v-else>Chargement des articles...</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item2">
                <h2 class="accordion-header">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseTwentyTwo" aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseTwentyTwo">
                    Beerus </button>
                </h2>
                <div id="panelsStayOpen-collapseTwentyTwo" class="accordion-collapse collapse">
                  <div class="accordion-body">
                    <ul>
                      <li v-if="posts2.length > 0" v-for="post in getFilteredPosts([64, 65])" :key="post.id">
                        <router-link :to="{ name: 'Post2', params: { id: post.id } }">
                          {{ post.title }}
                        </router-link>
                        <p>{{ post.summary }}</p>
                      </li>
                      <li v-else>Chargement des articles...</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item2">
                <h2 class="accordion-header">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseTweentyThree" aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseTweentyThree">
                    Jiren </button>
                </h2>
                <div id="panelsStayOpen-collapseTweentyThree" class="accordion-collapse collapse">
                  <div class="accordion-body">
                    <ul>
                      <li v-if="posts2.length > 0" v-for="post in getFilteredPosts([66, 67])" :key="post.id">
                        <router-link :to="{ name: 'Post2', params: { id: post.id } }">
                          {{ post.title }}
                        </router-link>
                        <p>{{ post.summary }}</p>
                      </li>
                      <li v-else>Chargement des articles...</li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>


      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Combats</button>
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin
            adds the appropriate classes that we use to style each element.
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const posts = ref([]);
    const posts2 = ref([]);

    const fetchPosts = async () => {
      try {
        const response = await fetch('/data/posts.json'); // Chemin relatif depuis le dossier public
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

    const getFilteredPosts = (filterIds) => {
      return posts2.value.filter(post => filterIds.includes(post.id));
    };

    onMounted(() => {
      fetchPosts();
      fetchPosts2();
    });

    return {
      posts,
      posts2,
      getFilteredPosts,
    };
  },
};
</script>



<style scoped>
.title-container {
  margin-left: 15rem;
}

.title {
  display: inline-block;
  letter-spacing: -15px;
  font-size: 25px;
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
  font-size: 35px;
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
  margin-top: 7rem;
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
  --bs-accordion-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, border-radius 0.15s ease;
  --bs-accordion-border-color: var(--bs-border-color);
  --bs-accordion-border-width: var(--bs-border-width);
  --bs-accordion-border-radius: var(--bs-border-radius);
  --bs-accordion-inner-border-radius: calc(var(--bs-border-radius) -(var(--bs-border-width)));
  --bs-accordion-btn-padding-x: 1.25rem;
  --bs-accordion-btn-padding-y: 1rem;
  --bs-accordion-btn-color: var(--bs-body-color);
  --bs-accordion-btn-bg: var(--bs-accordion-bg);
  --bs-accordion-btn-icon: url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none' stroke='%23212529' stroke-linecap='round' stroke-linejoin='round'%3e%3cpath d='M2 5L8 11L14 5'/%3e%3c/svg%3e);
  --bs-accordion-btn-icon-width: 1.25rem;
  --bs-accordion-btn-icon-transform: rotate(-180deg);
  --bs-accordion-btn-icon-transition: transform 0.2s ease-in-out;
  --bs-accordion-btn-active-icon: url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none' stroke='%23052c65' stroke-linecap='round' stroke-linejoin='round'%3e%3cpath d='M2 5L8 11L14 5'/%3e%3c/svg%3e);
  --bs-accordion-btn-focus-box-shadow: 0 0 0 0.1rem #9f0c0c;
  --bs-accordion-body-padding-x: 1.25rem;
  --bs-accordion-body-padding-y: 1rem;
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
  --bs-accordion-btn-icon: url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none' stroke='%23212529' stroke-linecap='round' stroke-linejoin='round'%3e%3cpath d='M2 5L8 11L14 5'/%3e%3c/svg%3e);
  --bs-accordion-btn-icon-width: 1.25rem;
  --bs-accordion-btn-icon-transform: rotate(-180deg);
  --bs-accordion-btn-icon-transition: transform 0.2s ease-in-out;
  --bs-accordion-btn-active-icon: url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none' stroke='%23052c65' stroke-linecap='round' stroke-linejoin='round'%3e%3cpath d='M2 5L8 11L14 5'/%3e%3c/svg%3e);
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
