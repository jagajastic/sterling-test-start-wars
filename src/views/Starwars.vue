<template>
  <main>
    <StarwarsHead :search="search" v-on:getSearch="searchPlanet($event)" />
    <StarwarTitle title="Popular Starships" />
    <div class="card-flex">
      <Loader v-if="load" />
      <StarShip
        v-for="planet in planets"
        v-bind:key="planet.name"
        :planet="planet"
        v-else
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
import Navigation from '@/components/reusable/Navigation';
import Loader from '@/components/reusable/Loader';

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
      load: false,
    };
  },
  props: {},
  components: {
    StarwarsHead,
    StarwarTitle,
    StarShip,
    Navigation,
    Loader,
  },
  created: function() {
    this.load = true;
    axios('https://swapi.co/api/starships')
      .then(response => {
        this.planets = response.data.results;
        this.count = response.data.count;
        this.next = response.data.next;
        this.previous = response.data.previous;
        console.log(response);
        this.load = false;
      })
      .catch(error => {
        console.error(error.message);
      });
  },
  methods: {
    getPreviousPage() {
      if (this.previous) {
        this.load = true;
        axios(this.previous)
          .then(response => {
            this.planets = response.data.results;
            this.count = response.data.count;
            this.next = response.data.next;
            this.previous = response.data.previous;
            this.load = false;
          })
          .catch(error => {
            console.error(error.message);
          });
      }
    },
    getNextPage() {
      if (this.next) {
        this.load = true;
        axios(this.next)
          .then(response => {
            this.planets = response.data.results;
            this.count = response.data.count;
            this.next = response.data.next;
            this.previous = response.data.previous;
            this.load = false;
          })
          .catch(error => {
            console.error(error.message);
          });
      }
    },
    searchPlanet(search) {
      this.load = true;
      axios(`https://swapi.co/api/starships/?search=${search}`)
        .then(response => {
          this.planets = response.data.results;
          this.count = response.data.count;
          this.next = response.data.next;
          this.previous = response.data.previous;
          this.load = false;
        })
        .catch(error => {
          console.error(error.message);
        });
    },
  },
};
</script>
