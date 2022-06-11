<template>
    <div class="card">
        <div class="card-content">
            <div class="card-header">
                <div class="card-header-id">
                    <p>{{ id }}</p>
                </div>
                <div class="card-header-description" v-if="observacoes">
                    <p><b-icon-exclamation-circle scale="1.3" /> {{ observacoes }}</p>
                </div>
            </div>
            <div class="card-body">
                <p>Data do Vencimento: {{ data_vencimento }}</p>
                <p>Valor: {{ valor }}</p>
                <p>Data do Pagamento: {{ data_pagamento }}</p>
                <p>Valor Pago: {{ valor_pago }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CardBillsPaidComponent",
    props: ["id", "observacoes", "data_vencimento", "valor", "valor_pago", "data_pagamento"],
};
</script>

<style scoped>
.card {
    display: flex;
    min-width: 200px;
    width: 98%;
    max-width: 960px;
    min-height: 50px;
    margin: 2px;
    position: static;
    align-items: center;
    background-color: rgb(118, 118, 118);
    border-style: solid;
    border-color: #000;
    border-width: 1px;
    border-radius: 8px;
}
.card-content {
    margin: 5px;
    display: flex;
    width: 98%;
    font-size: 14px;
    color: white;
}
.card-header {
    width: 40%;
    display: flex;
    padding: 0;
}
.card-header-id,
.card-header-description {
    display: flex;
    justify-content: center;
    padding: 5px;
}
.card-header-id {
    min-width: 35%;
}
.card-header-description {
    min-width: 65%;
    overflow: hidden;
}
.card-body {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
}
.card-body > p {
    margin: 0;
}
@media (max-width: 615px) {
    .card {
        height: 150px;
    }
    .card-content {
        flex-direction: column;
    }
    .card-header {
        width: 98%;
    }
    .card-body {
        flex-direction: column;
        align-items: flex-start;
    }
}
</style>
