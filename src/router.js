import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () =>
        import(/* webpackChunkName: "home" */ './views/Home.vue'),
    },
    {
      path: '/characters',
      name: 'character',
      component: () =>
        import(/* webpackChunkName: "starwars" */ './views/Character.vue'),
    },
    {
      path: '/planets',
      name: 'planets',
      component: () =>
        import(/* webpackChunkName: "planets" */ './views/Starwars.vue'),
    },
    {
      path: '/shipdetails',
      name: 'starshipdetails',
      component: () =>
        import(
          /* webpackChunkName: "starshipdetails" */ './components/reusable/WarshipDetails.vue'
        ),
    },
    {
      path: '/characterDetails',
      name: 'characterdetails',
      component: () =>
        import(
          /* webpackChunkName: "characterDetails" */ './components/reusable/CharacterDetails.vue'
        ),
    },
  ],
});
