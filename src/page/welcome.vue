<template lang="html">
  <section>
    欢迎进入橘子剧迷世家
  </section>
</template>

<script>
import login from '../netApi/login.js'
import router from '../router'
export default {

	mounted: function() {
		document.title = this.$route.name;
		//  login({
		// 	 success: function(successValue) {
		// 		 router.replace({ path: 'index' })
    //      //router.push({ path: 'index'});
		// 	 },
		// 	 faild: function(faildValue) {
    //
		// 	 }
		//  });
    router.replace({ path: 'index' })
	}
}
</script>

<style lang="css">
</style>
