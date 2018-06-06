import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import './assets/scss/style.scss';

Vue.config.productionTip = false;

Vue.use(VueRouter);
import Home from './components/Home';
import VenueIndex from './components/VenueIndex';
import VenueShow from './components/VenueShow';
import VenueNew from './components/VenueNew';
import VenueEdit from './components/VenueEdit';

const routes = [
  { path: '/' , component: Home },
  { path: '/venues' , component: VenueIndex },
  { path: '/venues/new', component: VenueNew },
  { path: '/venues/:id', component: VenueShow },
  { path: '/venues/:id/edit', component: VenueEdit }
];

const router = new VueRouter({
  routes
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
