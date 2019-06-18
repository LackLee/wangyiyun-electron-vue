<template>
    <swiper :options="options" ref="mySwiper" class="swiper">
        <swiper-slide v-for="(slide, index) in swiperSlides" :key="index" class="box">
                <div :style="`background-image:url(${slide.imageURL})`" alt="" class="swiper-image"></div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script>
    import {swiper, swiperSlide} from 'vue-awesome-swiper'
    import 'swiper/dist/css/swiper.css'

    export default {
        name: "swiperRef",
        data() {
            return {
                options: {
                    effect: 'coverflow',
                    grabCursor: true,
                    centeredSlides: true,
                    slidesPerView: 'auto',
                    autoplay: true,
                    loop: true,
                    coverflowEffect: {
                        rotate: 0,
                        stretch: 150,
                        depth: 150,
                        modifier: 1.5,
                        slideShadows: false
                    },
                    pagination: {
                        el: '.swiper-pagination',

                    }
                },
                swiperSlides: [
                    {imageURL: require('@/assets/1.jpg')},
                    {imageURL: require('@/assets/2.jpg')},
                    {imageURL: require('@/assets/3.jpg')},
                    {imageURL: require('@/assets/4.jpg')},
                    {imageURL: require('@/assets/5.jpg')},
                ]
            }
        },
        computed: {
            swiperRef() {
                return this.$refs.mySwiper.swiper
            }
        },
        components: {
            swiper, swiperSlide
        }
    }
</script>

<style scoped>
    .swiper {
        width: 100%;
        height: 100%;
        text-align: center;
        position: relative;
        display: flex;
    }

    .box {
        display: flex;
        justify-content: center;
    }
    .swiper-image {
        width: 70%;
        height: 90%;
        border: 1px solid transparent;
        box-sizing: border-box;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }

    .swiper-pagination {
        bottom: 0px;
    }
</style>