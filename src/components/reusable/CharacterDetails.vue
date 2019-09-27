<template>
  <main>
    <div>
      <StarwarsHead />
    </div>
    <div class="container my-5">
      <div class="card mb-3 col-md-8 mx-auto border-0">
        <img
          src="../../assets/character-1.jpg"
          class="card-img-top img-responsive"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">{{ $route.params.name }}</h5>
          <p class="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At
            molestias provident nobis rem sed. Dolore, provident excepturi sunt
            suscipit exercitationem modi assumenda impedit ab, perferendis
            numquam neque enim beatae eligendi Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Veniam, ullam praesentium.
            Perspiciatis saepe voluptatem earum sit? Beatae, libero assumenda
            numquam odio dolorum quaerat animi esse corrupti reiciendis iste
            voluptas tenetur. .
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quidem
            placeat dolores rerum minima dolor enim, ratione amet praesentium,
            harum laudantium debitis facere earum commodi doloribus voluptas et
            cum eius? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Soluta impedit ad molestiae officia accusantium repellendus
            laboriosam sit consequuntur accusamus fugiat incidunt, optio illum
            id explicabo. Nostrum consequuntur quo nisi nihil!
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import StarwarsHead from '../reusable/StarwarsHead';
export default {
  name: 'CharacterDetails',
  data() {
    return {};
  },
  props: ['name'],
  components: {
    StarwarsHead,
  },
  mounted() {
    if (this.name) {
      this.displayName = this.name;
    }
  },
};
</script>
