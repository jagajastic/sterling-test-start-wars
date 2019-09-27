<template>
  <div class="container">
    <div class="row">
      <nav aria-label="...">
        <ul class="pagination pagination-lg">
          <div class="my-3 mx-3">
            {{ page - pageSize || 1 }} - {{ Math.ceil(count / 10) }}
          </div>
          <li class="page-item">
            <a
              class="page-link"
              href="#"
              aria-label="Previous"
              @click.prevent="previousPage"
            >
              <span aria-hidden="true">&#60;</span>
              <span class="sr-only">Previous</span>
            </a>
          </li>
          <li class="page-item">
            <a
              class="page-link link"
              aria-label="Next"
              @click.prevent="nextPage"
            >
              <span aria-hidden="true">&#62;</span>
              <span class="sr-only">Next</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  props: {
    count: Number,
    next: String,
    page: String,
    pageSize: String,
  },
  methods: {
    nextPage() {
      this.$emit('nextPage');
    },
    previousPage() {
      this.$emit('previousPage');
    },
  },
};
</script>
