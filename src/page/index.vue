<template lang="html">
  <div id="tv_vots" class="background_col" >
    <tv-vote-item @goinDetail="goinDetail" :key="item.id" v-for="(item, index) in subjectBoList" :isShowCheckbox='false' :index='index' :isShowProgress="false" :tvjiemu="item.subjectBoList[0]"></tv-vote-item>
  </div>
</template>

<script>
import RequestEngine from '../netApi/RequestEngine'
import tvVoteItem from '../components/tvVoteItem'
import urls from '../config.js'
import router from '../router'
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
      let params = { relaId: item[0].relationId, type: item[0].type, mvpId:item[0].relationId, tvId:item[0].tvId};
      router.push({ name: 'tvProgram', params: params});
      console.log(router);
      // router.push({ name: 'voteDetail' , params: { id: id ,title: title}})
      document.getElementById('tv_vots').children[item[1]].style.setProperty('background-color','#335533');
    }
  },
  mounted: function() {
    document.title = this.$route.name;
    let that = this;
    new RequestEngine().request(urls.queTvThemeList, {tvId: 1},
      successValue => {
        that.subjectBoList = successValue;
      }, failValue => {

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
