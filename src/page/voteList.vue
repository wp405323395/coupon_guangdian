<template lang="html">
    <section class="content">
      <section v-if="showQr" class="alet_container">

        <img :src="qrUrl" class="qrImage">
        </br>
        <span style="color: #d4d4d4">微信扫码转发到群组发起投票</span>
        <i @click="closeQr()" class="closeQr"></i>
      </section>
      <progress-bar v-if="isShowProgress"></progress-bar>
      <alert-tip v-if="showAlert" :showHide="showAlert" @cancleTip="cancleTip" @sureTip="sureTip" :alertText="alertText"></alert-tip>
      <div class="add_vote">
        <router-link :to="{ name: 'createVote'}">
          <span class="pointer">创建新项目</span>
        </router-link>
      </div>
      <div class="table_head">
        <ul>
          <li class="cell0">项目名称</li>
          <li class="cell1">创建时间</li>
          <li class="cell2">截止日期</li>
          <li class="cell3">投票人数</li>
          <li class="cell4">操作</li>
        </ul>
      </div>
      <div class="data_list">
        <ul>
          <li v-for="(item, index) of votpList">
            <div class="vote_item">
              <ul>
                <li class="cell0">{{item.title}}</li>
                <li class="cell1">{{item.createDate}}</li>
                <li class="cell2">{{item.endDate}}</li>
                <li class="cell3">{{item.votNum}}</li>
                <li class="cell4">
                  <span class="pointer" @click="goToDetail(item.id, item.title)">详情</span>
                  <span class="pointer" @click="deleteVote(item.id, index)">删除</span>
                  <span class="pointer" @click="doVote(item.id, index)">生成二维码</span>
                </li>
              </ul>
              <div class="line"></div>
            </div>

          </li>
        </ul>
      </div>
    </section>

</template>

<script>
  import alertTip from '../components/alertTip'
  import RequestEngine from 'netenginwang'
  import progressBar from '../components/progressBar'
  import router from '../router'
  import urls from '../config.js'
  let deleteId;
  let deleteIndex;
  export default {
    data () {
      return {
        showQr:false,
        qrUrl:'',
        showAlert: false,
        votpList: [],
        isShowProgress:false
      }
    },
    components: {
      alertTip,
      progressBar
    },
    mounted: function () {
      this.listProject();
    },
    methods: {
      listProject () {
        this.isShowProgress = true;
        new Promise((resolve, reject)=>{
          new RequestEngine().request(urls.listProject,{},
            successValue=>{
              resolve(successValue);
            }, failValue=>{
              reject(failValue);
            }, completeValue=>{

            })
        }).then(value=>{
          this.isShowProgress = false;
          this.votpList = value.votpList;
        }).catch(err=>{
          this.isShowProgress = false;
        });
      },
      deleteVote (id, index) {
        deleteId = id;
        deleteIndex = index;
        this.showAlert = true
        this.alertText = '确认要删除吗？'
      },
      doVote (id, index) {
        let that = this;
        this.isShowProgress = true;
        new RequestEngine().request(urls.createVotQRcode,{id: id},
          successValue=>{
            that.showQr = true;
            that.qrUrl = successValue.wxcodeurl;

          }, failValue=>{
              this.isShowProgress = false;
          }, completeValue=>{
            this.isShowProgress = false;
          })
      },
      closeQr:function() {
        this.showQr = false;
      },
      sureTip () {
        this.showAlert = false;
        new Promise((resolve, reject)=>{
          this.isShowProgress = true;
          new RequestEngine().request(urls.deleteProject,{id: deleteId},
            successValue=>{
              resolve(successValue);
            }, failValue=>{
              reject(failValue);
            }, completeValue=>{

            })
        }).then(value=>{
          this.isShowProgress = false;
          this.votpList.splice(deleteIndex,1);
        }).catch(err=>{
          this.isShowProgress = false;
          console.log(err);
        })
      },
      cancleTip(){
        this.showAlert = false
      },
      goToDetail (id, title) {
        console.log('选中的id ', id);
        router.push({ name: 'voteDetail' , params: { id: id ,title: title}})
      }
    }
  }
</script>
<style lang="scss"  scoped>
  @import "../style/mystyle.scss";
  .pointer{
    cursor: pointer;
  }
  .content{
    width: 916px;
    margin: auto;
    display: flex;
    flex-direction: column;
    font-size: 16px;
    text-align: center;
    .alet_container{
      position: fixed;
      background:rgba(0, 0, 0, 0.5);
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 200;
      display: flex;
      align-items: center;
      justify-content: center;
      display: flex;
      flex-direction: column;
      .qrImage{
          width: 300px;
          height: 300px;
      }
      .closeQr{
        background-image: url('../../static/svg/delete_qr.svg');
        width: 40px;
        height: 40px;
        cursor: pointer;
      }
    }
    .add_vote{
      height: 40px;
      width: 100%;
      background-color: white;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      span{
        color: black;
        margin-right: 20px;
        color: #017bc8;
      }
      span::before{
        font-size: 20px;
        content: '+';
        margin-right: 10px;
      }
    }
    .table_head{
      width: 100%;
      height: 40px;
      background-color: #f2f6f8;
      color: #374c56;
      ul{
        li{
          float: left;
          margin: 10px auto;
        }
        .cell0{
          width: 25%;
        }
        .cell1{
          width: 20%;
        }
        .cell2{
          width: 20%;
        }
        .cell3{
          width: 10%;
        }
        .cell4{
          width: 25%;
        }
      }
    }
    .data_list{
      display: flex;
      flex-direction: column;
      background-color: white;
      min-height: 400px;
      padding-top: 10px;
      ul{
        li{
          width: 100%;
          ul{
            li{
              float: left;
              margin: 15px auto;
              .pointer{
                cursor: pointer;
                color: #017bc8;
                margin-left: 7px;
                margin-right: 7px;
                border-bottom: 1px #017bc8 solid;
              }
            }
            .cell0{
              width: 25%;
            }
            .cell1{
              width: 20%;
            }
            .cell2{
              width: 20%;
            }
            .cell3{
              width: 10%;
            }
            .cell4{
              width: 25%;
            }
          }
          .line{
            height: 1px;
            background-color: black;
            margin-left: 30px;
            margin-right: 30px;
            background-color: #e9eff2;
          }
          .vote_item{
            display: flex;
            flex-direction: column;
            .cell0 {
              text-align: left;
              padding-left: 20px;
              word-break: break-all;
            }
          }
        }
      }

    }

  }

</style>
