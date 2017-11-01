<style lang="scss" scoped>

.content {
  margin-bottom: .88rem;
    .note_num {
        margin-left: .3rem;
        font-size: .2rem;
        color: #999999;
        display: inline-block;
        line-height: .5rem;
        text-align: justify;
    }

}
.input_area{
  width: 100%;
  height: .88rem;
  background-color: white;
  position: fixed;
  z-index: 1000;
  bottom: 0;
  padding-left: .3rem;
  padding-right: .3rem;
  padding-top: .1rem;
  padding-bottom: .1rem;
  display: flex;
  flex-direction: row;
  input{
    background-color:  #edeaf2;
    flex-grow:1;
    height: 100%;
    text-indent: .15rem;
  }
  button {
    margin-left: .2rem;
    width: 1.2rem;
    background-color: #4436d0;
    color: white;
  }
  button:active{
    background-color: #33289a;
    color: #d4d4d4;
  }
}

</style>

<template lang="html">
<div>
  评论
  <section class="content">
      <span class="note_num">热门评论 ({{retData.hotCommentCount}})</span>
      <common :commentList="retData.hotList">
      </common>
      <span class="note_num">评论 ({{retData.commentCount}})</span>
      <common :commentList="retData.commentList">
      </common>

  </section>
  <section class="input_area">
    <input placeholder="来了就写点什么吧" type="text" name="" value="">
    <button type="button" name="button">发 表</button>
  </section>
</div>


</template>

<script>

import common from '@/components/common/common'
export default {
    data() {
            return {
                "retData": {
                    "commentCount": "22",
                    "commentList": [{
                        "avatarurl": "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKBEhsV3ibRKGqk6WCeiate542G0VXaLCykMwY7ISASbsuGm67N8xnDwcVlFus6RHucSV6FPe3wnOtQ/0",
                        "commentText": "这是一条评论",
                        "commentTime": "10月27号",
                        "id": 44,
                        "nickname": "祝远",
                        "praise": 12,
                        "isPraise": 1,
                    }, {
                        "avatarurl": "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKBEhsV3ibRKGqk6WCeiate542G0VXaLCykMwY7ISASbsuGm67N8xnDwcVlFus6RHucSV6FPe3wnOtQ/0",
                        "commentText": "这是一条评论",
                        "commentTime": "10月27号",
                        "id": 45,
                        "nickname": "祝远",
                        "praise": 12,
                        "isPraise": 1,
                    }, {
                        "avatarurl": "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKBEhsV3ibRKGqk6WCeiate542G0VXaLCykMwY7ISASbsuGm67N8xnDwcVlFus6RHucSV6FPe3wnOtQ/0",
                        "commentText": "这是一条评论",
                        "commentTime": "10月27号",
                        "id": 42,
                        "nickname": "祝远",
                        "praise": 12,
                        "isPraise": 1,
                    }, {
                        "avatarurl": "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKBEhsV3ibRKGqk6WCeiate542G0VXaLCykMwY7ISASbsuGm67N8xnDwcVlFus6RHucSV6FPe3wnOtQ/0",
                        "commentText": "这是一条评论",
                        "commentTime": "10月27号",
                        "id": 43,
                        "nickname": "祝远",
                        "praise": 12,
                        "isPraise": 1,
                    }, {
                        "avatarurl": "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKBEhsV3ibRKGqk6WCeiate542G0VXaLCykMwY7ISASbsuGm67N8xnDwcVlFus6RHucSV6FPe3wnOtQ/0",
                        "commentText": "这是一条评论",
                        "commentTime": "10月27号",
                        "id": 39,
                        "nickname": "祝远",
                        "praise": 12,
                        "isPraise": 1,
                    }, {
                        "avatarurl": "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKBEhsV3ibRKGqk6WCeiate542G0VXaLCykMwY7ISASbsuGm67N8xnDwcVlFus6RHucSV6FPe3wnOtQ/0",
                        "commentText": "这是一条评论",
                        "commentTime": "10月27号",
                        "id": 41,
                        "nickname": "祝远",
                        "praise": 12,
                        "isPraise": 1,
                    }, {
                        "avatarurl": "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKBEhsV3ibRKGqk6WCeiate542G0VXaLCykMwY7ISASbsuGm67N8xnDwcVlFus6RHucSV6FPe3wnOtQ/0",
                        "commentText": "这是一条评论",
                        "commentTime": "10月27号",
                        "id": 40,
                        "nickname": "祝远",
                        "praise": 12,
                        "isPraise": 0,
                    }, {
                        "avatarurl": "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKBEhsV3ibRKGqk6WCeiate542G0VXaLCykMwY7ISASbsuGm67N8xnDwcVlFus6RHucSV6FPe3wnOtQ/0",
                        "commentText": "这是一条评论",
                        "commentTime": "10月27号",
                        "id": 36,
                        "nickname": "祝远",
                        "praise": 12,
                        "isPraise": 1,
                    }, {
                        "avatarurl": "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKBEhsV3ibRKGqk6WCeiate542G0VXaLCykMwY7ISASbsuGm67N8xnDwcVlFus6RHucSV6FPe3wnOtQ/0",
                        "commentText": "这是一条评论",
                        "commentTime": "10月27号",
                        "id": 38,
                        "nickname": "祝远",
                        "praise": 12,
                        "isPraise": 1,
                    }, {
                        "avatarurl": "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKBEhsV3ibRKGqk6WCeiate542G0VXaLCykMwY7ISASbsuGm67N8xnDwcVlFus6RHucSV6FPe3wnOtQ/0",
                        "commentText": "这是一条评论",
                        "commentTime": "10月27号",
                        "id": 37,
                        "nickname": "祝远",
                        "praise": 12,
                        "isPraise": 1,
                    }],
                    "hotCommentCount": "3",
                    "hotList": [{
                        "avatarurl": "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKBEhsV3ibRKGqk6WCeiate542G0VXaLCykMwY7ISASbsuGm67N8xnDwcVlFus6RHucSV6FPe3wnOtQ/0",
                        "commentText": "这是一条评论",
                        "commentTime": "10月27号",
                        "id": 24,
                        "nickname": "祝远",
                        "praise": 44,
                        "isPraise": 1,
                    }, {
                        "avatarurl": "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKBEhsV3ibRKGqk6WCeiate542G0VXaLCykMwY7ISASbsuGm67N8xnDwcVlFus6RHucSV6FPe3wnOtQ/0",
                        "commentText": "这是一条评论",
                        "commentTime": "10月27号",
                        "id": 22,
                        "nickname": "祝远",
                        "praise": 21,
                        "isPraise": 1,
                    }, {
                        "avatarurl": "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKBEhsV3ibRKGqk6WCeiate542G0VXaLCykMwY7ISASbsuGm67N8xnDwcVlFus6RHucSV6FPe3wnOtQ/0",
                        "commentText": "这是一条评论",
                        "commentTime": "10月27号",
                        "id": 23,
                        "nickname": "祝远",
                        "praise": 12,
                        "isPraise": 0,
                    }]
                },
            }
        },
        components: {
            common
        },
}

</script>
