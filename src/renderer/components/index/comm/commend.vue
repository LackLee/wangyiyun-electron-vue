<template>
  <div id="commend">
      <div class="c-title">
          <div class="c-text">
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <span>140</span>
          </div>
          <div class="status center">
            <div class="s-lf">
               <i></i>
               <i></i>
               <i></i>
            </div>
            <div class="s-rt">
              <span>评论</span>
            </div>
          </div>
      </div>

      <div class="c-list">
         <p>精彩评论</p>
      </div>
  </div>
</template>
<script>
export default {
  name: '',
  data() {
    return {

    }
  }
}
</script>
<style scoped>
   #commend {
     width: 100%;
     height: auto;
     border-top: 1px solid #e1e1e2;
     padding-top: 20px;
   }

   .c-title {
     width:100%;
     height: 140px;
     background: #f0f0f2;
     border: 1px solid transparent;
     display: flex;
     flex-direction: column;
     box-sizing: border-box;

   } 

   .c-text {
     width: 95%;
     height: 50px;
     padding: 5px 1% 20px;
     margin: 10px 1.5%;
     background-color: #fff; 
     position: relative;
     border: 1px solid #e1e1e2;
   }

   .c-text textarea {
     width: 100%;
     height: 100%;
     resize: none;
     outline: none;
     border: none;
     color: #666;
     line-height: 18px;
     padding: 0;
   }

   .c-text span {
     font-size: 12px;
     color: #666;
     position: absolute;
     bottom: 0px;
     right: 10px;
     z-index: 10;
   }
   .status {
     width: 97%;
     margin: 0 auto;
     justify-content: space-between;
   }

   .s-lf {
     display: flex;
   }
   .s-lf i {
     display: inline-block;
     width: 20px;
     height: 20px;
     border-radius: 50%;
     background-color: rgba(0,0,0, .5);
     margin-right: 10px;
   }

   .s-rt span{
     display: inline-block;
     padding: 3px 8px;
     font-size: 13px;
     color: #333;
     border: 1px solid #e1e1e2;
     border-radius: 5px;
     background-color: #fff;
     cursor: pointer;
   }

   
</style>


