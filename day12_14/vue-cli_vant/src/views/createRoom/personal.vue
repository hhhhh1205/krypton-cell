<template>
  <div>
    <ChildrenHeader :show="true"></ChildrenHeader>
    <div class="main_content">
      <div class="one">
        <div
          class="personal none"
          v-if="persons.length < 1"
          style="border: 2px solid #f1b561"
        >
          <van-icon
            class="home"
            name="wap-home-o"
            size="16"
            color="#F79C99"
            style="position: relative; top: -70px; left: -50px"
          />
        </div>

        <div
          v-else
          style="
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;
          "
        >
          <!-- 房主 -->
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
              <img :src="person.src" alt="" @click="showActionSheet(4)" />
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

          <div
            v-if="others.length < 1"
            class="personal none"
            @click="upMic(0)"
            :style="others == 0 ? 'margin-left:12px' : ''"
          >
            <span class="iconfont icon-icon-test"></span>
            <p>点击上麦</p>
          </div>
          <div v-else class="personal" v-for="(person, j) in others">
            <p style="height: 16px"></p>
            <div class="pic">
              <img :src="person.src" alt="" @click="showActionSheet(j)" />
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

          <div class="personal none" @click="upMic(1)" v-if="others.length < 2">
            <span class="iconfont icon-icon-test"></span>
            <p>点击上麦</p>
          </div>
          <div class="personal none" @click="upMic(2)" v-if="others.length < 3">
            <span class="iconfont icon-icon-test"></span>
            <p>点击上麦</p>
          </div>
        </div>

        <van-action-sheet v-model="toggle">
          <div class="onContent">
            <div class="oneRow">
              <img :src="img" alt="" />
              <div class="twoIcon">
                <p><span class="iconfont icon-jubao"></span>举报</p>
                <van-button class="van_btn" round type="default"
                  >关注TA</van-button
                >
              </div>
            </div>
            <p class="twoRow">{{ name }}</p>
            <div class="threeRow">
              <p>{{ num1 }}<span>关注</span></p>
              <p>{{ num2 }}<span>粉丝</span></p>
            </div>
            <div class="fourRow">
              <p><span class="iconfont icon-Vrenzheng"></span>2021年入市</p>
              <p>总投入小于1万</p>
            </div>
            <div class="fiveRow">
              <p>
                <span class="iconfont icon-Vrenzheng"></span
                >待在这个市场五年，持续研究5年，如果是一个实业，已经非常了然。可是面对这个市场，仍然还有困惑。到现在，还在不断完善自己的投资体系。
              </p>
            </div>
            <van-button class="last_btn" round type="default" @click="mute"
              >强制下麦</van-button
            >
          </div>
        </van-action-sheet>

        <div class="personal none" v-if="persons.length < 1">
          <span class="iconfont icon-icon-test"></span>
          <p>点击上麦</p>
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
    <div class="listener" v-if="!toggle">
      <p>听众</p>
      <div class="users">
        <div v-for="(listener, j) in listeners" :key="j">
          <img :src="listener.src" alt="" />
          <p>{{ listener.name }}</p>
        </div>
      </div>
    </div>

    <div v-if="!toggle">
      <div v-if="flag_2">
        <van-button class="btn" round @click="login" v-if="flag_1">
          <span>点击登录，参与讨论</span>
        </van-button>
        <van-button class="btn" round v-else @click="saySomething">
          <span>按住说话，插一句</span>
        </van-button>
      </div>

      <div v-else>
        <div class="buttons">
          <van-button
            plain
            type="danger"
            round
            class="btn1 btn1_1"
            @click="changeMic"
            v-if="changemic"
          >
            <span class="iconfont icon-yuyin"></span>
            <p>静音</p>
          </van-button>
          <van-button
            plain
            type="danger"
            round
            class="btn1 btn1_2"
            @click="changeMic"
            v-else
          >
            <span class="iconfont icon-yuyinjin"></span>
            <p>静音</p>
          </van-button>
          <div class="btn2" v-if="changemic">
            <p>允许插话</p>
            <van-switch
              v-model="changemic"
              active-color="#F57876"
              inactive-color="#dcdee0"
              class="switch"
            />
          </div>
          <div v-else class="btn2">
            <van-button
              plain
              round
              @click="mute"
              style="border: 1px solid #000; height: 40px"
            >
              <p>下麦</p>
            </van-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toggle: false,
      flag_1: true,
      flag_2: true,
      changemic: true,
      persons: [],
      others: [],
      othersPeople: [
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

      img: require("@/assets/1.jpg"),
      name: "李源",
      num1: 23,
      num2: 18,

      sheet: [
        {
          img: require("@/assets/1.jpg"),
          name: "李源",
          num1: 23,
          num2: 18,
        },
        {
          img: require("@/assets/2.jpg"),
          name: "欧阳美丽",
          num1: 87,
          num2: 32,
        },
        {
          img: require("@/assets/3.jpg"),
          name: "啦啦阿拉啦",
          num1: 5,
          num2: 328,
        },
        {
          img: require("@/assets/4.jpg"),
          name: "鸡汁damogu",
          num1: 103,
          num2: 4,
        },
      ],
    };
  },

  // watch: {
  //   nowSheet(newVal, oldVal) {
  //     console.log(newVal, oldVal);
  //   },
  // },
  methods: {
    changeMic() {
      this.changemic = !this.changemic;
    },

    saySomething() {
      this.flag_2 = !this.flag_2;
    },

    showActionSheet(num) {
      if (num == "4") {
        this.img = this.sheet[0].img;
        this.name = this.sheet[0].name;
        this.num1 = this.sheet[0].num1;
        this.num2 = this.sheet[0].num2;
      } else {
        this.img = this.sheet[num + 1].img;
        this.name = this.sheet[num + 1].name;
        this.num1 = this.sheet[num + 1].num1;
        this.num2 = this.sheet[num + 1].num2;
      }
      // console.log(this.showSheet);
      this.toggle = !this.toggle;
    },

    login() {
      this.flag_1 = !this.flag_1;
      this.persons.push({
        show: true,
        src: require("@/assets/1.jpg"),
        cls: "iconfont icon-yuyin2",
        name: "李源",
        flag: true,
        text_1: "股龄8年",
        text_2: "投入不到1万",
      });
    },

    upMic(i) {
      // this.$router.push({ name: "upMic" });
      if (this.others.length < 4) {
        this.others.push(this.othersPeople[i]);
        // console.log(this.others);
      }
    },

    mute() {
      this.persons = [];
      this.flag_1 = true;
      this.flag_2 = true;
      this.toggle = false;
      this.others = [];
    },
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
  // z-index: 11;
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

    .none {
      border: none;
      color: #d9ccb6;
      display: flex;
      flex-flow: column;
      align-items: center;
      justify-content: center;

      span {
        font-size: 32px;
      }

      p {
        text-align: center;
        font-size: 16px;
        margin-top: 10px;
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

.onContent {
  padding: 15px;
  background-color: #f1f2f4;

  .oneRow {
    display: flex;
    justify-content: space-between;

    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }

    .twoIcon {
      color: #bdbebe;
      display: flex;
      flex-flow: column;

      p {
        text-align: right;

        span {
          font-size: 12px;
          margin-right: 5px;
        }
      }
    }

    .van_btn {
      color: #f3afaf;
      border-color: #f3afaf;
      height: 25px;
      font-size: 12px;
      top: 30px;
    }
  }

  .twoRow {
    font-size: 18px;
    font-weight: 800;
    margin-top: 10px;
  }

  .threeRow {
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

  .fourRow {
    span {
      color: #c11400;
    }

    p {
      font-size: 14px;
    }

    p:last-child {
      color: #939393;
    }
  }

  .fiveRow {
    span {
      color: #c11400;
    }

    p {
      font-size: 14px;
    }
  }

  .last_btn {
    width: 100%;
    height: 40px;
    margin-top: 20px;
  }
}

.listener {
  padding: 0 20px;
  display: flex;
  flex-flow: column;
  position: relative;
  // z-index: 12;
  position: relative;
  top: 435px;

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

.btn {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  padding: 0 40px;
  font-size: 16px;
  width: 250px;
  background-color: #f57876;
  // z-index: 13;
}

.buttons {
  position: fixed;
  bottom: 20px;
  left: 50%;
  // z-index: 12;
  margin: 0 auto;
  display: flex;

  .btn1 {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    padding: 5px;
    transform: translateX(-50%);
  }

  .btn1_1 {
    color: #7a7a7a;
    border-color: #7a7a7a;

    span {
      font-size: 24px;
    }

    p {
      font-size: 12px;
    }

    .btn1_2 {
      color: #f57876;
      border-color: #f57876;

      span {
        font-size: 24px;
      }

      p {
        font-size: 12px;
      }
    }
  }

  .btn2 {
    transform: translateX(100%);
    margin-top: 5px;

    p {
      text-align: center;
    }

    .switch {
      width: 50px;
      height: 20px;

      ::v-deep .van-switch__node {
        height: 20px;
        width: 20px;
      }
    }
  }
}
</style>