<template>
  <div class="homePage">
    <div class="coverChoice">
      <p>封面选择</p>
      <div style="margin-top: 20px; margin-bottom: 20px; padding: 0 100px">
        <div style="display: flex; justify-content: space-between">
          <div v-for="(item, i) in picList" :key="i">
            <img style="width: 280px; height: 150px" :src="item.url" alt="" />
            <a-radio style="margin-top: 12px; font-size: 12px" disabled>
              {{ item.tit }}</a-radio
            >
          </div>
          <div class="uppic">
            <a-upload
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              list-type="picture-card"
              :file-list="fileList"
              @preview="handlePreview"
              @change="handleChange"
              style="width: 280px; height: 150px; padding: 0"
            >
              <div
                v-if="fileList.length < 1"
                style="
                  width: 260px;
                  height: 130px;
                  display: flex;
                  flex-flow: column;
                  align-items: center;
                  justify-content: center;
                "
              >
                <img
                  style="width: 35px; height: 35px"
                  src="@/assets/T_sky_logo.jpg"
                  alt=""
                />
                <div class="ant-upload-text">点击上传自定义封面</div>
              </div>
            </a-upload>
            <a-modal
              :visible="previewVisible"
              :footer="null"
              @cancel="handleCancel"
            >
              <img
                alt="example"
                :src="previewImage"
                style="width: 450px; height: 270px"
              />
            </a-modal>
            <a-radio style="margin-top: 12px; font-size: 12px"> 自定义</a-radio>
          </div>
        </div>
        <!-- 进度条部分 -->
        <div
          style="
            display: flex;
            flex-flow: column;
            justify-content: space-between;
            margin-top: 50px;
            padding-left: 25px;
          "
        >
          <p style="text-align: left; font-size: 14px">
            <a-icon type="link" /> 这里是文件.MP4
          </p>
          <div
            style="
              display: flex;
              justify-content: space-between;
              align-items: center;
            "
          >
            <a-progress :percent="perc" status="active" style="width: 700px" />
            <a-button><a-icon type="redo" />重新上传</a-button>
          </div>
        </div>
      </div>
    </div>

    <div style="height: 20px; background-color: #f6f7f9"></div>

    <div class="videoInfo">
      <p>视频信息</p>
      <div style="text-align: left">
        <a-form-model
          ref="ruleForm"
          :model="form"
          :rules="rules"
          :label-col="labelCol"
          :wrapper-col="wrapperCol"
        >
          <!-- 视频标题 -->
          <a-form-model-item ref="name" label="视频标题" prop="name">
            <a-input
              placeholder="取个好的标题有利于获得更多的推荐，建议15个字左右 "
              v-model="form.name"
              @blur="
                () => {
                  $refs.name.onFieldBlur();
                }
              "
            />
          </a-form-model-item>
          <!-- 视频类型 -->
          <a-form-model-item label="视频类型" prop="resource">
            <a-radio-group v-model="form.resource">
              <a-radio value="1" style="margin: 0 50px 0 20px"> 原创 </a-radio>
              <a-radio value="2"> 搬运 </a-radio>
            </a-radio-group>
          </a-form-model-item>
          <!-- 分类选择 -->
          <a-form-model-item label="分类选择" prop="region">
            <a-cascader
              v-model="form.region"
              placeholder="请选择分类"
              :options="options"
              change-on-select
              @change="onChange"
            />
          </a-form-model-item>
          <!-- 视频标签 -->
          <a-form-model-item label="视频标签" prop="type">
            <div class="tag">
              <div>
                <template v-for="tag in tags">
                  <a-tooltip v-if="tag.length > 20" :key="tag" :title="tag">
                    <a-tag
                      :key="tag"
                      :closable="true"
                      @close="() => handleClose(tag)"
                    >
                      {{ `${tag.slice(0, 20)}...` }}
                    </a-tag>
                  </a-tooltip>
                  <a-tag
                    v-else
                    :key="tag"
                    :closable="true"
                    @close="() => handleClose(tag)"
                  >
                    {{ tag }}
                  </a-tag>
                </template>
                <a-input
                  placeholder="标签可以为演员/来源/视频类型/视频领域，输入内容按回车Enter创建标签"
                  ref="input"
                  type="text"
                  size="small"
                  :style="{
                    display: 'block',
                    marginTop: '10px',
                    padding: '15px 10px',
                  }"
                  :value="inputValue"
                  @change="handleInputChange"
                  @blur="handleInputConfirm"
                  @keyup.enter="handleInputConfirm"
                />
              </div>
            </div>
          </a-form-model-item>
          <!-- 参与话题 -->
          <a-form-model-item label="参与话题">
            <a-input
              v-model="form.desc"
              type="textarea"
              placeholder="#参与话题"
            />
          </a-form-model-item>
          <a-form-model-item
            :wrapper-col="{ span: 14, offset: 4 }"
            style="text-align: center"
          >
            <a-button
              type="primary"
              @click="onSubmit"
              style="width: 160px; height: 40px; font-size: 18px"
            >
              发布视频
            </a-button>
          </a-form-model-item>
        </a-form-model>
      </div>
    </div>
    <div style="height: 20px; background-color: #f6f7f9"></div>
  </div>
