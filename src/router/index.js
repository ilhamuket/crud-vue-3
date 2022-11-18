//import vue router
import { createRouter, createWebHistory } from "vue-router";

//define a routes

const routes = [{
        path: "/",
        name: "post.index",
        component: () =>
            import ("@/views/post/IndexView.vue"),
    },
    {
        path: "/create",
        name: "post.create",
        component: () =>
            import ("@/views/post/CreateView.vue"),
    },
    {
        path: "/edit/:id",
        name: "post.edit",
        component: () =>
            import ("@/views/post/EditView.vue"),
    },
];

//create router
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;