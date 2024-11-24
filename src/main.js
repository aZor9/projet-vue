import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router'; // Utilisation de VueRouter pour Vue 2
import TextImageComponent from './components/TextImageComponent.vue';
import ContactComponent from './components/ContactComponent.vue';

Vue.config.productionTip = false;

Vue.use(VueRouter); // Active VueRouter

const routes = [
  { path: '/', component: TextImageComponent },
  { path: '/contact', component: ContactComponent },
];

const router = new VueRouter({
  mode: 'history', // Supprime le "#" de l'URL
  routes,
});

new Vue({
  render: h => h(App),
  router, // Injecte le routeur dans Vue
}).$mount('#app');
