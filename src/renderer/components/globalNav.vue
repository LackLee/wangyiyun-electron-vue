<template>
  <div id="gn">
    <div class="nav-lf">
      <div class="logo">
        <img :src="icon" alt="">
        <span>网易云音乐</span>
      </div>

      <div class="router-btn">
        <button> < </button>
        <button> > </button>
      </div>

      <div class="seo">
        <input type="text" placeholder="搜索音乐，视频，歌词，电台">

        <s :style="`background-image:url(${icon})`" class="seo-icon"></s>


        <div class="seo-list">

        </div>
      </div>
    </div>

    <div class="nav-rt">
       <div class="account">
          <div class="avatar background-image-cover" :style="`background-image:url(${icon})`"></div>
          <p>lack.听听那冷雨</p>
          <i class="link"></i>
       </div>

       <div class="setting">
           <i class="background-image-cover">t</i>
           <i class="background-image-cover">m</i>
           <i class="background-image-cover">s</i>
       </div>

        <div class="bom">
            <i class="background-image-cover">x</i>
            <i class="background-image-cover">m</i>
            <i class="background-image-cover">f</i>
            <i class="background-image-cover">c</i>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'globalHead',
  data () {
    return {
      icon: require('@/assets/logo.png')
    }
  }
}
</script>
<style scoped>
  #gn {
    width: 100%;
    height: 50px;
    background-color: #C62F2F;
    -webkit-app-region: drag;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    user-select: none;
  }

  #gn .nav-lf {
    height:100%;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
  }

  #gn .nav-rt {
    height:100%;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
  }

  .logo {
    height: 100%;
    display:flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding-left: 15px;
  }
  .logo img {
    width: 26px;
    height: 26px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .logo span {
    font-size: 20px;
    font-weight: 600;
    color: #fff;
  }

  .router-btn {
    width: 50px;
    height: 20px;
    border: 1px solid rgba(0,0,0, .3);
    border-radius: 3px;
    margin-left: 50px;
    display:flex;
    justify-content: space-around;
    -webkit-app-region: no-drag;
  }

  .router-btn button {
    width: 50%;
    height: 100%;
    box-sizing: border-box;
    cursor: pointer;

  }

  .router-btn button:first-child {
    border-right:1px solid rgba(0,0,0, .3);
  }

  .seo {
    margin-left: 20px;
    width: 200px;
    height:20px;
    border-radius: 20px;
    background-color: rgba(0,0,0, .1);
    position: relative;
  }

  .seo input {
    width: 170px;
    padding: 0 10px;
    -webkit-app-region: no-drag;
    font-size: 12px;
  }

  .seo .seo-icon {
    position: absolute;
    right: 0;
    top: 0;
    display: inline-block;
    width: 20px;
    height: 20px;
    background-size: 12px 12px;
    background-position: center;
    background-repeat: no-repeat;
    z-index: 10;
  }

  .seo input::-webkit-input-placeholder {
    color: rgba(255,255,255,.5);
  }

  .account {
    width: 150px;
    display: flex;
    align-items: center;
    opacity: .7;
      -webkit-app-region: no-drag;
  }

  .account:hover {
      opacity: 1;
  }

  .account .avatar {
    width: 22px;
    height: 22px;
      margin-right: 5px;
  }

  .account p {
      width: 80px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      font-size:13px;
      color: rgba(255,255,255,1);
      cursor: pointer;
  }

  .account i {
      display: inline-block;
      width: 0;
      height: 0;
      border: 5px solid transparent;
      border-top-color: #fff;
      position: relative;
      top: 2px;
      left: 5px;
  }

  .setting {
    width: 100px;
    height: 20px;
    border-right: 1px solid rgba(0,0,0, .3);
    display: flex;
    justify-content: space-between;
    -webkit-app-region: no-drag;
    padding-right: 20px;
  }
  .setting i, .bom i {
      width: 20px;
      height: 20px;
      background-color: #fff;
      opacity: .6;
      text-align: center;
      color: #000;
      cursor: pointer;
  }
  .setting i:hover, .bom i:hover {
      opacity: 1;
  }


  .bom {
      width: 100px;
      padding-left: 20px;
      display: flex;
      justify-content: space-between;
      -webkit-app-region: no-drag;
      padding-right: 20px;
  }

  .bom i {

  }

</style>

