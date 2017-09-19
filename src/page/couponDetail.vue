<template lang="html">
  <div>
    <section class="head">
      <span>第三季度绩效考核</span>
      <select class="person_select">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
      </select>
    </section>
    <hr class="parting_line"/>
    <section class="content_detail">
      <div class="name_depart">
        <span>张三</span>
        <span>信息部</span>
      </div>
      <section class="ques">
        <span class="title">张三最近表现如何?</span>
        <div class="answers">
          <div class="item">
            <span class="range">A:优秀</span>
            <span class="value">16票</span>
          </div>
          <div class="item">
            <span class="range">A:优秀</span>
            <span class="value">16票</span>
          </div>
          <div class="item">
            <span class="range">A:优秀</span>
            <span class="value">16票</span>
          </div>
          <div class="item">
            <span class="range">A:优秀</span>
            <span class="value">16票</span>
          </div>
        </div>
      </section>
    </section>

    <section class="common">
      <span>12条评论</span>
      <i class="has_more"></i>
      <section class="common_wrap">
        <div class="commom_itme">
          <span>用户: 报阿拉</span>
          <span class="common_state">表现的非常好继续努力</span>
        </div>
        <hr class="parting_line"/>
      </section>
    </section>
  </div>

</template>

<script>
export default {
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
      overflow: hidden;
      .item{
        box-sizing: border-box;
        width: 50%;
        float: left;
        background-color: #e9eff2;
        background-clip: content-box;
        font-size: 16px;
        padding-bottom: 20px;
        display: flex;
        justify-content: space-between;
        span{
          margin: 5px 10px;
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
