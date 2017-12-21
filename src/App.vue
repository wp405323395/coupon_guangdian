<style lang="scss">

@import './style/common';
.router-fade-enter-active,
.router-fade-leave-active {
    transition: opacity .3s;
}

.router-fade-enter,
.router-fade-leave-active {
    opacity: 0;
}

</style>

<template>

<div>
    <progress-bar v-if="isShowProgress"></progress-bar>
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

import progressBar from './components/progressBar'
import Vue from 'vue'
window.document.bus = new Vue();
export default {
    name: 'login',
    data() {
        return {
            isShowProgress: false
        }
    },
		mounted: function () {
			document.bus.$on('showProgress', (isShowProgress) => {
    		this.isShowProgress = isShowProgress;
  		})
		},
    components: {
        progressBar
    }
}

</script>
