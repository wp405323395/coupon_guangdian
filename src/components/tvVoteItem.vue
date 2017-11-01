<template lang="html">
  <section class="item" @click="goinDetail(tvjiemu,index)">
    <div class="title">
      <span class="lable_topic">#话题#<span class="topic_title">{{tvjiemu.topicTitle}}</span></span>
      <img class="go_right" src="../../static/img/go_right.png" alt="">
    </div>
    <div class="vote_num">
      <span>当前参与人数: {{tvjiemu.pollTotal}}人</span>
    </div>
    <div class="pics">
      <section v-for="(item, index) in tvjiemu.votObjectList">
        <div class="vote_content">
          <div class="mengceng"/>
          <img class="queen" src="../../static/img/queen.png" alt="">
          <span class="percent_text" v-if="isShowProgress">{{item.percent*100}}%</span>
          <input class="checkbox_img" @click="checkBoxClick(index,tvjiemu)" v-model="item.choose" v-if="isShowCheckbox" type="checkbox" name="" value="">
          <div class="progress_percent_background" v-if="isShowProgress"/>
          <div class="progress_percent" :style="'width: '+item.percent*100+'%;'" v-if="isShowProgress"/>
        </div>
        <img class="tv_solue" :src="item.imgurl" alt="">
        <span class="text_detail">{{item.context}}</span>
      </section>
    </div>
    <button @click='voteItem(tvjiemu)' type="button" v-if="isShowCheckbox" class="submit" name="button">提 交</button>
  </section>
</template>

<script>
export default {
  data () {
    return {

    }
  },

  props: ['tvjiemu','isShowProgress','index','isShowCheckbox'],
  methods:{
    goinDetail(item,index) {
      this.$emit('goinDetail',[item, index]);
    },
    voteItem(tvjiemu) {
      this.$emit('voteItem', tvjiemu);
    },
    checkBoxClick(index, tvjiemu){
      for (var i = 0; i < tvjiemu.votObjectList.length; i++) {
        if(i == index) {
          tvjiemu.votObjectList[i].choose = true;
        } else {
          tvjiemu.votObjectList[i].choose = false;
        }
      }
    }
  }
}
</script>

<style lang="scss"  scoped>
$margin-left:.20rem;
.item{
  margin-left: .15rem;
  margin-right: .15rem;
  background: white;
  margin-top: .2rem;
  border-radius: .08rem;
  box-shadow: .0rem .050rem .14rem .03rem #928585;
}
.title{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: .3rem;
  padding-left: $margin-left;
  padding-right: .30rem;
  align-items: center;
}
.go_right{
  width: .13rem;
  height: .20rem;
}
.lable_topic{
  color: #4436d0;
  font-size: .32rem;
  font-weight: 500;
  .topic_title{
    color: black;
    font-weight: 400;
    background-color: #edeaf2;
  }
}
 .vote_num{
   span {
     color: #999999;
     font-size: .18rem;
   }
   padding-bottom: .30rem;
   padding-left: $margin-left;
   padding-top: .1rem;
 }
 .pics{
   display: flex;
   padding-left: $margin-left;
   padding-right: $margin-left;
   padding-bottom: .4rem;
   section{
     margin-right: .1rem;
     .tv_solue{
       width: 2.20rem;
       height: 1.40rem;
     }
     .text_detail{
       font-size: .18rem;
       color: black;
      display: block;
       margin-top: .1rem;
     }
     .mengceng{
       width: 2.20rem;
       height: 1.40rem;
       background-color: black;
       opacity: .2;
     }
     .vote_content{
       position: relative;
       width: 100%;
       height: 1px;
       .queen{
         left: .1rem;
         top: .1rem;
         position: absolute;
         width: .2rem;
         height: .2rem;
       }
       .percent_text{
         position: absolute;
         display: block;
         top: .55rem;
         left: 0;
         color: white;
         width: 100%;
         text-align: center;
         font-size: .23rem;
       }
       .progress_percent_background{
         width: 100%;
         height: .2rem;
         background-color: black;
         position: absolute;
         top: 1.2rem;
         left: 0;
         opacity: .4;
       }
       .progress_percent{
         width: 0;
         height: .2rem;
         background-color: #ec3333;
         position: absolute;
         top: 1.21rem;
         left: 0;
        border-top-right-radius: .2rem;
        border-bottom-right-radius: .2rem;
       }
       .checkbox_img{
         font-size:1em;
         visibility: hidden;
         position: absolute;
         top: .9rem;
         right: .2rem;
       }
       .checkbox_img::before{
            display: inline-block;
            position: absolute;
            content:' ';
            visibility: visible;
            height: .5rem;
            width: .5rem;
            display: block;
            background: url("../../static/img/unchecked.png") no-repeat;
            background-size: .5rem .5rem;
       }
       .checkbox_img:checked::before {
            display: inline-block;
            position: absolute;
            content:' ';
            visibility: visible;
            height: .5rem;
            width: .5rem;
            display: block;
            background: url("../../static/img/checked.png") no-repeat;
            background-size: .5rem .5rem;
       }
     }
   }

 }
 .submit{
   width: 6.8rem;
   height: .64rem;
   background-color: #4436d0;
   margin-left: $margin-left;
   margin-right: $margin-left;
   color: white;
   font-size: .32rem;

   margin-bottom: .3rem;
 }
 .submit:active {
   background-color: #33289a;
   color: #d4d4d4;
 }

</style>
