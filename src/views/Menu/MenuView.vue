<template>
    <div>
        <div class="container">
            <MenuComponent icon="speedometer2" name="Teste de Velocidade" @click="navigation('speedtest')" />
            <MenuComponent icon="wrench" name="Suporte" @click="navigation('support')" />
            <MenuComponent icon="bell-fill" name="Notificações" @click="navigation('notifications')" />
            <MenuComponent icon="ui-checks-grid" name="Cobranças" @click="navigation('bills')" />
            <MenuComponent icon="upc-scan" name="2ª via do boleto" @click="navigation('charges')" />
        </div>
    </div>
</template>

<script>
import MenuComponent from "./ButtonComponent.vue";

export default {
    name: "MenuView",
    data: function () {
        return {
            interval: null,
        };
    },
    components: {
        MenuComponent,
    },
    methods: {
        navigation: function (page) {
            this.$router.push(`/menu/${page}`);
        },
    },
};
</script>

<style scoped>
.container {
    max-width: 800px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    align-content: baseline;
    justify-content: center;
}
</style>
