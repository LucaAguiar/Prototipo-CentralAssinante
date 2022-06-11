<template>
    <router-view></router-view>
</template>

<script>
export default {
    name: "BillsMainView",
    created() {
        this.$store.commit("setStateListBills");
    },
};
</script>
