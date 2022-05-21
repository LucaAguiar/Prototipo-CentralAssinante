<template>
    <div>
        <div class="container">
            <MenuComponent icon="speedometer2" name="Teste de Velocidade" @click="navigation('speedtest')" />
            <MenuComponent icon="wrench" name="Suporte" @click="navigation('support')" />
            <MenuComponent icon="bell-fill" name="Notificações" @click="navigation('notifications')" />
            <MenuComponent icon="ui-checks-grid" name="Cobranças" @click="navigation('bills')" />
            <MenuComponent icon="upc-scan" name="2ª via do boleto" @click="navigation('charges')" />
            <MenuComponent icon="telephone-fill" name="Alterar Contatos" @click="navigation('support')" />
            <MenuComponent icon="key-fill" name="Liberar Conexão" @click="navigation('support')" />
            <MenuComponent icon="percent" name="Quanto Já Usei" @click="navigation('support')" />
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
    width: 93%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

@media (max-width: 767px) {
    .container {
        width: 100%;
    }
}
</style>
