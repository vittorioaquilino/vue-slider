const app = new Vue(
    {
        el: "#root",
        data: {
            thumbs: [
                {
                    image: 'img/01.jpg',
                    title: 'Svezia',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                },
                {
                    image: 'img/02.jpg',
                    title: 'Svizzera',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                },
                {
                    image: 'img/03.jpg',
                    title: 'Gran Bretagna',
                    text: 'Lorem ipsum.',
                },
                {
                    image: 'img/04.jpg',
                    title: 'Germania',
                    text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
                },
                {
                    image: 'img/05.jpg',
                    title: 'Paradise',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
                },  
            ],
            currentSlide: 0,
        },

        methods: {
            addPrev: function () {
                if (this.currentSlide === 0) {
                    this.currentSlide = this.thumbs.length -1;
                } else {
                    this.currentSlide--;
                }
            },

            addNext: function() {
                if (this.currentSlide === this.thumbs.length -1) {
                    this.currentSlide = 0;
                } else {
                    this.currentSlide++;
                }
            },
        },
    }
)