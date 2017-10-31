<template>
	<div>
		<transition name="router-fade" mode="out-in">
			<keep-alive>
			    <router-view v-if="$route.meta.keepAlive"></router-view>
			</keep-alive>
    </transition>
    <transition name="router-fade" mode="out-in">
			<router-view v-if="!$route.meta.keepAlive"></router-view>
		</transition>

  </div>
</template>

<script>
import login from './netApi/login.js'
export default {
	mounted: function() {
		document.title = this.$route.name;
		 login({
			 success: function(successValue) {
				 console.log(successValue);
			 },
			 faild: function(faildValue) {
				 console.log(faildValue);
			 }
		 });
	}
}

</script>

<style lang="scss">
  	@import './style/common';
	.router-fade-enter-active, .router-fade-leave-active {
	  	transition: opacity .3s;
	}
	.router-fade-enter, .router-fade-leave-active {
	  	opacity: 0;
	}
</style>
