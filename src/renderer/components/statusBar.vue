<template>
    <div id="mp">

        <div class="center">
            <div class="pre center">
                <v-icon name="step-backward"/>
            </div>

            <div class="pause-or-play center" @click="handle">
                <v-icon name="pause" v-if="isPlay" />
                <v-icon name="play" class="play" v-else style="position: relative; left: 2px;"/>
            </div>

            <div  class="next center">
                <v-icon name="step-forward"/>
            </div>
        </div>

         <div class="time">
             <span>00:00</span>
             <pro width="430" :barShow="true"></pro>
             <span>05:00</span>
         </div>

        <div class="voice center">
            <i class="background-image-cover"></i>
            <pro width="65"></pro>

        </div>

        <p class="lyric">词</p>
    </div>
</template>
<script>
    import pro from './status/progress'
    export default {
        name: '',
        data() {
            return {
                isPlay: false
            }
        },
        computed: {},
        methods: {
            handle() {
                this.isPlay = !this.isPlay
            }
        },
        mounted() {

        },
        created() {

        },
        components: { pro }
    }
</script>
<style scoped>
  #mp {
      width: 100%;
      height: 50px;
      background-color: #f5f5f7;
      border-top:1px solid #e2e2e7;
      box-sizing: border-box;
      display: flex;
      justify-content: space-around;
      align-items: center;
  }


  .pause-or-play {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background-color: #E83C3C;
      color: #fff;
      font-size: 15px;
      cursor: pointer;
      margin: 0 30px;
  }



  .pre {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background-color: #E83C3C;
      color: #fff;
      font-size: 10px;
      font-weight: bold;
      cursor: pointer;

  }

  .next {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background-color: #E83C3C;
      color: #fff;
      font-size: 10px;
      font-weight: bold;
      cursor: pointer;
  }


  .pause-or-play:hover,
  .pre:hover,
  .next:hover {
      background-color: #C62F2F;
  }

  .time {
        display: flex;
        width: 530px;
        justify-content: space-between;
        align-items: center;
      font-size: 14px;

  }



    .voice > i {
        display: inline-block;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: rgba(0, 0, 0 , .5);
        margin-right: 5px;
        cursor: pointer;
    }

    .lyric {
        width: 20px;
        line-height: 20px;
        border: 1px solid rgba(0,0,0,.3);
        text-align: center;
        font-size: 13px;
        color: rgba(0,0,0,.3);
        cursor: pointer;
    }


</style>