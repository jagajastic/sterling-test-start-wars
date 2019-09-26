<template>
  <div class="loader"></div>
</template>
<script>
export default {
  name: 'Loader',
};
</script>

<style lang="css" scope>
/* loader design and size */
.loader {
  border: 5px solid #f3f3f3;
  -webkit-animation: spin 1s linear infinite;
  animation: spin 1s linear infinite;
  border-top: 5px solid #555;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  position: relative;
  left: 50%;
}

/* Safari */
@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
