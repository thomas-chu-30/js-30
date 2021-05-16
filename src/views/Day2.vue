<template>
  <div class="day2">
    <div class="clock">
      <div class="point"></div>
      <div class="sec"></div>
      <div class="min"></div>
      <div class="hr"></div>
    </div>
    <div class="clock-number">
      <v-btn color="primary">{{ hour }}</v-btn>
      <span>:</span>
      <v-btn color="primary">{{ minute }}</v-btn>
      <span>:</span>
      <v-btn color="primary">{{ seconed }}</v-btn>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      seconed: 0,
      minute: 0,
      hour: 0,
    };
  },
  mounted() {
    setInterval(() => {
      this.time();
      let time = new Date();
      let second = time.getSeconds();
      let minute = time.getMinutes();
      let hour = time.getHours();
      // second
      let secDOM = document.querySelector(".sec");
      const secondsDegree = (second / 60) * 360 + 0;
      secDOM.style.transform = `rotate(${secondsDegree}deg) translateX(-50%) translateY(-50%)  `;
      secDOM.style.height = "45%";
      //minutes
      let minDOM = document.querySelector(".min");
      const minuteDegree = (minute / 60) * 360 + 0;
      minDOM.style.transform = `rotate(${minuteDegree}deg) translateX(-50%) translateY(-50%) `;
      minDOM.style.height = "30%";
      //hour
      let hr = document.querySelector(".hr");
      const hrDegree = (hour / 12) * 360 + 0;
      hr.style.transform = `rotate(${hrDegree}deg) translateX(-50%) translateY(-50%) `;
      hr.style.height = "20%";
    }, 1000);
  },
  methods: {
    time() {
      let time = new Date();
      let second = time.getSeconds();
      let minute = time.getMinutes();
      let hour = time.getHours();
      this.seconed = second;
      this.minute = minute;
      this.hour = hour;
    },
  },
};
</script>
<style scoped>
* {
  /* border: 1px solid; */
  position: relative;
}
.day2 {
  height: 100%;
  background-color: #a5e0ef;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.clock {
  border: 1px solid;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 20px solid gray;
}
.clock-number {
  min-width: 300px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.clock-number span {
  color: black;
}
.point {
  border: 1px solid;
  width: 1px;
  height: 1px;
}
.sec,
.min,
.hr {
  width: 5px;
  /* height: 10px; */
  /* height: 45%; */
  /* border: 1px solid; */
  box-shadow: 0 0 5px gray;
  background-color: black;
  position: absolute;
  left: calc(50%);
  transform: translateX(-50%) scaleY(0.8);
  transition: 0.7s;
}
</style>
