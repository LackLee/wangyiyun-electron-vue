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
</style>
