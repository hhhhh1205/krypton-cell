<template>
  <div class="homePage">
    <div class="top">
      <span>官方公告</span>
      <p>为什么你的作品缺乏视觉焦点？用实战案例为你分析。</p>
      <el-link type="primary">了解详情</el-link>
    </div>

    <div class="middle">
      <div class="middle_innerbox" v-for="(data, i) in middleList" :key="i">
        <img :src="data.img" alt="" />
        <div>
          <h3>{{ data.num }}</h3>
          <p>{{ data.text }}</p>
        </div>
      </div>
    </div>

    <div class="bottom">
      <el-tabs
        v-model="activeName"
        @tab-click="handleClick"
        style="height: max-content"
      >
        <el-tab-pane label="付费Live(12)" name="first">
          <div class="none">
            <img src="@/assets/none.png" alt="" />
            <p>暂无数据</p>
          </div>
        </el-tab-pane>
        <el-tab-pane label="音频&图文专辑(4)" name="second">
          <div class="none">
            <img src="@/assets/none.png" alt="" />
            <p>暂无数据</p>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "first",
      middleList: [
        {
          img: "https://xxdd.timing360.com/static/img/4.e597a878.png",
          num: "50,541",
          text: "昨日新增关注数",
        },
        {
          img: "https://xxdd.timing360.com/static/img/1.77cdc732.png",
          num: "3,212",
          text: "粉丝总数",
        },
        {
          img: "https://xxdd.timing360.com/static/img/2.8a817257.png",
          num: "4,532",
          text: "购买总数(人次)",
        },
        {
          img: "https://xxdd.timing360.com/static/img/3.aaf5b4f7.png",
          num: "67,193",
          text: "总收益(T币)",
        },
      ],
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-flow: column;
}

.top {
  display: flex;
  align-items: center;
  background: #fff;
  padding: 10px 20px;
  border: 1px solid #edf1f3;
  font-size: 14px;
  /* box-shadow: 0 2px 12px 0 #e0eaf2; */

  span {
    color: #fff;
    background: #f7b500;
    padding: 5px;
    margin-right: 15px;
  }
}

.middle {
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .middle_innerbox {
    display: flex;
    align-items: center;
    background: #fff;
    padding: 25px 50px 25px 30px;
    border: 1px solid #edf1f3;

    img {
      width: 60px;
      height: 60px;
      margin-right: 20px;
    }

    h3 {
      font-size: 24px;
      text-align: left;
    }

    p {
      color: #afafaf;
      font-size: 14px;
    }
  }
}

.bottom {
  background-color: #fff;
  padding: 15px 30px;
  border: 1px solid #edf1f3;

  .none {
    height: 500px;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;

    img {
      width: 180px;
      height: 120px;
    }

    p {
      color: #8a8a8a;
      margin-top: 10px;
    }
  }
}
</style>