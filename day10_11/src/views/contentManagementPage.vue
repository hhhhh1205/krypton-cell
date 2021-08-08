<template>
  <div class="personalManagementPage">
    <el-button class="releaseBtn" type="primary">发布学习日记</el-button>
    <el-tabs
      v-model="activeName"
      @tab-click="handleClick"
      style="height: max-content"
    >
      <el-tab-pane label="学习日记" name="first">
        <div style="text-align: left">
          <span style="color: #b5b5b5; font-size: 14px">
            在Timing中，用户会用“学习日记”来记录学习历程、分享学习经验，“学习日记”有
            文字+图片 和 文字+视频
            两种样式。一篇好的“学习日记”，能够获得大量的曝光，吸引更多人的关注。
          </span>
          <el-link type="primary">了解更多>></el-link>
        </div>

        <div class="releaseContent">
          <div
            class="releaseContent_innerBox"
            v-for="(journa, i) in journalList"
            :key="i"
          >
            <img src="@/assets/pic.png" alt="" />
            <div class="releaseContent_right">
              <div class="onerow">
                <h3>{{ journa.name }}</h3>
                <i class="el-icon-delete"></i>
              </div>
              <i class="right_time">{{ journa.date }}</i>
              <p class="right_text">{{ journa.text }}</p>
              <img :src="journa.img" alt="" />
              <div class="littleIcon">
                <p>
                  <i class="el-icon-thumb"></i
                  ><span>{{ journa.thumbsUp }}</span>
                </p>
                <p>
                  <i class="el-icon-chat-dot-round"></i
                  ><span>{{ journa.reply }}</span>
                </p>
                <p>
                  <i class="el-icon-share"></i
                  ><span>{{ journa.sendAgain }}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </el-tab-pane>

      <el-tab-pane label="长视频" name="second">
        <div class="none">
          <img src="@/assets/none.png" alt="" />
          <p>暂无数据</p>
        </div>
      </el-tab-pane>

      <el-pagination
        style="margin-top: 20px; text-align: right"
        @current-change="handleCurrentChange"
        @prev-click="prevPage"
        @next-click="nextPage"
        :page-size="3"
        background
        layout="prev, pager, next"
        :total="total"
      >
      </el-pagination>
    </el-tabs>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      activeName: "first",
      journalList: [],
      total: 0,
      pageIndex: 1,
    };
  },
  created() {
    this.getJournalList();
  },
  methods: {
    handleCurrentChange(val) {
      this.pageIndex = val;
      this.getJournalList();
    },

    prevPage() {
      this.pageIndex--;
      this.getJournalList();
    },

    nextPage() {
      this.pageIndex++;
      this.getJournalList();
    },

    handleClick(tab, event) {
      console.log(tab, event);
    },

    getJournalList() {
      axios
        .post("/api/publishJournal", {
          pageIndex: this.pageIndex,
          pageSize: 3,
        })
        .then((res) => {
          console.log(res);
          this.journalList = res.data.journalList;
          this.total = res.data.total;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.personalManagementPage {
  background: #fff;
  padding: 20px 30px;
  position: relative;
}

.releaseBtn {
  padding: 10px;
  position: absolute;
  top: 12px;
  right: 30px;
}

.releaseContent_innerBox {
  display: flex;
  margin-top: 20px;
}

.releaseContent_innerBox > img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 20px;
}

.releaseContent_right {
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  width: 100%;
  border-bottom: 2px solid #e1e2e4;
  padding-bottom: 20px;

  img {
    width: 200px;
    height: 200px;
    margin: 10px 0;
  }

  p {
    text-align: left;
  }
}

.right_text {
  width: 100%;
  padding-right: 60px;
  box-sizing: border-box;
}

.right_time {
  color: #acaaaa;
  font-size: 14px;
}

.onerow {
  display: flex;
  width: 100%;
  justify-content: space-between;

  i {
    font-size: 20px;
    cursor: pointer;
  }
}

.littleIcon {
  display: flex;

  p {
    margin-right: 20px;
  }

  i {
    color: #888888;
    margin-right: 3px;
    cursor: pointer;
  }
}

.none {
  height: 640px;
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
</style>