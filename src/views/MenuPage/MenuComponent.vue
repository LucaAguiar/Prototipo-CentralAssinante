<template>
    <div class="org-card" @click="$emit('click')">
        <div class="container-card">
            <div class="container-logo">
                <b-icon :icon="icon" scale="2.5"></b-icon>
            </div>
            <div class="description">
                <h4>{{ name }}</h4>
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
* {
    font-family: system-ui;
}
body {
    width: 100%;
    height: 100vh;
    padding: 0;
    margin: 0;
    display: flex;
}
.org-card {
    width: 300px;
    height: 180px;
}
.container-card {
    width: 95%;
    height: 90%;
    flex: 0 0 180px;
    margin: 10px 10px 0 10px;

    background-color: #363636;
    box-shadow: 5px 5px #000;

    border-radius: 10px;
    border-color: #000;
    border-width: 2px;
    border-style: solid;

    align-items: center;
}

.container-card:hover {
    background-color: #000000 !important;
    width: 97%;
    height: 94%;
}

.container-logo {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    margin-top: 20px;

    width: 100px;
    height: 50px;

    color: white;
}

.description {
    color: white;
    display: flex;
    flex: 0 0 150px;
    justify-content: center;
    margin-top: 20px;
}

@media (max-width: 623px) {
    .container-card {
        height: 85%;
        flex: 0 0 auto;
        display: flex;
        text-align: center;
    }
    .container-logo {
        margin: auto;
    }
    .description {
        margin: auto;
    }
}
</style>
