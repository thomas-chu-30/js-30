<template>
  <div class="day1">
    <div :class="['box', { active: actCurr == item.small }]" :data-key="item.key" v-for="item in drum" :key="item.key" @click="playSound(item)">
      <h1>{{ item.key }}</h1>
      <p>{{ item.label }}</p>
    </div>
    <audio v-for="(item, idx) in sound" :key="idx" data-key="65" id="test" src="@/assets/Day1/sounds/boom.wav"></audio>
    <button @click="test">test</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      actCurr: "",
      sound: [
        {
          key: "a",
          audio: require("@/assets/Day1/pianoC.mp3"),
        },

        {
          key: 10,
          audio: require("@/assets/Day1/pianoD.mp3"),
        },
        {
          key: 10,
          audio: require("@/assets/Day1/pianoE.mp3"),
        },
        {
          key: 10,
          audio: require("@/assets/Day1/pianoF.mp3"),
        },
        {
          key: 10,
          audio: require("@/assets/Day1/pianoG.mp3"),
        },
        {
          key: 10,
          audio: require("@/assets/Day1/pianoA.mp3"),
        },
        {
          key: 10,
          audio: require("@/assets/Day1/pianoB.mp3"),
        },
      ],

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
    test() {
      console.log(document.getElementById("test"));
      const dom = document.getElementById("test");
      dom.currentTime = 0; // 可以連打用
      dom.play();
    },
    playSound(item) {
      console.log(item);
      // this.actCurr = e.key;
      // console.log(e.key);
      // console.log(this.actCurr);
      let test = document.getElementById("test1");

      test.play();
    },
    closeSound() {
      this.actCurr = "";
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
.day1 {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
  width: 100%;
  background-image: url(../assets/Day1/bg.jpg);
  background-size: cover;
}
.day1 .box {
  text-align: center;
  background-color: rgba(255, 255, 255, 0.5);
}
.day1 div {
  width: 100px;
  height: 100px;
  border-radius: 10px;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.3);
  cursor: pointer;
}
.day1 .active {
  box-shadow: 0px 0px 3px 5px yellow;
}
</style>
