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
		<faild-alert @sureTip='sureTip' v-if="requestFaild" :alertText="alertText"></faild-alert>
  </div>
</template>

<script>
import Vue from 'Vue'
import faildAlert from './components/faildAlert'
import progressBar from './components/progressBar'
import router from '../router'
window.eventHub = new Vue();

export default {

	data () {
		return {
			isShowProgress:false,
			requestFaild:false,
			alertText:''
		}
	},
	components: {
		faildAlert,
		progressBar
	},
	created: function(){
		window.eventHub.$on('progress',this.progress);
		window.eventHub.$on('isrequestfaild',this.isRequestFaild);
		window.eventHub.$on('alert',this.alert);
		window.alertDialog = alertContent => {
			this.requestFaild = true;
			this.alertText = alertContent;
		}
		window.showProgress = () => {
			this.isShowProgress = true;
		}
		window.hiddenProgress = () =>{
			this.isShowProgress = false;
		}
		router.replace({ name: 'welcome' });
	},

	methods: {
		progress (newData) {
			this.isShowProgress = newData;
		},
		isRequestFaild(newData) {
			this.requestFaild = newData[0];
			this.alertText = '请求失败：' + newData[1].retMsg;
		},
		sureTip() {
			this.requestFaild = false;
		},
		alert(newData){
			this.requestFaild = newData[0];
			this.alertText = newData[1];
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
