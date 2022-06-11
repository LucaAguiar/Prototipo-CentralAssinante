<template>
    <div class="card-wrapper" @click="$emit('click')">
        <div class="card-content">
            <div class="card-logo">
                <b-icon :icon="icon" scale="1.8"></b-icon>
            </div>
            <div class="card-description">
                <p>{{ name }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "MenuComponent",
    props: ["name", "icon"],
};
</script>

<style scoped>
.card-wrapper {
    width: 150px;
    height: 125px;
    display: flex;
    justify-content: center;
    margin: 5px;
    background-color: rgb(118, 118, 118);
    border-radius: 10px;
    border-color: #000;
    border-width: 1px;
    border-style: solid;
    cursor: pointer;
}
.card-content {
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 95%;
    height: 90%;
}
.card-logo {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    width: 100px;
    height: 50px;
    color: white;
}

.card-description {
    color: white;
    display: flex;
    justify-content: center;
    font-size: 14px;
}

@media (max-width: 767px) {
    .card-wrapper {
        width: 98%;
        display: flex;
        text-align: center;
    }
    .card-content {
        flex-direction: row;
    }
    .card-description {
        margin: auto;
        font-size: 18px;
        width: 200px;
        height: 30px;
    }
}
</style>
