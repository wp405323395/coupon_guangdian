<template lang="html">
  <section class="content">
    <section class="menus" @click="menusClick">
      <div v-for="(menu, index) of menus" :id="index" :class="{ 'menuActive' : index == currentMenu}">
        <span :id="index">{{menu.name}}</span>
      </div>
    </section>
    <section class="submenue" @click="subMenusClick">
        <span v-for="(subMenus, index) of currentSubMenus" :id="subMenus.linkurl" :class="[{'submenuActive' : subMenus.linkurl == currentSubMenusIndex},'submenu-btn']">{{subMenus.name}}</span>
    </section>
  </section>

</template>

<script>
import requestEngine from '../netApi/requestEngine'
import router from '../router'
import urls from '../config.js'
import { mapState,mapMutations } from 'vuex';
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
    ...mapMutations([
            'subMenusDir'
    ]),
    menusClick(event){
      this.currentMenu = event.target.id;
      this.currentSubMenus = this.menus[this.currentMenu].subList;
    },
    subMenusClick(event){
      if(event.target.id == null || event.target.id=='') {
        return;
      }
      this.currentSubMenusIndex = event.target.id;
      this.subMenusDir(this.currentSubMenusIndex);
      document.bus.$emit('switchQrRulers',this.currentSubMenusIndex);
    }
  },
  mounted : function() {
    new requestEngine().request(urls.queMenuList,{},
      successValue=>{
        this.menus = successValue;
        this.currentSubMenus = successValue[0].subList;
        this.currentSubMenusIndex = this.currentSubMenus[0].linkurl;
        this.subMenusDir(this.currentSubMenusIndex);
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
    .submenu-btn:hover{
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
