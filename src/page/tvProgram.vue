<style lang="scss" scoped>

.content {
    margin-bottom: .88rem;
    .note_num {
        margin-left: .3rem;
        font-size: .2rem;
        color: #999999;
        display: inline-block;
        line-height: .5rem;
        text-align: justify;
    }
}

.input_area {
    width: 100%;
    height: .88rem;
    background-color: white;
    position: fixed;
    z-index: 1000;
    bottom: 0;
    padding-left: .3rem;
    padding-right: .3rem;
    padding-top: .1rem;
    padding-bottom: .1rem;
    display: flex;
    flex-direction: row;
    input {
        background-color: #edeaf2;
        flex-grow: 1;
        height: 100%;
        text-indent: .15rem;
    }
    button {
        margin-left: .2rem;
        width: 1.2rem;
        background-color: #4436d0;
        color: white;
    }
    button:active {
        background-color: #33289a;
        color: #d4d4d4;
    }
}

</style>

<template lang="html">

<div>
<tv-vote-item @goinDetail="goinDetail" :key="item.id" v-for="(item, index) in subjectBoList" :isShowCheckbox='true' :index='index' :isShowProgress="true" :tvjiemu="item"></tv-vote-item>
    <section class="content">
        <span class="note_num">热门评论 ({{retData.hotCommentCount}})</span>
        <common @zanClick="zanClick" :commentList="retData.hotList">
        </common>
        <span class="note_num">评论 ({{retData.commentCount}})</span>
        <common @zanClick="zanClick" :commentList="retData.commentList">
        </common>

    </section>
    <section class="input_area">
        <input placeholder="来了就写点什么吧" type="text" name="" value="">
        <button type="button" name="button">发 表</button>
    </section>
</div>

</template>

<script>
import RequestEngine from '../netApi/RequestEngine'
import tvVoteItem from '../components/tvVoteItem'
import urls from '../config.js'
import common from '@/components/common/common'
export default {
    data() {
            return {
                "retData": {},
                subjectBoList:[],
                params:{}
            }
        },
        components: {
            common,
            tvVoteItem
        },
        mounted : function(){
          //params: { relaId: item[0].relationId, type: item[0].type}}
          this.params = this.$route.params;
          document.title = this.$route.name;
          let that = this;
          new RequestEngine().request(urls.queryVotTvList, {tvId: this.params.tvId,mvpId:this.params.mvpId},
            successValue => {
              that.subjectBoList = successValue.subjectBoList;
            }, failValue => {
            }, completeValue => {});
          new RequestEngine().request(urls.listComment, {relaId: this.params.mvpId,type:this.params.type},
              successValue => {
                that.retData = successValue;
              }, failValue => {
              }, completeValue => {});

        },
        methods: {
          //废弃申明事件
          goinDetail(item) {
          },
          zanClick(item) {
            console.log('变态的值---',item);

            new RequestEngine().request(urls.praiseOrTread, {relaId: item.id,type:'1'},
                successValue => {
                  if(item.isPraise=='1') {
                    item.praise--;
                  } else {
                    item.praise++;
                  }
                  item.isPraise = (item.isPraise=='1'?'0':'1');

                }, failValue => {
                }, completeValue => {});
          }
        }
}

</script>
