<template>
  <div class="d-flex flex-row p-md-4 mx-auto py-2">
    <div class="card mx-md-2 my-md-2 rounded-0" style="width: 18rem;">
      <img src="../../assets/starship-1.jpg" class="card-img-top" alt="..." />
      <div class="card-body" id="box-shadow">
        <h5 class="card-title">{{ planet.name }}</h5>
        <p class="card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          suscipit quis quod corporis eligendi voluptatibus, nostrum adipisci
          fugiat unde
          <router-link to="/shipdetails">
            <a class="btn btn-secondary float-right rounded-0 text-dark">
              Read More
              <img src="../../assets/left-arrow.svg" id="arrow" />
            </a>
          </router-link>
        </p>
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
#box-shadow {
  border: 1px solid;
  padding: 10px;
  box-shadow: -5px 10px #afafaf;
}
#arrow {
  transform: scaleX(-1);
}
</style>
