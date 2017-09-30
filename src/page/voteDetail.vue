<template lang="html">
  <div>
    <progress-bar v-if="isShowProgress"></progress-bar>
    <section class="head">
      <span>{{title}}</span>
      <select class="person_select" v-model="selected">
        <option selected v-for="(item ,index) in votEmployees" :value="index">{{item.name}}</option>
      </select>
    </section>
    <hr class="parting_line"/>
    <section class="content_detail">
      <div class="name_depart">
        <span v-if="votEmployees[selected]">{{votEmployees[selected].name}}</span>
        <span v-if="votEmployees[selected]">{{votEmployees[selected].deptname}}</span>
      </div>
      <section v-for="detail in voteDetail.topicList" class="ques">
        <span class="title">{{detail.topicTitle}}</span>
        <div class="answers">
          <div class="item"  v-for="option in detail.optionList" >
            <span class="range">{{option.optionText}}</span>
            <span class="value">{{option.count}}&nbsp;票</span>
          </div>

        </div>
      </section>
    </section>

    <section class="common">
      <span>{{voteDetail.commentedCount}}条评论</span>
      <i v-if="voteDetail.commentedCount >0" class="has_more"></i>
      <section v-if="voteDetail.commentedCount>0" class="common_wrap">
        <div class="commom_itme" v-for="common in voteDetail.commentedList">
          <span>用户: {{common.name}}</span>
          <span class="common_state">{{common.commentedText}}</span>
        </div>
        <hr class="parting_line"/>

        <pagination :display="display" :total="total" :current="current" @setCurrent="setCurrent"></pagination>
      </section>
    </section>
  </div>

</template>

<script>
import alertTip from '../components/alertTip'
import requestEngine from '../netApi/requestEngine'
import router from '../router'
import urls from '../config.js'
import pagination from '../components/pagination'
import progressBar from '../components/progressBar'
let id;
export default {
  data () {
    return {
      isShowProgress: false,
      selected:0,
      title:'',
      voteDetail: {},
      votEmployees:[],
      total: 0,
		  display: 5,
		  current: 1
    }
  },
  watch:{
    selected: {
      handler(curVal,oldVal){
　　　　　this.switchPersons(curVal);
　　　},
　　　deep:true
    }
  },
  methods:  {
    setCurrent (idx) {
      this.isShowProgress = true;
      this.current = idx;
      new Promise((resolve, reject)=>{
        new requestEngine().request(urls.queryDetailByPidAndCid,{projectId: id, candidateId:this.votEmployees[0].id,pageSize:'5', pageNo:this.current },
          successValue=>{
            resolve(successValue);
          }, failValue=>{
            reject(failValue);
          }, completeValue=>{
          })
      }).then(value=>{
        this.voteDetail = value;
        this.total = value.commentedCount;
        this.isShowProgress = false;
      }).catch(err=>{
        this.isShowProgress = false;
      })
    },
    switchPersons (selected) {
      this.current = 1;
      new Promise((resolve,reject)=>{
        this.isShowProgress = true;
        new requestEngine().request(urls.queryDetailByPidAndCid,{projectId: id, candidateId:this.votEmployees[selected].id,pageSize:'5', pageNo:this.current },
          successValue=>{
            resolve(successValue);
          }, failValue=>{
            reject(failValue);
          }, completeValue=>{
          })
        }).then(value=>{
          this.isShowProgress = false;
          this.voteDetail = value;
          this.total = value.commentedCount;
      }).catch(err=>{
        this.isShowProgress = false;
      })
    }
  },
  components: {
    pagination,
    progressBar
  },
  mounted : function() {
    id = this.$route.params.id;
    let title = this.$route.params.title;
    if(id == undefined) {
      id = window.sessionStorage.getItem('detail_page_id');
      title = window.sessionStorage.getItem('detail_page_title');
    } else {
      window.sessionStorage.setItem('detail_page_id',id);
      window.sessionStorage.setItem('detail_page_title',title);
    }

    this.title = title;
    new Promise((resolve, reject)=>{
      this.isShowProgress = true;
      new requestEngine().request(urls.listCandidate,{id: id},
        successValue=>{
          resolve(successValue);
        }, failValue=>{
          reject(failValue);
        }, completeValue=>{

        })
    }).then(value=>{
      this.isShowProgress = false;
      this.votEmployees = value.votEmployees;
      return new Promise((resolve,reject)=>{
        this.isShowProgress = true;
        new requestEngine().request(urls.queryDetailByPidAndCid,{projectId: id, candidateId:this.votEmployees[0].id,pageSize:'5', pageNo:this.current },
          successValue=>{
            resolve(successValue);
          }, failValue=>{
            reject(failValue);
          }, completeValue=>{
          })
        })
    }).then(value=>{
      this.isShowProgress = false;
      this.voteDetail = value;
      this.total = value.commentedCount;
    }).catch(err=>{
      this.isShowProgress = false;
    })
  }
}
</script>

<style lang="scss"  scoped>

.head{
  padding:20px 70px;
  display: flex;
  justify-content: space-between;
  .person_select{
    border:1px solid black;
  }
}
.parting_line{
  padding: 0;
  margin: 0;
  height: 1px;
  width: 100%;
  border: 0;
  background-color: #d6dee2;
}
.content_detail{
  padding:20px 70px;
  padding-bottom: 0;
  .name_depart{
    span{
      margin-right: 10px;
      font-size: 14px;
      background-color: #017bc8;
      color: white;
      display: inline-block;
      text-align: center;
      padding: 3px 15px;
    }
  }
  .ques{
    margin-top: 10px;

    .title{
      font-size: 24px;
      margin-bottom: 30px;
      display: inline-block;
    }
    .answers{
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      width: 100%;
      flex-wrap:wrap;
      .item{
        box-sizing: border-box;
        width: 50%;
        background-color: #e9eff2;
        background-clip: content-box;
        font-size: 16px;
        height: 60px;
        padding-bottom: 20px;
        flex-shrink:0;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        align-items: center;
        span{
          margin: 10px;

        }
      }
      .item:nth-child(odd){
        padding-right: 20px;
      }
    }
  }
}
.common{
  padding-left: 70px;
  padding-right: 70px;
  padding-bottom: 100px;
  .has_more::after{
      content: '\2601';
      cursor: pointer;
  }
  span{
    color: #a5b7c0;
    font-size: 16px;

  }
  .common_wrap{
    padding: 20px;
    border: 1px solid #a5b7c0;
    border-radius: 5px;
    margin-top: 10px;
    .commom_itme{
      span{
        display: block;
      }
      .common_state{
        color: black;
        margin-top: 10px;
        margin-bottom: 10px;
      }
    }

  }
}

</style>
