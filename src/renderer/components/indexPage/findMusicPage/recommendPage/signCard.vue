<template>
    <div class="list">
        <div class="box" v-for="(item, index) in l" :key="index">
            <div v-if="index === 0 && id == 1" class="img week">
                <p class="modal">
                    你李哥推荐：我猜你喜欢这个曲目
                </p>

                <p class="title">星期五</p>
                <p class="desc">14</p>
            </div>
            <div v-else class="img" :style="`background-image: url(${ require('@/assets/' + index + '.jpg') })`">

                <p class="modal" v-if="id == 1">
                    你李哥推荐：我猜你喜欢这个曲目
                </p>

                <p class="num" v-if="id == 1">
                    <v-icon name="headphones" :inverse="true" scale=".8"/>
                    <span>100万</span>
                </p>

                <v-icon name="play-circle" :inverse="true" class="icon" v-if="id == 1"/>

                <p class="tag" v-if="id == 5 && index == 2">付费精品</p>

                <p class="m" v-if="id == 5">我只是一段描述</p>
            </div>
            <p v-if="id == 1">{{ index === 0 ? '每日歌曲推荐' : '一个比较走心的山寨网易云' }}</p>

            <p v-if="id == 5">一拳打死一个嘤嘤怪 打死打残</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "signCard",
        props: {
            list: {
                type: Array,
                required: true
            },
            id: {
                type: null,
                default: 1
            }
        },
        computed: {
            l() {
                let list = this.list.length === 0 ?
                    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
                    :
                    this.list;
                return list;
            }
        }
    }
</script>

<style scoped>
    .list {
        width: 100%;
        height: auto;
        display: flex;
        flex-wrap: wrap;
    }

    .box {
        width: 18%;
        height: 200px;
        margin-right: 2.5%;
        margin-bottom: 10px;
    }

    .box .img {
        width: 100%;
        height: 135px;
        border: 1px solid #E5E5E5;
        box-sizing: border-box;
        background-size: cover;
        background-position: center;
        cursor: pointer;
        display: flex;
        justify-content: flex-end;
        position: relative;
        overflow: hidden;
    }


    .box > p {
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

    .list .box:nth-child(5n) {
        margin-right: 0;
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
        margin-left: 5px;
    }

    .modal {
        width: 90%;
        padding: 4px 5%;
        height: 40px;
        line-height: 20px;
        font-size: 13px;
        color: #fff;
        position: absolute;
        left: 0;
        top: -48px;
        background-color: rgba(0, 0, 0, .4);
        transform: translateY(0);
        opacity: 0;
        transition: all .2s ease;
    }

    .icon {
        width: 20px;
        height: 20px;
        position: absolute;
        right: 5px;
        bottom: 5px;
        opacity: 0;
        transition: all .2s ease;
    }

    .box .img:hover .modal {
        opacity: 1;
        transform: translateY(48px);
    }

    .box .img:hover .num {
        visibility: hidden;
    }

    .box .img:hover .icon {
        opacity: 1;
    }


    .box .week {
        flex-direction: column;
        justify-content: center;
    }

    .week .title {
        text-align: center;
        font-size: 13px;
        color: #666;
    }

    .week .desc {
        text-align: center;
        color: #C62F2F;
        font-size: 90px;
        line-height: 90px;
    }


    .list .box .tag {
        font-size: 12px;
        background: #D33A31;
        width: auto;
        height: auto;
        padding: 3px 8px;
        position: absolute;
        left: 0;
        top: 0;
        color: #fff;
        border-bottom-right-radius: 12px;
    }


    .img .m {
        font-size: 12px;
        color: #FFF;
        width: 95%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        position: absolute;
        left: 5%;
        bottom: 0;
        padding-bottom: 4px;
        padding-top: 5px;
        background-image: linear-gradient(to bottom, rgba(0,0,0, 0) 0%, rgba(0,0,0, .5) 100%);
    }
</style>