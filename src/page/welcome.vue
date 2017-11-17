<template lang="html">
  <section>
    欢迎进入橘子剧迷世家
  </section>
</template>

<script>
import login from '../login.js'
import router from '../router'
export default {

	mounted: function() {
		document.title = this.$route.meta.title;
    let href = window.location.href;
    let routeName = this.getQueryString('routepath');
    if(process.env.NODE_ENV === 'production') {
      login({
        success: function(successValue) {
          router.replace({ name: routeName })
        },
        faild: function(faildValue) {

        }
      });
    } else {
      router.replace({ path: routeName })
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

<style lang="css">
</style>
