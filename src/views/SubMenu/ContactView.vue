<template>
    <div>
        <b-modal id="modal-center" centered hide-footer>
            <template #modal-header> <h5>Atendimento p/ ponto CASA</h5> </template>
            <div class="d-block text-center">
                <p>(46)99141-6988</p>
                <p>(46)98800-0387</p>
                <p>comerciaL@ISPFY.COM.BR</p>
                <p>www.ispfy.com.br</p>
            </div>
            <div class="modal-button">
                <b-button class="mt-3" block @click="$bvModal.hide('modal-center')" variant="primary">Ok!</b-button>
            </div>
        </b-modal>
    </div>
</template>

<script>
export default {
    name: "ContactView",
};
</script>

<style scoped>
div > p {
    font-weight: 250;
}
.modal-button {
    display: flex;
    justify-content: center;
}
.modal-button > button {
    width: 100px;
}
</style>
