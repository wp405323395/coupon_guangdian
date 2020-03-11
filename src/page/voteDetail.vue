<template lang="html">
  <div>
    <progress-bar v-if="isShowProgress"></progress-bar>
    <section class="head">
      <span>{{title}}</span>
      <section>
        <select class="person_select" v-model="selected">
          <option selected v-for="(item ,index) in votEmployees" :value="index">{{item.name}}</option>
        </select>
        <span class="space_betw">|</span>
        <span class="excel" @click="export2Excel">导出excel</span>
      </section>

    </section>
    <hr class="parting_line"/>
    <section class="content_detail">
      <div class="name_depart">
        <span v-if="votEmployees[selected]">{{votEmployees[selected].name}}</span>
        <span v-if="votEmployees[selected]">{{votEmployees[selected].deptname}}</span>
      </div>
      <div class="detail-wrap">
        <div class="item-wrap">
          <span>统计人：</span>
          <span>{{account}}</span>
        </div>
        <div class="item-wrap">
          <span>统计时间：</span>
          <span>{{currentTime}}</span>
        </div>
        <div class="item-wrap">
          <span>投票人数：</span>
          <span>{{voteDetail.votNum}}</span>
        </div>
        <div class="item-wrap" v-if="voteDetail.totalGrade">
          <span>总得分：</span>
          <span>{{voteDetail.totalGrade}}</span>
        </div>
      </div>
      <section v-for="detail in voteDetail.topicList" class="ques">
        <span class="title">{{detail.topicTitle}}</span>
        <div class='scor-wrap' v-if="voteDetail.topicGrade">
          <span>得分：</span>
          <span>{{voteDetail.topicGrade}}</span>
        </div>
        <div class="answers">
          <div class="item"  v-for="option in detail.optionList" >
            <span class="range">{{option.optionText}}</span>
            <span class="value">{{option.count}}&nbsp;票</span>
          </div>

        </div>
      </section>
    </section>

    <section class="common">
      <span class="note_count">{{voteDetail.commentedCount}}条评论</span>
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
var moment = require('moment');
import alertTip from '../components/alertTip'
import requestEngine from '../netApi/requestEngine'
import router from '../router'
import urls from '../config.js'
import pagination from '../components/pagination'
import progressBar from '../components/progressBar'
let id;
export default {
  data () {
    const account = localStorage.getItem('account')
    const currentTime = moment().format("YYY-MM-DD HH:mm:ss");
    return {
      currentTime,
      account,
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
    export2Excel() {
      new Promise((resolve, reject)=>{
        this.isShowProgress = true;
        new requestEngine().request(urls.exportVotDetail,{id: id },
          successValue=>{
            resolve(successValue);
          }, failValue=>{
            reject(failValue);
          }, completeValue=>{
          })
      }).then(value=>{
        require.ensure([], () => {
        　　　　　　const { export_json_to_excel } = require('../vendor/Export2Excel');
        　　　　　　const tHeader = ['部门', '姓名', ...value.title];
        　　　　　　const filterVal = ['department', 'name', ...value.title];
                   const list = [];
                   for(let personScore of value.personScore) {
                     let data = {department:personScore.department, name:personScore.name};
                     for(let [index, title] of value.title.entries()) {
                       data[title] = personScore.score[index];
                     }
                     list.push(data);
                   }
        　　　　　　const data = this.formatJson(filterVal, list);
        　　　　　　export_json_to_excel(tHeader, data, this.title+'的投票结果');
        　　　　})
        this.isShowProgress = false;
      }).catch(err=>{
        this.isShowProgress = false;
      })
　　　　
　　},
　　formatJson(filterVal, jsonData) {
　　　　return jsonData.map(v => filterVal.map(j => v[j]))
　　},
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
  padding:20px 40px;
  display: flex;
  justify-content: space-between;

  .person_select{
    font-size: 16px;
  }
}
.excel{
  cursor: pointer;
  font-size: 16px;
  color: #017bc8;
}
.space_betw{
  margin-left: 7px;
  margin-right: 7px;
  font-size: 15px;
  color: #d6dee2;
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
    .scor-wrap{
      font-size: 15px;
      margin-bottom: 10px;
      margin-top: 5px;
      span:last-of-type{
        color:rgba(255, 0, 0, 0.753);
        font-weight: bold;
      }
    }
    .title{
      font-size: 20px;
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
  font-size: 16px;

  span{
    color: #a5b7c0;
    font-size: 14px;
  }
  .common_wrap{
    padding: 20px;
    border: 1px solid #d4d4d4;
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
.detail-wrap{
  display: flex;
  flex-direction: row;
  background-color: rgb(226, 225, 225);
  align-items: center;
  height: 35px;
  margin-top: 5px;
  padding-left: 20px;
  >div{
    margin-right: 50px;
    display: inline-block;
    color: white;
    font-size: 14px;
  }
 
}
</style>
