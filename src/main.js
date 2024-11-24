import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'; // Import VueRouter
import { createMemoryHistory, createRouter } from 'vue-router'
import TextImageComponent from './components/TextImageComponent.vue'
import Contact from './components/Contact.vue';

Vue.config.productionTip = false

Vue.use(VueRouter); // Use VueRouter

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')



const routes = [
  { path: '/', component: TextImageComponent },
  { path: '/contact', component: Contact },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})