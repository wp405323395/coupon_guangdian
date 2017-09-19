<template lang="html">
  <div class="content">
    <section class="title">
      <label for="title">项目主题:</label>
      <input class="input_style" id="title" placeholder="请输入新项目主题说明（2-12字）" type="text" name="" value="">
    </section>
    <hr class="parting_line"/>
    <section>
      <div v-for="(person, index) in persons" class="addPersonList">
        <div class="cell">
          <span for="">被考核人姓名:</span>
          <input class="input_style" type="text" name="" :value="person.name">
        </div>
        <div class="cell">
          <span for="" class="margin">所属部门:</span>
          <input class="input_style" type="text" name="" :value="person.depart">
        </div>
      </div>
      <span @click="addPerson" class="addPerson add_style">添加考核人</span>
    </section>

    <section class="" v-for="(item, index) in items" >
      <div class="title">
        <label :for="index">被考核内容:</label>
        <input class="input_style" :id="index" placeholder="请输入考核内容" type="text" name="" :value="item.title">
      </div>
      <div class="title style2">
        <label for="title1">投票选项:</label>
        <div class="input_wrap">
          <input v-for="(li, index2) in item.options" class="input_style divice" :id="index2" :placeholder="'选项'+(index2+1)" type="text" name="" :value="li">
          <span v-if="index+1 == items.length" @click="addOptionsWrap" class="add_style">添加考核内容</span>
        </div>
      </div>
    </section>

    <section>
      <div class="title">
        <label>添加评论:</label>
        <input  type="radio" name="sex" value="male" />是&nbsp;&nbsp;&nbsp;
        <input  type="radio" name="sex" value="female" />否
      </div>
    </section>
  </div>

</template>

<script>

export default {
  data () {
    return {
      items: [{title: '', options: ['', '', '', '']}],
      persons: [{name: '张三', depart: '信息部'}]
    }
  },
  methods: {
    addOptionsWrap () {
      this.items.push({title: '', options: ['', '', '', '']})
    },
    addPerson () {
      this.persons.push({name: '', depart: ''})
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

}

</style>
