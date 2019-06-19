<template>
    <div id="songList">
        <div class="head">
            <tagsModal :list="tags"
                       defaultText="全部歌单"
                       @defaultChocie="tagChange"
                       @change="tagChange"

            />
        </div>

        <div class="hot-tag">
            <span class="label">热门标签：</span>

            <span v-for="(item, index) in hotTags"
                  :key="index"
                  class="tag"
                  v-if="item.isHot"
                  @click="tagChange(item)"
            >
                {{ item.name }}
            </span>
        </div>


        <div id="list">
            <box v-for="item in list"
                 :key="item"
                 :item="item"
                 class="box"/>
        </div>


        <div class="footer">
            <pagination @choice="choicePage" :total="1000"/>
        </div>


    </div>
</template>
<script>
    import tagsModal from '@/components/index/comm/tagsModal'
    import data from './data'
    import box from './songBox'
    import pagination from '@/components/index/comm/pagination'
    const hotTags = [];

    data.map((v = {}) => hotTags.push(...v.children || []));

    export default {
        name: '',
        data() {
            return {
                tags: data,
                hotTags,
                list: 30
            }
        },
        computed: {},
        methods: {
            tagChange(item = {}) {
                console.log(item)
                if(item.isShow) return null;

                let newList = [], hotTags = [];

                this.tags.map((v = { children: []}) => {
                    let newChildren = [];
                    v.children.map((val = {}) => {
                        newChildren.push({...val, isShow: item.id === val.id});
                    });
                    newList.push({...v, children: newChildren});
                    hotTags.push(...newChildren);
                });

                this.tags = [...newList];
                this.hotTags = [...hotTags];
            },

            choicePage(pageNum) {
                console.log(`第${pageNum}页`)
            }
        },
        mounted() {

        },
        created() {

        },
        components: {
            tagsModal,
            box,
            pagination
        }
    }
</script>
<style scoped>
   #songList {
     width: 100%;
     height: 100%;
   }
    .head {
        margin-bottom: 10px;
    }

    .hot-tag {
        font-size: 12px;
        color: #333;
    }


    .tag {
        color: #666;
        cursor: pointer;
        padding: 0 15px;
        position: relative;
    }

    .tag:not(:last-child):after {
        content: '';
        display: block;
        width: 1px;
        height: 80%;
        position: absolute;
        background-color: #D4CCD4;
        top: 10%;
        right: 0;
    }

    .tag:hover {
        color: #333;
    }

    #list {
        width: 100%;
        height: auto;
        display: flex;
        flex-wrap: wrap;
        margin: 20px 0;
    }

   #list .box:nth-child(4n) {
       margin-right: 0;
   }

    .footer {
        width: 100%;
        margin-bottom: 30px;
        display: flex;
        justify-content: center;
    }
</style>