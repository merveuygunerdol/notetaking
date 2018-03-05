import Vue from 'vue';
import Router from 'vue-router';
import notes from '@/components/notes';
import mainPage from '@/components/mainPage.vue';
import noteForm from '@/components/noteForm.vue';
import editNote from '@/components/editNote.vue'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'mainPage',
            component: mainPage,
        },
        {
            path: '/notes',
            name: 'notes',
            component: notes,
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
