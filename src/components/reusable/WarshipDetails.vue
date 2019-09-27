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
        <h4>Correllian Scout</h4>
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
    <section class="container p-t-3">
      <div class="row">
        <div class="col-lg-12">
          <h1>Bootstrap 4 Card Slider</h1>
        </div>
      </div>
    </section>
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
        <div class="row row-equal carousel-item active m-t-0">
          <div class="col-md-4">
            <div class="card">
              <div class="card-img-top card-img-top-250">
                <img
                  class="img-fluid"
                  src="http://i.imgur.com/EW5FgJM.png"
                  alt="Carousel 1"
                />
              </div>
              <div class="card-block p-t-2">
                <h6 class="small text-wide p-b-2">Insight</h6>
                <h2>
                  <a href>Why Stuff Happens Every Year.</a>
                </h2>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card">
              <div class="card-img-top card-img-top-250">
                <img
                  class="img-fluid"
                  src="http://i.imgur.com/Hw7sWGU.png"
                  alt="Carousel 2"
                />
              </div>
              <div class="card-block p-t-2">
                <h6 class="small text-wide p-b-2">Development</h6>
                <h2>
                  <a href>How to Make Every Line Count.</a>
                </h2>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card">
              <div class="card-img-top card-img-top-250">
                <img
                  class="img-fluid"
                  src="http://i.imgur.com/g27lAMl.png"
                  alt="Carousel 3"
                />
              </div>
              <div class="card-block p-t-2">
                <h6 class="small text-wide p-b-2">Design</h6>
                <h2>
                  <a href>Responsive is Essential.</a>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div class="row row-equal carousel-item m-t-0">
          <div class="col-md-4">
            <div class="card">
              <div class="card-img-top card-img-top-250">
                <img
                  class="img-fluid"
                  src="//visualhunt.com/photos/l/1/office-student-work-study.jpg"
                  alt="Carousel 4"
                />
              </div>
              <div class="card-block p-t-2">
                <h6 class="small text-wide p-b-2">Another</h6>
                <h2>
                  <a href>Tagline or Call-to-action.</a>
                </h2>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card">
              <div class="card-img-top card-img-top-250">
                <img
                  class="img-fluid"
                  src="//visualhunt.com/photos/l/1/working-woman-technology-computer.jpg"
                  alt="Carousel 5"
                />
              </div>
              <div class="card-block p-t-2">
                <h6 class="small text-wide p-b-2">
                  <span class="pull-xs-right">12.04</span> Category 1
                </h6>
                <h2>
                  <a href>This is a Blog Title.</a>
                </h2>
              </div>
            </div>
          </div>
          <div class="col-md-4 fadeIn wow">
            <div class="card">
              <div class="card-img-top card-img-top-250">
                <img
                  class="img-fluid"
                  src="//visualhunt.com/photos/l/1/people-office-team-collaboration.jpg"
                  alt="Carousel 6"
                />
              </div>
              <div class="card-block p-t-2">
                <h6 class="small text-wide p-b-2">Category 3</h6>
                <h2>
                  <a href>Catchy Title of a Blog Post.</a>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'Scout',
};
</script>

<style lang="css" scoped>
@media (min-width: 700px) {
  #carouselExampleControls {
    position: absolute;
    left: 340px;
  }
}
</style>
