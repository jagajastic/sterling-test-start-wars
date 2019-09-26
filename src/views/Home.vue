<template>
  <main>
    <StarwarsHead v-on:getSearch="searchHome($event)" />
    <StarwarTitle title="Popular Starship" />
    <div class="card-flex">
      <Loader class="row mt-3 mb-3" v-if="load" />
      <StarShip
        v-for="ship in starships"
        v-bind:key="ship.name"
        :planet="ship"
        v-else
      />
    </div>
    <div
      class="col-md-6 mx-auto my-5 d-flex justify-content-center align-items-center link-readmore"
    >
      <router-link
        class="btn-lg col-md-8 text-center text-black txt"
        to="/planets"
        >VIEW MORE</router-link
      >
    </div>
    <StarwarTitle title="Popular Planets" />
    <!-- slide goes here -->
    <!--Carousel Wrapper-->
    <!-- <PlanetSlide v-for="planet in planets" :key="planet.name" :planets="planets" /> -->
    <Loader class="row mt-3 mb-3" v-if="load" />
    <section
      class="carousel slide"
      data-ride="carousel"
      id="postsCarousel"
      v-else
    >
      <div class="container p-t-0 m-t-2 carousel-inner">
        <div class="row row-equal carousel-item active m-t-0">
          <div
            class="col-md-4"
            v-for="planetShip in planet1"
            :key="planetShip.name"
          >
            <div class="card">
              <div class="card-img-top">
                <img
                  class="img-fluid"
                  src="../assets/planet-1.jpg"
                  alt="Carousel 1"
                />
              </div>
              <div class="card-block p-t-2 text-center" id="planet-text">
                <h6 class="small text-wide p-b-2 text-center">
                  {{ planetShip.name }}
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div class="row row-equal carousel-item m-t-0">
          <div
            class="col-md-4"
            v-for="planetShip in planet2"
            :key="planetShip.name"
          >
            <div class="card">
              <div class="card-img-top">
                <img
                  class="img-fluid"
                  src="../assets/planet-3.jpg"
                  alt="Carousel 4"
                />
              </div>
              <div class="card-block p-t-2 text-center" id="planet-text">
                <h6 class="small text-wide p-b-2 text-center">
                  {{ planetShip.name }}
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--/.Carousel Wrapper-->
    <StarwarTitle title="Popular Characters" />,
    <div class="card-flex">
      <Loader class="row mt-3 mb-3" v-if="load" />
      <StarwarsCharacterCard
        v-for="character in characters"
        :key="character.name"
        :character="character"
        v-else
      />
    </div>
    <div
      class="col-md-6 mx-auto my-5 d-flex justify-content-center align-items-center link-readmore"
    >
      <router-link class="btn-lg col-md-8 text-center txt" to="/characters"
        >VIEW MORE</router-link
      >
    </div>
  </main>
</template>

//
<script>
import StarwarsHead from '@/components/reusable/StarwarsHead.vue';
import StarwarTitle from '@/components/reusable/StarwarTitle.vue';
import StarShip from '@/components/reusable/StarShip.vue';
import PlanetSlide from '@/components/reusable/PlanetSlide.vue';
import StarwarsCharacterCard from '@/components/reusable/StarwarsCharacterCard.vue';
import Loader from '@/components/reusable/Loader';
// @ is an alias to /src
// import LandingPage from '@/components/LandingPage.vue';

import axios from 'axios';

export default {
  name: 'home',
  data() {
    return {
      starships: [],
      characters: [],
      planets: [],
      planet1: [],
      planet2: [],
      load: false,
    };
  },
  props: {},
  components: {
    StarwarsHead,
    StarwarTitle,
    StarShip,
    PlanetSlide,
    StarwarsCharacterCard,
    Loader,
  },
  methods: {
    searchHome(search) {
      this.load = true;
      // search starship on home page
      axios
        .get(`https://swapi.co/api/starships/?search=${search}`)
        .then(res => {
          this.starships = res.data.results.splice(0, 6);
          this.load = false;
        })
        .catch(error => error);

      // search character on home page
      axios
        .get(`https://swapi.co/api/people/?search=${search}`)
        .then(res => {
          this.characters = res.data.results.splice(0, 4);
          this.load = false;
        })
        .catch(error => {
          console.error(error.message);
        });
    },
  },
  created: function() {
    this.load = true;
    // people call
    axios
      .get('https://swapi.co/api/starships')
      .then(res => {
        this.starships = res.data.results.splice(0, 6);
        this.load = false;
      })
      .catch(error => error);

    // planets call
    axios
      .get('https://swapi.co/api/planets')
      .then(res => {
        this.planets = res.data.results.splice(0, 3);
        this.planet1 = res.data.results.splice(0, 3);
        this.planet2 = res.data.results.splice(0, 3);
        this.load = false;
      })
      .catch(error => {
        console.error(error.message);
      });

    // character call
    axios
      .get('https://swapi.co/api/people')
      .then(res => {
        this.characters = res.data.results.splice(0, 4);
        this.load = false;
      })
      .catch(error => {
        console.error(error.message);
      });
  },
};
</script>

<style lang="css" scoped>
.txt {
  color: grey;
}
.link-readmore {
  border: 2px solid grey;
  color: grey;
  border-radius: 5px;
}
#planet-text {
  position: absolute;
  top: 290px;
  left: 100px;
  color: white;
  font-size: 2.5em;
}

/* equal card height */
.row-equal > div[class*='col-'] {
  display: flex;
  /* flex: 1 0 auto; */
}

.row-equal .card {
  width: 100%;
}

/* ensure equal card height inside carousel */
.carousel-inner > .row-equal.active,
.carousel-inner > .row-equal.next,
.carousel-inner > .row-equal.prev {
  display: flex;
}

/* prevent flicker during transition */
.carousel-inner > .row-equal.active.left,
.carousel-inner > .row-equal.active.right {
  opacity: 0.5;
  display: flex;
}

/* control image height */
.card-img-top-250 {
  max-height: 250px;
  overflow: hidden;
}

@media (max-width: 412px) {
  #planet-text {
    position: absolute;
    top: 200px;
    left: 60px;
    color: white;
    font-size: 1.5em;
  }
}
</style>
