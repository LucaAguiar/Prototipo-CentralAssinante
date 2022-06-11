<template>
    <div class="paymentMethod-wrapper">
        <a @click="backToMenu()"> <b-icon-arrow-left-circle-fill />Voltar </a>
        <div class="paymentMethod-inf">
            <img src="https://img.freepik.com/icones-gratis/codigo-de-barras_318-1989.jpg" alt="pix" />
            <h3>{{ formatValue(bill.valor) }}</h3>
            <p>{{ $moment(bill.data_vencimento).format("DD/MM/YYYY") }}</p>
            <p>{{ bill.observacoes }}</p>
            <div class="paymentMethod-key">
                <p>{{ formataLinhaDigitavel(bill.linha_digitavel) }}</p>
            </div>
            <div class="paymentMethod-SendAndCopy">
                <a @click="$bvModal.show('modal-share')"> <b-icon-share-fill /> Compartilhar </a>
                <a @click="doCopy(formataLinhaDigitavel(bill.linha_digitavel))"> <b-icon-files /> Copiar </a>
            </div>
        </div>
        <div>
            <b-modal id="modal-share" centered hide-footer>
                <div class="modal-share-links">
                    <ShareNetwork
                        v-for="network in networks"
                        :network="network.network"
                        :key="network.network"
                        :url="formataLinhaDigitavel(bill.linha_digitavel)"
                        :title="sharing.title"
                        :description="sharing.description"
                    >
                        <b-icon class="h3 mb-2" :icon="network.icon" :variant="network.variant"></b-icon>
                    </ShareNetwork>
                </div>
            </b-modal>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import { auth } from "../../../../auth/auth";

export default {
    name: "BarCodeMethod",
    data: function () {
        return {
            sharing: {
                title: "Pix Copia e Cola",
                description: "Compartilhando a chave pix",
            },
            networks: [
                { network: "twitter", name: "Twitter", icon: "twitter", variant: "info" },
                { network: "facebook", name: "Facebook", icon: "facebook", variant: "primary" },
                { network: "linkedin", name: "LinkedIn", icon: "linkedin", variant: "info" },
                { network: "email", name: "Email", icon: "voicemail", variant: "dark" },
                { network: "whatsapp", name: "Whatsapp", icon: "whatsapp", variant: "success" },
            ],
        };
    },
    methods: {
        backToMenu: function () {
            this.$router.push("/menu/bills");
        },
        formatValue: function (value) {
            return auth.formatCurrencyValue(value);
        },
        doCopy: function (linha_digitavel) {
            this.$copyText(linha_digitavel).then(
                function (response) {
                    alert("Texto Copiado");
                    console.log(response.text);
                },
                function (error) {
                    alert("Erro! Texto não copiado");
                    console.log(error);
                }
            );
        },
        formataLinhaDigitavel: function (linha) {
            linha = linha || "";
            const temp = linha.toString().replace(/[^0-9]/g, "");
            return (
                `${temp.substr(0, 5)}.${temp.substr(5, 5)} ` +
                `${temp.substr(10, 5)}.${temp.substr(15, 6)} ` +
                `${temp.substr(21, 5)}.${temp.substr(26, 6)} ` +
                `${temp.substr(32, 1)} ` +
                `${temp.substr(33, 14)}`
            );
        },
    },
    computed: {
        ...mapState(["bills"]),
        bill: function () {
            return this.bills.filter((bill) => bill.id == this.$route.params.id).pop() || {};
        },
    },
};
</script>

<style scoped>
.paymentMethod-wrapper {
    display: flex;
    min-width: 300px;
    width: 600px;
    max-height: 650px;
    margin: auto;
    flex-direction: column;
    align-items: center;
    padding: 5px;
}
.paymentMethod-wrapper > a {
    margin-left: 25px;
}
.paymentMethod-inf > img {
    border-style: solid;
    border-width: 1px;
    border-radius: 100%;
    max-width: 130px;
    margin: 20px;
}
.paymentMethod-inf {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    margin-top: 10px;
}
.paymentMethod-key {
    display: flex;
    width: 100%;
    padding: 3px;
    word-break: break-all;
    background-color: rgb(194, 194, 194);
    border-radius: 2px;
    color: black;
    text-align: start;
}
.paymentMethod-SendAndCopy {
    display: flex;
    width: 80%;
    margin-top: 10px;
}
.modal-share-links {
    display: flex;
    justify-content: space-around;
}
a {
    margin: auto;
    font-size: 20px;
    align-items: center;
    cursor: pointer;
}
@media (max-width: 605px) {
    .paymentMethod-wrapper {
        min-width: 98%;
        width: 98%;
    }
    .paymentMethod-inf > img {
        width: 120px;
    }
    a {
        font-size: 15px;
    }
}
</style>
