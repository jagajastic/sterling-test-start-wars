<template>
  <div class="d-flex flex-row p-md-4 mx-auto py-2">
    <div class="card mx-md-2 my-md-2" style="width: 18rem;">
      <img src="../../assets/starship-1.jpg" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{ starShip.name }}</h5>
        <p class="card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          suscipit quis quod corporis eligendi voluptatibus, nostrum adipisci
          fugiat unde
          <a href="#" class="btn btn-secondary float-right rounded-0 text-dark">
            Read More
            <img src="../../assets/left-arrow.svg" id="arrow" />
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StarShip',
  props: {
    starShip: Object,
  },
};
</script>
<style lang="css" scoped>
#arrow {
  transform: scaleX(-1);
}
</style>
