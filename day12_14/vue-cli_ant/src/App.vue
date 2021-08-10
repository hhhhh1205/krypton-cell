<template>
  <div id="app">
    <a-layout style="height: 100%; box-sizing: border-box">
      <a-layout-header
        class="header"
        style="
          background: #fff;
          box-shadow: 0 3px 10px #e0eaf2;
          position: relative;
          z-index: 1;
          height: 50px;
        "
      >
        <div class="logo">
          <img
            style="width: 35px; height: 35px; border-radius: 50%"
            src="@/assets/T_sky_logo.jpg"
            alt=""
          />
          <p>Timing · 创作者中心</p>
        </div>
        <div class="right">
          <div>
            <a-icon type="sound" />
            <p>刷数据将于第二天早上</p>
          </div>
          <a-icon type="message" />
          <img
            style="width: 35px; height: 35px; border-radius: 50%"
            src="@/assets/pic.png"
            alt=""
          />
        </div>
      </a-layout-header>

      <a-layout>
        <a-layout-sider width="200" style="background: #fff; padding-top: 35px">
          <a-button type="primary" style="width: 70%; margin-bottom: 30px">
            <a-icon type="cloud-upload" />发布作品
          </a-button>
          <a-menu
            mode="inline"
            :defaultSelectedKeys="[$route.path]"
            :selectedKeys="[$route.path]"
            :style="{ borderRight: 0, 'text-align': 'left' }"
          >
            <a-menu-item key="/homePage">
              <router-link to="/homePage">
                <a-icon type="home" />首页
              </router-link>
            </a-menu-item>

            <a-menu-item key="/workManagement">
              <router-link to="/workManagement">
                <a-icon type="appstore" />作品管理
              </router-link>
            </a-menu-item>

            <a-menu-item key="/videoData">
              <router-link to="/videoData">
                <a-icon type="bar-chart" />视频数据
              </router-link>
            </a-menu-item>
          </a-menu>
        </a-layout-sider>

        <a-layout style="padding: 24px; background-color: #f6f7f9">
          <a-layout-content
            :style="{
              background: '#fff',
            }"
          >
            <transition name="mychange" mode="out-in">
              <router-view></router-view>
            </transition>
          </a-layout-content>
        </a-layout>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      collapsed: false,
      defaultSelected: "home",
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  box-sizing: border-box;
}

.header {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.logo {
  display: flex;
  align-items: center;
  height: 100%;

  p {
    color: #5094f3;
    margin-left: 5px;
  }
}

.right {
  display: flex;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    background: #fafafa;
    padding: 0px 20px;
    border-radius: 20px;
    margin-right: 10px;

    p {
      height: 30px;
      line-height: 30px;
      font-size: 14px;
      margin-left: 10px;
    }
  }

  > i {
    width: 70px;
    height: 70px;
    line-height: 70px;
    position: relative;
    top: 2px;
  }
}
</style>
