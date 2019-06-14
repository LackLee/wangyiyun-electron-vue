<template>
  <div id="app">
    <global-nav></global-nav>

    <router-view></router-view>

    <music-prohress></music-prohress>
  </div>
</template>

<script>
  import globalNav from './components/globalNav'
  import musicProhress from './components/statusBar'
  export default {
    name: 'app',
    components: { globalNav, musicProhress }
  }
</script>

<style>
  /* CSS */
  html, body {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    user-select: none;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

  a, i, s, b, p, li, ul, ol, table, tr, td, tHead, tBody {
    text-decoration: none;
    font-weight: normal;
    margin: 0;
    padding: 0;
  }

  button, input {
    border: none;
    outline: none;
    background-color: transparent;
    color: #fff;
  }

  input {
    /*user-select: text !important;*/
  }

  #app {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .background-image-cover {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ::-webkit-scrollbar {
    display: none !important;
  }

  /*.fa-icon {*/
  /*  width: auto;*/
  /*  height: 1em; !* 或任意其它字体大小相对值 *!*/

  /*  !* 要在 Safari 中正常工作，需要再引入如下两行代码 *!*/
  /*  max-width: 100%;*/
  /*  max-height: 100%;*/
  /*}*/

  .swiper-pagination-bullets .swiper-pagination-bullet {
    width: 18px;
    height: 2px;
    border-radius: 0;
  }

  .swiper-pagination-bullet-active {
    background: #E83C3C !important;
  }
</style>
