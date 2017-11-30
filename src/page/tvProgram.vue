<style lang="scss" scoped>

.content {
    padding-bottom: .88rem;
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
        border-radius: 0;
        font-size: .28rem;
    }
    button {
        margin-left: .2rem;
        width: 1.8rem;
        background-color: #eb5426;
        color: white;
        font-size: .32rem;
    }
    button:active {
        background-color: #be411b;
        color: #d4d4d4;
    }
}

</style>

<template lang="html">

<div>
<tv-vote-item @voteItem='voteItem' :key="item.id" v-for="(item, index) in subjectBoList" :showgoright='false' :isShowCheckbox='item.userAnswer == null' :index='index' :isShowProgress="item.userAnswer != null" :tvjiemu="item"></tv-vote-item>
    <section class="content">
        <span class="note_num">热门评论 ({{retData.hotCommentCount}})</span>
        <common @zanClick="zanClick" :commentList="retData.hotList">
        </common>
        <span class="note_num">评论 ({{retData.commentCount}})</span>
        <common @zanClick="zanClick" :commentList="retData.commentList">
        </common>

    </section>
    <section class="input_area">
        <input placeholder="来了就写点什么吧" maxlength="100" type="text" name="" v-model="commonValue">
        <button @click='commonClick' type="button" name="button">发 表</button>
    </section>
    <faild-alert @sureTip='sureTip' v-if="show" :alertText="alertText"></faild-alert>
</div>

</template>

<script>
import * as routeUtil from '../utils/routeUtil'
import faildAlert from '../components/faildAlert'
import RequestEngine from 'netenginwang'
import tvVoteItem from '../components/tvVoteItem'
import urls from '../config.js'
import common from '@/components/common/common'
export default {
    data() {
            return {
                "retData": {},
                subjectBoList:[],
                params:{},
                commonValue:'',
                show:false,
                alertText:'',
                isShowProgress:false
            }
        },
        components: {
            common,
            tvVoteItem,
            faildAlert
        },
        mounted : function(){
          //params: { relaId: item[0].relationId, type: item[0].type}}
          this.params = this.$route.params;
          //document.title = this.$route.name;

          let that = this;
          window.showProgress();
          let votList = new Promise((resolve, reject)=>{
            new RequestEngine(false).request(urls.queryVotTvList, {tvId: this.params.tvId,mvpId:this.params.mvpId},
              successValue => {
                that.subjectBoList = successValue.subjectBoList;
                document.title = successValue.subjectBoList[0].MVPName;
                resolve('success0');
              }, failValue => {
                reject('faild0');
              }, completeValue => {});
          });
          let listCommon = new Promise((resolve,reject)=>{
            new RequestEngine(false).request(urls.listComment, {relaId: this.params.mvpId,type:this.params.type},
                successValue => {
                  that.retData = successValue;
                  resolve('success1');
                }, failValue => {
                  reject('faild1');
                }, completeValue => {});
          });
          let all = Promise.all([votList,listCommon]);
          all.then(val=>{
            window.hiddenProgress();
            console.log(val);
          }).catch(err=>{
            window.hiddenProgress();
          });
          routeUtil.routeProcess(this, {
              jsonDate: this.$route.params,
              title: '剧情投票啦',
              desc: '这是一个神奇的投票，快来投投投',
              success: function() {
                  console.log("成功啦");
              },
              cancel: function() {
                  console.log("失败啦");
              }
          });


        },
        methods: {

          zanClick(item) {
            this.$store.commit('increment');
            new RequestEngine(false).request(urls.praiseOrTread, {relaId: item.id,type:'1'},
                successValue => {
                  if(item.isPraise=='1') {
                    item.praise--;
                  } else {
                    item.praise++;
                  }
                  item.isPraise = (item.isPraise=='1'?'0':'1');

                }, failValue => {
                }, completeValue => {});
          },
          commonClick(){
            let that = this;
            new RequestEngine().request(urls.doComment, {relaId: this.params.mvpId, type:this.params.type, commentText:this.commonValue},
                successValue => {
                  that.alertText = '发表评论成功';
                  that.show = true;
                  that.commonValue = '';
                  new RequestEngine(false).request(urls.listComment, {relaId: this.params.mvpId,type:this.params.type},
                      successValue => {
                        that.retData = successValue;
                      }, failValue => {
                      }, completeValue => {});
                }, failValue => {
                }, completeValue => {});
          },
          sureTip(){
            this.show = false;
          },
          voteItem(tvjiemu){
            let answer = '-1';
            for (var i = 0; i < tvjiemu.votObjectList.length; i++) {
              if (tvjiemu.votObjectList[i].choose) {
                answer = i+1;
              }
            }
            if(answer == '-1') {
              window.alertDialog('请选择一个选项进行投票');
              return ;
            }
            let that = this;
            new Promise((resolve,reject)=>{
              new RequestEngine().request(urls.doVotTv, {subjectId: tvjiemu.id,answer:answer},
                  successValue => {
                    resolve(successValue);
                  }, failValue => {
                    reject(failValue);
                  }, completeValue => {});
            }).then(successValue=>{
              that.alertText = '投票成功';
              that.show = true;
              that.commonValue = '';
              new RequestEngine(false).request(urls.queryVotTvList, {tvId: this.params.tvId,mvpId:this.params.mvpId},
                successValue => {
                  that.subjectBoList = successValue.subjectBoList;
                }, failValue => {
                }, completeValue => {});
            }).catch(err=>{

            })

          }
        }

}

</script>
