<template>
    <div>
        <h4>Página de Cobranças</h4>
        {{ bills }}
    </div>
</template>

<script>
import myAxios from "../../mixins/myAxiosMixin";

export default {
    name: "ChargesView",
    data() {
        return {
            bills: [],
        };
    },
    created() {
        myAxios.get("/bills/payable").then((res) => {
            this.bills = res.data;
        });
    },
};
</script>
