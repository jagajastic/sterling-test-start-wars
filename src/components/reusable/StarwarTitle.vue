<template>
  <div class="container justify-content-center text-center pt-5 mt-2">
    <div class="col">
      <p class="h3 font-weight-bold">{{ title }}</p>
    </div>
    <hr id="star-char" />
  </div>
</template>
<script>
export default {
  name: 'StarwarTitle',
  props: {
    title: String,
  },
};
</script>
