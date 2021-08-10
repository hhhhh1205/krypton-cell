<template>
  <footer>
    <div v-for="(l, i) in myFootList" :key="i">
      <router-link :to="{ name: l.name }">
        <i class="iconfont" :class="l.icon"></i>
        <span>{{ l.text }}</span>
      </router-link>
    </div>
  </footer>
</template>
<script>
import { myFootList } from "@/utils";
export default {
  data() {
    return {
      myFootList,
    };
  },
};
</script>
<style scoped lang='scss'>
footer {
  position: fixed;
  width: 100%;
  height: 49px;
  left: 0;
  bottom: 0;
  background-color: #f1f2f4;
  border-top: solid 2px#eaebec;
  display: flex !important;
  z-index: 100;
  // box-shadow: 0 -1px 5px #d7d7d7;
  div {
    flex: 1;
    height: 49px;
    a {
      display: block;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      padding: 3px 0;
      text-align: center;
      font-family: "微软雅黑";
      color: #999;
      position: relative;
      i {
        width: 100%;
        height: 21px;
        line-height: 21px;
        padding-top: 2px;
        font-size: 22px !important;
      }
      span {
        width: 100%;
        height: 12px;
        line-height: 12px;
        font-size: 14px;
        margin-top: 6px;
      }
      .hot {
        position: absolute;
        top: 3px;
        left: 60%;
        display: inline-block;
        width: 12px;
        height: 16px;
        font-size: 12px;
        line-height: 16px;
        border-radius: 50%;
      }
    }
    .nav-active,
    .router-link-exact-active,
    .router-link-active {
      color: #ff5f16;
      border-color: #ff5f16;
    }
  }
}
</style>