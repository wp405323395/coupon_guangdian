<template lang="html">
  <div id="tv_vots" class="background_col" >
    index页面
    <tv-vote-item @goinDetail="goinDetail" :key="item.id" v-for="(item, index) in subjectBoList" :index='index' :isShowProgress="false" :tvjiemu="item"></tv-vote-item>
  </div>
</template>

<script>
import RequestEngine from '../netApi/RequestEngine'
import tvVoteItem from '../components/tvVoteItem'
import urls from '../config.js'

export default {
  name: 'index',
  data () {
    return {
      subjectBoList:[
        {

            id:'1',
            title:'如懿传第一季',
            pollTotal:567,
            votObjectList:[
              {
                imgurl:require('../../static/img/tv_dianshiju.png'),
                percent:0.05,
                isWin:true,
                context:'义正言辞的吴伟文',
                choose: true
              },
              {
                imgurl:require('../../static/img/tv_dianshiju.png'),
                percent:0.35,
                isWin:true,
                context:'义正言辞的吴伟文',
                choose: true
              },
              {
                imgurl:require('../../static/img/tv_dianshiju.png'),
                percent:0.85,
                isWin:true,
                context:'义正言辞的吴伟文',
                choose: true
              }
            ]

        },
        {
            id:'1',
            title:'如懿传第一季',
            pollTotal:567,
            votObjectList:[
              {
                imgurl:require('../../static/img/tv_dianshiju.png'),
                percent:0.05,
                isWin:true,
                context:'义正言辞的吴伟文',
                choose: true
              },
              {
                imgurl:require('../../static/img/tv_dianshiju.png'),
                percent:0.35,
                isWin:true,
                context:'义正言辞的吴伟文',
                choose: true
              },
              {
                imgurl:require('../../static/img/tv_dianshiju.png'),
                percent:0.85,
                isWin:true,
                context:'义正言辞的吴伟文',
                choose: true
              }
            ]

        },
        {

            id:'1',
            title:'如懿传第一季',
            pollTotal:567,
            votObjectList:[
              {
                imgurl:require('../../static/img/tv_dianshiju.png'),
                percent:0.05,
                isWin:true,
                context:'义正言辞的吴伟文',
                choose: true
              },
              {
                imgurl:require('../../static/img/tv_dianshiju.png'),
                percent:0.35,
                isWin:true,
                context:'义正言辞的吴伟文',
                choose: true
              },
              {
                imgurl:require('../../static/img/tv_dianshiju.png'),
                percent:0.85,
                isWin:true,
                context:'义正言辞的吴伟文',
                choose: true
              }
            ]

        },
        {

            id:'1',
            title:'如懿传第一季',
            pollTotal:567,
            votObjectList:[
              {
                imgurl:require('../../static/img/tv_dianshiju.png'),
                percent:0.05,
                isWin:true,
                context:'义正言辞的吴伟文',
                choose: true
              },
              {
                imgurl:require('../../static/img/tv_dianshiju.png'),
                percent:0.35,
                isWin:true,
                context:'义正言辞的吴伟文',
                choose: true
              },
              {
                imgurl:require('../../static/img/tv_dianshiju.png'),
                percent:0.85,
                isWin:true,
                context:'义正言辞的吴伟文',
                choose: true
              }
            ]

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

    }
  },
  mounted: function() {
    console.log('mounted');
    document.title = this.$route.name;
    let that = this;
    new RequestEngine().request(urls.queTvThemeList, {tvId: 1},
      successValue => {
        that.subjectBoList = successValue.subjectBoList;
        console.log(JSON.stringify(successValue));
      }, failValue => {
        console.log('faild');
      }, completeValue => {})
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
