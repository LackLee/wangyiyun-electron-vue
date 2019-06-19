<template>
    <div id="song" ref="song">
        <div class="background-image-cover img"
             :style="`height: ${imgHeight}px;background-image: url(${require(`@/assets/${(item - 1) % 9}.jpg`)})`"
        >

            <p class="num" v-if="(item - 1) !== 0">
                <v-icon name="headphones" :inverse="true" scale=".8"/>
                <span>100万</span>
            </p>


            <v-icon name="play-circle" :inverse="true" class="icon" v-if="(item - 1) !== 0"/>


            <p class="author" v-if="(item - 1) !== 0">
                <v-icon name="user" class="user-icon"/>
                <span>你李哥还是你李哥</span>
                <v-icon name="star" class="collect-icon"/>
            </p>

            <div class="songList" v-if="(item - 1) === 0">
                <p><v-icon name="crown" color="#E6CA7D" scale="1.8"/></p>
                <p>
                    <span>精品歌单</span>
                    <v-icon name="angle-right" color="#E6CA7D"/>
                </p>
            </div>

        </div>
        <p>
            {{ (item - 1) === 0 ? '精品歌单倾心推荐，给最懂音乐的你' : '自然奥德赛|纵一苇之所如凌万顷之茫然' }}
        </p>
    </div>
</template>

<script>
    export default {
        name: "songBox",
        props: {
            item: {
                type: null,
                song: null,
            }
        },
        data() {
            return {
                imgHeight: 185
            }
        },
        mounted() {
            this.$nextTick(() => {
                this.song = this.$refs.song;
                this.imgHeight = this.song ? this.song.clientWidth : 0;
            })
        }
    }
</script>

<style scoped>
    #song {
        width: 23.5%;
        height: auto;
        margin-right: 2%;
        margin-bottom: 30px;
        cursor: pointer;
    }

    .img {
        width:100%;
        display: flex;
        justify-content: flex-end;
        position: relative;
        overflow: hidden;
    }


    #song > p {
        width: 100%;
        margin-top: 5px;
        font-size: 13px;
        color: #333;
        line-height: 17px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
    }


    .num {
        width: 60%;
        height: 20px;
        color: #fff !important;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        vertical-align: middle;
        margin: 0;
        font-size: 13px;
        background-image: linear-gradient(to right, transparent, rgba(0, 0, 0, .5));
    }

    .num span {
        margin: 0 5px;
    }

    .icon {
        width: 25px;
        height: 25px;
        position: absolute;
        right: 10px;
        bottom: 10px;
        opacity: 0;
        transition: all .2s ease;
    }

    .img:hover .icon {
        opacity: 1;
    }

    .author {
        width: 100%;
        height: 25px;
        position: absolute;
        left: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        background-image: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0, .6));
    }

    .author span {
        font-size: 12px;
        color:#fff;
    }

    .author .user-icon {
        width: 12px;
        height:12px;
        color: #fff;
        margin: 0 5px;
    }

    .author .collect-icon {
        width: 12px;
        height:12px;
        color: #F1B220;
        margin: 0 5px;
    }

    .songList{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-image: linear-gradient(to bottom, rgba(0,0,0, .9), rgba(0,0,0, .6));
    }

    .songList > p:first-child {
        width: 85px;
        height: 85px;
        border:3px solid #E6CA7D;
        border-radius: 50%;
        display: inline-flex;
        justify-content: center;
        align-items: center;
    }

    .songList > p:last-child {
        display: inline-flex;
        align-items: center;
        font-size: 14px;
        color: #E6CA7D;
        margin-top: 15px;
    }

    .songList > p span {
        margin-right: 5px;
        line-height: 0;
    }
</style>