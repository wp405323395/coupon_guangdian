<template lang="html">
  <div class="content">
    <progress-bar v-if="isShowProgress"></progress-bar>
    <alert-tip v-if="showAlert" :showHide="showAlert" @cancleTip="cancleTip" @sureTip="sureTip" :alertText="alertText"></alert-tip>
    <section class="title">
      <label for="title">项目主题:</label>
      <input class="input_style" id="title" placeholder="请输入新项目主题说明（2-12字）" type="text" name="" v-model="voteProject.title">
    </section>
    <hr class="parting_line"/>
    <section>
      <div v-for="(person, index) in voteProject.candidateList" class="addPersonList">
        <div class="cell">
          <span for="">投票对象:</span>
          <input class="input_style" type="text" name="" v-model="person.name">
        </div>
        <div class="cell">
          <span for="" class="margin">所属部门:</span>
          <input class="input_style" type="text" name="" v-model="person.deptname">
          <i @click="deletePersonListItem(index)" class="delete_icon" v-if="index != 0"></i>
        </div>

      </div>
      <span @click="addPerson" class="addPerson add_style">添加投票对象</span>
    </section>

    <section class="" v-for="(item, index) in voteProject.topicList" >
      <div class="title">
        <label :for="index">投票内容:</label>
        <input class="input_style" :id="index" placeholder="请输入考核内容" type="text" v-model="item.topicTitle">
        <i @click="deletetopicListItem(index)" class="delete_icon" v-if="index != 0"></i>
      </div>
      <div class="title" style="padding-top:0;">
        <label :for="index">得分:</label>
        <input class="input_style" style="width:150px;" :id="index" placeholder="请输入得分" type="number" v-model="item.topicGrade">
      </div>
      <div class="title style2">
        <label for="title1">投票选项:</label>
        <div class="input_wrap">
          <div v-for="(li, index2) in item.optionList" :id="index2">
            <input class="input_style " :placeholder="'选项'+(index2+1)" type="text" v-model="li.optionText">
            <div class="divice weight-input"  style="margin-top:4px;">
              <span style="color:#999999">权重(0或正整数)：</span>
              <input min="0" max="1" step="0.1" v-model="li.weight" type="number"/>
            </div>
          </div>
          
          <span v-if="index+1 == voteProject.topicList.length" @click="addOptionsWrap" class="add_style">添加投票内容</span>
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

      <button v-if="id" @click='abortClick' class="submit" style="margin-left:50px;border:1px solid #d4d4d4; background-color: white; color:#666666;" type="button" name="button">放弃修改</button>
      <span style="margin-left:210px; margin-top:10px;display:block;" class="warning_text" v-show="isWarning">{{noteText}}</span>
    </section>
  </div>

</template>

