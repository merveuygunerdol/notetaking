import Vue from 'vue';
import Router from 'vue-router';
import mainPage from '@/components/mainPage';
import HelloWorld from '@/components/HelloWorld.vue';
import noteForm from '@/components/noteForm.vue';
import editNote from '@/components/editNote.vue'

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
        {
            path: '/noteForm',
            name: 'noteForm',
            component: noteForm,
        },
        {
            path: '/editNote',
            name: 'editNote',
            component: editNote,
        },
    ],
});
