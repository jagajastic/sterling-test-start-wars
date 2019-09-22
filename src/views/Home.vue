<template>
  <main>
    <StarwarsHead ms="hello" />
    <StarwarTitle title="Popular Starship" />
    <div class="card-flex">
      <StarShip v-for="item in data" v-bind:key="item" :starShip="item" />
    </div>
    <div
      class="col-md-6 mx-auto my-5 d-flex justify-content-center align-items-center"
    >
      <button class="btn-lg col-md-8">VIEW MORE</button>
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
        v-bind:key="character"
        :character="character"
      />
    </div>
    <div
      class="col-md-6 mx-auto my-5 d-flex justify-content-center align-items-center"
    >
      <button class="btn-lg col-md-8" href="#">VIEW MORE</button>
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
  props: {
    data: [],
    characters: [],
    planets: [],
  },
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
        this.data = res.data.results.splice(0, 6);
        // console.log(res);
      })
      .catch(error => error);

    // planets call
    axios
      .get('https://swapi.co/api/planets')
      .then(res => {
        this.planets = res.data.results.splice(0, 3);
      })
      .catch(error => {
        console.log(error.message);
      });

    // character call
    axios
      .get('https://swapi.co/api/people')
      .then(res => {
        this.characters = res.data.results.splice(0, 4);
        console.log(this.characters[0].name);
      })
      .catch(error => {
        console.log(error.message);
      });
  },
};
</script>

<style lang="css" scoped></style>
