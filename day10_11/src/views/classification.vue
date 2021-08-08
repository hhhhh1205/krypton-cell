<template>
  <div class="classification">
    <div class="hed">
      <img
        style="width: 100%; height: 300px"
        src="https://xxdd.timing360.com/static/img/banner.07093683.png"
        alt=""
      />
      <div class="h_left">
        <div class="box">
          <h2>认证即可获得</h2>
          <div style="margin-bottom: -10px">
            <img src="@/assets/2.png" />
            开头视频直播、答疑、制作付费内容等猩猩点灯内所有功能使用权
          </div>
          <div><img src="@/assets/v.png" />官方认证标签，增加账号信任度</div>
          <div class="shenhe">审核服务费：0元/次</div>
        </div>
      </div>
    </div>

    <div class="content">
      <div class="left_box">
        <img
          src="https://xxdd.timing360.com/static/img/personal.be12e4e3.png"
          alt=""
        />
        <h3>个人认证</h3>
        <p style="font-size: 15px; margin: 10px 0">
          提供真实身份的证明材料完成认证
        </p>
        <el-button
          type="primary"
          round
          @click="$router.push({ name: 'personalAuthentication' })"
          >去认证</el-button
        >
      </div>

      <div class="line"></div>
      <div class="right_box">
        <img
          src="https://xxdd.timing360.com/static/img/company.b4041479.png"
          alt=""
        />
        <h3>机构认证</h3>
        <p style="font-size: 15px; margin: 10px 0">
          提供机构证明材料与运营者身份信息完成认证
        </p>
        <el-button
          type="primary"
          round
          @click="$router.push({ name: 'agencyCertification' })"
          >去认证</el-button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "分类",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.classification {
  background: #fff;
}

.hed {
  position: relative;
  box-shadow: none;
  height: 260px;
  padding: 0px;
  color: #f49f25;
}

h2 {
  font-size: 24px;
  font-weight: 600;
}

h3 {
  font-size: 20px;
  font-weight: 600;
}

.h_left {
  position: absolute;
  width: 500px;
  height: 260px;
  line-height: 40px;
  left: 0;
  top: 0;
  .box {
    width: 460px;
    font-size: 15px;
    text-align: left;
    margin-left: 78px;
    margin-top: 50px;
    img {
      width: 12px;
      height: 12px;
      margin-right: 3px;
    }
  }
  .shenhe {
    text-align: right;
    font-size: 12px;
  }
}
.content {
  justify-content: space-around;
  display: flex;
  margin-top: 100px;
  height: 410px;
  .line {
    width: 0.01px;
    height: 246px;
    border: 1px solid #474747;
    opacity: 0.2;
    border-radius: 2px;
  }
  img {
    width: 160px;
    height: 120px;
  }
}
</style>