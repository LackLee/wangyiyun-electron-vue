<template>
    <div id="index-nav" class="center">
        <p class="box center"
           v-for="(item, index) in list"
           :key="index"
           :class="{'box-active': $route.path === item.path}"
           @click="$router.push({path: item.path})"
        >{{ item.name }}</p>
    </div>
</template>
<script>
    export default {
        name: '',
        data() {
            return {
                list: [
                    {name: '个性推荐', path: '/findMusic/recommend'},
                    {name: '歌单', path: '/findMusic/songList'},
                    {name: '主播电台', path: '/findMusic/boradcastStation'},
                    {name: '排行榜', path: '/findMusic/rankingList'},
                    {name: '歌手', path: '/findMusic/singer'},
                    {name: '最新音乐', path: '/findMusic/newMusic'},
                ]
            }
        },
        computed: {},
        methods: {},
        mounted() {

        },
        created() {

        }
    }
</script>
<style scoped>
    #index-nav {
        width: 100%;
        height: 50px;
        border-bottom: 1px solid #e1e1e2;
        box-sizing: border-box;
    }

    .box {
        height: 100%;
        margin-right: 45px;
        box-sizing: border-box;
        color: #333;
        font-size: 14px;
        cursor: pointer;
        border-bottom: 3px solid transparent;
    }

    .box:hover {
        color: #C62F2F;

    }

    .box-active {
        color: #C62F2F;
        border-bottom: 3px solid #C62F2F;
    }
</style>