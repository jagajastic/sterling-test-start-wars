<template>
  <div class="home d-flex flex-column text-center" id="head-section">
    <div class>
      <img src="../../assets/logo.png" alt="star war logo" id="top-right-log" />
    </div>
    <div class="mt-5 d-flex flex-column align-items-center">
      <div class id="head-logo">
        <img
          alt="Vue logo"
          src="../../assets/logo.png"
          class="w-25"
          id="main-logo"
        />
        <span class="text-white px-2" id="directory">Directory</span>
        <span>&nbsp;</span>
      </div>
      <hr class="text-white" id="horizontal-line" />
      <div class="text-white mt-md-5">
        <p>
          Find your favourite Characters, Films, Species,
          <br />Starwars, and Planets
        </p>
      </div>
      <div
        class="bg-white w-50 w-sm-75 mx-5 rounded d-inline-flex align-items-center pl-2"
      >
        <button class="bg-white mr-md-4 ml-md-5 border-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            id="Capa_1"
            x="0px"
            y="0px"
            width="20"
            height="20px"
            viewBox="0 0 475.084 475.084"
            style="enable-background:new 0 0 475.084 475.084;"
            xml:space="preserve"
          >
            <g>
              <g>
                <path
                  d="M464.524,412.846l-97.929-97.925c23.6-34.068,35.406-72.047,35.406-113.917c0-27.218-5.284-53.249-15.852-78.087   c-10.561-24.842-24.838-46.254-42.825-64.241c-17.987-17.987-39.396-32.264-64.233-42.826   C254.246,5.285,228.217,0.003,200.999,0.003c-27.216,0-53.247,5.282-78.085,15.847C98.072,26.412,76.66,40.689,58.673,58.676   c-17.989,17.987-32.264,39.403-42.827,64.241C5.282,147.758,0,173.786,0,201.004c0,27.216,5.282,53.238,15.846,78.083   c10.562,24.838,24.838,46.247,42.827,64.234c17.987,17.993,39.403,32.264,64.241,42.832c24.841,10.563,50.869,15.844,78.085,15.844   c41.879,0,79.852-11.807,113.922-35.405l97.929,97.641c6.852,7.231,15.406,10.849,25.693,10.849   c9.897,0,18.467-3.617,25.694-10.849c7.23-7.23,10.848-15.796,10.848-25.693C475.088,428.458,471.567,419.889,464.524,412.846z    M291.363,291.358c-25.029,25.033-55.148,37.549-90.364,37.549c-35.21,0-65.329-12.519-90.36-37.549   c-25.031-25.029-37.546-55.144-37.546-90.36c0-35.21,12.518-65.334,37.546-90.36c25.026-25.032,55.15-37.546,90.36-37.546   c35.212,0,65.331,12.519,90.364,37.546c25.033,25.026,37.548,55.15,37.548,90.36C328.911,236.214,316.392,266.329,291.363,291.358z   "
                  data-original="#000000"
                  class="active-path"
                  data-old_color="#000000"
                  fill="#C1BFC4"
                />
              </g>
            </g>
          </svg>
        </button>
        <input
          type="text"
          class="border-0 p-md-3 w-100 rounded"
          placeholder="Enter a search term"
        />
      </div>
    </div>

    <!-- <LandingPage msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>
<script>
export default {
  name: 'StarwarsHead',
  props: {
    msg: String,
  },
};
</script>
