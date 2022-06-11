/* eslint-disable no-unused-vars */
import myAxios from "../mixins/myAxiosMixin";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        bills: [],
    },
    mutations: {
        setStateListBills(state) {
            myAxios.get("/bills/payable").then((res) => {
                state.bills = res.data;
            });
        },
    },
});

export default store;
