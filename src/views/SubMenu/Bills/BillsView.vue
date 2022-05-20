<template>
    <div>
        <CardComponent
            :id="bill.id"
            :observacoes="bill.observacoes"
            :data_vencimento="bill.data_vencimento"
            :valor="bill.valor"
            :pix_copia_cola="bill.pix_copia_cola"
            v-for="(bill, index) in bills"
            :key="index"
        />
    </div>
</template>

<script>
import myAxios from "../../../mixins/myAxiosMixin";
import CardComponent from "./CardBillsComponent.vue";

export default {
    name: "BillsView",
    components: {
        CardComponent,
    },
    data() {
        return {
            bills: [],
        };
    },
    created() {
        myAxios.get("/bills/payable").then((res) => {
            console.log(res.data)
            this.bills = res.data;
        });
    },
};
</script>
