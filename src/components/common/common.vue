<style lang="scss" scoped>

.devide_line {
    height: 1px;
    background-color: #d4d4d4;
    margin-left: .3rem;
    margin-right: .3rem;
    display: block;
}

.container {
    background-color: white;
    display: flex;
    flex-direction: row;
    .icon {
        img {
            margin-left: .3rem;
            margin-top: .2rem;
            width: .8rem;
            height: .8rem;
            border-radius: .8rem;
        }
    }
    .cont {
        margin-left: .2rem;
        margin-right: .3rem;
        padding-top: .25rem;
        padding-bottom: .2rem;
        width: 100%;
        .common_title {
            font-size: .28rem;
            color: #666666;
            display: block;
            margin-top: .13rem;
        }
        .common_content {
            margin-top: .2rem;
            font-size: .32rem;
            color: #333333;
            line-height: .35rem;
            display: inline-block;
            margin-bottom: .1rem;
        }
        .common_small {
            font-size: .18rem;
            color: #999999;
            display: inline-block;
            margin-top: .2rem;
            float: left;
        }
        .zan {
            float: right;
            display: block;
            transform: translateY(-.02rem);
        }
        .zan::before {
            content: '';
            display: inline-block;
            width: .27rem;
            height: .27rem;
            background-image: url('../../assets/zan.png');
            background-size: contain;
            margin-right: .15rem;
            transform: translateY(.02rem);
            background-repeat: no-repeat;
        }
        .zan_light::before {
            background-image: url('../../assets/zan_light.png');
        }
    }
}

</style>

<template lang="html">

<section style="background-color: white;">
    <div v-for="(item, index) in commentList">
        <div class="container">
            <section class="icon">
                <img :src="item.avatarurl" alt="">
            </section>
            <section class="cont">
                <span class="common_title">{{item.nickname}}</span>
                <span class="common_content">{{item.commentText}}</span>
                <br>
                <span class="common_small">{{item.commentTime}}</span>
                <span @click="zanClick(item)" :class="{zan_light: item.isPraise == '1'}" class="common_small zan">({{item.praise}})</span>
            </section>

        </div>
        <i v-if="index != (commentList.length -1)" class="devide_line"></i>
    </div>

</section>

</template>

<script>

export default {
    data() {
        return {


        }
    },
    methods: {
      zanClick(item) {
        this.$emit('zanClick',item);
      }
    },
    props:['commentList']
}

</script>
