<template lang="html">
  <div id="tv_vots" class="background_col" >
    <tv-vote-item @goinDetail="goinDetail" :key="item.id" v-for="(item, index) in tvs" :index='index' :isShowProgress="false" :tvjiemu="item.tvjiemu"></tv-vote-item>
  </div>


</template>

<script>
import requestEngine from '../netApi/requestEngine'
import tvVoteItem from '../components/tvVoteItem'
import urls from '../config.js'
import login from '../netApi/login'
export default {
  name: 'index',
  data () {
    return {
      tvs:[
        {
          tvjiemu: {
            id:'1',
            topicTitle:'如懿传第一季',
            personCount:567,
            items:[
              {
                imgUrl:require('../../static/img/tv_dianshiju.png'),
                percent:0.05,
                isWin:true,
                textDetail:'义正言辞的吴伟文',
                isChecked: true
              },
              {
                imgUrl:require('../../static/img/tv_dianshiju.png'),
                percent:0.35,
                isWin:true,
                textDetail:'义正言辞的吴伟文',
                isChecked: true
              },
              {
                imgUrl:require('../../static/img/tv_dianshiju.png'),
                percent:0.85,
                isWin:true,
                textDetail:'义正言辞的吴伟文',
                isChecked: true
              }
            ]
          }
        },
        {
          tvjiemu: {
            id:'1',
            topicTitle:'如懿传第一季',
            personCount:567,
            items:[
              {
                imgUrl:require('../../static/img/tv_dianshiju.png'),
                percent:0.05,
                isWin:true,
                textDetail:'义正言辞的吴伟文',
                isChecked: true
              },
              {
                imgUrl:require('../../static/img/tv_dianshiju.png'),
                percent:0.35,
                isWin:true,
                textDetail:'义正言辞的吴伟文',
                isChecked: true
              },
              {
                imgUrl:require('../../static/img/tv_dianshiju.png'),
                percent:0.85,
                isWin:true,
                textDetail:'义正言辞的吴伟文',
                isChecked: true
              }
            ]
          }
        },
        {
          tvjiemu: {
            id:'1',
            topicTitle:'如懿传第一季',
            personCount:567,
            items:[
              {
                imgUrl:require('../../static/img/tv_dianshiju.png'),
                percent:0.05,
                isWin:true,
                textDetail:'义正言辞的吴伟文',
                isChecked: true
              },
              {
                imgUrl:require('../../static/img/tv_dianshiju.png'),
                percent:0.35,
                isWin:true,
                textDetail:'义正言辞的吴伟文',
                isChecked: true
              },
              {
                imgUrl:require('../../static/img/tv_dianshiju.png'),
                percent:0.85,
                isWin:true,
                textDetail:'义正言辞的吴伟文',
                isChecked: true
              }
            ]
          }
        },
        {
          tvjiemu: {
            id:'1',
            topicTitle:'如懿传第一季',
            personCount:567,
            items:[
              {
                imgUrl:require('../../static/img/tv_dianshiju.png'),
                percent:0.05,
                isWin:true,
                textDetail:'义正言辞的吴伟文',
                isChecked: true
              },
              {
                imgUrl:require('../../static/img/tv_dianshiju.png'),
                percent:0.35,
                isWin:true,
                textDetail:'义正言辞的吴伟文',
                isChecked: true
              },
              {
                imgUrl:require('../../static/img/tv_dianshiju.png'),
                percent:0.85,
                isWin:true,
                textDetail:'义正言辞的吴伟文',
                isChecked: true
              }
            ]
          }
        },
      ]
    }
  },
  components: {
    tvVoteItem
  },
  methods: {
    goinDetail(item) {
      this.$router.push({ path: '/tvProgram' , params: { id: item[0].id}});
      document.getElementById('tv_vots').children[item[1]].style.setProperty('background-color','#999999');
      console.log(item[0]);
      console.log(item[1]);
    }
  },
  mounted: function() {
    document.title = this.$route.name;
    login.login();


  }
}
</script>

<style lang="css">
.background_col{
  background-color: #edeaf2;
}
.background_col:last-child{
  margin-bottom: .2rem;
}
</style>
