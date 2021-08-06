<template>
  <div class="labelList">
    <!-- 顶部搜索 -->
    <div class="top">
      <el-button type="primary" @click="showAddForm(1)"> +新建 </el-button>
      <div class="search">
        <p>标签搜索：</p>
        <el-input placeholder="请输入" v-model="input" clearable> </el-input>
        <p>状态：</p>
        <el-select v-model="value" clearable placeholder="全部">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <el-button type="primary" @click="searchBtn">查询</el-button>
        <el-button @click="resetBtn">重置</el-button>
      </div>
    </div>
    <!-- end顶部搜索 -->

    <!-- 添加数据 -->
    <el-dialog title="添加数据" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="标签名" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="状态" :label-width="formLabelWidth">
          <el-select v-model="form.status" placeholder="请选择状态">
            <el-option label="已关联" value="已关联"></el-option>
            <el-option label="未关联" value="未关联"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="关键主题词" :label-width="formLabelWidth">
          <el-input v-model="form.topic" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="modifyBtn">确 定</el-button>
      </div>
    </el-dialog>
    <!-- end添加数据 -->

    <!-- 表格内容 -->
    <div class="showList">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="labelName" label="标签名称" width="250">
        </el-table-column>
        <el-table-column prop="labelState" label="状态" width="250">
          <template v-slot="scope">
            <div
              :class="scope.row.labelState == '已关联' ? 'greendot' : 'reddot'"
            ></div>
            <span>{{ scope.row.labelState }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="topicWord" label="关键主题词"> </el-table-column>
        <el-table-column prop="operation" label="操作" width="250">
          <template v-slot="operation">
            <el-link
              type="primary"
              @click="
                updateBtn(
                  operation.row.labelName,
                  operation.row.labelState,
                  operation.row.topicWord,
                  operation.row.id
                )
              "
              >修改</el-link
            >
            <el-link type="primary" @click="removeLabel(operation.row.id)"
              >删除</el-link
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- end表格内容 -->

    <!-- 分页 -->
    <div class="bottom">
      <el-pagination
        @current-change="handleCurrentChange"
        @prev-click="prevPage"
        @next-click="nextPage"
        :page-size="10"
        background
        layout="prev, pager, next"
        :total="total"
      >
      </el-pagination>
    </div>
    <!-- end分页 -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      options: [
        {
          value: "全部",
          label: "全部",
        },
        {
          value: "已关联",
          label: "已关联",
        },
        {
          value: "未关联",
          label: "未关联",
        },
      ],
      value: "",
      input: "",
      tableData: [],
      pageIndex: 1,
      total: 100,
      dialogFormVisible: false,
      form: {
        id: "",
        name: "",
        status: "",
        date1: "",
        date2: "",
        topic: "",
        num: "",
      },
      formLabelWidth: "120px",
    };
  },
  created() {
    this.getLabel();
  },
  methods: {
    searchBtn() {
      var searchList = [];
      if (this.input != "") {
        if ((this.value == "") | (this.value == "全部")) {
          this.tableData.filter((item) => {
            if (item.labelName.indexOf(this.input) != -1) {
              searchList.push(item);
            }
          });
        } else {
          this.tableData.filter((item) => {
            if (
              (item.labelName.indexOf(this.input) != -1) &
              (item.labelState.indexOf(this.value) != -1)
            ) {
              searchList.push(item);
            }
          });
        }
      }

      if (this.input == "") {
        if ((this.value == "") | (this.value == "全部")) {
          searchList = this.tableData;
        } else {
          this.tableData.filter((item) => {
            if (item.labelState.indexOf(this.value) != -1) {
              searchList.push(item);
            }
          });
        }
      }

      this.tableData = searchList;
    },

    resetBtn() {
      this.input = "";
      this.value = "";
      this.getLabel();
    },

    modifyBtn() {
      if (this.form.num == "1") {
        this.addLabel();
        this.form.num = "";
      } else {
        this.updateLabel();
      }
    },

    updateBtn(labelName, labelState, topicWord, id) {
      this.dialogFormVisible = true;
      this.form.name = labelName;
      this.form.status = labelState;
      this.form.topic = topicWord;
      this.form.id = id;
    },

    removeLabel(id) {
      console.log(id);
      axios
        .post("/api/delete/label", {
          id,
        })
        .then((res) => {
          // console.log(res);
          this.getLabel();
        });
    },

    updateLabel() {
      axios
        .post("/api/update/label", {
          labelName: this.form.name.trim(),
          labelState: this.form.status.trim(),
          topicWord: this.form.topic.trim(),
          id: this.form.id,
        })
        .then((res) => {
          console.log(res);
          this.total = res.data.total;
          this.getLabel();
        });
      this.dialogFormVisible = false;
    },

    addLabel() {
      if (
        (this.form.name.trim() == "") |
        (this.form.topic.trim() == "") |
        (this.form.status.trim() == "")
      ) {
        this.$message.error("输入为空，将不执行任何操作");
        console.log("空空如也");
      } else {
        axios
          .post("/api/add/label", {
            labelName: this.form.name.trim(),
            labelState: this.form.status.trim(),
            topicWord: this.form.topic.trim(),
          })
          .then((res) => {
            console.log(res);
            this.total = res.data.total;
            this.getLabel();
          });
      }
      this.dialogFormVisible = false;
    },

    showAddForm(num) {
      this.dialogFormVisible = true;
      this.form.name = "";
      this.form.status = "";
      this.form.topic = "";
      this.form.num = num;
    },

    handleCurrentChange(val) {
      this.pageIndex = val;
      this.getLabel();
    },

    prevPage() {
      this.pageIndex--;
      this.getLabel();
    },

    nextPage() {
      this.pageIndex++;
      this.getLabel();
    },

    // 获取列表数据
    getLabel() {
      axios
        .get("/api/label", {
          params: {
            pageIndex: this.pageIndex,
            pageSize: 10,
          },
        })
        .then((res) => {
          console.log(res);
          this.total = res.data.total;
          this.tableData = res.data.label;
        });
    },
  },
};
</script>

<style scoped>
.showList >>> .el-table_1_column_2 .cell .reddot {
  width: 6px;
  height: 6px;
  background-color: rgb(247, 85, 85);
  border-radius: 50%;
  float: left;
  margin-top: 10px;
  margin-right: 5px;
}

.showList >>> .el-table_1_column_2 .cell .greendot {
  width: 6px;
  height: 6px;
  background-color: #52c41a;
  border-radius: 50%;
  float: left;
  margin-top: 10px;
  margin-right: 5px;
}

.labelList {
  padding: 20px 100px;
}

.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.top >>> .el-button {
  padding: 10px 15px;
}

.search {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.search > p {
  width: max-content;
  font-size: 14px;
  color: #747988;
}

.search >>> .el-input {
  width: 200px;
  margin-right: 20px;
}

.search >>> .el-button {
  padding: 10px 15px;
}

.showList {
  margin-top: 30px;
}

.showList >>> .has-gutter th,
.showList >>> .has-gutter tr {
  background-color: #f5f6fa;
}

.showList >>> .el-table__body .cell {
  margin-left: 50px;
}

.showList
  >>> .el-table__body-wrapper
  .el-table_1_column_4
  .cell
  a:first-of-type {
  margin-right: 20px;
}

.bottom {
  margin-top: 30px;
  text-align: right;
}
</style>