<template>
    <div id="slide-bar">
        <div class="list" v-for="(item, index) in list" :key="index">
            <p class="title">
                <span>{{ item.title }}</span>
                <a v-if="item.type === 1">
                    <v-icon name="plus-circle" class="icon"/>
                    <v-icon name="angle-down" class="icon-s"/>
                </a>
            </p>
            <div class="box" v-for="(val, i) in item.children"
                 :key="i"
                 :class="{
                  'box-active': $route.path.indexOf(val.path) !== -1
                                && ( item.type === 1 ? $route.query.musicListName === val.name : true)
                 }"
                 @click="goTo(val, item.type)"
            >
                <v-icon :name="val.icon" class="icon"  scale="1"/>
                <span>{{ val.name }}</span>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
      name: '',
      data () {
        return {
          step: 0,
          list: [
            {
              title: '推荐',
                type: 0,
              children: [
                { name: '发现音乐', path: '/findMusic', icon: 'music' },
                { name: '私人FM', path: '/myFm', icon: 'podcast' },
                { name: '视频', path: '/video', icon: 'video' },
                { name: '朋友', path: '/friend', icon: 'user-friends' },
              ]
            },
              {
                  title: '我的音乐',
                  type: 0,
                  children: [
                      { name: '本地音乐', path: '/localMusic', icon: 'headphones-alt'},
                      { name: '下载管理', path: '/downloadManager', icon: 'download' },
                      { name: '我的音乐盘', path: '/musicCloud', icon: 'cloud' },
                      { name: '我的收藏', path: '/collect', icon: 'user-plus' },
                  ]
              },
              {
                  title: '创建的歌单',
                  type: 1,
                  children: [
                      { name: '我喜欢的音乐', path: '/musicList', icon: 'heart' },
                      { name: '初来驾到', path: '/musicList', icon: 'bars' },

                  ]
              },
              {
                  title: '收藏的歌单',
                  type: 1,
                  children: [
                      { name: '复古青年洗澡时的欢乐', path: '/musicList', icon: 'bars' },
                  ]
              },
          ]
        }
      },
      computed: {

      },
      methods: {
          goTo({ path, name }, type) {
              this.$router.push({ path, query: type === 1 ? { musicListName: name } : {} })
          }
      },
      mounted () {

      },
      created () {

      }
    }
</script>
<style scoped>
    #slide-bar {
        width: 200px;
        height: 100%;
        background-color: #f5f5f7;
        user-select: none;
    }

    .list {
        width: 100%;
        font-size: 13px;
        margin-bottom: 20px;
    }

    .title {
        color: rgba(0,0,0, .5);
        margin: 7px 8px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        line-height: 0;
        height: 15px;
    }

    .title .icon {
        display: inline-block;
        width: 15px;
        height: 15px;
        margin-right: 5px;
        cursor: pointer;
    }

    .title .icon-s {
        display: inline-block;
        width: 15px;
        height: 15px;
        cursor: pointer;
    }

    .box {
        padding: 6px 0 6px 10% ;
        display: flex;
        align-items: center;
        cursor: pointer;
        opacity: .6;
        background-color: transparent;
        border-left: 3px solid transparent;
        box-sizing: border-box;
    }

    .box-active {
        border-color: #C62F2F;
        opacity: 1;
        background-color: #E6E7EA;
    }

    .box:hover {
        opacity: 1;
        /*background-color: #E6E7EA;*/
    }

    .box .icon {
        vertical-align: bottom;
        margin-right: 10px;
    }

    .box span {
        display: inline-block;
        width: 80%;
        white-space: normal;
        text-overflow: ellipsis;
        overflow: hidden;
    }
</style>