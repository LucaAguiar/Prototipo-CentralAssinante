import Vue from "vue";
import VueRouter from "vue-router";
import LoginView from "../views/MainPages/LoginView.vue";
import HomeView from "../views/MainPages/HomeView.vue";
import MenuView from "../views/MainPages/MenuView.vue";
import SpeedTestView from "../views/SubMenuPages/SpeedTestView.vue";
import SupportView from "../views/SubMenuPages/SupportView.vue";
import NotificationsView from "../views/SubMenuPages/NotificationsView.vue";
import ChargesView from "../views/SubMenuPages/ChargesView.vue";
import ChargesPaidView from "../views/SubMenuPages/ ChargesPaidView.vue";
import TicketView from "../views/SubMenuPages/TicketView.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "login",
        component: LoginView,
    },
    {
        path: "/menu",
        name: "home",
        component: HomeView,
        children: [
            {
                path: "",
                name: "menu",
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
                path: "charges",
                name: "charges",
                component: ChargesView,
            },
            {
                path: "chargespaid",
                name: "chargespaid",
                component: ChargesPaidView,
            },
            {
                path: "ticket",
                name: "ticket",
                component: TicketView,
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
