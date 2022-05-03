<template>
    <div class="container">
        <div class="container-login">
            <b-container fluid>
                <br />
                <h1>Sign In</h1>

                <br />

                <b-col sm="15">
                    <b-form-input
                        id="input-1"
                        :type="'email'"
                        placeholder="Username:"
                    ></b-form-input>

                    <br />
                    <br />

                    <b-form-input
                        id="input-2"
                        placeholder="Password: "
                        :type="'password'"
                    ></b-form-input>

                    <br />

                    <b-button id="submit" type="submit" variant="primary" @click="navigationMenu()">Sign In</b-button>

                    <br />
                    <br />

                    <p>Don't have an account? <a href="#">Create an account here.</a></p>
                </b-col>
            </b-container>
        </div>
    </div>
</template>

<script>
export default {
    name: "LoginComponent",
    methods: {
        navigationMenu: function () {
            this.$router.push("/menu");
        },
    },
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
