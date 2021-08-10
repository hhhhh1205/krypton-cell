<template>
  <div class="workManagement">
    <a-tabs
      default-active-key="1"
      @change="callback"
      style="text-align: left; padding: 10px 20px"
    >
      <a-tab-pane key="1" tab="全部">
        <div class="main">
          <div class="main_item" v-for="(item, i) in dataArr" :key="i">
            <div class="main_item_left">
              <img
                style="width: 180px; height: 110px; border-radius: 5px"
                :src="item.img"
                alt=""
              />
              <p
                :style="
                  item.vedioType == '搬运'
                    ? 'background: linear-gradient(to right, #2b3dde, #8b03ef)'
                    : 'background: linear-gradient(to right, #539ef5, #62c8fe)'
                "
              >
                {{ item.vedioType }}
              </p>
            </div>
            <div class="main_item_right">
              <div class="left">
                <h3>{{ item.vedioTitle }}</h3>
                <div
                  style="
                    display: flex;
                    color: #000;
                    margin-top: 10px;
                    align-items: center;
                  "
                >
                  话题：
                  <p
                    style="
                      background-color: #e6f7ff;
                      border: 1px solid #91d5ff;
                      color: #5698f4;
                      padding: 2px 10px;
                      border-radius: 5px;
                    "
                  >
                    #{{ item.vedioTopic }}
                  </p>
                </div>
                <div
                  style="
                    display: flex;
                    color: #000;
                    margin-top: 10px;
                    align-items: center;
                  "
                >
                  标签：
                  <div style="display: flex">
                    <p
                      v-for="(l, j) in item.vedioTags"
                      :key="j"
                      style="
                        background-color: #f5f5f5;
                        border: 1px solid #e8e8e8;
                        color: #606060;
                        padding: 2px 10px;
                        border-radius: 5px;
                        margin-right: 10px;
                      "
                    >
                      {{ l }}
                    </p>
                  </div>
                </div>
              </div>
              <div class="right">
                <p style="color: red">{{ item.shenhe }}</p>
                <a-button icon="delete" @click="removeBtn(item.vedioTitle)"
                  >删除</a-button
                >
              </div>
            </div>
          </div>
          <!-- 分页 -->
          <a-config-provider :locale="locale">
            <a-pagination
              size="small"
              :default-current="pageIndex"
              :total="total"
              :default-page-size="pageSize"
              :pageSizeOptions="['5', '7', '10', '12']"
              show-size-changer
              show-quick-jumper
              @change="onChange"
              @showSizeChange="onshowSizeChange"
              style="text-align: right"
            />
          </a-config-provider>
        </div>
      </a-tab-pane>
      <a-tab-pane key="2" tab="异常审核结束" force-render class="abnormal">
        <div>
          <img src="@/assets/nothing.png" alt="" />
          <p>暂无数据</p>
        </div>
      </a-tab-pane>
    </a-tabs>
    <div style="height: 20px; background-color: #f6f7f9"></div>
  </div>
</template>

<script>
import axios from "axios";
import zhCN from "ant-design-vue/lib/locale-provider/zh_CN";

export default {
  data() {
    return {
      dataArr: [],
      locale: zhCN,
      pageIndex: 1, //页码默认为1
      pageSize: 5, //默认每页显示5条数
      total: 0, //数据总数
    };
  },
  props: ["vedioType", "vedioTitle", "vedioTopic", "vedioTags"],
  created() {
    this.addVedioInfo();
  },
  mounted() {},
  methods: {
    // 添加数据
    addVedioInfo() {
      if (this.vedioTitle) {
        var type = "";
        if (this.vedioType == "1") {
          type = "原创";
        } else {
          type = "搬运";
        }
        axios
          .post("/api/add/vedioInfo", {
            img: "https://img2.baidu.com/it/u=807705691,3129085066&fm=26&fmt=auto&gp=0.jpg",
            vedioType: type,
            vedioTitle: this.vedioTitle,
            vedioTopic: this.vedioTopic,
            vedioTags: this.vedioTags,
          })
          .then((res) => {
            this.getVedioInfo();
          });
      } else {
        this.getVedioInfo();
      }
    },

    // 删除数据
    removeBtn(title) {
      axios
        .post("/api/delete/vedioInfo", {
          vedioTitle: title,
        })
        .then((res) => {
          this.getVedioInfo();
        });
    },

    // 分页
    onChange(page, pageSize) {
      this.pageIndex = page;
      this.pageSize = pageSize;
      this.getVedioInfo();
    },

    // 切换每页显示条数
    onshowSizeChange(pageIndex, size) {
      this.pageIndex = pageIndex;
      this.pageSize = size;
      this.getVedioInfo();
    },

    callback(key) {
      console.log(key);
    },

    getVedioInfo() {
      axios
        .post("/api/vedioInfo", {
          pageIndex: this.pageIndex, // 当前页码
          pageSize: this.pageSize, //每页显示条数
        })
        .then((res) => {
          // console.log(res);
          this.dataArr = res.data.vedioInfoList;
          this.total = res.data.total;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.workManagement {
  background: #fff;
}

.main_item {
  background: #fafafa;
  padding: 20px;
  display: flex;
  margin-bottom: 20px;
}

.main_item_left {
  position: relative;
  overflow: hidden;
  margin-right: 20px;

  p {
    position: absolute;
    font-size: 12px;
    padding: 30px 20px 5px 30px;
    top: -27px;
    left: -20px;
    border-radius: 30px;
    color: #fff;
    // background: linear-gradient(to right, #2b3dde, #8b03ef);
    // background: linear-gradient(to right, #539ef5, #62c8fe);
  }
}

.main_item_right {
  display: flex;
  justify-content: space-between;
  width: calc(100% - 200px);

  h3 {
    font-weight: 600;
    font-size: 16px;
  }

  .right {
    display: flex;
    flex-flow: column;
    justify-content: space-between;
  }
}

.abnormal {
  height: 670px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 300px;
    height: 300px;
  }

  p {
    color: #5094f4;
    font-weight: 600;
    font-size: 24px;
    text-align: center;
  }
}
</style>