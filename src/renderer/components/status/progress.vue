<template>
    <div id="p" :style="`width:${width}px`">
        <div class="cir center"  :style="`${barShow ? 'display: flex' : ''}`"></div>
    </div>
</template>
<script>
    export default {
        name: '',
        props: {
          width: {
              type: null,
              default: 0
          },
          barShow: {
              type: Boolean,
              default: false
          }
        },
        data() {
            return {}
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
  #p {
      height: 5px;
      background-color: #e6e6e8;
      border-radius: 5px;
      position: relative;
      cursor: pointer;
  }
  #p:hover > .cir {
      display: flex;
  }

    .cir {
        width: 14px;
        height: 14px;
        border-radius: 50%;
        border: 1px solid rgba(0,0,0, .2);
        box-sizing: border-box;
        position: absolute;
        top: 50%;
        margin-top: -7px;
        left: 0;
        background-color: #fff;
        display: none;
    }

  .cir:after {
      content: '';
      display: block;
      width: 4px;
      height: 4px;
      background-color: #C62F2F;
      border-radius: 50%;
  }
</style>