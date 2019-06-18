<template>
    <div id="recommend" >
        <div class="nav">
            <swiper />
        </div>

        <div class="sign-list" v-for="(item, index) in menuList" :key="item.id">
            <div class="head center">
                <span>{{ item.title }}</span>
                <span>更多》 </span>
            </div>


            <sign-card :list="item.children" v-if="item.id === 1 || item.id === 5" :id="item.id"/>

            <mv-box :list="item.children" v-if="item.id === 2 || item.id === 4" :id="item.id"/>

            <new-list :list="item.children" v-if="item.id === 3"/>

            <look :list="item.children" v-if="item.id === 6"/>
        </div>

        <div class="footer">
            <p>现在可以根据个人喜好，自由调整首页栏目顺序啦~</p>
            <button @click.prevent="openDragModal">调整栏目顺序</button>
        </div>

    </div>
</template>
<script>
    import swiper from '../../comm/swiper'
    import signCard from './signCard'
    import mvBox from './MV'
    import newList from './newList'
    import look from './look'
    export default {
        name: '',
        data() {
            return {
                path: '',
                signList: [],
                menuList: [
                    {
                        id: 1,
                        title: '推荐歌单',
                        children: [],
                    },
                    {
                        id: 2,
                        title: '独家放送',
                        children: [],
                    },
                    {
                        id: 3,
                        title: '最新音乐',
                        children: [],
                    },
                    {
                        id: 4,
                        title: '推荐MV',
                        children: [],
                    },
                    {
                        id: 5,
                        title: '主播电台',
                        children: [0, 1, 2, 3, 4],
                    },
                    {
                        id: 6,
                        title: 'LOOK直播',
                        children: [],
                    }
                ]
            }
        },
        methods: {
          openDragModal() {
              let that = this;
              this.$modal.dragModal.show(that.menuList, (list = that.menuList) => {
                  that.menuList = [...list];
              })
          }
        },
        components: {
            swiper,
            signCard,
            mvBox,
            newList,
            look
        }
    }
</script>
<style scoped>
    #recommend {
        width: 100%;
        height: 100%;
    }

    .nav {
        width: 100%;
        height: 200px;
    }


    .sign-list {
        margin-bottom: 50px;
    }

    .sign-list .head {
        justify-content: space-between;
        border-bottom: 1px solid #e6e6e6;
        padding-bottom: 5px;
        margin-bottom: 10px;
        font-size: 12px;
        color: #888;
    }

    .sign-list .head span:first-child {
        font-size: 16px;
        color: #333;
    }

    .sign-list .head span:last-child {
        cursor: pointer;
    }

    .footer {
        width: 100%;
        min-height: 100px;
        border-top: 1px solid #e6e6e6;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .footer > p {
        font-size: 13px;
        color: #888;
    }

    .footer button {
        width: 120px;
        height: 28px;
        border: 1px solid rgba(198,47,47, .6);
        border-radius: 5px;
        color: #C62F2F;
        margin-top: 15px;
        cursor: pointer;
    }

    .footer button:hover {
        border: 1px solid rgba(198,47,47, 1);

    }
</style>