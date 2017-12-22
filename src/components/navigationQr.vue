<template lang="html">
  <section class="content">
    <section class="menus" @click="menusClick()">
      <div v-for="(menu, index) of menus" :id="index" :class="{ 'menuActive' : index == currentMenu}">
        <span :id="index">{{menu.name}}</span>
      </div>
    </section>
    <section class="submenue" @click="subMenusClick()">
        <span v-for="(subMenus, index) of currentSubMenus" :id="index" :class="{ 'submenuActive' : index == currentSubMenusIndex}">{{subMenus.name}}</span>
    </section>
  </section>

</template>

<script>
import requestEngine from '../netApi/requestEngine'
import router from '../router'
import urls from '../config.js'
export default {
  data(){
    return{
      currentMenu:0,
      currentSubMenusIndex:0,
      menus:[],
      currentSubMenus:[],
    }
  },
  methods:{
    menusClick(){
      this.currentMenu = event.target.id;
      this.currentSubMenus = this.menus[this.currentMenu].subList;
    },
    subMenusClick(){
      this.currentSubMenusIndex = event.target.id;
    }
  },
  mounted : function() {
    new requestEngine().request(urls.queMenuList,{},
      successValue=>{
        this.menus = successValue;
        this.currentSubMenus = successValue[0].subList;
      }, failValue=>{

      }, completeValue=>{
      })
  }
}
</script>

<style  lang="scss"  scoped>
.content{
  width: 1000px;
  height: 50px;
  .submenue{
    background-color: #697af0;
    height: 50px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    span{
      display: block;
      width: 180px;
      text-align: center;
      font-size: 16px;
      color: #c0c7f4;
      border-right: 1px solid #c0c7f4;
    }
    span:first-child{
      margin-left: 20px;
    }
    span:last-child{
      border: none;
    }
    span:hover{
      cursor: pointer;
    }
    .submenuActive {
      color: white;
    }
  }
  .menus{
    height: 100%;
    display: flex;
    flex-direction: row;
    div{
      width: 170px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      span{
        color: black;
        font-size: 16px;
      }
    }

    .menuActive{
      background-color: #697af0;
      span{
        color: white;

      }
    }
  }
}

</style>
