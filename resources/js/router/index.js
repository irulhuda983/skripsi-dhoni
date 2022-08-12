import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";

Vue.use(VueRouter);

const routes = [
    {
        name: "login",
        path: "/login",
        meta: { menu: 'login', login: true, bread: 'Login' },
        component: () => import("@/views/Login.vue"),
    },
    {
        name: "Template",
        path: "/",
        redirect: '/dashboard',
        meta: { menu: 'dashboard', auth: true },
        component: () => import("@/views/Template.vue"),
        children: [
            {
                name: "dashboard",
                path: "/dashboard",
                meta: { menu: 'dashboard', auth: true, bread: 'Dashboard' },
                component: () => import("@/views/Dashboard/Main.vue"),
            },
            {
                name: "templateMasterData",
                path: "/master-data",
                meta: { menu: 'masterData', auth: true, bread: 'Master Data' },
                component: () => import("@/views/MasterData/Main.vue"),
                children: [
                    {
                        name: "masterData",
                        path: "/master-data",
                        meta: { menu: 'masterData', auth: true, bread: 'Master Data' },
                        component: () => import("@/views/MasterData/ShowAll.vue"),
                    },
                    {
                        name: "tambahMasterData",
                        path: "/master-data/tambah",
                        meta: { menu: 'masterData', auth: true, bread: 'Master Data' },
                        component: () => import("@/views/MasterData/Tambah.vue"),
                    },
                    {
                        name: "editMasterData",
                        path: "/master-data/:id/edit",
                        meta: { menu: 'masterData', auth: true, bread: 'Master Data' },
                        component: () => import("@/views/MasterData/Edit.vue"),
                    },
                ],
            },
            {
                name: "dataAktual",
                path: "/data-aktual",
                meta: { menu: 'dataAktual', auth: true, bread: 'Data Aktual' },
                component: () => import("@/views/DataAktual/Main.vue"),
                children: [
                    {
                        name: "showDataAktual",
                        path: "/data-aktual",
                        meta: { menu: 'dataAktual', auth: true, bread: 'Data Aktual' },
                        component: () => import("@/views/DataAktual/ShowAll.vue"),
                    },
                    {
                        name: "tambahDataAktual",
                        path: "/data-aktual/tambah",
                        meta: { menu: 'dataAktual', auth: true, bread: 'Data Aktual' },
                        component: () => import("@/views/DataAktual/Tambah.vue"),
                    },
                    {
                        name: "editDataAktual",
                        path: "/data-aktual/:id/edit",
                        meta: { menu: 'dataAktual', auth: true, bread: 'Data Aktual' },
                        component: () => import("@/views/DataAktual/Edit.vue"),
                    },
                ],
            },
            {
                name: "dataPeramalan",
                path: "/data-peramalan",
                meta: { menu: 'dataPeramalan', auth: true, bread: 'Data Peramalan' },
                component: () => import("@/views/dataPeramalan/Main.vue"),
            },
            {
                name: "transaksi",
                path: "/transaksi",
                meta: { menu: 'transaksi', auth: true, bread: 'Transaksi' },
                component: () => import("@/views/Transaksi/Main.vue"),
            },
            {
                name: "profil",
                path: "/profil",
                meta: { menu: 'profil', auth: true, bread: 'Profil' },
                component: () => import("@/views/Profil/Main.vue"),
            },
        ],
    },
]


const router = new VueRouter({
    mode: "history",
    scrollBehavior() {
        return window.scrollTo({ top: 0, behavior: "smooth" });
    },
    routes,
});

router.beforeEach((to, from, next) => {
    const loggedIn = store.getters["auth/authenticated"];

    if (to.matched.some((record) => record.meta.auth)) {
        if (!loggedIn) {
            next("/login");
        } else {
            next();
        }
    } else if (to.matched.some((record) => record.meta.login) && loggedIn) {
        next("/dashboard");
    }
    // if (to.path) {
    //     NProgress.start();
    // }

    next();
});


export default router;