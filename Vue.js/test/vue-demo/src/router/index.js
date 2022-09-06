import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/views/Login.vue';
import About from '@/views/About.vue';

const routes = [
    {
        name : 'Login',
        path : "/",
        component : Login,
    }, {
        name: 'About',
        path: '/about',
        component: About,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;