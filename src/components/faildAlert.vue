<template>
   <div class="alet_container">
     <section class="tip_text_container">
           <p class="tip_text">{{alertText}}</p>
           <section class="bottom_btn">
             <div class="confrim" @click="sureTip">确认</div>
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
       top: 5rem;
       right: .6rem;
       width: 300px;
       font-size: .25rem;
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
         font-size: 20px;
         border-top:  1px solid #d4d4d4;

         .confrim{
             width: 100%;
             height: 100%;
             border-bottom-left-radius: 10px;
             border-bottom-right-radius: 10px;
             background-color: blue;
             color: white;
             font-size: .32rem;
             text-align: center;
             height: 50px;
             line-height: 50px;

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
           color: red;
           line-height: 30px;
           text-align: center;
           margin-top: 10px;
           margin-bottom: 40px;
           font-size: .3rem;

       }

   }

</style>