</template>

<script>
import axios from "axios";

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

export default {
  data() {
    return {
      perc: 50,
      previewVisible: false,
      previewImage: "",
      picList: [
        {
          url: "https://img0.baidu.com/it/u=3565836488,1310667661&fm=253&fmt=auto&app=120&f=JPEG?w=690&h=388",
          tit: "视频截图一",
        },
        {
          url: "https://img2.baidu.com/it/u=2502582811,4087987637&fm=11&fmt=auto&gp=0.jpg",
          tit: "视频截图二",
        },
        {
          url: "https://img0.baidu.com/it/u=2831811467,1523242613&fm=11&fmt=auto&gp=0.jpg",
          tit: "视频截图三",
        },
      ],
      fileList: [
        // {
        //   uid: "-4",
        //   name: "image.png",
        //   status: "done",
        //   url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
        // },
      ],
      options: [],
      tags: [],
      inputVisible: false,
      inputValue: "",
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      other: "",
      form: {
        name: "",
        region: undefined,
        date1: undefined,
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      rules: {
        name: [
          {
            required: true,
            message: "请输入视频标题",
            trigger: "blur",
          },
          {
            min: 1,
            max: 30,
            message: "标题长度应在1~30之间",
            trigger: "blur",
          },
        ],
        region: [
          {
            required: true,
            message: "请选择视频分类",
            trigger: "change",
          },
        ],
        type: [
          {
            type: "array",
            // required: true,
            message: "请输入/选择至少一个视频标签",
            trigger: "change",
          },
        ],
        resource: [
          {
            required: true,
            message: "请选择视频类型   ",
            trigger: "change",
          },
        ],
      },
    };
  },
  created() {
    this.getVedioInfo();
  },
  methods: {
    handleCancel() {
      this.previewVisible = false;
    },
    async handlePreview(file) {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj);
      }
      this.previewImage = file.url || file.preview;
      this.previewVisible = true;
    },
    handleChange(info) {
      console.log(info);
      var that = this;
      this.fileList = info.fileList;
      if (info.file.status == "uploading") {
        var time = setInterval(function () {
          that.perc++;
          if (that.perc > 98) {
            clearInterval(time);
          }
        }, 10);
      }
      if (info.file.status == "done") {
        that.perc = 0;
      }
    },

    onChange(value) {
      // console.log(value);
    },

    onSubmit() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          console.log("submit!");
          this.$router.push({
            name: "workManagement",
            params: {
              vedioType: this.form.resource,
              vedioTitle: this.form.name,
              vedioTopic: this.form.desc,
              vedioTags: this.tags,
            },
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },

    handleClose(removedTag) {
      const tags = this.tags.filter((tag) => tag !== removedTag);
      // console.log(tags);
      this.tags = tags;
    },

    showInput() {
      this.inputVisible = true;
      this.$nextTick(function () {
        this.$refs.input.focus();
      });
    },

    handleInputChange(e) {
      this.inputValue = e.target.value;
    },

    handleInputConfirm() {
      const inputValue = this.inputValue;
      let tags = this.tags;
      if (inputValue && tags.indexOf(inputValue) === -1) {
        tags = [...tags, inputValue];
      }
      // console.log(tags);
      Object.assign(this, {
        tags,
        inputVisible: false,
        inputValue: "",
      });
    },

    getVedioInfo() {
      axios.post("/api/vedioInfoAll", {}).then((res) => {
        // console.log(res);
        var index = res.data.total;
        this.tags = res.data.vedioInfoList[index - 1].vedioAllTags;
        this.options = res.data.vedioInfoList[index - 1].vedioSort;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.coverChoice {
  > p {
    font-size: 14px;
    font-weight: 600;
    text-align: left;
    padding: 10px 20px;
    border-bottom: 2px solid #f1f1f1;
  }
}

.videoInfo {
  background: #fff;
  padding-bottom: 20px;

  > p {
    font-size: 14px;
    font-weight: 600;
    text-align: left;
    padding: 10px 20px;
    border-bottom: 2px solid #f1f1f1;
  }

  > div {
    margin-top: 20px;
  }
}

::v-deep .ant-upload-list-picture-card .ant-upload-list-item {
  width: 260px;
  height: 151px;
}

::v-deep .ant-upload-list-picture-card .ant-upload-list-item-info::before {
  left: 0;
}
</style>