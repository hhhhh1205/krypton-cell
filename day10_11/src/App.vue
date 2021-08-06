<template>
  <div id="app">
    <el-container>
      <el-header
        style="
          margin-bottom: 30px;
          box-shadow: 0 3px 10px #e0eaf2;
          background: #fff;
        "
      >
        <div class="head">
          <div class="head_left">
            <img src="@/assets/timing.png" alt="" />
            <p>猩猩点灯</p>
          </div>
          <div class="head_right">
            <img class="right_img1" src="@/assets/bell.png" alt="" />
            <span>12</span>
            <img src="@/assets/pic.png" alt="" />
          </div>
        </div>
      </el-header>
      <el-container style="padding: 0 100px">
        <el-aside
          width="200px"
          style="margin-right: 30px; box-shadow: 0 2px 12px 0 #e0eaf2"
        >
          <Aside />
        </el-aside>
        <el-main style="background: skyblue; padding: 0">
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Aside from "@/components/Aside.vue";

export default {
  components: {
    Aside,
  },
};
</script>

<style lang="scss">
html,
body {
  height: 100%;
  background: #f7f9fa;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.head {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
}

.head_left {
  display: flex;
  align-items: center;
}

.head_left p {
  color: #0dd89e;
  margin-left: 10px;
  font-weight: bold;
  font-size: 24px;
  font-family: "Microsoft YaHei";
}

.head_right {
  display: flex;
  align-items: center;
}

.head_right img:first-of-type {
  width: 30px;
  height: 30px;
  margin-right: 5px;
}

.head_right img:last-of-type {
  border-radius: 50%;
}

.head_right span {
  font-size: 12px;
  color: #fff;
  background: #f56c6c;
  width: 35px;
  border-radius: 10px;
  position: relative;
  right: 20px;
  bottom: 12px;
}

img {
  width: 35px;
  height: 35px;
}
</style>
