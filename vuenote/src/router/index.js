import Vue from 'vue';
import Router from 'vue-router';
import mainPage from '@/components/mainPage';
import HelloWorld from '@/components/HelloWorld.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld,
        },
        {
            path: '/note',
            name: 'mainPage',
            component: mainPage,
        },
    ],
});
