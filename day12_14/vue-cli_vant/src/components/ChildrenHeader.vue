<template>
  <div class="childrenHeader">
    <van-nav-bar class="header" fixed :placeholder="true" :border="false">
      <template #left>
        <van-icon
          class="home"
          v-if="show"
          name="wap-home-o"
          size="28"
          color="#fff"
          @click="gohall"
        />
        <van-icon
          class="left"
          v-else
          name="arrow-left"
          size="28"
          color="#fff"
          @click="goback"
        />
      </template>
    </van-nav-bar>
    <div class="content">
      <p class="text">李源创建的今日开盘分析快来看看吧</p>
      <p class="icon_text" v-if="show" @click="share">
        <span class="iconfont icon-7"></span>
        分享
      </p>
    </div>
  </div>
</template>

<script>
import { Dialog } from "vant";

export default {
  props: {
    title: String,
    show: {
      type: Boolean,
      default: true,
    },
    flag: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
    gohall() {
      this.$router.push({ name: "hall" });
    },
    share() {
      Dialog.alert({
        message: "暂不支持分享",
      }).then(() => {
        // on close
      });
    },
  },
};
</script>

<style lang="scss"scoped>
.childrenHeader {
  .home {
    border: 1px solid white;
    border-radius: 50%;
    padding: 3px;
  }

  .home,
  .left {
    position: relative;
    top: 6px;
  }

  ::v-deep .van-nav-bar__content {
    background-color: #f57876;
  }

  ::v-deep .van-nav-bar__title {
    font-weight: 900;
  }

  .content {
    height: 50px;
    width: 100%;
    color: #fff;
    font-size: 18px;
    display: flex;
    align-items: center;
    position: fixed;
    top: 46px;
    background-color: #f57876;

    .text {
      // width: 240px;
      overflow: hidden; /*内容会被修剪，并且其余内容是不可见的。*/
      text-overflow: ellipsis; /*显示省略符号来代表被修剪的文本*/
      white-space: nowrap;
      text-indent: 20px;
    }

    .icon_text {
      width: 120px;
      text-align: center;
    }
  }
}
</style>
