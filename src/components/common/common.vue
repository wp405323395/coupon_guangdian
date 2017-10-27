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
            width: .6rem;
            height: .6rem;
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
            color: #333333;
            display: block;
        }
        .common_content {
            margin-top: .15rem;
            font-size: .24rem;
            color: #333333;
            line-height: .35rem;
            display: inline-block;
            margin-bottom: .1rem;
        }
        .common_small {
            font-size: .18rem;
            color: #999999;
            float: left;
        }
        .zan {
            float: right;
            display: block;
        }
        .zan::before {
            content: '';
            display: inline-block;
            width: .27rem;
            height: .27rem;
            background-image: url('../../../static/img/zan.png');
            background-size: contain;
            margin-right: .15rem;
            transform: translateY(.02rem);
        }
        .zan_light::before {
            background-image: url('../../../static/img/zan_light.png');
        }
    }
}

</style>

<template lang="html">

<section style="background-color: white;">
    <div v-for="(item, index) in commentList">
        <div class="container">
            <section class="icon">
                <img src="../../../static/img/person_icon.png" alt="">
            </section>
            <section class="cont">
                <span class="common_title">{{item.nickname}}</span>
                <span class="common_content">{{item.commentText}}</span>
                <br>
                <span class="common_small">{{item.commentTime}}</span>
                <span @click="zanClick(item)" :class="{zan_light: item.isPraise}" class="common_small zan">({{item.praise}})</span>
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
            // "commentList": [{
            //         "avatarurl": "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKBEhsV3ibRKGqk6WCeiate542G0VXaLCykMwY7ISASbsuGm67N8xnDwcVlFus6RHucSV6FPe3wnOtQ/0",
            //         "commentText": "这是一条评论",
            //         "commentTime": "10月27号",
            //         "id": 44,
            //         "nickname": "祝远",
            //         "praise": 12,
            //         "isPraise": false,
            //     },
            //
            //     {
            //         "avatarurl": "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKBEhsV3ibRKGqk6WCeiate542G0VXaLCykMwY7ISASbsuGm67N8xnDwcVlFus6RHucSV6FPe3wnOtQ/0",
            //         "commentText": "这是一条评论",
            //         "commentTime": "10月27号",
            //         "id": 36,
            //         "nickname": "祝远",
            //         "praise": 12,
            //         "isPraise": true,
            //
            //     },
            //
            // ]

        }
    },
    methods: {
      zanClick(item) {
        item.isPraise = !item.isPraise;
      }
    },
    props:['commentList']
}

</script>
