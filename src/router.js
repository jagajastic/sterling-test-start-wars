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
        import(/* webpackChunkName: "starwars" */ './views/Starwars.vue'),
    },
  ],
});
