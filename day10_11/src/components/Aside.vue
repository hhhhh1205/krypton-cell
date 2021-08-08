<template>
  <div class="aside">
    <el-row class="tac">
      <el-col :span="12">
        <el-menu
          :router="true"
          :default-openeds="openeds"
          :default-active="$route.path"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-menu-item index="/homePage">
            <i class="el-icon-s-shop"></i>
            <span slot="title">主页</span>
          </el-menu-item>

          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>管理</span>
            </template>
            <el-menu-item index="/contentManagementPage">
              内容管理
            </el-menu-item>
            <el-menu-item index="/personalManagementPage">
              个人主页管理
            </el-menu-item>
          </el-submenu>

          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-s-data"></i>
              <span>涨粉</span>
            </template>
            <el-menu-item index="/classification">赞助自习室</el-menu-item>
            <el-menu-item index="/answerQuestions">答疑</el-menu-item>
            <el-menu-item index="/organizeLive">举办live</el-menu-item>
          </el-submenu>

          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-coin"></i>
              <span>创收</span>
            </template>
            <el-menu-item index="/releaseAlbum">发布专辑</el-menu-item>
            <el-menu-item index="/organizePaidLive">举办付费Live</el-menu-item>
          </el-submenu>

          <el-menu-item index="/myProperty">
            <i class="el-icon-s-finance"></i>
            <span slot="title">我的资产</span>
          </el-menu-item>

          <el-menu-item index="/myNetdisk">
            <i class="el-icon-upload"></i>
            <span slot="title">我的网盘</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      defaultActive: 1,
      openeds: ["2", "3", "4"],
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style scoped>
.aside {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}

.aside >>> .el-row .el-menu-vertical-demo {
  padding-bottom: 50px;
}

.aside >>> .el-row .el-menu-vertical-demo li {
  text-align: left;
}

.aside >>> .el-row .el-menu-vertical-demo li ul li {
  text-color: #c7c7c7;
}

.aside >>> .el-col-12 {
  width: 100%;
  height: 100%;
}
</style>
