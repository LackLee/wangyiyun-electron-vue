import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: require('@/components/index').default,
      redirect: '/findMusic',
      children: [
          {
            path: '/findMusic',
            name: '发现音乐',
            component: require('@/components/index/findMusic').default,
            redirect: '/findMusic/recommend',
              children: [
                  {
                    path: '/findMusic/recommend',
                    name: '个性推荐',
                    component: require('@/components/index/findMusic/recommend').default
                  },
                  {
                      path: '/findMusic/songList',
                      name: '歌单',
                      component: require('@/components/index/findMusic/songList').default
                  },
                  {
                      path: '/findMusic/boradcastStation',
                      name: '电台',
                      component: require('@/components/index/findMusic/boradcast').default
                  },
                  {
                      path: '/findMusic/rankingList',
                      name: '排行榜',
                      component: require('@/components/index/findMusic/rankingList').default
                  },
                  {
                      path: '/findMusic/singer',
                      name: '歌手',
                      component: require('@/components/index/findMusic/singer').default
                  },
                  {
                      path: '/findMusic/newMusic',
                      name: '最新音乐',
                      component: require('@/components/index/findMusic/newMusic').default
                  }
            ]
          },
          {
              path: '/myFM',
              name: '私人FM',
              component: require('@/components/index/myFM').default
          },
          {
              path: '/video',
              name: '视频',
              component: require('@/components/index/video').default
          },
          {
              path: '/friend',
              name: '朋友',
              component: require('@/components/index/friend').default
          },
          {
              path: '/localMusic',
              name: '本地音乐',
              component: require('@/components/index/localMusic').default
          },
          {
              path: '/downloadManager',
              name: '下载管理',
              component: require('@/components/index/downloadManager').default
          },
          {
              path: '/musicCloud',
              name: '我的音乐云盘',
              component: require('@/components/index/musicCloud').default
          },
          {
              path: '/collect',
              name: '我的收藏',
              component: require('@/components/index/collect').default
          },
          {
              path: '/musicList',
              name: '音乐列表',
              component: require('@/components/index/musicList').default
          },
          {
              path: '/searchList',
              name: '搜索列表',
              component: require('@/components/index/searchList').default
          },
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
