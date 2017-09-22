<template>
   <div class="alet_container">
     <section class="tip_text_container">
           <!-- <div class="tip_icon">
               <span></span>
               <span></span>
           </div> -->
           <p class="tip_text">{{alertText}}</p>
           <section class="bottom_btn">
             <div class="confrim" @click="sureTip">确认</div>
             <div class="cancle" @click="cancleTip">取消</div>
           </section>

       </section>
   </div>
</template>

<script>
   export default {
     data () {
       return {
         positionY: 0,
         timer: null
       }
     },

     mounted () {

     },
     props: ['alertText'],
     methods: {
       sureTip () {
         this.$emit('sureTip')
       },
       cancleTip () {
        this.$emit('cancleTip')
       }
     }
   }
</script>

<style lang="scss" scoped>
   @import '../style/mixin';
 @keyframes tipMove{
      0%   { transform: scale(1) }
      35%  { transform: scale(.8) }
      70%  { transform: scale(1.1) }
      100% { transform: scale(1) }
   }
   .alet_container{
     position: fixed;
     background:rgba(0, 0, 0, 0.5);
     top: 0;
     left: 0;
     right: 0;
     bottom: 0;
     z-index: 200;
   }
   .tip_text_container{
       position: absolute;
       top: 150px;
       right: 35%;
       width: 400px;
       font-size: 25px;
       animation: tipMove .4s ;
       background-color: rgba(255,255,255,1);
       border: 1px;
       padding-top: .6rem;
       display: flex;
       justify-content: center;
       align-items: center;
       flex-direction: column;
       border: 1px;
       border-radius: 10px;
       .bottom_btn{
         width: 100%;
         display: flex;
         padding-top: 20px;
         .cancle{
           width: 100%;
           background-color: blue;
           cursor: pointer;
           color: white;
           height: 100%;
           height: 70px;
           line-height: 70px;
           border-bottom-right-radius: 10px;
         }
         .confrim{
             background-color: #4cd964;
             width: 100%;
             height: 100%;
             border-bottom-left-radius: 10px;
             font-size: 25px;
             cursor: pointer;
             color: white;
             height: 70px;
             line-height: 70px;
         }
       }
       .tip_icon{
           width: 100px;
           height: 100px;
           border: 0.15rem solid #f8cb86;
           border-radius: 50%;
           display: flex;
           justify-content: center;
           align-items: center;
           flex-direction: column;
           span:nth-of-type(1){
               @include wh(.12rem, 1.5rem);
               background-color: #f8cb86;
           }
           span:nth-of-type(2){
               @include wh(.2rem, .2rem);
               border: 1px;
               border-radius: 50%;
               margin-top: .2rem;
               background-color: #f8cb86;
           }
       }
       .tip_text{
           @include sc(.7rem, #333);
           line-height: 50px;
           text-align: center;
           margin-top: 30px;
           font-size: 25px;
       }

   }

</style>
