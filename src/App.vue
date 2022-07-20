<template>
    <div>
        <div class="layout">
            <div class="menu">
                <div v-for="(item, idx) in 30" @click="pathTo(item)" class="item-day" :key="idx">{{ `JS第一${item}天` }}</div>
            </div>
            <div style="width:100%" class="content">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";

export default {
    name: "App",

    components: {
        // HelloWorld,
    },

    data: () => ({
        //
    }),
    methods: {
        pathTo(item) {
            let toStr = "Day" + item;
            console.log(toStr);
            this.$router.push({ name: toStr });
        },
    },
};
</script>
<style>
html,
body {
    margin: 0;
    padding: 0;
}
.layout {
    display: flex;
}
.content {
    flex: 1;
}
.menu {
    width: 300px;
    height: 100vh;
    overflow: auto;
}
.item-day {
    padding-top: 12px;
    padding-bottom: 12px;
    background-color: #eee;
    cursor: pointer;
    border-bottom: 1px solid black;
    text-align: center;
}
</style>
