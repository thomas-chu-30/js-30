<script>
export default {
    data() {
        return {
            photoGroup: [
                { up: "Hey", center: "Let's", bottom: "Dance" },
                { up: "Give", center: "Take", bottom: "Receive" },
                { up: "Experience", center: "It", bottom: "Today" },
                { up: "Give", center: "All", bottom: "You can" },
                { up: "Life", center: "In", bottom: "Motion" },
            ],
            focus: [],
            active: [],
        };
    },
    methods: {
        test() {},
        toggleOpen(index) {
            if (this.focus.includes(index)) {
                this.focus = this.focus.filter((item) => {
                    return item !== index;
                });
            } else {
                this.focus.push(index);
            }
        },
        toggleActive($event, index) {
            if ($event.propertyName.includes("flex")) {
                if (this.active.includes(index)) {
                    this.active = this.active.filter((item) => {
                        return item !== index;
                    });
                } else {
                    this.active.push(index);
                }
            }
        },
    },
};
</script>
<template>
    <div class="day2">
        <div class="panels">
            <div
                v-for="(photoItem, index) in photoGroup"
                class="panel"
                :class="[{ open: focus.includes(index), 'open-active': active.includes(index) }, `panel${index + 1}`]"
                :key="`${photoItem.up}${index}`"
                @click="toggleOpen(index)"
                @transitionend="toggleActive($event, index)"
            >
                <p>{{ photoItem.up }}</p>
                <p>{{ photoItem.center }}</p>
                <p>{{ photoItem.bottom }}</p>
            </div>
        </div>
    </div>
</template>
<style scoped>
html {
    box-sizing: border-box;
    background: #ffc600;
    font-family: "helvetica neue";
    font-size: 20px;
    font-weight: 200;
}
body {
    margin: 0;
}
*,
*:before,
*:after {
    box-sizing: inherit;
}

.panels {
    min-height: 100vh;
    overflow: hidden;
    display: flex;
    cursor: pointer;
}

.panel {
    background: #6b0f9c;
    box-shadow: inset 0 0 0 5px rgba(255, 255, 255, 0.1);
    color: white;
    text-align: center;
    align-items: center;
    /* Safari transitionend event.propertyName === flex */
    /* Chrome + FF transitionend event.propertyName === flex-grow */
    transition: font-size 0.7s cubic-bezier(0.61, -0.19, 0.7, -0.11), flex 0.7s cubic-bezier(0.61, -0.19, 0.7, -0.11), background 0.2s;
    font-size: 20px;
    background-size: cover;
    background-position: center;
    flex: 1;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
}

.panel1 {
    background-image: url(https://source.unsplash.com/gYl-UtwNg_I/1500x1500);
}
.panel2 {
    background-image: url(https://source.unsplash.com/rFKUFzjPYiQ/1500x1500);
}
.panel3 {
    background-image: url(https://images.unsplash.com/photo-1465188162913-8fb5709d6d57?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&w=1500&h=1500&fit=crop&s=967e8a713a4e395260793fc8c802901d);
}
.panel4 {
    background-image: url(https://source.unsplash.com/ITjiVXcwVng/1500x1500);
}
.panel5 {
    background-image: url(https://source.unsplash.com/3MNzGlQM7qs/1500x1500);
}

.panel > * {
    margin: 0;
    width: 100%;
    transition: transform 0.5s;
    flex: 1 0 auto;
    justify-content: center;
    align-items: center;
    display: flex;
}

.panel > *:first-child {
    transform: translateY(-100%);
}
.panel.open-active > *:first-child {
    transform: translateY(0);
}
.panel > *:last-child {
    transform: translateY(100%);
}
.panel.open-active > *:last-child {
    transform: translateY(0);
}

.panel p {
    text-transform: uppercase;
    font-family: "Amatic SC", cursive;
    text-shadow: 0 0 4px rgba(0, 0, 0, 0.72), 0 0 14px rgba(0, 0, 0, 0.45);
    font-size: 2em;
}
.panel p:nth-child(2) {
    font-size: 4em;
}

.panel.open {
    font-size: 40px;
    flex: 5;
}
</style>
