<template>
    <div id="mv">
        <div class="box" v-for="(item, index) in l" :key="index">
            <div class="img background-image-cover"
                 :style="`background-image: url(${require(`@/assets/${item}.jpg`)})`">

                <div  class="icon center" v-if="id == 2">
                    <v-icon name="video" :inverse="true" scale=".7"/>
                </div>

                <div class="num" v-else-if="id == 4">
                    <v-icon name="video" :inverse="true" scale=".8"/>
                    <span>100万</span>
                </div>


                <p class="modal" v-if="id == 4">
                    你李哥推荐：我猜你喜欢这个曲目
                </p>

            </div>
            <p>超燃男声翻唱《冠世一战》歌声中感受江湖侠气</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MV",
        props: {
            list: {
                type: Array,
                required: true
            },
            id:{
                type: null,
                default: 2
            }
        },
        computed: {
            l() {
                let list = this.list.length === 0 ?
                    [0, 1, 2]
                    :
                    this.list;
                return list;
            }
        }
    }
</script>

<style scoped>
    #mv {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin: 10px 0 0;
    }

    .box {
        width: 31.8%;
        height: auto;
        cursor: pointer;
        position: relative;
    }

    .img {
        width: 100%;
        height: 140px;
        border: 1px solid rgba(0,0,0, .2);
        box-sizing: border-box;
        position: relative;
        overflow: hidden;
    }

    .box > p {
        font-size: 13px;
        color: #333;
        margin-top: 5px;
        line-height: 16px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
    }

    .box .icon {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        border:1px solid #fff;
        position: absolute;
        margin-top: 5px;
        margin-left: 5px;
    }

    .num {
        width: 30%;
        height: 25px;
        background-image: linear-gradient(to right, transparent, rgba(0,0,0, .5));
        display: flex;
        align-items: center;
        position: absolute;
        right: 0;
        top: 0;
        justify-content: flex-end;
    }
    .num > span {
        font-size: 13px;
        color: #fff;
        margin:0 5px;
    }

    .modal {
        width: 90%;
        padding: 4px 5%;
        max-height: 40px;
        line-height: 20px;
        font-size: 13px;
        color: #fff;
        position: absolute;
        left: 0;
        top: -48px;
        background-color: rgba(0,0,0,.4);
        transform: translateY(0);
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
</style>