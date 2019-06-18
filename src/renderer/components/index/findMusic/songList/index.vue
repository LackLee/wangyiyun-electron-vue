<template>
    <div id="songList">
        <div class="head">
            <tagsModal :list="tags" @change="tagChange"/>
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
    </div>
</template>
<script>
    import tagsModal from '@/components/index/comm/tagsModal'
    import data from './data'

    const hotTags = [];

    data.map((v = {}) => hotTags.push(...v.children || []));

    export default {
        name: '',
        data() {
            return {
                tags: data,
                hotTags
            }
        },
        computed: {},
        methods: {
            tagChange(item) {
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
        },
        mounted() {

        },
        created() {

        },
        components: {
            tagsModal
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
</style>