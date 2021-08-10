<template>
  <div class="hall">
    <Header title="排骨饭"></Header>
    <p class="content">
      <span class="iconfont icon-xiaomai"></span>
      和谐沟通，勿信小道消息
      <span class="iconfont icon-xiaomai"></span>
    </p>

    <div class="van_cirle">
      <van-circle
        layer-color="#E1E1E1"
        color="#F57876"
        v-model="currentRate"
        :rate="100"
        :speed="0.1"
        size="240px"
      >
        <p class="one">{{ nowDate }}，{{ weekday }}</p>
        <p class="two">{{ toggle ? "距离收盘" : "距离开盘" }}</p>
        <p class="time">{{ countDown }}</p>
        <p class="three">本月还剩{{ remainingDays }}个交易日</p>
      </van-circle>
    </div>
    <p class="middle_content">
      <van-icon name="minus" />
      {{ toggle ? "开盘啦，来聊聊实时战况" : "等待开盘的时候，来聊聊近期战况" }}
      <van-icon name="minus" />
    </p>

    <div class="list">
      <div class="innerList" v-for="(data, i) in list" :key="i">
        <div class="speakPeople">
          <img src="../..//assets/list_1.png" alt="" />
          <p>{{ data.speakPeople }}人在聊</p>
        </div>
        <p class="message">{{ data.message }}</p>
        <div class="list_bootom">
          <div class="imgs">
            <img
              style="width: 25px; height: 25px"
              v-for="(img, i) in data.pics"
              :key="i"
              :src="img"
              alt=""
            />
          </div>
          <span class="onlinePeople">{{ data.onlinePeople }}人在线</span>
        </div>
      </div>
    </div>

    <!-- <van-sticky :offset-top="615"> -->
    <div class="buttons">
      <van-button class="btn" round @click="createRoom">
        <van-icon class="van_icon" name="plus" />
        <span>创建房间</span>
      </van-button>
      <van-button class="btn" round>
        <van-icon class="van_icon" name="friends-o" />
        <span>随机加入</span>
      </van-button>
    </div>
    <!-- </van-sticky> -->
    <Footer></Footer>
  </div>
</template>

<script>
import moment from "moment";
import "moment/locale/zh-cn";

export default {
  data() {
    return {
      // currentRate: 0,
      remainingDays: "",
      toggle: "",
      countDown: "",
      list: [
        {
          speakPeople: 3,
          message: "跌！跌！跌！跌你妹！！！！",
          pics: [
            require("@/assets/1.jpg"),
            require("@/assets/2.jpg"),
            require("@/assets/3.jpg"),
          ],
          onlinePeople: 14,
        },
        {
          speakPeople: 4,
          message: "一天亏20万，想死",
          pics: [
            require("@/assets/5.jpg"),
            require("@/assets/3.jpg"),
            require("@/assets/4.jpg"),
          ],
          onlinePeople: 8,
        },
        {
          speakPeople: 2,
          message: "我已经在悬崖边了",
          pics: [
            require("@/assets/2.jpg"),
            require("@/assets/4.jpg"),
            require("@/assets/1.jpg"),
          ],
          onlinePeople: 9,
        },
        {
          speakPeople: 1,
          message: "房子也卖了，老婆也跟别人跑了",
          pics: [
            require("@/assets/4.jpg"),
            require("@/assets/3.jpg"),
            require("@/assets/5.jpg"),
          ],
          onlinePeople: 20,
        },
      ],
    };
  },
  computed: {
    nowDate() {
      return moment().format("LL").substring(5);
    },
    weekday() {
      moment.locale();
      return moment().format("dddd");
    },
    currentRate: {
      get() {
        let arr = this.countDown.split(":");
        let count_down = Math.ceil((1620 - arr[0] * 60 - arr[1] * 1) * 0.14);
        return count_down;
      },
      set() {
        let arr = this.countDown.split(":");
        let count_down = Math.ceil(((1620 - arr[0]) * 60 - arr[1] * 1) * 0.14);
        return count_down;
      },
    },
  },
  methods: {
    createRoom() {
      this.$router.push({ name: "personal" });
    },
  },
  mounted() {
    var nowTime = moment().format("LTS");
    if (nowTime >= "09:30:00" && nowTime <= "12:30:00") {
      this.toggle = true;
    } else {
      this.toggle = false;
    }

    function stringToDate(dateString) {
      dateString = dateString.split("-");
      return new Date(dateString[0], dateString[1] - 1, dateString[2]);
    }

    function countWorkDay(date1, date2) {
      date1 = stringToDate(date1);
      date2 = stringToDate(date2);
      let delta = (date2 - date1) / (1000 * 60 * 60 * 24) + 1; // 计算出总时间

      let weeks = 0;
      for (let i = 0; i < delta; i++) {
        if (date1.getDay() == 0 || date1.getDay() == 6) weeks++; // 若为周六或周天则加1
        date1 = date1.valueOf();
        date1 += 1000 * 60 * 60 * 24;
        date1 = new Date(date1);
      }
      return delta - weeks;
    }
    // console.log(countWorkDay('2017-08-01', '2017-08-06'));  // 4

    // 获取当前月的最后一天
    function getCurrentMonthLast() {
      var date = new Date();
      var currentMonth = date.getMonth();
      var nextMonth = ++currentMonth;
      var nextMonthFirstDay = new Date(date.getFullYear(), nextMonth, 1);
      var oneDay = 1000 * 60 * 60 * 24;
      var lastTime = new Date(nextMonthFirstDay - oneDay);
      var month = parseInt(lastTime.getMonth() + 1);
      var day = lastTime.getDate();
      if (month < 10) {
        month = "0" + month;
      }
      if (day < 10) {
        day = "0" + day;
      }
      return date.getFullYear() + "-" + month + "-" + day;
    }

    this.remainingDays = countWorkDay(
      moment().format("yyyy-MM-DD"),
      getCurrentMonthLast()
    );

    function DateAdd(interval, number, date) {
      switch (interval) {
        case "y ": {
          date.setFullYear(date.getFullYear() + number);
          return date;
          break;
        }
        case "q ": {
          date.setMonth(date.getMonth() + number * 3);
          return date;
          break;
        }
        case "m ": {
          date.setMonth(date.getMonth() + number);
          return date;
          break;
        }
        case "w ": {
          date.setDate(date.getDate() + number * 7);
          return date;
          break;
        }
        case "d ": {
          date.setDate(date.getDate() + number);
          return date;
          break;
        }
        case "h ": {
          date.setHours(date.getHours() + number);
          return date;
          break;
        }
        case "m ": {
          date.setMinutes(date.getMinutes() + number);
          return date;
          break;
        }
        case "s ": {
          date.setSeconds(date.getSeconds() + number);
          return date;
          break;
        }
        default: {
          date.setDate(d.getDate() + number);
          return date;
          break;
        }
      }
    }

    var now = new Date();
    var newDate = DateAdd("d ", 1, now);
    var tomorrow = moment(newDate).format("yyyy-MM-DD 09:30:00");

    function timeLag(ago, future) {
      let date = future.getTime() - ago.getTime();
      let days = Math.floor(date / (24 * 3600 * 1000));
      let leave1 = date % (24 * 3600 * 1000); //计算天数后剩余的毫秒数
      let hours =
        Math.floor(leave1 / (3600 * 1000)) < 10
          ? "0" + Math.floor(leave1 / (3600 * 1000))
          : Math.floor(leave1 / (3600 * 1000));
      //计算相差分钟数
      let leave2 = leave1 % (3600 * 1000); //计算小时数后剩余的毫秒数
      let minutes =
        Math.floor(leave2 / (60 * 1000)) < 10
          ? "0" + Math.floor(leave2 / (60 * 1000))
          : Math.floor(leave2 / (60 * 1000));
      //计算相差秒数
      let leave3 = leave2 % (60 * 1000); //计算分钟数后剩余的毫秒数
      let seconds =
        Math.round(leave3 / 1000) < 10
          ? "0" + Math.round(leave3 / 1000)
          : Math.round(leave3 / 1000);
      return hours + ":" + minutes + ":" + seconds;
    }

    var timer = setInterval(() => {
      this.countDown = timeLag(new Date(), new Date(tomorrow));
    }, 1000);
  },
};
</script>

