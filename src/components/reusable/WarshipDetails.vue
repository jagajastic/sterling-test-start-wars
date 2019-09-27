<template>
  <main>
    <div class="home d-flex flex-column text-center" id="head-section">
      <div class>
        <router-link to="/">
          <img
            src="../../assets/logo.png"
            alt="star war logo"
            id="top-right-log"
          />
        </router-link>
      </div>

      <!-- slide start -->
      <div
        id="carouselExampleControls"
        class="carousel slide col-md-6 mt-5 pt-2"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              class="d-block w-100"
              src="../../assets/starship-1.jpg"
              alt="First slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src="../../assets/starship-2.png"
              alt="Second slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src="../../assets/starship-2.png"
              alt="Third slide"
            />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      <!-- slide end -->
      <!-- ending page -->
      <!-- <LandingPage msg="Welcome to Your Vue.js App" /> -->
    </div>

    <!-- text section -->
    <div
      class="container justisty-content-center align-items-center d-flex flex-column"
    >
      <div class="col-md-8 my-5">
        <h4>{{ $route.params.name }}</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quod
          aut atque magnam fuga! Magnam vel quisquam voluptate itaque quod ad
          hic maiores eveniet sint numquam temporibus, doloribus cum alias.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, sunt
          eligendi blanditiis sapiente sequi totam dignissimos deleniti
          delectus, neque corporis veniam perspiciatis labore a veritatis?
          Mollitia accusantium eveniet nemo asperiores. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Aperiam quod aut atque magnam fuga!
          Magnam vel quisquam voluptate itaque quod ad hic maiores eveniet sint
          numquam temporibus, doloribus cum alias. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Cumque, sunt eligendi blanditiis
          sapiente sequi totam dignissimos deleniti delectus, neque corporis
          veniam perspiciatis labore a veritatis? Mollitia accusantium eveniet
          nemo asperiores. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Aperiam quod aut atque magnam fuga! Magnam vel quisquam
          voluptate itaque quod ad hic maiores eveniet sint numquam temporibus,
          doloribus cum alias. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Cumque, sunt eligendi blanditiis sapiente sequi
          totam dignissimos deleniti delectus, neque corporis veniam
          perspiciatis labore a veritatis? Mollitia accusantium eveniet nemo
          asperiores.
        </p>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore illo
          tenetur doloribus dolorum iusto, ipsum sint. Velit dignissimos maxime
          maiores laboriosam tempore vero aut, perspiciatis nisi debitis
          accusantium, omnis minus. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Laboriosam blanditiis corporis natus similique?
          Atque asperiores minima nam! Aut, molestiae labore! Nulla, quod ut
          dolores porro in modi iure accusantium vitae! Lorem ipsum, dolor sit
          amet consectetur adipisicing elit. Labore illo tenetur doloribus
          dolorum iusto, ipsum sint. Velit dignissimos maxime maiores laboriosam
          tempore vero aut, perspiciatis nisi debitis accusantium, omnis minus.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          blanditiis corporis natus similique? Atque asperiores minima nam! Aut,
          molestiae labore! Nulla, quod ut dolores porro in modi iure
          accusantium vitae!
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          obcaecati alias distinctio exercitationem odit fuga, autem ipsa iure?
          Consectetur error veritatis sunt itaque? Libero, accusamus delectus
          voluptatum quae voluptatem quas.
        </p>
      </div>
    </div>
    <div class="container mb-5 mt-2">
      <div class="text-center mx-auto col-md-4">
        <h5 class="border p-2">Recently viewed Starships</h5>
      </div>
      <div class="row flex-nowrap flex-scroll">
        <StarShip v-for="ship in startShip" :planet="ship" :key="ship.name" />
      </div>
    </div>
  </main>
</template>

<script>
import StarShip from '../reusable/StarShip.vue';
import axios from 'axios';

export default {
  name: 'Scout',
  components: {
    StarShip,
  },
  data() {
    return {
      shipname: { name: 'tyuiop' },
      startShip: [],
    };
  },
  props: ['name'],
  created() {
    axios
      .get('https://swapi.co/api/people')
      .then(response => {
        this.startShip = response.data.results;
      })
      .catch(error => {
        console.error(error.message);
      });
  },
};
</script>

<style lang="css" scoped>
.flex-scroll {
  overflow-x: scroll;
}
.card-block {
  min-height: 300px;
}
@media (min-width: 700px) {
  #carouselExampleControls {
    position: absolute;
    left: 340px;
  }
}
</style>
