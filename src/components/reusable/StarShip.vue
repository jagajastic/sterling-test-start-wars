<template>
  <div class="d-flex flex-row p-md-4 mx-auto py-2">
    <div class="card mx-md-2 my-md-2" style="width: 18rem;">
      <img src="../../assets/starship-1.jpg" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" class="btn btn-secondary float-right rounded-0 text-dark">
          Read More
          <img src="../../assets/left-arrow.svg" id="arrow" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StarShip',
  props: {},
};
</script>
<style lang="css" scoped>
#arrow {
  transform: scaleX(-1);
}
</style>
