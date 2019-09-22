<template>
  <div class="container">
    <div class="row">
      <nav aria-label="...">
        <ul class="pagination pagination-lg">
          <div class="my-3 mx-3">1 of 10</div>
          <li class="page-item disabled">
            <a class="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
              <span class="sr-only">Previous</span>
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
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
  props: {},
};
</script>
