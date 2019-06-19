<template>
    <div id="boradcast">
        <div class="nav">
            <swiper />
        </div>
        <div class="banner">
            <banner />
        </div>
    </div>
</template>
<script>
    import swiper from '@/components/index/comm/swiper'
    import banner from './banner'
    export default {
        name: '',
        data() {
            return {

            }
        },
        computed: {},
        methods: {},
        mounted() {

        },
        created() {

        },
        components: {
            swiper,
            banner
        }
    }
</script>
<style scoped>
   #boradcast {
       width: 100%;
       height: 100%;
   }

   .nav {
       width: 100%;
       height: 200px;
   }

</style>