<template lang="html">
    <section class="content">
      <alert-tip v-if="showAlert" :showHide="showAlert" @closeTip="closeTip" :alertText="alertText"></alert-tip>
      <div class="add_vote">
        <router-link :to="{ name: 'createCoupon'}">
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
          <li v-for="item of votes">
            <div class="vote_item">
              <ul>
                <li class="cell0">{{item.title}}</li>
                <li class="cell1">{{item.createTime}}</li>
                <li class="cell2">{{item.endTime}}</li>
                <li class="cell3">{{item.voteNum}}</li>
                <li class="cell4">
                  <span class="pointer" @click="goToDetail(item.id)">详情</span>
                  <span class="pointer" @click="deleteVote(item.id)">删除</span>
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
  import router from '../router'
  export default {
    data () {
      return {
        showAlert: false,
        votes: [
          {
            id: 1,
            title: '2017年三季度绩效考核',
            createTime: '2017-09-11',
            endTime: '2017-10-22',
            voteNum: 88
          },
          {
            id: 2,
            title: '2017年三季度绩效考核',
            createTime: '2017-09-11',
            endTime: '2017-10-22',
            voteNum: 88
          },
          {
            id: 2,
            title: '2017年三季度绩效考核',
            createTime: '2017-09-11',
            endTime: '2017-10-22',
            voteNum: 88
          }
        ]
      }
    },
    components: {
      alertTip
    },
    methods: {
      deleteVote () {
        this.showAlert = true
        this.alertText = '您输入的手机号尚未绑定'
      },
      closeTip () {
        this.showAlert = false
      },
      goToDetail () {
        router.push({ name: 'couponDetail' })
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
    .add_vote{
      height: 60px;
      width: 100%;
      background-color: white;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      span{
        color: black;
        margin-right: 30px;
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
          width: 30%;
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
          width: 20%;
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
              width: 30%;
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
              width: 20%;
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
          }
        }
      }

    }

  }

</style>
