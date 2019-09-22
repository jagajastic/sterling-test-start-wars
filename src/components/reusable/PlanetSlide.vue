<template>
  <div
    id="multi-item-example"
    class="carousel slide carousel-multi-item"
    data-ride="carousel"
  >
    <!--Slides-->
    <div class="carousel-inner" role="listbox">
      <!--First slide-->
      <div class="d-flex flex-row mySlides fadeSlide">
        <div class="col-md-4">
          <div class="card mb-2">
            <img
              class="card-img-top"
              src="../../assets/planet-1.jpg"
              alt="Card image cap"
            />
          </div>
        </div>

        <div class="col-md-4">
          <div class="card mb-2">
            <img
              class="card-img-top"
              src="../../assets/planet-2.jpg"
              alt="Card image cap"
            />
          </div>
        </div>

        <div class="col-md-4">
          <div class="card mb-2">
            <img
              class="card-img-top"
              src="../../assets/planet-3.jpg"
              alt="Card image cap"
            />
          </div>
        </div>
      </div>
      <!--/.First slide-->

      <!--Second slide-->
      <div class="d-flex flex-row mySlides fadeSlide">
        <div class="col-md-4">
          <div class="card mb-2">
            <img
              class="card-img-top"
              src="../../assets/planet-1.jpg"
              alt="Card image cap"
            />
          </div>
        </div>

        <div class="col-md-4">
          <div class="card mb-2">
            <img
              class="card-img-top"
              src="../../assets/planet-2.jpg"
              alt="Card image cap"
            />
          </div>
        </div>

        <div class="col-md-4">
          <div class="card mb-2">
            <img
              class="card-img-top"
              src="../../assets/planet-3.jpg"
              alt="Card image cap"
            />
          </div>
        </div>
      </div>
      <!--/.Second slide-->

      <!--Third slide-->
      <div class="d-flex flex-row mySlides fadeSlide">
        <div class="col-md-4">
          <div class="card mb-2">
            <img
              class="card-img-top"
              src="../../assets/planet-1.jpg"
              alt="Card image cap"
            />
          </div>
        </div>

        <div class="col-md-4">
          <div class="card mb-2">
            <img
              class="card-img-top"
              src="../../assets/planet-2.jpg"
              alt="Card image cap"
            />
          </div>
        </div>

        <div class="col-md-4">
          <div class="card mb-2">
            <img
              class="card-img-top"
              src="../../assets/planet-3.jpg"
              alt="Card image cap"
            />
          </div>
        </div>
      </div>
      <!--/.Third slide-->
      <div style="text-align:center">
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
      </div>
    </div>
    <!--/.Slides-->
  </div>
</template>

<script>
export default {
  name: 'PlanetSlide',
  props: {
    planets: Array,
  },

  mounted: function() {
    let slideIndex = 0;
    showSlides();
    function showSlides() {
      let i;
      let slides = document.getElementsByClassName('mySlides');
      let slideArray = Array.prototype.slice.call(slides);

      console.log('new slides', slideArray[1]);
      let dots = document.getElementsByClassName('dot');
      for (i = 0; i < slideArray.length; i++) {
        slideArray[i].style.display = 'none';
      }
      slideIndex++;
      if (slideIndex > slideArray.length) {
        slideIndex = 1;
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
      }
      console.log('slide index1', slideIndex);

      slideArray[slideIndex - 1].style.display = 'block';
      dots[slideIndex - 1].className += ' active';
      setTimeout(showSlides, 4000); // Change image every 2 seconds
    }
  },
};
</script>
<style lang="css" scoped>
* {
  box-sizing: border-box;
}

.mySlides {
  display: block !important;
}
img {
  vertical-align: middle;
}

/* Slideshow container */
.slideshow-container {
  max-width: 1000px;
  position: relative;
  margin: auto;
}

/* Caption text */
.text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
}

/* The dots/bullets/indicators */
.dot {
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active {
  background-color: #717171;
}

/* Fading animation */
.fadeSlide {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
}

@-webkit-keyframes fade {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}

@keyframes fade {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}

/* On smaller screens, decrease text size */
@media only screen and (max-width: 300px) {
  .text {
    font-size: 11px;
  }
}
</style>
