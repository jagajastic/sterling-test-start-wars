<template>
  <main>
    <StarwarsHead />
    <StarwarTitle title="Popular Starships" />
    <div class="card-flex">
      <StarShip
        v-for="planet in planets"
        v-bind:key="planet.name"
        :planet="planet"
      />
    </div>
    <Navigation />
  </main>
</template>

<script>
import StarwarsHead from '@/components/reusable/StarwarsHead.vue';
import StarwarTitle from '@/components/reusable/StarwarTitle';
import StarShip from '@/components/reusable/StarShip';
import Navigation from '../components/reusable/Navigation';

import axios from 'axios';

export default {
  name: 'starwars',
  props: {
    planets: [],
  },
  components: {
    StarwarsHead,
    StarwarTitle,
    StarShip,
    Navigation,
  },
  created: function() {
    axios('https://swapi.co/api/starships')
      .then(response => {
        this.planets = response.data.results;
        console.log(response);
      })
      .catch(error => {
        console.error;
      });
  },
};
</script>
