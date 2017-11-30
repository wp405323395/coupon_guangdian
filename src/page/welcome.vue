<template lang="html">
  <section>
    <img src="../../static/img/welcome_im.png" alt="">
  </section>
</template>

<script>
import login from '../login.js'
import router from '../router'
import util from '../utils/util'
export default {

	mounted: function() {
		document.title = "欢迎进入桔子剧迷之家"
    let href = window.location.href;
    let routeName = this.getQueryString('routepath');
    let jsonEncode = this.getQueryString('json');
    let params = {};
    if(!util.textIsNull(jsonEncode)) {
        let jsonDeco = decodeURIComponent(jsonEncode);
        params = JSON.parse(jsonDeco);
    }
    alert(window.location.href);
    let hfff = window.location.href;
    if(process.env.NODE_ENV === 'production') {
      if(hfff.indexOf('welcome') >= 0 && hfff.indexOf('routepath') >= 0 && hfff.indexOf(json) >= 0) {
        router.replace({ name: routeName, params: params});
      } else {
        login({
          success: function(successValue) {
            router.replace({ name: routeName, params: params});
          },
          faild: function(faildValue) {
          }
        });
      }

    } else {
      router.replace({ name: 'index', params: {tvId:1}});
    }
	},
  methods: {
   getQueryString(par) {
     var local_url = document.location.href;
     var get = local_url.indexOf(par +"=");
     if(get == -1){
         return false;
     }
     var get_par = local_url.slice(par.length + get + 1);
     var nextPar = get_par.indexOf("&");
     if(nextPar != -1){
         get_par = get_par.slice(0, nextPar);
     }
     return get_par;
}
  }
}
</script>

<style lang="scss" scoped>
section {
  display: flex;
  justify-content: center;
  align-items:center;
  background-color: #eeeeee;
  height: 100%;
  img{
    width: 2.872rem;
    height: 2.576rem;
    transform: translateY(-1.7rem);
  }
}
</style>
