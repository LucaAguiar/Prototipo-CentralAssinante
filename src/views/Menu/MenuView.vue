<template>
    <div>
        <div class="container">
            <MenuComponent icon="key-fill" name="Liberar Conexão" @click="navigation('notifications')" />
            <MenuComponent icon="percent" name="Quanto Já Usei" @click="navigation('notifications')" />
            <MenuComponent icon="at" name="Conta Digital" @click="navigation('charges')" />
            <MenuComponent icon="speedometer2" name="Testar Conexão" @click="redirect()" />
            <MenuComponent icon="building" name="Meus Pontos" @click="navigation('notifications')" />
            <MenuComponent icon="person-square" name="Alterar Contatos" @click="navigation('notifications')" />
            <MenuComponent icon="upc-scan" name="Minhas Cobranças" @click="navigation('bills')" />
            <MenuComponent icon="wrench" name="Atendimento" @click="navigation('notifications')" />
            <MenuComponent icon="telephone-fill" name="Fale Conosco" @click="$bvModal.show('modal-center')" />

            <ContactView />
        </div>
    </div>
</template>

<script>
import MenuComponent from "./ButtonComponent.vue";
import ContactView from "../SubMenu/ContactView.vue";

export default {
    name: "MenuView",
    data: function () {
        return {
            interval: null,
        };
    },
    components: {
        MenuComponent,
        ContactView,
    },
    methods: {
        navigation: function (page) {
            this.$router.push(`/menu/${page}`);
        },
        redirect: function () {
            return window.open("https://www.speedtest.net/pt", "_blank");
        },
    },
};
</script>

<style scoped>
.container {
    width: 75%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-top: 15px;
}
a {
    text-decoration: none;
}

@media (max-width: 767px) {
    .container {
        width: 100%;
        padding: 0;
    }
}
</style>
