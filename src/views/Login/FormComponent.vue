<template>
    <div class="container">
        <div class="container-login">
            <b-container fluid>
                <br />
                <h1>Sign In</h1>

                <br />

                <b-col sm="15">
                    <b-form-input v-model="login.username" placeholder="Username:" :type="'email'"></b-form-input>

                    <br />
                    <br />

                    <b-form-input v-model="login.password" placeholder="Password: " :type="'password'"></b-form-input>

                    <br />

                    <b-button type="submit" @click="requestToken()">Sign In</b-button>

                    <br />
                    <br />

                    <p>Don't have an account? <a href="#">Create an account here.</a></p>
                </b-col>
            </b-container>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import myAxios from "../../mixins/myAxiosMixin"

export default {
    name: "LoginComponent",
    data: function () {
        return {
            login: {
                username: "13345271052",
                password: "e10adc3949ba59abbe56e057f20f883e",
            },
            accesstoken: null
        };
    },
    methods: {
        requestToken: function () {
            axios
                .post(`/auth/login`, this.login)
                .then((response) => {
                    this.accesstoken = response.data.access_token
                    localStorage.setItem('access_token', response.data.access_token)
                    localStorage.setItem('refresh_token', response.data.refresh_token)

                    console.log(this.accesstoken)
                    console.log(localStorage.getItem('access_token'))
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
    mixins: [myAxios]
};
</script>

<style scoped>
.container {
    max-width: 650px;
    display: flex;
    justify-content: center;
    margin-top: 50px;
}
.container-login {
    display: flex;
    align-items: center;
    height: 90%;
    width: 90%;
    background-color: #f8f8ff;
    border-radius: 20px;
    border-style: solid;
    border-color: #363636;
    border-width: 2px;
}
input {
    height: 52px;
    align-items: center;
}
button {
    width: 200px;
    height: 56px;
    background-color: #363636 !important;
    border: none !important;
}
button:hover {
    background-color: #000000 !important;
}
a {
    color: #000 !important;
}
@media (max-width: 600px) {
    .container-login {
        width: 98%;
    }
}
</style>
