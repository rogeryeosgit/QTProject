Vue.component('Passage', {          // Vue Component
    template:
        `<div>
        <div><img class="mainSplash" v-show="showPic" :src="image" /></div>
        <h1>Testing Login Authentication <a :href="goThere">{{ header }}</a></h1>
        <p>{{ description }} <br> you may wonder why I want to do this, its just for <p v-for="why in whys">{{ why }}</p></p>
        <button @click="triggerPic">Show Picture or Not</button>
    </div>`,
    data() {
        return {
            header: 'with Vue 2',
            description: 'Using Vue in a Authentication Tutorial',
            image: './assets/splashImage.jpg',
            goThere: 'https://vuejs.org/',
            showPic: false,
            whys: ["fun", "joy", "laughter"]
        }
    },
    methods: {                  // property
        triggerPic() {
            this.showPic = !this.showPic
        }
    }
})

const app = new Vue({           // Vue instance
    el: '#read',
})