<template lang="html">
    <div class="content">
        <section>
          <div class="model_itmes">
            <i class="iconfont qr_color">&#xe616;</i>
            <span>二维码规则</span>
          </div>
          <div class="model_itmes">
            <i class="iconfont qr_color">&#xe613;</i>
            <span>话题管理</span>

          </div>
          <div class="model_itmes">
            <i class="iconfont qr_color">&#xe614;</i>
            <span>新闻管理</span>

          </div>
          <div class="model_itmes">
            <i class="iconfont qr_color">&#xe615;</i>
            <span>游戏管理</span>

          </div>

        </section>

    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss"  scoped>
@font-face {
  font-family: 'iconfont';  /* project id 517168 */
  src: url('//at.alicdn.com/t/font_517168_ma1efq7fc8dm42t9.eot');
  src: url('//at.alicdn.com/t/font_517168_ma1efq7fc8dm42t9.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_517168_ma1efq7fc8dm42t9.woff') format('woff'),
  url('//at.alicdn.com/t/font_517168_ma1efq7fc8dm42t9.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_517168_ma1efq7fc8dm42t9.svg#iconfont') format('svg');
}
.iconfont{
  font-family:"iconfont" !important;
  font-size:16px;font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;

}
.content{
  background: #f5f5f5;
  margin-top: 200px;
  section {
    display: flex;
    flex-direction: row;
    .model_itmes{
      display: block;
      width: 180px;
      height: 170px;
      margin: 30px;
      background-image: url('../../static/img/manager_model_unfocus.png');
      background-size: 180px 180px;
      background-position: -5px 0px;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 35px;
      span{
        display: block;
        margin-top: 10px;
        font-size: 16px;
        color: black;
      }
      .qr_color {
        font-size: 40px;
      }
    }
    .model_itmes:hover {
      background-image: url('../../static/img/manager_model_focus.png');
      cursor: pointer;
      span{
        color: white;
      }
      .qr_color {
        color: white;
      }
    }
  }

}
</style>
