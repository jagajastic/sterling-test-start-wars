<template>
  <div class="fluid px-5 py-4">
    <div class="row">
      <div class="card" style="width: 36rem;">
        <div class="row m-0">
          <div class="col-sm-6 p-0">
            <img
              src="../../assets/character-1.jpg"
              class="w-100 h-100 h-sm-100"
            />
          </div>
          <div class="col-sm-6 p-0 py-4">
            <div class="card-block px-3">
              <h4 class="card-title">{{ character.name }}</h4>
              <p class="card-text">
                Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
                <router-link
                  :to="{ path: '/characterDetails/' + character.name }"
                  >Readmore</router-link
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'StarwarsCharacterCard',
  data() {
    return {};
  },
  props: {
    character: Object,
  },
};
</script>
