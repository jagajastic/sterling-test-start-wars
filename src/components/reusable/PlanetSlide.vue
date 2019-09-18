<template>
  <section class="carousel slide" data-ride="carousel" id="postsCarousel">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 text-md-right lead">
          <a class="btn btn-outline-secondary prev" href title="go back">
            <i class="fa fa-lg fa-chevron-left"></i>
          </a>
          <a class="btn btn-outline-secondary next" href title="more">
            <i class="fa fa-lg fa-chevron-right"></i>
          </a>
        </div>
      </div>
    </div>
    <div class="container p-t-0 m-t-2 carousel-inner">
      <div class="row row-equal carousel-item active m-t-0 mx-auto">
        <div class="col-md-4 my-3">
          <div class="card">
            <div class="card-img-top card-img-top-250">
              <img
                class="img-fluid"
                src="../../assets/planet-1.jpg"
                alt="Carousel 1"
              />
              <div class="text-center" id="planet-title">
                <p>Text goes here</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 my-3">
          <div class="card">
            <div class="card-img-top card-img-top-250">
              <img
                class="img-fluid"
                src="../../assets/planet-2.jpg"
                alt="Carousel 2"
              />
              <div class="text-center" id="planet-title">
                <p>Text goes here</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 my-3">
          <div class="card">
            <div class="card-img-top card-img-top-250">
              <img
                class="img-fluid"
                src="../../assets/planet-3.jpg"
                alt="Carousel 3"
              />
              <div class="text-center" id="planet-title">
                <p>Text goes here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PlanetSlide',
  props: {},
};

// (function($) {
//     "use strict";

//     // manual carousel controls
//     $('.next').click(function(){ $('.carousel').carousel('next');return false; });
//     $('.prev').click(function(){ $('.carousel').carousel('prev');return false; });

// })(jQuery);
</script>
<style lang="css" scoped>
#planet-title {
  position: absolute;
  color: white;
  top: 204px;
  left: 30%;
}
/* equal card height */
.row-equal > div[class*='col-'] {
  display: flex;
  flex: 1 0 auto;
}

.row-equal .card {
  width: 100%;
}

/* ensure equal card height inside carousel */
.carousel-inner > .row-equal.active,
.carousel-inner > .row-equal.next,
.carousel-inner > .row-equal.prev {
  display: flex;
}

/* prevent flicker during transition */
.carousel-inner > .row-equal.active.left,
.carousel-inner > .row-equal.active.right {
  opacity: 0.5;
  display: flex;
}

/* control image height */
.card-img-top-250 {
  max-height: 370px;
  overflow: hidden;
}

@media (max-width: 412) {
  #planet-title {
    position: absolute;
    color: white;
    top: 280px;
    left: 35%;
  }
}
</style>
