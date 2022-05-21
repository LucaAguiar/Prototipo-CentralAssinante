<template>
    <div class="container">
        <div class="top">
            <img
                src="https://blog.smsnet.com.br/wp-content/uploads/2020/10/ispfy_logomarca.png"
                alt="logo-cliente"
            /><b-button type="submit" @click="navigationExit()"> <b-icon-reply-all-fill /> Sair </b-button>
        </div>
        <div class="page">
            <router-view></router-view>
        </div>
        <b-button type="submit" @click="navigationMenu()" v-if="routeValidate"> <b-icon-menu-button /> Menu </b-button>
        <div class="contato">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint et labore laudantium facilis explicabo
                laboriosam. Rem beatae id odio, non harum error iure, tempore dolores vero repellat consequatur
                quibusdam maxime.
            </p>
        </div>
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
.container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}
.page {
    margin: auto;
    margin: 0 0 15px 0;
}
.contato {
    margin: auto;
    min-width: 100px;
    max-width: 300px;
    margin-bottom: 15px;
    margin-top: 50px;
}
.top {
    display: flex;
    justify-content: space-between;
    margin: 15px 0 15px 0;
}
.top > img {
    min-width: 150px;
    max-width: 300px;
    margin-right: 20px;
    border-radius: 15px;
}
button {
    width: 200px;
    height: 55px;
    float: flex;
}
@media (max-width: 767px) {
    .contato {
        margin-top: 0;
    }
}
</style>
