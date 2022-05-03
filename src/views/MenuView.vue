<template>
    <div class="menu"> 

        <div class="container">
               
            <MenuComponent icon="speedometer2" name="Teste de Velocidade" @click="navigation('speedtest')"/>
            <MenuComponent icon="wrench" name="Suporte" @click="navigation('suporte')"/>
            <MenuComponent icon="bell-fill" name="Notificações" @click="navigation('notificacoes')"/>
            <MenuComponent icon="ui-checks-grid" name="Cobranças" @click="navigation('cobrancas')"/>
            <MenuComponent icon="ui-checks" name="Cobranças Pagas" @click="navigation('cobrancaspagas')"/>
            <MenuComponent icon="upc-scan" name="2ª via do boleto" @click="navigation('boleto')"/>       
            
        </div>

    </div>
</template>

<script>

import MenuComponent from '@/components/MenuComponent.vue'

export default {
    name:'MenuView',
    components: {
        MenuComponent,
    }, 
    methods: {
        navigation: function(page){
            this.$router.push(`/menu/${page}`);  
        },
    }
}
</script>

<style scoped>
.container{
    max-width: 800px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    align-content: baseline;
    justify-content: center;
}
</style>