<template lang="html">
  <div id="tv_vots" class="background_col" >
    <tv-vote-item @goinDetail="goinDetail" :key="item.id" v-for="(item, index) in tvs" :index='index' :isShowProgress="false" :tvjiemu="item.tvjiemu"></tv-vote-item>
  </div>


</template>

<script>
import requestEngine from '../netApi/requestEngine'
import tvVoteItem from '../components/tvVoteItem'
import urls from '../config.js'
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
    console.log(this.$route.name);
    // console.log("mount之后")
    let href = window.location.href;
    //let href = "https://www.maywidehb.com/webapp/index.html?code=081UhLaK1Ylsz70aUt9K1yvEaK1UhLas&state=123";
    let param = href.split("?")[1];
    let wxcodemap = param.split("&")[0];
    let wxcode = wxcodemap.split("=")[1];
    new Promise((resolve,reject) => {
      new requestEngine().request(urls.loginUrl,{loginCode: wxcode},
        successValue=>{
          resolve(successValue);
          console.log('success-',successValue);
        }, failValue=>{
          reject(failValue);
          console.log('faild-',failValue);
        }, completeValue=>{
        })
    }).then(value=>{
      new requestEngine().request('https://api.weixin.qq.com/sns/userinfo?access_token='+value.access_token+'&openid='+value.openid+'&lang=zh_CN',null,
        successValue=>{
          resolve(successValue);
          console.log('success-',successValue);
        }, failValue=>{
          reject(failValue);
          console.log('faild-',failValue);
        }, completeValue=>{
        })
    }).catch(err=>{

    });

    console.log(wxcode);

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
