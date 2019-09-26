<template>
  <main>
    <StarwarsHead ms="hello" />
    <StarwarTitle title="Popular Starship" />
    <div class="card-flex">
      <StarShip
        v-for="ship in starships"
        v-bind:key="ship.name"
        :planet="ship"
      />
    </div>
    <div
      class="col-md-6 mx-auto my-5 d-flex justify-content-center align-items-center"
    >
      <router-link class="btn-lg col-md-8 text-center" to="/planets"
        >VIEW MORE</router-link
      >
    </div>
    <StarwarTitle title="Popular Planets" />
    <!-- slide goes here -->
    <!--Carousel Wrapper-->
    <PlanetSlide />
    <!--/.Carousel Wrapper-->
    <StarwarTitle title="Popular Characters" />,
    <div class="card-flex">
      <StarwarsCharacterCard
        v-for="character in characters"
        :key="character.name"
        :character="character"
      />
    </div>
    <div
      class="col-md-6 mx-auto my-5 d-flex justify-content-center align-items-center"
    >
      <router-link class="btn-lg col-md-8 text-center" to="/characters"
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
    };
  },
  props: {},
  components: {
    StarwarsHead,
    StarwarTitle,
    StarShip,
    PlanetSlide,
    StarwarsCharacterCard,
  },
  created: function() {
    // people call
    axios
      .get('https://swapi.co/api/starships')
      .then(res => {
        this.starships = res.data.results.splice(0, 6);
      })
      .catch(error => error);

    // planets call
    axios
      .get('https://swapi.co/api/planets')
      .then(res => {
        this.planets = res.data.results.splice(0, 3);
      })
      .catch(error => {
        console.error(error.message);
      });

    // character call
    axios
      .get('https://swapi.co/api/people')
      .then(res => {
        this.characters = res.data.results.splice(0, 4);
      })
      .catch(error => {
        console.error(error.message);
      });
  },
};
</script>

<style lang="css" scoped></style>
