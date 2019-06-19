<template>
    <div id="tag" class="center">
        <div class="tag-text center" @click="show = true">
            <span class="val">{{ title }}</span>
            <v-icon name="angle-down" scale=".9" color="#666"/>
        </div>

        <div class="modal" v-if="show">
            <p class="head">添加标签</p>

            <div class="content">
                <div class="scroll-box">
                    <div class="all center"
                         :class="{active: defaultText === title}"
                         @click="defaultChoice"
                    >
                        <span>{{ defaultText }}</span>
                    </div>

                    <div class="type-box" v-for="(item, index) in list" :key="index">
                        <div class="label">
                            <v-icon :name="item.iconType" color="#E09494" class="icon"/>
                            <span>{{ item.title }}</span>
                        </div>

                        <div class="tags">
                            <p class="center"
                               :class="{active: v.name === title}"
                               v-for="(v, i) in item.children || []"
                               :key="i"
                               @click="choice(v)"
                            >
                                {{ v.name }}
                                <span class="hot" v-if="v.isHot">HOT</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
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
            defaultText: {
                type: String,
                required: true
            },
        },
        data() {
          return {
              show: false
          }
        },
        computed: {
            title() {
                let title = '', oldArr = [];
                this.list.map((v = {}) => oldArr.push(...v.children || []))
                oldArr.map(v => title = v.isShow ? v.name : title );
                this.show = false;
                return title || this.defaultText;
            }
        },
        methods: {
            defaultChoice() {
                this.$emit('defaultChocie');
            },
            choice(v) {
                this.$emit('change', v)
            }
        },
        mounted() {

        }
    }
</script>

<style scoped>
   #tag {
       display: inline-flex;
       width: auto;
       height: 25px;
       position: relative;
   }

   .tag-text {
       display: inline-flex;
       padding: 0 15px;
       height: 100%;
       background-color: #fff;
       border-radius: 4px;
       border: 1px solid #E1E1E2;
       cursor: pointer;

   }

   .tag-text:hover {
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
        box-shadow: 0 0 10px 0 rgba(0,0,0, .5);
        position: absolute;
        left: 10px;
        top: 36px;
        z-index: 99;
        display: flex;
        flex-direction: column;
    }

   .modal:after {
       width: 0;
       height: 0;
       content: '';
       display: block;
       position: absolute;
       left: 20px;
       top: -4px;
       z-index: -1;
       background-color: #fff;
       transform: rotateZ(45deg);
       border:10px solid #fff;
       outline: 1px solid #D2D2D2;
       box-shadow: 0 0 5px 0 rgba(0,0,0, .3);
   }

    .head {
        width: 96%;
        line-height: 50px;
        border-bottom: 1px solid #D2D2D2;
        background-color: #fff;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        font-size: 15px;
        color: #333;
        padding-left: 4%;
    }



    .content {
        width: 100%;
        flex: 1;
        overflow-x: hidden;
        overflow-y: auto;
    }

    .scroll-box {
        width: 92%;
        padding: 10px 4%;
        height: auto;
    }

    .all {
        width: 100%;
        height: 35px;
        border: 1px solid #E1E1E2;
        box-sizing: border-box;
        font-size: 12px;
        color: #666;
        cursor: pointer;
        position: relative;
    }

    .all:hover {
        background-color: #F5F5F7;
        color: #333;
    }

    .type-box {
        width:100%;
        height: auto;
        display: flex;
        margin-top: 10px;
    }

    .label {
        width: 18%;
        display: flex;
    }

    .label .icon {
        width: 25px;
        height: 25px;
    }
    .label > span {
        font-size: 15px;
        color: #CE4E4E;
        margin-left: 10px;
        margin-top: 5px;
    }

    .tags {
        width: 82%;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        border-left: 1px solid #E1E1E2;
        border-top: 1px solid #E1E1E2;
    }

    .tags > p {
        width: 20%;
        height: 35px;
        display: inline-flex;
        border-right: 1px solid #E1E1E2;
        border-bottom: 1px solid #E1E1E2;
        box-sizing: border-box;
        color: #666666;
        font-size: 12px;
        outline: none;
        cursor: pointer;
        position: relative;
    }


    .tags > p:hover {
        background-color: #F5F5F7;
        color: #333;
    }

    .tags .hot {
        color: #C62F2F;
        position: absolute;
        right: 2px;
        top: 2px;
        font-size: 7px;
        font-weight: 700;
    }

    .active:before {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        border-radius: inherit;
        border: 1px solid #C62F2F;
        z-index: 99;
        box-sizing: border-box;
        pointer-events: none;
    }

   .active:after {
       content: '';
       display: block;
       position: absolute;
       right: 0;
       bottom: 0;
       width: 0;
       height: 0;
       border: 8px solid #C62F2F;
       border-top-color: transparent;
       border-left-color: transparent;
   }

   .active {
       color: #333 !important;
   }

</style>