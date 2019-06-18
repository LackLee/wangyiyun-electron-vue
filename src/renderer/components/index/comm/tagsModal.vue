<template>
    <div id="tag" class="center">
        <span class="val">{{ title }}</span>
        <v-icon name="angle-down" scale=".9" color="#666"/>

        <div class="modal">

        </div>
    </div>
</template>

<script>

    export default {
        name: "tag",
        props: {
            list: {
                type: Array,
                required: true,
                default: []
            },
        },
        data() {
          return {

          }
        },
        computed: {
            title() {
                let title = '', oldArr = [];
                this.list.map((v = {}) => oldArr.push(...v.children || []))
                oldArr.map(v => title = v.isShow ? v.name : title );
                return title;
            }
        },
        mounted() {

        }
    }
</script>

<style scoped>
   #tag {
       display: inline-flex;
       padding: 0 15px;
       height: 25px;
       border-radius: 4px;
       border: 1px solid #E1E1E2;
       background-color: #fff;
       cursor: pointer;
       position: relative;
   }


    #tag:hover {
        background-color: #F5F5F7;
    }

    .val {
        font-size: 13px;
        color: #333;
        margin-right: 5px;
    }


    .modal {
        width: 540px;
        height: 416px;
        background-color: #fff;
        border-radius: 5px;
        overflow: hidden;
        box-shadow: 0 0 5px 0 rgba(0,0,0, .5);
        position: absolute;
        left: 0;
        top: 26px;

    }
</style>