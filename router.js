import { createAPP } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: App},
        {path: '/contact', component: Contact},
    ],
});