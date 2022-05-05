import Vue from "vue";
import VueRouter from "vue-router";
import LoginView from "@/views/LoginPage/LoginPage.vue";
import HomeView from "@/views/HomePage.vue";
import MenuView from "@/views/MenuPage/MenuPage.vue";
import SpeedTestView from "@/views/SubMenuPages/SpeedTestPage.vue";
import SupportView from "@/views/SubMenuPages/SupportPage.vue";
import NotificationsView from "@/views/SubMenuPages/NotificationsPage.vue";
import ChargesView from "@/views/SubMenuPages/ChargesPage.vue";
import ChargesPaidView from "@/views/SubMenuPages/ChargesPaidPage.vue";
import TicketView from "@/views/SubMenuPages/TicketPage.vue";

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
