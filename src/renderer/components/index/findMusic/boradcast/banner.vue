<template>
    <div class="banner">
        <swiper :options="options" ref="mySwiper" class="swiper swiper-container">
            <swiper-slide v-for="(slide, index) in bannerList" :key="index" class="box center swiper-no-swiping">
                <div class="icon" v-for="(item, i) in slide">
                    <v-icon v-if="item.icon" :name="item.icon" scale="1.8" />
                    <span>{{ item.name }}</span>
                </div>
            </swiper-slide>


        </swiper>
        <div class="swiper-button-prev center">
            <v-icon name="chevron-left" scale="1.5"/>
        </div>
        <div class="swiper-button-next center">
            <v-icon name="chevron-right" scale="1.5"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "banner",
        data() {
            return {
                bannerList: [
                    [
                        {name: '排行榜', icon: 'list-ol'},
                        {name: '创作翻唱', icon: 'microphone-alt'},
                        {name: '3D|电子', icon: 'headphones-alt'},
                        {name: '情感调频', icon: 'surprise'},
                        {name: '音乐故事', icon: 'music'},
                        {name: '二次元', icon: 'robot'},
                        {name: '有声书', icon: 'book-reader'},
                        {name: '知识技能', icon: 'lightbulb'},
                        {name: '商业财经', icon: 'poll'},
                    ],
                    [
                        { name: '人文历史', icon: 'user-edit' },
                        { name: '外语世界', icon: 'language' },
                        { name: '亲子宝贝', icon: 'socks' },
                        { name: '相声曲艺', icon: 'theater-masks' },
                        { name: '美文读物', icon: 'book-open' },
                        { name: '脱口秀', icon: 'hand-middle-finger' },
                        { name: '广播剧', icon: 'broadcast-tower' },
                        { name: '明星做主播', icon: 'snowman' },
                        { name: '娱乐影视', icon: 'globe-europe' },
                    ],
                    [
                        { name: '科技科学', icon: 'globe-americas' },
                        { name: '校园|教育', icon: 'user-secret' },
                        { name: '旅途|城市', icon: 'plane-departure' },
                        { name: '我要做主播', icon: 'question-circle' },
                        {}, {}, {}, {}, {}
                    ],
                ],
                options: {
                    speed:1800,
                    noSwiping: true,
                    grabCursor: true,
                    centeredSlides: true,
                    slidesPerView: 'auto',
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },

                },
            }
        },
        components: {

        }
    }
</script>

<style scoped>
    .banner {
        position: relative;
    }
    .swiper {
        width: 90%;
        margin: 0 5%;
        height: 100px;
        text-align: center;
        display: flex;
    }

    .box {

        justify-content: space-around !important;
    }

    .icon {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 12px;
        color: #666;
    }

    .icon span {

        margin-top: 10px;
    }

    .swiper-button-next, .swiper-button-prev {
        top: 50%;
        margin-top: -31px;
        width: 36px;
        height: 62px;
        outline: none;
        position: absolute;
        background-image: none;

    }
</style>