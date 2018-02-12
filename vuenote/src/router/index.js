import Vue from 'vue';
import Router from 'vue-router';
import api from '@/components/api';
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
            name: 'api',
            component: api,
        },
    ],
});
