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
    if(process.env.NODE_ENV === 'production') {
      login({
        success: function(successValue) {
          router.replace({ path: 'index' })
        },
        faild: function(faildValue) {

        }
      });
    } else {
      router.replace({ path: 'index' })
    }
	}
}
</script>

<style lang="css">
</style>
