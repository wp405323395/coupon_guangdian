<template lang="html">
  <div class="content">
    <section class="pannel_content">
      <div class="close">
        <span class="close_btn" @click="closePannel">关闭</span>
      </div>
      <section class="create_content">
        
      </section>

    </section>
  </div>
</template>

<script>
export default {
  methods:{
    closePannel(){
      this.$emit('closePannel', [])
    }
  }
}
</script>

<style lang="scss" scoped>
.content{
  display: flex;
  justify-content: center;
  .pannel_content{
    margin-top: 160px;
    width: 600px;
    height: 70%;
    background-color: white;
    overflow:scroll;
    .close{
      cursor: pointer;
      position: fixed;
      display: flex;
      flex-direction: row;
      justify-content:flex-end;
      background-color: white;
      width: 600px;
      .close_btn{

      }
    }
    .create_content{
      margin-top: 30px;
    }

  }
}

</style>
