<template>
    <div id="fm">
        <find-music-nav></find-music-nav>
        <router-view></router-view>
    </div>
</template>
<script>
    import findMusicNav from './findMusicNav'
    export default {
        name: '',
        data() {
            return {}
        },
        computed: {},
        methods: {},
        mounted() {

        },
        created() {

        },
        components: {
            findMusicNav
        }
    }
</script>
<style scoped>
   #fm {
       width:100%;
       height: 100%;
   }
</style>