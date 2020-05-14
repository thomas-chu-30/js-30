<template>
  <v-app>
    <div class="menu">
      <v-btn v-for="(item, idx) in 30" @click="pathTo(item)" :key="idx" small color="primary">{{ `JS第一${item}天` }}</v-btn>
    </div>
    <router-view></router-view>
  </v-app>
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
<style scoped>
* {
  /* border: 1px solid; */
  box-sizing: border-box;
}
.menu {
  display: flex;
  overflow: auto;
  height: 50px;
}
</style>
