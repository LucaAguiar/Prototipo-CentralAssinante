<template>
    <div>
        <b-form-checkbox-group
            v-model="selected"
            :options="options"
            :aria-describedby="ariaDescribedby"
            switches
        ></b-form-checkbox-group>
        <BFormCheckbox v-if="routeValidate" v-model="setBillsSwitch" switch> Mostrar Pagas </BFormCheckbox>
        <div class="container-cards" v-if="showBills">
            <CardBillsComponent
                v-for="(bill, index) in bills"
                :key="index"
                :id="bill.id"
                :observacoes="bill.observacoes"
                :data_vencimento="formatDate(bill.data_vencimento)"
                :valor="formatValue(bill.valor)"
            />
        </div>
        <div class="container-cards" v-if="showBillsPaid">
            <CardBillsPaidComponent
                v-for="(billPaid, index) in billsPaid"
                :key="index"
                :id="billPaid.id"
                :observacoes="billPaid.observacoes"
                :data_vencimento="formatDate(billPaid.data_vencimento)"
                :valor="formatValue(billPaid.valor)"
                :valor_pago="formatValue(billPaid.valor_pago)"
                :data_pagamento="formatDate(billPaid.data_pagamento)"
            />
        </div>
    </div>
</template>

<script>
import CardBillsComponent from "./CardBillsComponent.vue";
import CardBillsPaidComponent from "./CardBillsPaidComponent.vue";
import { auth } from "../../../../auth/auth";
import { mapState } from "vuex";
import myAxios from "../../../../mixins/myAxiosMixin";
import { BFormCheckbox } from "bootstrap-vue";

export default {
    name: "ListBillsView",
    components: {
        CardBillsComponent,
        CardBillsPaidComponent,
        BFormCheckbox,
    },
    data: function () {
        return {
            billsPaid: [],
            setBillsSwitch: false,
            showBills: true,
            showBillsPaid: false,
        };
    },
    methods: {
        formatDate: function (date) {
            return this.$moment(date).format("DD/MM/YYYY");
        },
        formatValue: function (value) {
            return auth.formatCurrencyValue(value);
        },
    },
    computed: {
        ...mapState(["bills"]),
        routeValidate: function () {
            return this.$route?.path == "/menu/bills";
        },
    },
    watch: {
        setBillsSwitch: function () {
            if (this.setBillsSwitch == true) {
                this.showBills = false;
                this.showBillsPaid = true;
            } else {
                this.showBills = true;
                this.showBillsPaid = false;
            }
        },
    },
    created() {
        myAxios.get("/bills/paid").then((res) => {
            this.billsPaid = res.data;
        });
    },
};
</script>

<style scoped>
.container-cards {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
}
.custom-control,
.custom-switch {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 15px;
}
</style>
