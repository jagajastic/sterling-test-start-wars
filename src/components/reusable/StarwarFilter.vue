<template>
  <div class="container-fluid px-5">
    <div class>
      <form action>
        <div class="row">
          <div
            class="form-group col-md-4 col-lg-2 d-flex px-3 mt-md-5 align-items-center mx-3"
          >
            <label for="filter" class="px-2">FILTER</label>
            <select
              class="form-control border border-secondary"
              id="exampleFormControlSelect1"
            >
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div
            class="form-group col-md-4 col-lg-2 d-flex px-3 border-1 mt-md-5 align-items-center mx-3"
          >
            <label for="filter" class="px-2">VIEW</label>
            <select
              class="form-control border border-secondary"
              id="exampleFormControlSelect1"
            >
              <option>Grid</option>
              <option>Female</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'StarwarFilter',
  props: {},
};
</script>
