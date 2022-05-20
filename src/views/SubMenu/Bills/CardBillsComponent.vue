<template>
    <div class="container-cards">
        <div class="card">
            <div class="card-inf">
                <div class="main-inf">
                    <p><b-icon-calendar2-date scale="1.3" /> {{ data_vencimento }}</p>
                    <br />
                    <p><b-icon-exclamation-circle scale="1.3" /> {{ observacoes }}</p>
                </div>
                <br />
                <div class="flex">
                    <div class="secundary-inf">
                        <p>Id: {{ id }}</p>
                        <p>Valor: R$ {{ valor }}</p>
                    </div>
                    <b-button
                        class="card-buttonPay"
                        :class="visible ? null : 'collapsed'"
                        :aria-expanded="visible ? 'true' : 'false'"
                        aria-controls="collapse"
                        @click="visible = !visible"
                    >
                        Pagar / Imprimir
                    </b-button>
                </div>
            </div>

            <b-collapse id="collapse" v-model="visible" class="mt-4">
                <div class="card-Pay">
                    <div class="payment-methods">
                        <img src="https://logospng.org/download/pix/logo-pix-icone-1024.png" alt="pix" />
                        <p>Chave PIX</p>
                    </div>
                    <div class="payment-methods">
                        <img src="https://img.freepik.com/icones-gratis/codigo-de-barras_318-1989.jpg" alt="barcode" />
                        <p>Cód. De Barras</p>
                    </div>
                    <div class="payment-methods">
                        <img src="https://cdn-icons-png.flaticon.com/512/535/535249.png" alt="imprimir" />
                        <p>Imp. Boleto</p>
                    </div>
                </div>
            </b-collapse>
        </div>
    </div>
</template>

<script>
export default {
    name: "CardComponent",
    data() {
        return {
            visible: false,
        };
    },
    props: ["id", "observacoes", "data_vencimento", "valor", "pix_copia_cola"],
};
</script>

<style scoped>
* {
    font-family: system-ui;
}
.container-cards {
    display: flex;
    width: 100%;
    height: auto;
    justify-content: center;
}
.card {
    display: flex;
    flex: 0 1 650px;
    height: auto;
    min-height: 180px;

    background-color: #363636;
    box-shadow: 5px 5px #000;

    border-style: solid;
    border-color: #000;
    border-width: 2px;
    border-radius: 8px;

    margin-top: 20px;
}
.card-inf {
    margin: auto;
    margin-left: 13px;
    width: 100%;
    text-align: left;
    font-size: 16px;
    color: white;
}
.flex {
    display: flex;
    width: 95%;
}
.main-inf {
    width: 97%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.secundary-inf {
    display: flex;
    flex-direction: column;
    width: 75%;
    margin-top: -20px;
}
.card-buttonPay {
    width: 200px;
    height: 40px;
    border: none;
    background-color: #5f5f5f;
}
.card-buttonPay:hover {
    background-color: #000;
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
.payment-methods > img {
    width: 60px;
    height: 60px;
    border-style: solid;
    border-width: 6px;
    border-color: black;
    border-radius: 100%;
}
@media (max-width: 750px) {
    .card {
        width: 90%;
    }
}
@media (max-width: 480px) {
    .card {
        max-width: 95%;
    }
    .card-inf {
        font-size: 15px;
    }
    .secundary-inf {
        width: 60%;
    }
    .card-Pay {
        font-size: 13px;
    }
    .card-buttonPay {
        width: 180px;
        font-size: 14px;
    }
}
@media (max-width: 350px) {
    .card {
        max-width: 95%;
    }
    .card-inf {
        font-size: 14px;
    }
    .main-inf {
        width: 93%;
    }
    .flex {
        width: 93%;
    }
    .secundary-inf {
        width: 40%;
    }
    .card-Pay {
        font-size: 12px;
    }
    .card-buttonPay {
        width: 180px;
        font-size: 14px;
    }
}
</style>
