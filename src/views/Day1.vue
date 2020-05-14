<template>
  <div class="day1">
    <div :class="['box', { active: actCurr == item.small }]" :data-key="item.key" v-for="(item, i) in drum" :key="i">
      <h1>{{ item.key }}</h1>
      <p>{{ item.label }}</p>
    </div>
    <audio id="test" src="https://s3-ap-northeast-1.amazonaws.com/dazedbear-assets/Bluebird.mp3"></audio>
  </div>
</template>
<script>
export default {
  data() {
    return {
      actCurr: "",
      drum: [
        { label: "Clap", key: "A", small: "a" },
        { label: "Hihat", key: "S", small: "s" },
        { label: "Kick", key: "D", small: "d" },
        { label: "Openhat", key: "F", small: "f" },
        { label: "Boom", key: "J", small: "j" },
        { label: "Ride", key: "K", small: "k" },
        { label: "Snare", key: "L", small: "l" },
        { label: "Tom", key: "G", small: "g" },
        { label: "Tink", key: "H", small: "h" },
      ],
    };
  },
  methods: {
    playSound(e) {
      this.actCurr = e.key;
      // let test = document.getElementById("test");
      // test.play();
    },
    closeSound() {
      this.actCurr = false;
    },
  },
  mounted() {
    // let all = document.querySelectorAll(".box");
    // console.log(all);
    window.addEventListener("keydown", this.playSound);
    window.addEventListener("keyup", this.closeSound);
  },
};
</script>
<style scoped>
* {
  /* border: 1px solid; */
}
.day1 {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
  width: 100%;
  /* background-color: gray; */
}
.day1 .box {
  text-align: center;
}
.day1 div {
  width: 100px;
  height: 100px;
  border-radius: 10px;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.3);
  /* background: rgba(0, 0, 0, 0.3); */
  cursor: pointer;
}
.active {
  background-color: green;
}
</style>
