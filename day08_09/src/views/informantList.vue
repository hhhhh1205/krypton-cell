<template>
  <div class="informantList">
    <div class="search">
      <p>被举报答疑室ID</p>
      <el-input placeholder="userID" v-model="input" @blur="showAgain">
      </el-input>
      <el-button type="primary" @click="searchBtn">搜索</el-button>
    </div>
    <div class="showList">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="informantID" label="举报人ID" width="120">
        </el-table-column>
        <el-table-column prop="informantName" label="举报人用户名" width="150">
        </el-table-column>
        <el-table-column prop="teacherID" label="老师ID" width="120">
        </el-table-column>
        <el-table-column prop="teacherName" label="老师用户名" width="150">
        </el-table-column>
        <el-table-column prop="QARoom" label="答疑室名字" width="180">
        </el-table-column>
        <el-table-column prop="seeInformation" label="查看举报信息" width="120">
          <el-button>查看</el-button>
        </el-table-column>
        <el-table-column prop="reportType" label="举报类型" width="120">
        </el-table-column>
        <el-table-column prop="reportDateTime" label="举报时间" width="200">
        </el-table-column>
        <el-table-column prop="beReportedTimes" label="被举报次数" width="120">
        </el-table-column>
        <el-table-column prop="operation" label="操作">
          <el-button type="primary">忽略</el-button>
        </el-table-column>
      </el-table>
    </div>
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
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      tableData: [],
      pageIndex: 1,
      input: "",
      total: 100,
    };
  },
  created() {
    this.getList();
  },
  methods: {
    showAgain() {
      if (this.input == "") {
        this.getList();
      }
    },

    searchBtn() {
      var searchList = [];
      this.tableData.filter((item) => {
        if (item.informantID.toString().indexOf(this.input) != -1) {
          searchList.push(item);
        }
      });
      this.tableData = searchList;
    },

    handleCurrentChange(val) {
      this.pageIndex = val;
      this.getList();
    },

    prevPage() {
      this.pageIndex--;
      this.getList();
    },

    nextPage() {
      this.pageIndex++;
      this.getList();
    },

    // 获取列表数据
    getList() {
      axios
        .post("/api/list", {
          pageIndex: this.pageIndex,
          pageSize: 10,
        })
        .then((res) => {
          console.log(res);
          this.total = res.data.total;
          this.tableData = res.data.list;
        });
    },
  },
};
</script>

<style scoped>
.informantList {
  padding: 20px 100px;
}

.search {
  display: flex;
  align-items: center;
}

.search > p {
  width: max-content;
  font-size: 14px;
  color: #8e93a1;
  margin: 0 15px;
}

.search >>> .el-input {
  width: 200px;
  margin-right: 10px;
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

.showList >>> .cell {
  text-align: center;
}

.showList >>> .el-button {
  padding: 6px 12px;
}

.bottom {
  margin-top: 30px;
  text-align: right;
}
</style>
