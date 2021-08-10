<template>
  <div class="mine">
    <Header title="我的"></Header>
    <div class="notLogin" v-if="flag">
      <img src="@/assets/login.png" alt="" />
      <p class="m_p">登录后即可参加大家的讨论</p>
      <van-button @click="$router.push({ name: 'login' })" class="b_p"
        >微信授权登录</van-button
      >
    </div>
    <div v-else>
      <div class="notice">
        <p>为了防止手机号丢失，请绑定手机号</p>
        <p>去绑定</p>
      </div>
      <div class="userinfo">
        <div class="user">
          <uploadAvatar></uploadAvatar>
          <p>李源</p>
        </div>
        <button>编辑资料</button>
      </div>
      <div class="info">
        <div class="one">
          <p>23<span>关注</span></p>
          <p>18<span>粉丝</span></p>
        </div>
        <div class="two">
          <p>2021年入市</p>
          <p>总投入小于1万</p>
        </div>
        <p class="three">一个股市菜鸟，没什么特别的故事</p>
        <p class="four">
          <span class="iconfont icon-Vrenzheng"></span>
          个人认证 1/3
          <van-icon name="arrow" />
        </p>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: false,
    };
  },
  mounted() {},

  //  关键方法：
  methods: {},
};
</script>

<style lang="scss" scoped>
.mine {
  // height: calc(100%-105px);
  overflow: hidden;
  overflow-y: auto;

  .notLogin {
    display: flex;
    flex-flow: column;
    align-items: center;
    margin-top: 200px;

    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }

    .m_p {
      margin: 25px;
      font-size: 14px;
    }

    .b_p {
      color: #fff;
      background-color: #f58482;
      padding: 10px 20px;
      border-radius: 25px;
      font-size: 14px;
    }
  }

  .notice {
    width: 100%;
    height: 40px;
    background-color: #ffe2e2;
    margin-top: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    p {
      font-size: 14px;
      font-family: "微软雅黑";
    }

    p:first-child {
      color: #c82f14;
      // font-weight: 550;
    }

    p:last-child {
      color: #f8e7e3;
      background-color: #c31f02;
      padding: 5px 16px;
      border-radius: 20px;
    }
  }

  .userinfo {
    padding: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .user {
      display: flex;
      flex-flow: column;
      justify-content: left;
      flex: 1;

      p {
        font-size: 18px;
        font-weight: 800;
        margin-top: 10px;
      }
    }

    button {
      border: solid 1px #f58482;
      color: #f58482;
      font-size: 14px;
      padding: 3px 10px;
      border-radius: 20px;
    }
  }

  .info {
    padding: 0 20px;

    .one {
      display: flex;

      p {
        font-size: 24px;
        font-weight: 600;

        span {
          color: #9a9fa8;
          font-size: 12px;
          margin-left: 5px;
        }
      }

      p:last-child {
        margin-left: 30px;
      }
    }

    .two {
      display: flex;
      flex-flow: column;
      margin: 20px 0;

      p {
        font-size: 16px;
        color: #62615f;
      }
    }

    .three {
      font-size: 16px;
      color: #62615f;
    }

    .four {
      margin-top: 30px;
      background-color: #c31f02;
      color: #ffe2a9;
      height: 40px;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      font-size: 16px;
      width: 150px;

      .iconfont {
        font-size: 20px;
      }
    }
  }
}
</style>