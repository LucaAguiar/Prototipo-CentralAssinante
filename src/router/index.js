import Vue from "vue";
import VueRouter from "vue-router";
import LoginView from "../views/LoginView.vue";
import HomeView from "../views/HomeView.vue";
import MenuView from "../views/MenuView.vue";
import SpeedTestView from "../views/SpeedTestView.vue";
import SupportView from "../views/SupportView.vue";
import NotificationsView from "../views/NotificationsView.vue";
import ChargesView from "../views/ChargesView.vue";
import ChargesPaidView from "../views/ ChargesPaidView.vue";
import TicketView from "../views/TicketView.vue";

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
