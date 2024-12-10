import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router'; // Utilisation de VueRouter pour Vue 2
import HomePage from './views/HomePage.vue';
import ContactPage from './views/ContactPage.vue';
import ApiPage from './views/ApiPage.vue';
import BonusPage from './views/BonusPage.vue';

Vue.config.productionTip = false;

Vue.use(VueRouter); // Active VueRouter

const routes = [
  { path: '/', component: HomePage },
  { path: '/contact', component: ContactPage },
  { path: '/api', component: ApiPage },
  { path: '/bonus', component: BonusPage },
];

const router = new VueRouter({
  mode: 'history', // Supprime le "#" de l'URL
  routes,
});

new Vue({
  render: h => h(App),
  router, // Injecte le routeur dans Vue
}).$mount('#app');
