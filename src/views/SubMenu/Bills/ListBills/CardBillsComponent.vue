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
                <div class="card-body-wrapper">
                    <div class="card-body-wrapper-value">
                        <p>{{ valor }}</p>
                    </div>
                    <div class="card-body-wrapper-date">
                        <p><b-icon-calendar2-date scale="1.3" /> {{ data_vencimento }}</p>
                    </div>
                </div>
                <div class="card-body-button">
                    <b-button
                        class="button-pay"
                        :class="visible ? null : 'collapsed'"
                        :aria-expanded="visible ? 'true' : 'false'"
                        aria-controls="collapse"
                        @click="visible = !visible"
                    >
                        Pagar
                    </b-button>
                </div>
            </div>
        </div>

        <b-collapse id="collapse" v-model="visible" class="mt-4">
            <div class="card-Pay">
                <div class="payment-methods" @click="navigationPaymentMethods(`pix/${id}`)">
                    <img src="https://logospng.org/download/pix/logo-pix-icone-1024.png" alt="pix" />
                    <p>Chave PIX</p>
                </div>
                <div class="payment-methods" @click="navigationPaymentMethods(`barcode/${id}`)">
                    <img src="https://img.freepik.com/icones-gratis/codigo-de-barras_318-1989.jpg" alt="barcode" />
                    <p>Cód. De Barras</p>
                </div>
                <div class="payment-methods" @click="PrintMethod(`${id}`)">
                    <img src="https://cdn-icons-png.flaticon.com/512/535/535249.png" alt="imprimir" />
                    <p>Imp. Boleto</p>
                </div>
            </div>
        </b-collapse>
    </div>
</template>

<script>
import myAxios from "../../../../mixins/myAxiosMixin";

export default {
    name: "CardBillsComponent",
    data() {
        return {
            visible: false,
        };
    },
    props: ["id", "observacoes", "data_vencimento", "valor"],
    methods: {
        navigationPaymentMethods: function (page) {
            this.$router.push(`/menu/bills/${page}`);
        },
        PrintMethod: function (id) {
            myAxios.get(`/bills/print/${id}`).then((res) => {
                const myWindow = window.open("", "_blank");
                myWindow.document.write(res.data);
            });
        },
    },
};
</script>

<style scoped>
.card {
    display: flex;
    min-width: 200px;
    width: 98%;
    max-width: 960px;
    min-height: 50px;
    height: auto;
    position: static;
    margin: 2px;
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
    max-height: 50px;
    padding: 0;
}
.card-header-id,
.card-header-description,
.card-body-wrapper-value,
.card-body-wrapper-date {
    display: flex;
    justify-content: center;
    padding: 5px;
}
.card-header-id {
    min-width: 25%;
}
.card-header-description {
    min-width: 75%;
    overflow: hidden;
}
.card-body {
    display: flex;
    align-items: center;
    padding: 0;
}
.card-body-wrapper {
    display: flex;
    width: 90%;
}
.card-body-wrapper-value {
    min-width: 40%;
}
.card-body-wrapper-date {
    min-width: 60%;
}
.card-body-button > button {
    width: 100px;
    height: 36px;
}
.card-Pay {
    display: flex;
    width: 85%;
    height: 180px;
    margin: auto;
    margin-bottom: 10px;
    justify-content: space-evenly;
    align-items: center;
    word-break: break-all;
    border-style: solid;
    border-color: #000;
    border-width: 1px;
    border-radius: 8px;
    background-color: white;
}
.payment-methods {
    cursor: pointer;
}
.payment-methods > img {
    width: 60px;
    height: 60px;
    border-style: solid;
    border-width: 4px;
    border-color: black;
    border-radius: 100%;
}

@media (max-width: 550px) {
    .card-content {
        flex-direction: column;
        font-size: 16px;
    }
    .card-header {
        width: 98%;
        min-height: 35%;
    }
    .card-body {
        max-height: 65%;
    }
    .card-body-wrapper {
        flex-direction: column;
        min-height: 90%;
    }
    .card-body-wrapper-value,
    .card-body-wrapper-date {
        height: 50px;
        font-size: 20px;
        justify-content: flex-start;
        margin-left: 15px;
    }
    .card-body-button > button {
        width: 150px;
        margin-right: 10px;
    }
}
@media (max-width: 341px) {
    .card-content {
        font-size: 14px;
    }
    .card-body-wrapper-date,
    .card-body-wrapper-value {
        font-size: 16px;
    }
    .card-body-button > button {
        width: 80px;
        font-size: 13px;
    }
    .card-Pay {
        width: 95%;
    }
    .payment-methods > p {
        font-size: 13px;
    }
    .payment-methods > img {
        width: 45px;
        height: 45px;
        border-style: solid;
        border-width: 3px;
        border-color: black;
        border-radius: 100%;
    }
}
</style>
