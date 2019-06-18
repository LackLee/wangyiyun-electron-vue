<template>
  <div id="index">
      <slide-bar></slide-bar>
      <div class="container">
          <router-view />
      </div>
  </div>
</template>
<script>
import slideBar from './index/sildeBar'
export default {
  name: 'index',
  components: {
    slideBar,
  },
  created() {

  }
}
</script>
<style>
  #index {
    width: 100%;
    flex: 1;
    background-color: #fafafa;
    display: flex;
  }

  .container {
    /*flex: 1;*/
    width: 770px;
    height: 100%;
    margin: 0 auto;
    overflow-x: hidden;
    overflow-y: auto;

  }
</style>


