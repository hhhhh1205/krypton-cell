<template>
  <div>
    <ChildrenHeader :show="false"></ChildrenHeader>
    <div class="main_content">
      <div class="one">
        <van-cell
          @click="changeToggle"
          class="personal"
          v-for="(l, i) in liyuan"
          :key="i"
        >
          <van-icon
            v-if="l.show"
            class="home"
            name="wap-home-o"
            size="16"
            color="#F79C99"
          />
          <p v-else style="height: 16px"></p>
          <div class="pic">
            <img :src="l.src" alt="" />
            <span :class="l.cls"></span>
          </div>
          <p class="name" style="margin: 10px auto 0px">{{ l.name }}</p>
          <div class="content">
            <p :style="l.style">
              <span v-if="l.flag" class="iconfont icon-Vrenzheng"></span
              >{{ l.text_1 }}
            </p>
            <p :style="l.style">
              <span v-if="l.flag" class="iconfont icon-Vrenzheng"></span
              >{{ l.text_2 }}
            </p>
          </div>
        </van-cell>
        <div
          @click="toggle = false"
          class="personal"
          v-for="(person, i) in persons"
          :key="i"
        >
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
        <van-action-sheet v-model="toggle">
          <div class="onContent">
            <div class="oneRow">
              <img src="@/assets/1.jpg" alt="" />
              <div class="twoIcon">
                <p><span class="iconfont icon-jubao"></span>举报</p>
                <van-button class="van_btn" round type="default"
                  >关注TA</van-button
                >
              </div>
            </div>
            <p class="twoRow">李源</p>
            <div class="threeRow">
              <p>23<span>关注</span></p>
              <p>18<span>粉丝</span></p>
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
            <van-button
              class="last_btn"
              round
              type="default"
              @click="$router.go(-1)"
              >强制下麦</van-button
            >
          </div>
        </van-action-sheet>
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
    <van-button v-if="say" class="btn" round @click="say = !say">
      <span>按住说话，插一句</span>
    </van-button>
    <div v-else>
      <div class="buttons" v-if="!toggle">
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
        <div class="btn2">
          <p>允许插话</p>
          <van-switch
            v-model="changemic"
            active-color="#F57876"
            inactive-color="#dcdee0"
            class="switch"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ActionSheet } from "vant";
export default {
  data() {
    return {
      toggle: false,
      changemic: true,
      say: true,
      liyuan: [
        {
          show: true,
          src: require("@/assets/1.jpg"),
          cls: "iconfont icon-yuyin2",
          name: "李源",
          flag: true,
          text_1: "股龄8年",
          text_2: "投入不到1万",
          style: "height:18px;",
        },
      ],
      persons: [
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
    changeToggle() {
      this.toggle = !this.toggle;
    },
    changeMic() {
      this.changemic = !this.changemic;
    },
  },
};
</script>

<style lang="scss" scoped>
.main_content {
  height: 100%;
  width: 100%;
  background-color: #fff;
  // position: relative;
  // top: -5px;
  border-radius: 8px;
  overflow-y: scroll;
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
    height: 370px;
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

    ::v-deep .van-overlay {
      position: absolute;
      z-index: 999;
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
  z-index: 12;
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
  z-index: 13;
}

.buttons {
  position: fixed;
  bottom: 20px;
  left: 50%;
  z-index: 12;
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