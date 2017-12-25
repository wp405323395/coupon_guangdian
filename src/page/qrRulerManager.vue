<template lang="html">
  <section>
    <section class="add_project">
      <img src="../../static/img/add_project.png" alt="">
      <span>新增规则</span>
    </section>
    <section class="search_pannel">
      <section class="input_section">
        <div class="">
          <label for="">频道</label>
          <input type="text" name="" value="">
        </div>
        <div class="">
          <label for="">规则有效日期</label>
          <input type="text" name="" value="">
        </div>
        <div class="">
          <label for="">规则状态</label>
          <input type="text" name="" value="">
        </div>
      </section>
      <button type="button" name="button">查询</button>
    </section>

    <section class="qr_manager_list_panel">
      <div v-for="(qrRuler, index) of qrRulers" class="table_header">
        <div  class="lable_s" v-if="index == 0">
          <div><span>规则名称</span></div>
          <div><span>规则有效日期</span></div>
          <div><span>地区</span></div>
          <div><span>频道</span></div>
          <div><span>显示类型</span></div>
          <div><span>状态</span></div>
          <div><span>操作</span></div>
        </div>
        <div v-else>
          <div><span>{{qrRuler.rulename}}</span></div>
          <div class="useful_day">
            <span>{{qrRuler.etime.split('T')[0]}}--{{qrRuler.stime.split('T')[0]}}</span>
            <span class="week">周{{qrRuler.qrday.replace(new RegExp(",","gm") , '、周')}}</span>
          </div>
          <div><span>{{qrRuler.city}}</span></div>
          <div><span>{{qrRuler.channelname}}</span></div>
          <div><span>{{qrRuler.qrtype}}</span></div>
          <div><span>{{qrRuler.status}}</span></div>
          <div class="opration">
            <span>详情</span>
            <span>修改</span>
            <span>删除</span>
          </div>
        </div>
      </div>
      <div class="contents">

      </div>
    </section>
  </section>
</template>

<script>
import requestEngine from '../netApi/requestEngine'
import router from '../router'
import urls from '../config.js'
export default {
  data(){
    return {
      qrRulers:[]
    }
  },
  mounted:function(){
    new requestEngine().request(urls.queQruleList,{channelName:'',date:'',status:'',pageSize:10,pageNo:1},
      successValue=>{
        this.qrRulers = successValue;
        this.qrRulers.unshift({});
      }, failValue=>{

      }, completeValue=>{
      })
  }

}
</script>

<style lang="scss" scoped>
  .add_project{
    display: flex;
    flex-direction: row;
    justify-content:flex-end;
    padding-right: 30px;
    padding-top: 10px;
    padding-bottom: 10px;
    span{
      font-size: 16px;
      display: inline-block;
      margin-left: 10px;
    }
  }
  .search_pannel{
    background-color: #eef1f8;
    margin: 14px 20px;
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 30px;
    text-align:center;
    border:1px solid #d4d4d4;
    .input_section{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    button{
      margin-top: 30px;
      width: 200px;
      height: 40px;
      background-image: url(../../static/svg/header_bar_background.svg);
      font-size: 16px;
      color: white;
      letter-spacing:4px;
      margin-bottom: 30px;
    }
  }

  .qr_manager_list_panel{
    margin-top: 10px;
    background-color:  #eef1f8;
    margin-left: 20px;
    margin-right: 20px;
    border: 1px solid #d4d4d4;
    div:nth-child(even){
      background-color: white;
    }
    .table_header{
      div{
        display: flex;
        flex-direction: row;
        justify-content:space-around;
        div{
          font-size: 14px;
          width: 100px;
          overflow: visible;
          padding-top: 10px;
          padding-bottom: 10px;
          background-color: transparent;
          span{
            color: #666666;
            display: block;
            align-self: center;
          }
        }
        .useful_day{
          display: flex;
          flex-direction: column;
          align-items: center;
          .week{
            font-size: 10px;
          }
        }
        .opration{
          display: flex;
          flex-direction: row;
          align-items: center;
        }
        div:nth-child(2){
          width: 180px;
        }
        div:last-child{
          width: 180px;
        }

      }
      .lable_s{
        div{
          span{
            font-weight: 600;
            color: #333333;
          }

        }
      }

    }
  }
</style>
