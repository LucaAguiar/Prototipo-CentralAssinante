<template>
    <div class="home">
        <router-view></router-view>
        <b-button id="exit" type="submit" @click="navigationExit()"><b-icon-reply-all-fill></b-icon-reply-all-fill> Sair </b-button>
        <b-button id="menu" type="submit" @click="navigationMenu()" v-if="showButton"><b-icon-menu-button></b-icon-menu-button> Menu </b-button>
    </div>
</template>

<script>

export default {
    name:'HomeView',
    data(){
        return {
            showButton: true,
        }
    },
    methods: {
        navigationMenu: function() {
            this.$router.push('/menu')
        },
        navigationExit: function() {
            this.$router.push('/')
        }
    },
}

</script>

<style scoped>
button{
    width: 200px;
    height: 56px;
    background-color: #363636 !important;
    border: none !important;
    margin: 40px 30px 0 30px;
    float: flex;
}
button:hover{
    background-color: #000000 !important;
}
</style>