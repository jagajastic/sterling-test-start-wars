<template>
  <main>
    <StarwarsHead :search="search" v-on:getSearch="searchCharacter($event)" />
    <!-- <StarwarTitle title="Starwars Characters" /> -->

    <!-- <StarwarFilter :selected="selected" v-on:getSearch="characterFilter" /> -->
    <!-- start of filter -->
    <div class="container-fluid px-5">
      <div class>
        <form action>
          <div class="row">
            <div
              class="form-group col-md-4 col-lg-2 d-flex px-3 mt-md-5 align-items-center mx-3"
            >
              <label for="filter" class="px-2">FILTER</label>
              <select
                class="form-control border border-secondary"
                id="exampleFormControlSelect1"
                v-model="selected"
              >
                <option
                  v-for="item in list"
                  :key="item"
                  :value="item"
                  selected
                  >{{ item }}</option
                >
              </select>
            </div>
            <div
              class="form-group col-md-4 col-lg-2 d-flex px-3 border-1 mt-md-5 align-items-center mx-3"
            >
              <label for="filter" class="px-2">VIEW</label>
              <select
                class="form-control border border-secondary"
                id="exampleFormControlSelect1"
              >
                <option>select...</option>
                <option>Grid</option>
              </select>
            </div>
          </div>
        </form>
      </div>
    </div>
    <!-- end of filter -->
    <div class="card-flex">
      <Loader class="row mt-3 mb-3" v-if="load" />
      <StarwarsCharacterCard
        v-for="character in characterFilter"
        v-bind:key="character.name"
        :character="character"
        v-else
      />
    </div>
    <Navigation
      :count="count"
      :next="next"
      :page="page"
      v-on:previousPage="getPreviousPage($event)"
      v-on:nextPage="getNextPage($event)"
    />
  </main>
</template>

<script>
import StarwarsHead from '@/components/reusable/StarwarsHead';
import StarwarTitle from '@/components/reusable/StarwarTitle';
import StarwarsCharacterCard from '@/components/reusable/StarwarsCharacterCard';
import Navigation from '@/components/reusable/Navigation';
import Loader from '@/components/reusable/Loader';

import axios from 'axios';

export default {
  name: 'Character',
  data() {
    return {
      selected: '',
      search: '',
      count: 0,
      next: '',
      page: '1',
      previous: '',
      list: ['Male', 'Female', 'n/a'],
      characters: [],
      load: false,
    };
  },
  props: {},
  components: {
    StarwarsHead,
    StarwarTitle,
    StarwarsCharacterCard,
    Navigation,
    Loader,
  },
  created: function() {
    this.load = true;
    axios('https://swapi.co/api/people')
      .then(response => {
        this.characters = response.data.results;
        this.count = response.data.count;
        this.next = response.data.next;
        this.previous = response.data.previous;
        this.load = false;
      })
      .catch(error => {
        console.error(error);
      });
  },
  methods: {
    searchCharacter(search) {
      this.load = true;
      axios(`https://swapi.co/api/people/?search=${search}`)
        .then(response => {
          this.characters = response.data.results;
          this.count = response.data.count;
          this.next = response.data.next;
          this.previous = response.data.previous;
          this.load = false;
        })
        .catch(error => {
          console.error(error.message);
        });
    },
    getNextPage() {
      if (this.next) {
        this.load = true;
        axios(this.next)
          .then(response => {
            this.characters = response.data.results;
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
    getPreviousPage() {
      if (this.previous) {
        this.load = true;
        axios(this.previous)
          .then(response => {
            this.load = false;
            this.characters = response.data.results;
            this.count = response.data.count;
            this.next = response.data.next;
            this.previous = response.data.previous;
          })
          .catch(error => {
            console.error(error.message);
          });
      }
    },
  },
  computed: {
    characterFilter() {
      return this.characters.filter(character => {
        return character.gender.match(this.selected.toLowerCase());
      });
    },
  },
};
</script>
