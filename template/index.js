const app = new Vue({
    el: '#init',
    data: {
        header: 'with Vue',
        description: 'Using Vue in a Authentication Tutorial',
        image: './assets/splashImage.jpg',
        goThere: 'https://vuejs.org/',
        showPic: false,
        whys: ["fun", "joy", "laughter"]
    },
    methods: {
        triggerPic() {
            this.showPic = !this.showPic
        }
    }
})