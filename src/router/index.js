import Vue from "vue";
import VueRouter from "vue-router";
import LoginView from "@/views/Login/LoginView.vue";
import HomeView from "@/views/HomeView.vue";
import MenuView from "@/views/Menu/MenuView.vue";
import SpeedTestView from "@/views/SubMenu/SpeedTestView.vue";
import SupportView from "@/views/SubMenu/SupportView.vue";
import NotificationsView from "@/views/SubMenu/NotificationsView.vue";
import BillsView from "@/views/SubMenu/Bills/BillsView.vue";
import ChargesView from "@/views/SubMenu/ChargesView.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "login",
        component: LoginView,
    },
    {
        path: "/menu",
        name: "menu",
        component: HomeView,
        children: [
            {
                path: "",
                name: "home",
                component: MenuView,
            },
            {
                path: "speedtest",
                name: "speedtest",
                component: SpeedTestView,
            },
            {
                path: "support",
                name: "support",
                component: SupportView,
            },
            {
                path: "notifications",
                name: "notifications",
                component: NotificationsView,
            },
            {
                path: "bills",
                name: "bills",
                component: BillsView,
            },
            {
                path: "charges",
                name: "charges",
                component: ChargesView,
            },
        ],
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
