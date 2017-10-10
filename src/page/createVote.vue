<template lang="html">
  <div class="content">
    <progress-bar v-if="isShowProgress"></progress-bar>
    <section class="title">
      <label for="title">项目主题:</label>
      <input class="input_style" id="title" placeholder="请输入新项目主题说明（2-12字）" type="text" name="" v-model="voteProject.title">
    </section>
    <hr class="parting_line"/>
    <section>
      <div v-for="(person, index) in voteProject.candidateList" class="addPersonList">
        <div class="cell">
          <span for="">被考核人姓名:</span>
          <input class="input_style" type="text" name="" v-model="person.name">
        </div>
        <div class="cell">
          <span for="" class="margin">所属部门:</span>
          <input class="input_style" type="text" name="" v-model="person.deptname">
        </div>
      </div>
      <span @click="addPerson" class="addPerson add_style">添加考核人</span>
    </section>

    <section class="" v-for="(item, index) in voteProject.topicList" >
      <div class="title">
        <label :for="index">被考核内容:</label>
        <input class="input_style" :id="index" placeholder="请输入考核内容" type="text" name="" v-model="item.topicTitle">
      </div>
      <div class="title style2">
        <label for="title1">投票选项:</label>
        <div class="input_wrap">
          <input v-for="(li, index2) in item.optionList" class="input_style divice" :id="index2" :placeholder="'选项'+(index2+1)" type="text" name="" v-model="li.optionText">
          <span v-if="index+1 == voteProject.topicList.length" @click="addOptionsWrap" class="add_style">添加考核内容</span>
        </div>
      </div>
    </section>

    <section>
      <div class="title">
        <label>添加评论:</label>
        <input  type="radio" name="sex" value="1" v-model="voteProject.isComment" checked/>是&nbsp;&nbsp;&nbsp;
        <input  type="radio" name="sex" value="0" v-model="voteProject.isComment"/>否
      </div>
    </section>
    <section>
      <div class="title">
        <label>截至时间:</label>
        <input class="date_picker"  v-model="voteProject.endtime" type="date" />

      </div>
    </section>
    <section>
      <button class="submit" @click='submit' type="button">提&nbsp;&nbsp;交</button>
    </section>
  </div>

</template>

<script>
import requestEngine from '../netApi/requestEngine'
import progressBar from '../components/progressBar'
import router from '../router'
import urls from '../config.js'
export default {
  data () {
    return {
      isShowProgress:false,
      voteProject: {
        title: '',
        isComment: '1',
        endtime: this.getNowFormatDate(),
        candidateList: [
          {
            name:'',
            deptname: ''
          }
        ],
        topicList: [{
          topicTitle: '',
          optionList: [
            {optionText: ''},
            {optionText: ''},
            {optionText: ''},
            {optionText: ''}
          ]
        }]
      }
    }
  },
  components: {
    progressBar
  },
  methods: {
    getNowFormatDate () {
    var date = new Date();
    var seperator1 = "-";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate;
    return  currentdate;
  },
    getNowFormatClock () {
      var date = new Date();
      var seperator2 = ":";
      var currentdate = date.getHours() + seperator2 + date.getMinutes()
            + seperator2 + date.getSeconds();
      return currentdate;
    },
    addOptionsWrap () {
      this.voteProject.topicList.push({topicTitle: '', optionList: [{optionText: ''}, {optionText: ''}, {optionText: ''}, {optionText: ''}]})
    },
    addPerson () {
      this.voteProject.candidateList.push({name: '', deptname: ''})
    },
    submit () {
      let that = this;
      new Promise((resolve, reject)=>{
        this.isShowProgress = true;
        new requestEngine().request(urls.createVotProject,that.voteProject,
          successValue=>{
            resolve(successValue);
          }, failValue=>{
            reject(failValue);
          }, completeValue=>{

          })
      }).then(value=>{
        this.isShowProgress = false;
        router.go(-1);
        console.log(value);
      }).catch(err=>{
        this.isShowProgress = false;
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.content{
    width: 916px;
    margin: auto;
    background-color: white;
    padding-bottom: 60px;
    font-size: 13px;
    ::-webkit-input-placeholder {
      color: #999999;
    }
    .parting_line{
      padding: 0;
      margin: 0;
      height: 1px;
      width: 100%;
      border: 0;
      background-color: #d6dee2;
    }
    .title{
      display: flex;
      padding: 20px 70px;
      align-items: center;
      label{
        flex-shrink:0;
        width: 140px;
      }
    }
    .addPersonList{
      display: flex;
      padding: 10px 70px;
      align-items: center;
    }
    .addPersonList:first-child{
      margin-top: 10px;
    }
    .style2{
      align-items: flex-start;
      transform: translate(0,-20px);
      padding-bottom: 0px;
    }
    .input_style{
      border: 1px solid #d6dee2;
      width: 100%;
      height: 40px;
      padding-left: 20px;
      font-size: 13px;
    }
    .add_style{
      color: #017bc8;
      font-size: 13px;
      cursor: pointer;
    }
    .add_style::before{
      content: '+';
      margin-right: 5px;
      font-weight: 700;
    }
    .divice{
      margin-bottom: 10px;
    }
    .input_wrap{
      width: 100%;
    }
    .cell{
      display: flex;
      align-items: center;
      span{
         white-space:nowrap;
         flex-shrink:0;
         margin-right: 60px;
      }
      input{
        margin-right: 80px;
      }
      .margin{
        margin-right: 20px;
      }
    }
    .addPerson{
      margin-left: 210px;
    }
    .date_picker{
      border: 1px solid black;
      margin-right: 20px;
      padding: 3px 5px;
    }
    .submit{
      color: white;
      width: 180px;
      height: 44px;
      margin-left: 210px;
      background-color: #017bc8;
      cursor: pointer;
    }

}

</style>
