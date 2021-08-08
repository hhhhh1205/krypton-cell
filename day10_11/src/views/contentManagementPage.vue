<template>
  <div class="personalManagementPage">
    <el-button
      class="releaseBtn"
      type="primary"
      @click="dialogFormVisible = true"
      >发布学习日记</el-button
    >
    <el-dialog title="编写学习日记" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-input
          type="textarea"
          placeholder="编写学习日记"
          rows="10"
          style="width: 70%"
          label-width="50px"
          v-model="form.note"
          autocomplete="off"
        ></el-input>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addJournal">发 布</el-button>
      </div>
    </el-dialog>

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
                <i
                  class="el-icon-delete"
                  @click="removeJournal(journa.name)"
                ></i>
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
      </el-tab-pane>

      <el-tab-pane label="长视频" name="second">
        <div class="none">
          <img src="@/assets/none.png" alt="" />
          <p>暂无数据</p>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";

export default {
  data() {
    return {
      activeName: "first",
      journalList: [],
      total: 0,
      pageIndex: 1,
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        note: "",
      },
      formLabelWidth: "120px",
    };
  },
  created() {
    this.getJournalList();
  },
  methods: {
    addJournal() {
      if (this.form.note.trim() == "") {
        this.$message.error("输入为空，将不执行任何操作");
        console.log("空空如也");
      } else {
        axios
          .post("/api/add/publishJournal", {
            name: "猩猩",
            date: moment().format("YYYY-MM-DD HH:mm:ss"),
            text: this.form.note.trim(),
            img: "https://img0.baidu.com/it/u=1844305177,3689457290&fm=253&fmt=auto&app=120&f=GIF?w=300&h=300",
            thumbsUp: 0,
            reply: 0,
            sendAgain: 0,
          })
          .then((res) => {
            // console.log(res);
            this.form.note = "";
            this.total = res.data.total;
            this.getJournalList();
          });
      }
      this.dialogFormVisible = false;
    },

    removeJournal(name) {
      this.$confirm("确定要删除这条学习日记吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!",
          });
          console.log(name);
          axios
            .post("/api/delete/publishJournal", {
              name,
            })
            .then((res) => {
              // console.log(res);
              this.getJournalList();
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },

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
          // console.log(res);
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
  z-index: 1;
}

.dialog-footer {
  text-align: center;
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