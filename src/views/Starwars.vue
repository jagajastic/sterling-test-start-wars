<template>
  <main>
    <StarwarsHead :search="search" v-on:getSearch="searchPlanet($event)" />
    <StarwarTitle title="Popular Starships" />
    <div class="card-flex">
      <StarShip
        v-for="planet in planets"
        v-bind:key="planet.name"
        :planet="planet"
      />
    </div>
    <Navigation
      :count="count"
      :next="next"
      :page="page"
      :pageSize="pageSize"
      v-on:previousPage="getPreviousPage($event)"
      v-on:nextPage="getNextPage($event)"
    />
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
  data() {
    return {
      planets: [],
      count: 0,
      next: '',
      page: '1',
      pageSize: '0',
      previous: '',
      search: '',
    };
  },
  props: {},
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
        this.count = response.data.count;
        this.next = response.data.next;
        this.previous = response.data.previous;
        console.log(response);
      })
      .catch(error => {
        console.error(error.message);
      });
  },
  methods: {
    getPreviousPage() {
      if (this.previous) {
        axios(this.previous)
          .then(response => {
            this.planets = response.data.results;
            this.count = response.data.count;
            this.next = response.data.next;
            this.previous = response.data.previous;
          })
          .catch(error => {
            console.error(error.message);
          });
      }
    },
    getNextPage() {
      if (this.next) {
        axios(this.next)
          .then(response => {
            this.planets = response.data.results;
            this.count = response.data.count;
            this.next = response.data.next;
            this.previous = response.data.previous;
          })
          .catch(error => {
            console.error(error.message);
          });
      }
    },
    searchPlanet(search) {
      axios(`https://swapi.co/api/starships/?search=${search}`)
        .then(response => {
          this.planets = response.data.results;
          this.count = response.data.count;
          this.next = response.data.next;
          this.previous = response.data.previous;
        })
        .catch(error => {
          console.error(error.message);
        });
    },
  },
};
</script>
