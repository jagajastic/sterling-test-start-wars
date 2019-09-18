<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>-->
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}

.fluid {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
nav[aria-label^='...'] {
  position: absolute;
  left: 650px;
  padding-top: 40px;
}
p[class^='h3 font-weight-bold'] {
  font-weight: 900 !important;
  color: #555556;
  letter-spacing: 1px;
}
hr[id^='star-char'] {
  border-bottom: 5px solid grey;
  width: 10%;
}
option {
  align-content: center;
}
.card-flex {
  display: flex;
  flex-grow: 1;
  flex-wrap: wrap;
  flex-direction: row;
  margin-left: 5%;
  margin-right: 5%;
}
#main-logo {
  height: 48px;
  width: 130px !important;
}
#head-section {
  background-image: url('./assets/hero-banner.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  height: 600px;
}
#head-logo {
  margin-top: 120px;
}
#logo {
  width: 50%;
}
#top-right-log {
  width: 130px;
  height: 48px;
  position: absolute;
  top: 35px;
  left: 50px;
}
#horizontal-line {
  width: 209px;
  border-bottom-width: 50px;
  border-color: white;
}
#directory {
  font-family: sans-serif;
  font-weight: 800;
}

@media (max-width: 412px) {
  .fluid {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
  nav[aria-label^='...'] {
    position: absolute;
    left: 100px;
  }
  .card-flex {
    display: flex;
    flex-direction: column;
  }
  p[class^='h3 font-weight-bold'] {
    font-size: 20px;
  }
  #top-right-log {
    display: none;
  }
  #head-logo {
    margin-top: 0px;
  }
  #head-section {
    background-image: url('./assets/hero-banner.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    height: 300px;
  }
  .card-flex {
    margin-left: 0%;
    margin-right: 0%;
  }
}

@media (min-width: 500px) and (max-width: 1024px) {
  .fluid {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
  .card-flex {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin-left: 10%;
    margin-right: 10%;
  }
  nav[aria-label^='...'] {
    position: absolute;
    left: 320px;
  }
}
</style>
