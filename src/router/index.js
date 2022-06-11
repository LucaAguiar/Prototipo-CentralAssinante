import Vue from "vue";
import VueRouter from "vue-router";
import LoginView from "@/views/Login/LoginView.vue";
import HomeView from "@/views/HomeView.vue";
import MenuView from "@/views/Menu/MenuView.vue";
import SpeedTestView from "@/views/SubMenu/SpeedTestView.vue";
import NotificationsView from "@/views/SubMenu/NotificationsView.vue";
import ListBillsView from "@/views/SubMenu/Bills/ListBills/ListBillsView.vue";
import BillsMainView from "@/views/SubMenu/Bills/BillsMainView.vue";
import ChargesView from "@/views/SubMenu/ChargesView.vue";
import PixMethod from "@/views/SubMenu/Bills/PaymentMethods/PixView.vue";
import BarCodeMethod from "@/views/SubMenu/Bills/PaymentMethods/BarCodeView.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        component: LoginView,
    },
    {
        path: "/menu",
        component: HomeView,
        children: [
            {
                path: "",
                component: MenuView,
            },
            {
                path: "speedtest",
                component: SpeedTestView,
            },
            {
                path: "notifications",
                component: NotificationsView,
            },
            {
                path: "bills",
                component: BillsMainView,
                children: [
                    {
                        path: "",
                        component: ListBillsView,
                    },
                    {
                        path: "pix/:id",
                        component: PixMethod,
                    },
                    {
                        path: "barcode/:id",
                        component: BarCodeMethod,
                    },
                ],
            },
            {
                path: "charges",
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
