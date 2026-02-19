import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import NotFound from './components/NotFound.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HelloWorld,
        props: { msg: 'Welcome to Your Vue.js App!' }
    },
    {
        path: '/foo',
        name: 'Foo',
        component: HelloWorld,
        props: { msg: 'Foo Page' }
    },
    {
        path: '/bar',
        name: 'Bar',
        component: HelloWorld,
        props: { msg: 'Bar Page' }
    },
    {
        path: '/404',
        name: 'NotFound',
        component: NotFound
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/404'
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
