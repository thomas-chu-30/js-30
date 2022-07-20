<script>
export default {
    data() {
        return {
            activeKeyCode: "",
            drumSound: [
                {
                    keyCode: 65,
                    key: "a",
                    title: "boom",
                    audio: require("@/assets/Day1/drum/boom.wav"),
                },

                {
                    keyCode: 83,
                    title: "clap",
                    key: "s",

                    audio: require("@/assets/Day1/drum/clap.wav"),
                },
                {
                    keyCode: 68,
                    title: "hihat",
                    key: "d",
                    audio: require("@/assets/Day1/drum/hihat.wav"),
                },
                {
                    keyCode: 70,
                    title: "kick",
                    key: "f",
                    audio: require("@/assets/Day1/drum/kick.wav"),
                },
                {
                    keyCode: 71,
                    title: "openhat",
                    key: "j",
                    audio: require("@/assets/Day1/drum/openhat.wav"),
                },
                {
                    keyCode: 72,
                    title: "ride",
                    key: "k",
                    audio: require("@/assets/Day1/drum/ride.wav"),
                },
                {
                    keyCode: 74,
                    title: "snare",
                    key: "l",
                    audio: require("@/assets/Day1/drum/snare.wav"),
                },
                {
                    keyCode: 75,
                    title: "tink",
                    key: "g",
                    audio: require("@/assets/Day1/drum/tink.wav"),
                },
                {
                    keyCode: 76,
                    title: "tom",
                    key: "h",
                    audio: require("@/assets/Day1/drum/tom.wav"),
                },
            ],
        };
    },
    methods: {
        playSound($event) {
            const dom = document.querySelector(`audio[data-key="${$event.keyCode}"]`);
            const keyCodeArr = this.drumSound.map((drumItem) => {
                return drumItem.keyCode;
            });
            if (keyCodeArr.includes($event.keyCode)) {
                dom.currentTime = 0; // 可以連打用
                this.activeKeyCode = $event.key;
                dom.play();
            }
        },
    },
    mounted() {
        window.addEventListener("keydown", this.playSound);
        window.addEventListener("keyup", () => {
            this.activeKeyCode = null;
        });
    },
    destroyed() {
        window.removeEventListener("keydown", this.playSound);
        window.removeEventListener("keyup");
    },
};
</script>
<template>
    <div class="day1">
        <div v-for="item in drumSound" :key="item.key" :class="['box', { active: activeKeyCode === item.key }]" :data-key="item.key">
            <h1>{{ item.key.toUpperCase() }}</h1>
            <p>{{ item.title }}</p>
        </div>
        <audio v-for="(drumItem, idx) in drumSound" :key="idx" :data-key="drumItem.keyCode" :src="drumItem.audio"></audio>
    </div>
</template>

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
