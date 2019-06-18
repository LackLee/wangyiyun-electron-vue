<template>
    <div id="look">
        <div class="list" v-for="(item, index) in l" :key="index">
            <div class="box background-image-cover"
                 :style="`background-image: url(${require(`@/assets/${item.id}.jpg`)})`">

                <div class="title">
                    <span class="tag" v-if="item.tag">{{ item.tag }}</span>
                    <span class="total">
                        <v-icon name="fire-alt" :inverse="true" scale=".8" class="icon"/>
                        {{ item.total }}
                    </span>
                </div>

                <div class="author">
                    <div class="avatar background-image-cover"
                         :style="`background-image: url(${require(`@/assets/${item.avatar}.jpg`)})`"
                    ></div>
                    <p>{{ item.author }}</p>
                    <v-icon :inverse="true" name="eye" class="icon" v-if="item.isEye"/>
                </div>
            </div>
            <p>小姑娘，叔叔带你去吃棒棒糖~</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "look",
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
                    [
                        {id: 5, tag: '歌舞双绝', total: 1314, author: '漂亮小姐姐', avatar: 1, isEye: false },
                        {id: 6, tag: '欧美范', total: 1314, author: '漂亮小姐姐', avatar: 2, isEye: false },
                        {id: 7, tag: '文武双全', total: 1314, author: '漂亮小姐姐', avatar: 3, isEye: true },
                        {id: 8, tag: '', total: 1314, author: '漂亮小姐姐', avatar: 4, isEye: true },
                        {id: 9, tag: '恬静依人', total: 1314, author: '漂亮小姐姐', avatar: 5, isEye: false },
                    ]
                    :
                    this.list;
                return list;
            }
        }
    }
</script>

<style scoped>
   #look {
       width: 100%;
       height: auto;
       display: flex;
       justify-content: space-between;
   }

    .list{
        width: 18.5%;
        height: auto;
    }

    .list > p {
        font-size: 13px;
        color: #333;
        margin-top: 5px;
        line-height: 16px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
    }

    .box {
        width: 100%;
        height: 180px;
        position: relative;
    }


    .title {
        position: absolute;
        left: 0;
        top: 0;
        display: flex;
        justify-content: flex-end;
        align-items: flex-start;
        width: 100%;
        height: 20px;
    }

    .title > span {
        display: inline-flex;
        color: #fff;
        font-size: 12px;
        align-items: center;
    }

    .tag {
        width: auto;
        height: 100%;
        background-color: #37006B;
        padding: 0 8px;
        border-bottom-right-radius: 12px;
    }

    .total {
        flex: 1;
        height: 100%;
        max-width: 60%;
        justify-content: flex-end;
        padding-right: 5px;
        background-image: linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0, .5));
    }

    .total .icon {
        margin-right: 4px;
    }
    .author {
        width: 100%;
        height: 40px;
        position: absolute;
        left: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        background-image: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0, .6));

    }

    .avatar {
        width: 23px;
        height: 23px;
        border-radius: 50%;
        overflow: hidden;
        margin: 0 5px;
    }

   .author p {
       font-size: 12px;
       color: #fff;
   }

    .author .icon {
        color: #F0483B;
        margin-left: 5px;
    }
</style>