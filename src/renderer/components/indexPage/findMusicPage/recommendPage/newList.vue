<template>
    <div id="box">
        <div class="list" v-for="(item, index) in l" :key="index">
            <div class="content" v-for="(val, i) in item" :key="i">
                <span class="label">{{ val | _index }}</span>
                <div class="title-icon background-image-cover center"
                     :style="`background-image: url(${require(`@/assets/${val}.jpg`)})`">
                    <v-icon name="play-circle" :inverse="true" />
                </div>
                <div class="desc">
                    <p class="title">那就这样吧</p>
                    <p>
                        <v-icon :name=" val % 2 == 0 ? 'gamepad' : 'film'" color="#FE672E"/>
                        <span class="author">你李哥</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "newList",
        props: {
            list: {
                type: Array,
                required: true
            }
        },
        filters: {
           _index(index) {
               return index + 1  < 10 ? '0' + (index + 1) : index + 1;
           }
        },
        computed: {
            l() {
                let list = this.list.length === 0 ?
                    [[0, 1, 2, 3, 4], [5, 6, 7, 8, 9]]
                    :
                    this.list;
                return list;
            }
        },
    }
</script>

<style scoped>
   #box {
       width: 100%;
       height: 300px;
       border: 1px solid #e5e5e5;
       box-sizing: border-box;
       display: flex;
   }

   #box .list:first-child {
       border-right: 1px solid #e5e5e5;
       box-sizing: border-box;
   }

    .list{
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;

    }

    .content {
        width: 100%;
        height: 20%;
        display: flex;
        align-items: center;
        cursor: pointer;
        background-color: transparent;
    }



    .label {
        font-size: 13px;
        color: #888;
        margin: 0 15px;
    }

    .title-icon {
        width: 40px;
        height: 40px;
        margin-right: 10px;
        border: 1px solid rgba(0,0,0, .2);
        box-sizing: border-box;
    }

    .desc {
        font-size: 13px;
        color: #333;
        flex: 1;
    }


    .desc p {
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .desc p:last-child {
        color: #888;
        display: flex;
        align-items: center;
        margin-top: 5px;
    }

    .author {
        margin-left: 5px;
    }

    .list .content:nth-child(2n){
        background-color: #f5f5f7;;
    }

   .content:hover {
       background-color: #EBECED !important;
   }
   .content:hover .author {
       color: #333;
   }



</style>