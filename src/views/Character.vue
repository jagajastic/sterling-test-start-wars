<template>
  <main>
    <StarwarsHead ms="hello" />
    <StarwarTitle title="Starwars Characters" />
    <StarwarFilter />
    <div class="card-flex">
      <StarwarsCharacterCard
        v-for="character in characters"
        v-bind:key="character"
        :character="character"
      />
    </div>
    <Navigation />
  </main>
</template>

<script>
import StarwarsHead from '../components/reusable/StarwarsHead';
import StarwarTitle from '../components/reusable/StarwarTitle';
import StarwarFilter from '../components/reusable/StarwarFilter';
import StarwarsCharacterCard from '../components/reusable/StarwarsCharacterCard';
import Navigation from '../components/reusable/Navigation';

import axios from 'axios';

export default {
  name: 'Character',
  props: {
    characters: [],
  },
  components: {
    StarwarsHead,
    StarwarTitle,
    StarwarFilter,
    StarwarsCharacterCard,
    Navigation,
  },
  created: function() {
    axios('https://swapi.co/api/people')
      .then(response => {
        this.characters = response.data.results.splice(0, 8);
      })
      .catch(error => {
        console.error(error);
      });
  },
};
</script>
