<template>
    <div id="drag" :class="{ 'show-active': showActive }">
        <div class="box">
            <div class="title">
                <span>调整栏目顺序</span>
                <v-icon name="times" class="icon" color="#888" @click.native="close"/>
            </div>
            <div class="content">
                <p class="desc">
                    <v-icon name="lightbulb" color="#666" scale=".7"/>
                    <span>想调整栏目的顺序？按住右边的按钮拖动即可</span>
                </p>

                <div class="drag-content" ref="dragParent" @mousemove="move($event)"  @mouseup="out($event)">
                    <div class="cell"
                         v-for="(item, index) in list"
                         :key="index"
                         @mousedown="start($event, index)"

                    >
                        <span v-if="item && item.title">{{ item.title }}</span>
                        <v-icon v-if="item && item.title" name="bars" color="#666"/>
                    </div>

                    <div v-if="hasMoveObject"
                         class="cell cell-drag"
                         :style="`top: ${cellTop}px`"
                    >
                        <span>{{ hasMoveObject.title }}</span>
                        <v-icon name="bars" color="#666"/>
                    </div>
                </div>

                <p class="reset">
                    <span @click="reset">恢复默认排序</span>
                </p>
            </div>
            <div class="footer center">
                <button class="center" @click.prevent="submit">确定</button>
                <button  class="center" @click.prevent="close">取消</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "dragModal",
        data() {
          return {
              showActive: false,
              list: [],
              hasMoveObject: null,
              cellTop: 0,
              offset: 0,
              boxHeight: 300,
              oldIndex: 0,
              callback: null
          }
        },
        methods: {
            start(evt, _index) {
                if(this.hasMoveObject) return;
                this.hasMoveObject = {...this.list[_index]};
                this.$set(this.list, _index, {});
                this.oldIndex = _index;
                this.offset = evt.offsetY;
                this.drag(evt);

            },
            move(evt) {
                if(!this.hasMoveObject) return;
                this.drag(evt);
            },
            out(evt) {
                this.drag(evt);
                let newIndex = this.group();
                this.$set(this.list, newIndex, this.hasMoveObject);
                this.hasMoveObject = null;
                this.offset = 0;
                this.cellTop = 0;
                this.oldIndex = 0;

            },

            drag(evt) {
                let { offsetTop = 0 } = this.$refs.dragParent || {};
                let cellTop = evt.pageY - offsetTop - this.offset;
                if(cellTop < -25 || cellTop > this.boxHeight - 25) return null;
                this.cellTop = cellTop;
                let newIndex = this.group();
                this.$set(this.list, this.oldIndex, this.list[newIndex]);
                this.$set(this.list, newIndex, {});
                this.oldIndex = newIndex;
            },
            reset() {
              let list = [...this.list];
              list = list.sort((a, b) => a.id - b.id );
              this.list = [...list];
            },
            submit() {
              this.callback && this.callback(this.list);
              this.close();
            },
            group() {
                let h = this.boxHeight;
                let len = this.list.length;
                let newIndex = Math.round(this.cellTop / (h / len));
                return newIndex < 0 ? 0 : newIndex > (len - 1)  ? (len - 1) : newIndex;
            },
            show(list = [], callback) {
                this.showActive = true;

                this.callback = callback;
                this.list = [...list];
            },
            close() {
                this.showActive = false;
            }
        },
        computed: {
            dragParent() {
                return this.$refs.dragParent || {}
            }
        }
    }
</script>

<style scoped>
    #drag {
        width: 100%;
        height: 100%;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 666;
        display: none;
        justify-content: center;
        align-items: center;
    }

    .show-active {
        display: flex !important;
    }

    .box {
        width: 390px;
        height: 540px;
        background-color: #FAFAFA;
        border: 1px solid #e6e6e6;
        box-shadow: 0 0 5px 0 rgba(0,0,0, .5);
        display: flex;
        flex-direction: column;
    }

    .title {
        width: 100%;
        height: 50px;
        border-bottom: 1px solid #e6e6e6;
        font-size: 15px;
        color: #666;
        font-weight: 700;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;

    }

    .title span {
        margin-left: 20px;
    }

    .title .icon {
        cursor: pointer;
        margin-right:15px;
    }

    .content {
        width: 100%;
        display: flex;
        flex-direction: column;
        flex: 1;
        justify-content: center;

    }

    .footer {
        width: 100%;
        height: 60px;
        border-top: 1px solid #e6e6e6;
        background-color: #F5F5F7;
    }

    .footer button {
        width: 80px;
        height: 30px;
        color: #fff;
        border-radius: 5px;
        background-color: #0C73C2;
        font-size: 13px;
        cursor: pointer;
    }

    .footer button:hover {
        background-color: #1167A8;
    }

    .footer button:last-child {
        background-color: #fff;
        color: #333;
        margin-left: 20px;
        border: 1px solid #e6e6e6;
    }

    .footer button:last-child:hover {
        background-color: #F5F5F7;

    }

    .desc {
        width: 80%;
        padding: 20px 10%;
        font-size: 12px;
        color: #888;
        display: inline-flex;
        align-items: center;
    }

    .desc span {
        margin-left: 8px;
    }


    .reset {
        width: 100%;
        padding:20px 0;
        text-align: center;
        font-size: 13px;
        color: #888;
    }

    .reset span {
        text-decoration: underline;
        cursor: pointer;
    }


    .drag-content {
        width: 75%;
        height: 300px;
        padding: 0 12.5%;
        position: relative;
    }

    .cell {
        width: 100%;
        height: 50px;
        border-bottom: 1px solid #e6e6e6;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: move;
        background-color: #FAFAFA;
    }

    .cell span {
        font-size: 16px;
        color: #666;
    }

    .cell-drag {
        width: 100%;
        padding: 0 12.5%;
        margin: 0 auto;
        position: absolute;
        left: 0;
        z-index: 10;
        box-shadow: 0 0 5px 0 rgba(0,0,0, .5);
    }
</style>