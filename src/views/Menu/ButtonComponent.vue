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
    width: 240px;
    height: 180px;
}
.container-card {
    width: 95%;
    height: 90%;
    flex: 0 0 180px;
    margin: 10px 10px 0 10px;

    background-color: rgb(118, 118, 118);

    border-radius: 10px;
    border-color: #000;
    border-width: 1px;
    border-style: solid;

    align-items: center;
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
    flex: 0 0 60%;
    justify-content: center;
    margin-top: 20px;
}

@media (max-width: 767px) {
    .org-card {
        width: 98%;
        height: 150px;
    }
    .container-card {
        height: 85%;
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
