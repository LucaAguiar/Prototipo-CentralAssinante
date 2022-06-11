<template>
    <div class="container">
        <div class="header">
            <img src="https://blog.smsnet.com.br/wp-content/uploads/2020/10/ispfy_logomarca.png" alt="logo-cliente" />
            <div class="header-buttons">
                <b-button type="submit" class="buttonHome" @click="navigationMenu()" v-if="routeValidate">
                    <b-icon-house />
                </b-button>
                <b-button type="submit" class="buttonExit" @click="navigationExit()">
                    Desconectar <b-icon-person-fill />
                </b-button>
            </div>
        </div>
        <div class="body">
            <router-view></router-view>
        </div>
        <div class="footer">
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
            return this.$route?.path !== "/menu";
        },
    },
};
</script>

<style scoped>
.container {
    display: flex;
    min-width: 280px;
    max-width: 1000px;
    flex-direction: column;
    min-height: 100vh;
    margin: auto;
    padding: 0;
}
.footer {
    margin: auto;
    min-width: 100px;
    max-width: 300px;
    margin-bottom: 15px;
    margin-top: 50px;
}
.header {
    display: flex;
    background-color: white;
    justify-content: space-between;
    flex-shrink: 0;
    margin: 5px;
}

.header > img {
    min-width: 120px;
    max-width: 220px;
    margin-right: 20px;
    border-radius: 15px;
}
.header-buttons {
    display: flex;
    justify-content: space-around;
    align-items: center;
    min-width: 100px;
    width: 300px;
    max-width: 400px;
}
.buttonExit,
.buttonHome {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 100px;
    max-width: 125px;
    height: 35px;
    font-size: 14px;
    margin: 3px;
}
.buttonHome {
    min-width: 30px;
    max-width: 40px;
}

@media (max-width: 380px) {
    .buttonHome {
        height: 26px;
        font-size: 10px;
    }
    .buttonExit {
        min-width: 70px;
        height: 26px;
        font-size: 10px;
    }
    .footer {
        margin-top: 0;
    }
}
</style>
