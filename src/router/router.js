import MainPage from "@/page/MainPage.vue";
import {createRouter, createWebHistory} from "vue-router";
import bookmarksPage from "@/page/bookmarksPage.vue";
import ProfilePage from "@/page/ProfilePage.vue";

const routes = [
    {
        path:'/',
        component: MainPage
    },
    {
        path: '/bookmarks',
        component: bookmarksPage
    },
    {
        path: '/profile',
        component: ProfilePage
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})
export default router;
