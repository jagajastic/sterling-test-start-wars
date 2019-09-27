<template>
  <div class="d-flex flex-row p-md-4 mx-auto py-2">
    <div class="card mx-md-2 my-md-2 rounded-0 border-0" id="card-w">
      <img src="../../assets/starship-1.jpg" class="card-img-top" alt="..." />
      <div class="card-body p-4" id="box-shadow">
        <h5 class="card-title">{{ planet.name }}</h5>
        <p class="card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          suscipit quis quod corporis eligendi voluptatibus, nostrum adipisci
          fugiat unde
        </p>
        <router-link
          :to="{ path: '/shipdetails/' + planet.name }"
          class="btn float-right rounded-0 text-dark"
          style="background-color: #d8d8d8; margin:10px;"
        >
          Read More
          <img src="../../assets/left-arrow.svg" id="arrow" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StarShip',
  props: {
    planet: Object,
  },
};
</script>
<style lang="css" scoped>
#card-w {
  width: 23em;
  background-color: #d8d8d8;
}
#inner-box {
  padding: 5px;
  background-color: #d8d8d8;
}

#box-shadow {
  padding: 0px;
  padding-left: 6px;
  background-color: #f2f2f2;
  margin-left: 8px;
  margin-bottom: 8px;
  margin-right: -8px;
}

#arrow {
  transform: scaleX(-1);
}
</style>
