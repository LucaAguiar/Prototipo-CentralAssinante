<template>
    <div class="container">
        <div class="container-login">
            <b-container fluid>
                <br />
                <h1>Central Do Assinante</h1>
                <br />

                <b-col sm="15">
                    <b-form-input v-model="username" placeholder="CPF / CNPJ:" :type="'email'"></b-form-input>

                    <br />
                    <div class="password" v-if="showPassword">
                        <b-form-input v-model="password" placeholder="Senha: " :type="'password'"></b-form-input>

                        <a href="#">Esqueci Minha Senha</a>
                    </div>

                    <b-button type="submit" @click="requestAccessToken()">Entrar</b-button>
                    <br />
                </b-col>
            </b-container>
        </div>
    </div>
</template>

<script>
import { auth } from "../../auth/auth";
const CryptoJS = require("crypto-js");

export default {
    name: "LoginComponent",
    data() {
        return {
            username: "58553711072",
            password: "123456789",
            validUsername: null,
            encryptedPassword: null,
            showPassword: true,
        };
    },
    methods: {
        validateUsername: function () {
            this.validUsername = this.username.replace(/\D/g, "");
            return this.validUsername;
        },
        encryptPassword: function () {
            this.encryptedPassword = CryptoJS.MD5(this.password).toString();
            return this.encryptedPassword;
        },
        requestAccessToken: function () {
            this.validateUsername();
            this.encryptPassword();
            auth.requestAccessTokenByPassword(this.validUsername, this.encryptedPassword)
                .then(() => this.$router.push("/menu"))
                .catch((err) => console.log(err));
        },
    },
};
</script>

<style scoped>
.container > img {
    width: 300px;
    height: 80px;
    margin-top: -30px;
    margin-bottom: 30px;
}
.container {
    max-width: 650px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
}
.container-login {
    display: flex;
    align-items: center;
    height: 90%;
    width: 90%;
}
.password {
    display: flex;
    flex-direction: column;
}
.password > a {
    text-align: end;
    margin-bottom: 20px;
}
input {
    height: 52px;
    align-items: center;
}
button {
    min-width: 200px;
    max-width: 400px;
    height: 56px;
}
@media (max-width: 400px) {
    .container-login {
        width: 98%;
    }
    button {
        min-width: 170px;
    }
}
</style>
