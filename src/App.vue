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
		<progress-bar v-if="isShowProgress"></progress-bar>
  </div>
</template>

<script>
import Vue from 'Vue'
import progressBar from './components/progressBar'
window.eventHub = new Vue();
export default {

	data () {
		return {
			isShowProgress:false,
		}
	},
	components: {
		progressBar
	},
	created: function(){
		window.eventHub.$on('progress',this.progress);
	},
	methods: {
		progress (newData) {
			console.log('神奇的时间');
			this.isShowProgress = newData;
		}
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