<style lang="scss" scoped>
.hall {
  overflow: hidden;
  overflow-y: auto;
  position: relative;

  .content {
    margin-top: 50px;
    text-align: center;
    color: #f48483;
    font-size: 16px;

    .iconfont {
      font-weight: bolder;
    }

    span:first-child {
      display: inline-block;
      transform: scaleX(-1);
    }
  }

  .van_cirle {
    width: min-content;
    margin: 30px auto 15px;
    position: relative;

    .one,
    .two,
    .three {
      position: absolute;
      left: 50%;
      -webkit-transform: translateX(-50%);
      -ms-transform: translateX(-50%);
      -o-transform: translateX(-50%);
      transform: translateX(-50%);
    }

    .one,
    .three {
      color: #8d897a;
    }

    .one {
      top: 35px;
    }

    .two {
      font-size: 14px;
      font-weight: 600;
      top: 65px;
    }

    .three {
      top: 150px;
    }

    .time {
      position: absolute;
      top: 40%;
      left: 50%;
      transform: translateX(-50%);
      font-size: 36px;
      font-weight: bolder;
    }
  }

  .middle_content {
    padding: 0 10px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    font-weight: 600;

    ::v-deep .van-icon {
      font-size: 42px;
      color: #d8d6ca;
      font-weight: 100;
    }
  }

  .list {
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 100px;

    .innerList {
      background-color: #393a3f;
      width: 47%;
      min-height: 120px;
      border-radius: 20px;
      margin-bottom: 20px;
      padding: 10px 20px 10px 10px;

      .speakPeople {
        position: relative;

        img {
          width: 80px;
          height: 20px;
        }

        p {
          color: #bbbbbd;
          padding-left: 25px;
          position: absolute;
          top: 4px;
        }
      }

      .message {
        color: #f5f4f5;
        font-size: 14px;
        min-height: 40px;
        margin: 10px 0 12px;
      }
      .list_bootom {
        display: flex;
        align-items: center;

        .imgs {
          display: flex;
          img {
            border-radius: 50%;
            border: 2px solid #fff;
          }

          img:nth-of-type(2) {
            position: relative;
            right: 5px;
          }

          img:nth-of-type(3) {
            position: relative;
            right: 10px;
          }
        }

        .onlinePeople {
          color: #bbbbbd;
        }
      }
    }
  }

  .buttons {
    // display: flex;
    // justify-content: space-around;
    position: fixed;
    bottom: 65px;
    padding: 0 20px;

    .btn:first-child {
      margin-right: 15px;
    }

    .btn {
      color: #fff;
      width: 160px;
      height: 40px;

      .van_icon {
        position: relative;
        top: 2px;
      }

      span {
        display: inline-block;
        margin-left: 5px;
      }
    }

    .btn:first-child {
      background-color: #ff6361;
      border: 1px solid #ff6361;
    }

    .btn:last-child {
      background-color: #ffa63d;
      border: 1px solid #ffa63d;
    }
  }
}
</style>