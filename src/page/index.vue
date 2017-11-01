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
      subjectBoList:[]
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
        that.subjectBoList = successValue[0].subjectBoList;
        console.log(JSON.stringify(that.subjectBoList));
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
