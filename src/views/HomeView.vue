<template>
    <div>
        <router-view></router-view>
        <b-button type="submit" @click="navigationMenu()" v-if="routeValidate"> <b-icon-menu-button /> Menu </b-button>
        <b-button type="submit" @click="navigationExit()"> <b-icon-reply-all-fill /> Sair </b-button>
    </div>
</template>

<script>
import { auth } from "../auth/auth";
export default {
    name: "HomeView",
    methods: {
        navigationMenu: function () {
            this.$router.push("/menu");
        },
        navigationExit: function () {
            auth.logout();
        },
    },
    computed: {
        routeValidate: function () {
            return this.$route.path === "/menu" ? false : true;
        },
    },
};
</script>

<style scoped>
button {
    width: 200px;
    height: 56px;
    background-color: #363636 !important;
    border: none !important;
    margin: 40px 30px 0 30px;
    float: flex;
}
button:hover {
    background-color: #000000 !important;
}
</style>
