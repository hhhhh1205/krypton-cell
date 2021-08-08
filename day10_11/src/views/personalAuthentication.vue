<template>
  <div class="personalAuthentication">
    <el-breadcrumb
      separator="/"
      style="
        border-bottom: 1px solid #e4e7ed;
        padding-bottom: 15px;
        margin-bottom: 15px;
      "
    >
      <el-breadcrumb-item :to="{ name: 'classification' }">
        认证
      </el-breadcrumb-item>
      <el-breadcrumb-item>个人认证</el-breadcrumb-item>
    </el-breadcrumb>

    <div class="firstStep">
      <h3>第一步：填写机构信息</h3>
    </div>

    <div class="secondStep">
      <h3>第一步：运营者信息信息</h3>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.personalAuthentication {
  padding: 20px 30px;
  background: #fff;
}
</style>