<script>
import alertTip from "../components/alertTip";
import requestEngine from "../netApi/requestEngine";
import progressBar from "../components/progressBar";
import router from "../router";
import urls from "../config.js";
import utils from "../utils/util.js";
export default {
  data() {
    return {
      id: undefined,
      showAlert: false,
      isWarning: false,
      noteText: "",
      isShowProgress: false,
      voteProject: {
        title: "",
        isComment: "1",
        endtime: this.getNowFormatDate(),
        candidateList: [
          {
            name: "",
            deptname: ""
          }
        ],
        topicList: [
          {
            topicTitle: "",
            topicGrade:'',
            optionList: [
              { optionText: "" },
              { optionText: "" },
              { optionText: "" },
              { optionText: "" }
            ]
          }
        ]
      }
    };
  },
  mounted: function() {
    this.id = this.$route.params.id;
    let title = this.$route.params.title;
    console.log("mfmfmfmfm->", this.id);
    if (this.id) {
      router.history.current.meta.isFrom = "modifyVote";
    } else {
      router.history.current.meta.isFrom = "createVote";
    }
    if (this.id) {
      this.isShowProgress = true;
      new requestEngine().request(
        urls.queByProjectId,
        { projectId: this.id },
        successValue => {
          this.isShowProgress = false;
          this.voteProject = successValue;
          this.voteProject.endtime = successValue.endtime.split("T")[0];
        },
        failValue => {
          this.isShowProgress = false;
        },
        completeValue => {}
      );
    }
  },

  components: {
    progressBar,
    alertTip
  },
  methods: {
    sureTip() {
      this.showAlert = false;
      this.isShowProgress = true;
      new requestEngine().request(
        urls.createVotProject,
        this.voteProject,
        successValue => {
          this.isShowProgress = false;
          router.go(-1);
        },
        failValue => {
          this.noteText = failValue;
          this.isShowProgress = false;
        },
        completeValue => {}
      );
    },
    cancleTip() {
      this.showAlert = false;
    },
    deletePersonListItem(index) {
      this.voteProject.candidateList.splice(index, 1);
    },
    deletetopicListItem(index) {
      this.voteProject.topicList.splice(index, 1);
    },
    abortClick() {
      this.$router.back(-1);
    },
    getNowFormatDate() {
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
      var currentdate =
        date.getFullYear() + seperator1 + month + seperator1 + strDate;
      return currentdate;
    },
    getNowFormatClock() {
      var date = new Date();
      var seperator2 = ":";
      var currentdate =
        date.getHours() +
        seperator2 +
        date.getMinutes() +
        seperator2 +
        date.getSeconds();
      return currentdate;
    },
    addOptionsWrap() {
      this.voteProject.topicList.push({
        topicTitle: "",
        optionList: [
          { optionText: "" },
          { optionText: "" },
          { optionText: "" },
          { optionText: "" }
        ]
      });
    },
    addPerson() {
      this.voteProject.candidateList.push({ name: "", deptname: "" });
    },
    submit() {
      setTimeout(() => {
        this.isWarning = false;
      }, 2000);
      if (this.voteProject.endtime < this.getNowFormatDate()) {
        this.isWarning = true;
        this.noteText = "您填写的日期有误";
        return;
      }
      if (utils.textIsNull(this.voteProject.title)) {
        this.isWarning = true;
        this.noteText = "未填写项目主题";
        return;
      }
      for (let candidate of this.voteProject.candidateList) {
        if (
          utils.textIsNull(candidate.name) ||
          utils.textIsNull(candidate.deptname)
        ) {
          this.isWarning = true;
          this.noteText = "未输入被投票人姓名或部门";
          return;
        }
      }
      for (let topic of this.voteProject.topicList) {
        if (utils.textIsNull(topic.topicTitle)) {
          this.isWarning = true;
          this.noteText = "未输入投票内容";
          return;
        } else if (
          utils.textIsNull(topic.optionList[0].optionText) &&
          utils.textIsNull(topic.optionList[1].optionText) &&
          utils.textIsNull(topic.optionList[2].optionText) &&
          utils.textIsNull(topic.optionList[3].optionText)
        ) {
          this.isWarning = true;
          this.noteText = "必须填写至少一个选项";
          return;
        } else {
          for(let item of topic.optionList) {
            try{
              if((!utils.textIsNull(item.weight))) {
                console.log("输入的分数是--i:", item.weight)
                const weight = parseFloat(item.weight)
                console.log("输入的分数是i:", weight)
                if(weight<0||weight>1) {
                  throw new Error('错误');
                }
              }
              
            } catch(err) {
              this.isWarning = true;
              this.noteText = "请输入正确的权重";
              return;
            }
          }
          
          
        }
      }
      if (this.id) {
        this.voteProject.id = this.id;
        this.showAlert = true;
        this.alertText = "确认要修改吗？";
      } else {
        let that = this;
        new Promise((resolve, reject) => {
          this.isShowProgress = true;
          new requestEngine().request(
            urls.createVotProject,
            that.voteProject,
            successValue => {
              resolve(successValue);
            },
            failValue => {
              reject(failValue);
            },
            completeValue => {}
          );
        })
          .then(value => {
            this.isShowProgress = false;
            router.go(-1);
          })
          .catch(err => {
            this.isWarning = true;
            this.noteText = "提交失败，接口请求异常";
            this.isShowProgress = false;
          });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.content {
  width: 916px;
  margin: auto;
  background-color: white;
  padding-bottom: 60px;
  font-size: 13px;
  ::-webkit-input-placeholder {
    color: #999999;
  }
  .delete_icon {
    width: 30px;
    height: 30px;
    background-image: url("../../static/svg/delete_qr.svg");
    cursor: pointer;
  }
  .parting_line {
    padding: 0;
    margin: 0;
    height: 1px;
    width: 100%;
    border: 0;
    background-color: #d6dee2;
  }
  .title {
    display: flex;
    padding: 20px 70px;
    align-items: center;
    label {
      flex-shrink: 0;
      width: 140px;
    }
  }
  .addPersonList {
    display: flex;
    padding: 10px 70px;
    align-items: center;
    .cell {
      display: flex;
      align-items: center;
      span {
        white-space: nowrap;
        flex-shrink: 0;
        width: 140px;
      }
      input {
        width: 200px;
        margin-right: 40px;
      }
      .margin {
        margin-right: 20px;
      }
    }
    .cell:last-child {
      input {
        margin-right: 20px;
      }
      span {
        width: 70px;
      }
    }
  }
  .addPersonList:first-child {
    margin-top: 10px;
  }
  .style2 {
    align-items: flex-start;
    transform: translate(0, -20px);
    padding-bottom: 0px;
  }
  .input_style {
    border: 1px solid #d6dee2;
    width: 100%;
    height: 40px;
    padding-left: 20px;
    font-size: 13px;
    width: 560px;
    margin-right: 20px;
  }
  .add_style {
    display: inline-block;
    margin-bottom: 20px;
    color: #017bc8;
    font-size: 13px;
    cursor: pointer;
  }
  .add_style::before {
    content: "+";
    margin-right: 5px;
    font-weight: 700;
  }
  .divice {
    margin-bottom: 10px;
  }
  .input_wrap {
    width: 100%;
  }

  .addPerson {
    margin-left: 210px;
  }
  .date_picker {
    border: 1px solid #d4d4d4;
    margin-right: 20px;
    padding: 3px 5px;
  }
  .submit {
    color: white;
    width: 180px;
    height: 44px;
    margin-left: 210px;
    background-color: #017bc8;
    margin-top: 30px;
    cursor: pointer;
  }

  .warning_text {
    margin-left: 50px;
    font-size: 16px;
    color: red;
  }
}
.weight-input {
  input {
    border-bottom: 1px solid #d4d4d4;
    height: 30px;
    line-height: 30px;
    width: 100px;
  }
}
</style>
