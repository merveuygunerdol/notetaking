import Vue from "vue";
import Router from "vue-router";
import notes from "@/components/notes.vue";
import mainPage from "@/components/mainPage.vue";
import noteForm from "@/components/noteForm.vue";
import editNote from "@/components/editNote.vue";
import addNote from "@/components/addNote.vue";
import signUp from "@/components/signUp.vue";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: "mainPage",
            component: mainPage,
        },
        {
            path: "/notes",
            name: "notes",
            component: notes,
        },
        {
            path: "/noteForm",
            name: "noteForm",
            component: noteForm,
        },
        {
            path: "/editNote",
            name: "editNote",
            component: editNote,
        },
        {
            path: "/addNote",
            name: "addNote",
            component: addNote,
        },
        {
            path: "/signUp",
            name: "signUp",
            component: signUp,
        },
    ],
});
