<template>
  <div>
    <ChildrenHeader :show="false"></ChildrenHeader>
    <div class="main_content">
      <div class="one">
        <div class="personal" v-for="(person, i) in persons" :key="i">
          <van-icon
            v-if="person.show"
            class="home"
            name="wap-home-o"
            size="16"
            color="#F79C99"
          />
          <p v-else style="height: 16px"></p>
          <div class="pic">
            <img :src="person.src" alt="" />
            <span :class="person.cls"></span>
          </div>
          <p class="name">{{ person.name }}</p>
          <div class="content">
            <p :style="person.style">
              <span v-if="person.flag" class="iconfont icon-Vrenzheng"></span
              >{{ person.text_1 }}
            </p>
            <p :style="person.style">
              <span v-if="person.flag" class="iconfont icon-Vrenzheng"></span
              >{{ person.text_2 }}
            </p>
          </div>
        </div>
      </div>

      <div class="two">
        <div
          class="simplePerson"
          v-for="(simplePerson, index) in simplePersons"
          :key="index"
        >
          <img :src="simplePerson.src" alt="" />
          <span class="iconfont icon-yuyin1"></span>
          <p>{{ simplePerson.name }}</p>
        </div>
      </div>
    </div>

    <div class="listener">
      <p>听众</p>
      <div class="users">
        <div v-for="(listener, j) in listeners" :key="j">
          <img :src="listener.src" alt="" />
          <p>{{ listener.name }}</p>
        </div>
      </div>
    </div>
    <div class="buttons">
      <van-button plain type="danger" round class="btn1" @click="mute">
        <span class="iconfont icon-yuyinjin"></span>
        <p>静音</p>
      </van-button>
      <van-button plain round class="btn2" @click="mute">
        <p>下麦</p>
      </van-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      persons: [
        {
          show: true,
          src: require("@/assets/1.jpg"),
          cls: "iconfont icon-yuyin2",
          name: "李源",
          flag: true,
          text_1: "股龄8年",
          text_2: "投入不到1万",
        },
        {
          show: false,
          src: require("@/assets/2.jpg"),
          cls: "iconfont icon-yuyin",
          name: "欧阳美丽",
          flag: false,
          text_1: "股龄8年",
          text_2: "投入不到1万",
          style: "color:#B6B5B2;text-align:center;",
        },
        {
          show: false,
          src: require("@/assets/3.jpg"),
          cls: "iconfont icon-yuyin2",
          name: "啦啦阿拉啦",
          flag: true,
          text_1: "股龄3年",
          text_2: "投入5万",
        },
        {
          show: false,
          src: require("@/assets/4.jpg"),
          cls: "iconfont icon-yuyinjin",
          name: "鸡汁damogu",
          flag: false,
          text_1: "股龄10年",
          text_2: "投入12万",
          style: "color:#B6B5B2;text-align:center;",
        },
      ],
      simplePersons: [
        {
          src: require("@/assets/2.jpg"),
          name: "欧阳美丽",
        },
        {
          src: require("@/assets/3.jpg"),
          name: "爆辣算啦微辣",
        },
        {
          src: require("@/assets/4.jpg"),
          name: "奥尔良鸡腿堡",
        },
      ],
      listeners: [
        {
          src: require("@/assets/2.jpg"),
          name: "欧阳美丽",
        },
        {
          src: require("@/assets/3.jpg"),
          name: "爆辣算啦微辣",
        },
        {
          src: require("@/assets/4.jpg"),
          name: "奥尔良鸡腿堡",
        },
        {
          src: require("@/assets/5.jpg"),
          name: "二月",
        },
      ],
    };
  },
  methods: {
    // join() {
    //   this.$router.push({ name: "discussion" });
    // },
  },
};
</script>


<style lang="scss" scoped>
.main_content {
  height: 100%;
  width: 100%;
  background-color: #fff;
  position: relative;
  top: -5px;
  border-radius: 8px;
  overflow: auto;
  overflow-x: hidden;
  position: fixed;
  top: 88px;
  z-index: 11;
  padding: 20px;
  display: flex;
  justify-content: space-between;

  .one {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    height: 380px;
    width: 75%;

    .personal {
      border: 2px solid #f1b561;
      background-color: #fdf8f0;
      border-radius: 10px;
      width: 120px;
      padding: 5px 5px 10px;
      height: 170px;

      .pic {
        position: relative;
        img {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          margin: 0 auto;
        }

        span {
          position: absolute;
          right: 15px;
          bottom: 0;
          color: #f9931a;
          background-color: #fff;
          padding: 4px;
          border-radius: 50%;
          border: 1px solid #ebeaeb;
        }
      }

      .name {
        font-size: 16px;
        text-align: center;
        color: #3f3e3d;
        margin: 10px auto;
      }

      .content {
        span {
          color: #6a5d73;
          margin-right: 3px;
        }
        p {
          color: #876435;
          font-size: 14px;
        }
      }
    }
  }

  .two {
    height: 380px;
    display: flex;
    flex-flow: column;
    align-items: center;
    padding: 20px 0;

    .simplePerson {
      position: relative;
      height: 33%;

      img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        padding: 2px;
        border: 2px solid #f98f10;
      }

      span {
        position: absolute;
        right: 0px;
        top: 42px;
        font-size: 12px;
        color: #fff;
        background-color: #f9951e;
        padding: 2px 6px;
        border-radius: 40%;
      }

      p {
        text-align: center;
        margin-top: 8px;
      }
    }
  }
}

.listener {
  padding: 0 20px;
  display: flex;
  flex-flow: column;
  position: relative;
  z-index: 12;
  position: relative;
  top: 445px;

  p {
    color: #a5a5a5;
    font-size: 18px;
    margin-bottom: 10px;
  }

  .users {
    display: flex;
    justify-content: space-between;

    div {
      display: flex;
      flex-flow: column;
      align-items: center;

      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }

      p {
        color: #424242;
        font-size: 14px;
        overflow: hidden;
        white-space: nowrap;
        /*文字超出宽度则显示ellipsis省略号*/
        text-overflow: ellipsis;
        width: 70px;
        text-align: center;
        margin-top: 5px;
      }
    }
  }
}

.buttons {
  position: fixed;
  bottom: 20px;
  left: 50%;
  z-index: 12;
  margin: 0 auto;

  .btn1 {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    padding: 5px;
    color: #f57876;
    border-color: #f57876;
    transform: translateX(-50%);

    span {
      font-size: 24px;
    }

    p {
      font-size: 12px;
    }
  }

  .btn2 {
    border-color: #000;
    height: 30px;
    padding: 0px 10px;
    transform: translateX(80%);
  }
}
</style>