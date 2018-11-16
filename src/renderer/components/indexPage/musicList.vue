<template>
    <div id="ml">
        <div class="m-title">
            <div class="title-image"></div>
            <div class="title-container">
                <div class="title center" >
                    <div class="lf center" >
                        <span class="tag">精品</span>
                        <p>{{ $route.query.musicListName }}</p>
                    </div>
                    <div class="rt center">
                        <div class="music-num">
                            <p>歌曲数</p>
                            <p>24</p>
                        </div>
                        <div class="player-num">
                            <p>播放数</p>
                            <p>500</p>
                        </div>
                    </div>
                </div>

                <div class="author center">
                    <div class="avatar"></div>
                    <p class="nickname">lack.</p>
                    <p class="date">2018-08-04创建</p>
                </div>

                <div class="btn center">
                    <div class="t-btn center">
                        <div class="btn-lf center">
                            <i></i>
                            <span>播放全部</span>
                        </div>
                        <div class="btn-rt"> + </div>
                    </div>

                    <div class="d-btn">
                        <i></i>
                        <span>收藏（165081）</span>
                    </div>

                    <div class="d-btn">
                        <i></i>
                        <span>分享（165081）</span>
                    </div>

                    <div class="d-btn">
                        <i></i>
                        <span>下载全部</span>
                    </div>

                </div>

                <div class="title-nav">
                    <span>标签：</span>
                    <span class="navs">标签1</span>
                    /
                    <span class="navs">标签1</span>
                    /
                    <span class="navs">标签1</span>
                </div>
                <p class="desc">
                    <span>简介：</span>
                    恭喜IG！！！！！！！！
                    将英雄联盟官方的音乐全部招列在这里，希望让更多人知道拳头公司故事、人物、游戏和音乐的完美融合。
                    封面作者Linger FTC
                    大家也可以看下另外一个女声歌单噢！
                </p>
            </div>
        </div>
        <div class="m-container">
            <div class="nav-bar">
                <div>
                    <span v-for="(item, index) in navList" 
                          :key="index" 
                          :class="{'nav-bar-active': step === index}"
                          @click="step = index"
                          >
                          {{item}}
                          </span>
                    
                </div>
                <div class="search">
                    <input type="text" placeholder="搜索歌单音乐">
                    <i></i>
                </div>
            </div>
            <table class="tb">
                <tHead>
                    <tr>
                      <td></td>
                      <td>操作</td>
                      <td>音乐标题</td>
                      <td>歌手</td>
                      <td>专辑</td>
                      <td>时长</td>
                    </tr>
                </tHead>
                <tbody>
                    <tr v-for="(item, index) in len" :key="index">
                        <td>{{ (index + 1) < 10 ? `0${index + 1}` : (index + 1) }}</td>
                        <td>
                            <i></i>
                            <i></i>
                        </td>
                        <td>
                            <p>POP/STARTS(英雄联盟2018全球总决赛主题曲)</p>
                        </td>
                      <td>lack..</td>
                      <td>那么大鸡翅</td>
                      <td>05:00</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
    export default {
        name: '',
        data() {
            return {
                len: 100,
                step: 0,
                navList: ['歌曲列表', '评论（0）', '收藏者']
            }
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
  #ml {
      width: 100%;
      height: 100%;
  }
    .m-title {
        display: flex;
        margin-top: 30px;
    }

    .title-image {
        width: 200px;
        height: 200px;
        background-color: rgba(0,0,0, .5);
    }

    .title-container {
        flex: 1;
        padding-left: 30px;
    }

    .title {
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 10px;
    }

    .lf {
        flex: 1;
        justify-content: flex-start;
        align-items: flex-start;
    }

     .lf span {
         white-space: nowrap;
        padding: 1px 5px;
         border: 1px solid #E03F40;
         border-radius: 3px;
         color: #E03F40;
         font-size: 12px;
         margin-right: 5px;
         vertical-align: top;
     }

  .lf p{
      font-size: 24px;
      color: #333;
      font-weight: 700;
      line-height: 1;
      margin-right: 10px;

  }

    .rt {
        text-align: right;
        align-items: flex-start;
        font-size: 13px;
        color: #888;
    }

    .rt > div  {
       line-height: 17px;
    }

  .rt  .music-num {
      border-right: 1px solid #e6e6e8;
      margin-right: 10px;
      padding-right: 10px;
  }

  .rt > div p:last-child {
      font-weight: bold;
  }

    .author {
        width: 100%;
        height: auto;
        justify-content: flex-start;
        margin-bottom: 10px;
    }

  .author .avatar {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background-color: rgba(0,0,0, .25);
      margin-right: 10px;
  }

  .author p {
      font-size: 13px;
      color: #888;
      margin-right: 15px;
  }

  .author .nickname {
      font-size: 15px;
      color: #333;
  }

    .btn {
        width: 100%;
        height: auto;
        justify-content: flex-start;
        margin-bottom:20px;
    }

  .btn > div {
      margin-right: 15px;
      font-size: 12px;
      cursor: pointer;
  }

    .btn .t-btn {
        background-color: #C62F2F;
        color: #fff;
        border-radius: 4px;
        overflow: hidden;
    }

  .btn .t-btn .btn-lf > i {
      display: inline-block;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background-color: rgba(255,255,255, .5);
      margin-right: 5px;
  }

    .btn .t-btn .btn-lf {
        padding: 5px 7px 5px 10px;
        background-color: transparent;
    }

  .btn .t-btn .btn-rt {
      padding: 5px 10px 5px 7px;
      background-color: transparent;
  }

    .btn .t-btn .btn-lf:hover,
    .btn .t-btn .btn-rt:hover
    {
        background-color: #B12323;
    }

    .btn .d-btn {
        border:1px solid #e6e6e8;
        padding: 5px 10px;
        display: flex;
        border-radius: 4px;
        overflow: hidden;
        background-color: #fff;
    }

  .btn .d-btn:hover {
      background-color: #f5f5f7;

  }

  .btn .d-btn > i {
      display: inline-block;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background-color: rgba(0,0,0, .5);
      margin-right: 5px;
  }
  .title-nav {
      width: 100%;
      font-size: 12px;
      color: #333;
      margin-bottom: 10px;
  }

  .title-nav .navs {
      color: #0C73C2;
  }

    .desc {
        font-size: 12px;
        color: #666;
        line-height: 20px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
    }

    .desc span {
        color: #333;
    }

    .m-container {
        width: 100%;
        height: auto;
        margin-top: 60px;
    }

  .m-container > .nav-bar {
      width: 100%;
      display: flex;
      justify-content: space-between;
  }

  .m-container > .nav-bar > div {
      position: relative;
      margin: 0 30px;
  }

  .m-container > .nav-bar > div > span {
      font-size: 15px;
      color: #333;
      display: inline-block;
      border-bottom: 3px solid transparent;
      margin-right: 35px;
      padding-bottom: 5px;
      cursor: pointer;
  }

  .m-container > .nav-bar > div > .nav-bar-active {
      border-color: #C62F2F;
      color: #C62F2F;
  }

    .search {
        width: 174px;
        height: 24px;
    }

  .search input {
      width: 174px;
      height: 100%;
      border-radius: 24px;
      border: 1px solid #e6e6e8;
      box-sizing: border-box;
      padding: 0 20px 0 8px;
      color: #333;
      background-color: #fff;
      position: relative;
      bottom: 5px;
  }

  .search i {
      display: inline-block;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: rgba(0,0,0, .2);
      position: absolute;
      top: 50%;
      margin-top: -11px;
      right:5px;
      cursor: pointer;
  }

  .tb {
      width: 100%;
      height: auto;
      border-collapse:collapse;
      font-size: 13px;
      color: #333;
  }

  .tb tHead td{
      border: 1px solid #e6e6e6;
      box-sizing: border-box;
  }

  .tb tHead td:first-child {
      border-left: none;
  }

  .tb tHead td:last-child {
      border-right: none;
  }

  .tb tr {
      height: 30px;
  }

  .tb td {
      
      padding: 0 10px;
  }

  .tb tBody tr:nth-child(2n) {
      background-color: #F5F5F7;
  }

  .tb tBody tr:hover {
      background-color: #EBECED;
  }

  .tb tr td:nth-child(2) {
      width: 59px;
      text-align: center;
  }

  .tb tr td:nth-child(2) i {
      display: inline-block;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background-color: rgba(0,0,0, .5);
      margin-right: 5px;
  }

  .tb tr td:nth-child(3) {
     
  }

  .tb tr td:nth-child(3) p {
      width: 245px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
  }

  .tb tr td:nth-child(4) {
      width: 186px;
  }

  .tb tr td:nth-child(5) {
      width: 172px;
  }

 

</style>