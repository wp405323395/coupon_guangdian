<template lang="html">
  <div id="tv_vots" class="background_col" >
    <tv-vote-item @goinDetail="goinDetail" :key="item.id" v-for="(item, index) in subjectBoList" :showgoright='true' :isShowCheckbox='false' :index='index' :isShowProgress="false" :tvjiemu="item.subjectBoList[0]"></tv-vote-item>
  </div>
</template>

<script>
import RequestEngine from 'netenginwang'
import tvVoteItem from '../components/tvVoteItem'
import urls from '../config.js'
import router from '../router'
export default {
  name: 'index',
  data () {
    return {
      subjectBoList:[],
      tvId:0
    }
  },
  components: {
    tvVoteItem
  },
  methods: {
    goinDetail(item) {
      let params = { relaId: item[0].relationId, type: item[0].type, mvpId:item[0].relationId, tvId:item[0].tvId};
      router.push({ name: 'tvProgram', params: params});

    }
  },
  mounted: function() {
    document.title = this.$route.meta.title;
    this.tvId = this.$route.params.tvId;
    let that = this;
    new RequestEngine().request(urls.queTvThemeList, {tvId: this.tvId},
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
