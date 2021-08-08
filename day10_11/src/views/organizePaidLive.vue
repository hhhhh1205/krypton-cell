<template>
  <div class="organizePaidLive">
    <el-breadcrumb
      separator="/"
      style="
        border-bottom: 1px solid #e4e7ed;
        padding-bottom: 15px;
        margin-bottom: 15px;
      "
    >
      <el-breadcrumb-item to=""> 付费Live </el-breadcrumb-item>
      <el-breadcrumb-item>创建付费Live</el-breadcrumb-item>
    </el-breadcrumb>

    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <div class="cover">
        <el-form-item label="专辑主题" prop="name">
          <el-input
            v-model="ruleForm.name"
            placeholder="起一个响亮的名字吧"
          ></el-input>
          <p>建议用内容主题为专辑命名。如：剽悍晨读|每天6分钟共读1本好书</p>
        </el-form-item>

        <el-form-item label="专辑简介" prop="desc">
          <el-input
            placeholder="可以介绍你的专辑主题，卖点与作者，用来吸引更多的用户购买你的专辑"
            style="text-align: left; width: 500px"
            type="textarea"
            rows="5"
            v-model="ruleForm.desc"
          ></el-input>
        </el-form-item>

        <el-form-item label="专辑封面" prop="face">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <template v-else>
              <img
                src="@/assets/upload.png"
                alt=""
                style="width: 42px; height: 42px; position: relative; top: 10px"
              />
              <p style="color: #aaaaab; position: relative; bottom: 10px">
                请上传图片
              </p>
            </template>
          </el-upload>
          <img
            style="width: 20px; height: 20px; position: relative; top: 5px"
            class="img"
            src="@/assets/1.png"
            alt=""
          />
          <span style="color: grey; font-size: 14px"
            >建议尺寸374*544，JPG、PNG格式，图片小于10M</span
          >
        </el-form-item>
      </div>

      <div class="outline">
        <div class="outline_inner" v-for="(content, i) in theme" :key="i">
          <div style="display: flex; justify-content: space-between">
            <h3>编写提纲（{{ i + 1 }}）</h3>
            <i
              class="el-icon-delete"
              style="cursor: pointer"
              @click="deleteTheme"
            ></i>
          </div>

          <el-form-item :label="'第' + (i + 1) + '期主题'">
            <el-input
              v-model="ruleForm.outline_name"
              placeholder="起一个响亮的名字吧"
            ></el-input>
          </el-form-item>

          <el-form-item label="开始时间">
            <el-input
              v-model="ruleForm.outline_time"
              placeholder="请选择开始时间"
            ></el-input>
          </el-form-item>

          <el-form-item label="课时数">
            <el-input
              v-model="ruleForm.outline_num"
              placeholder="请选择课时数"
            ></el-input>
          </el-form-item>
        </div>

        <el-button
          type="primary"
          plain
          style="margin-bottom: 20px; position: relative; right: 370px"
          @click="addTheme"
          >添加主题</el-button
        >
      </div>

      <div class="price">
        <el-form-item label="课时定价" prop="num">
          <el-input
            v-model="ruleForm.num"
            placeholder="0"
            style="width: 320px"
          ></el-input>
          <p style="float: right; position: relative; right: 60px">T币</p>
          <p style="white-space: nowrap">
            本期Live一共有<span style="color: #23dba7"> 1 </span>期，总共<span
              style="color: #23dba7"
            >
              1 </span
            >课时，一共<span style="color: #23dba7"> 1 </span>T币
          </p>
          <div>
            <img
              style="width: 20px; height: 20px; position: relative; top: 5px"
              class="img"
              src="@/assets/1.png"
              alt=""
            />
            <span style="color: #23dba7; font-size: 14px"
              >每期Live直播结束后，付费Live的总价格会进行衰减，衰减规则</span
            >
          </div>
        </el-form-item>
      </div>

      <el-form-item>
        <el-button
          type="primary"
          @click="submitForm('ruleForm')"
          style="position: relative; right: 415px"
          >立即创建</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      theme: [
        {
          name: "",
          date: "",
          num: "",
        },
        {
          name: "",
          date: "",
          num: "",
        },
      ],
      imageUrl: "",
      ruleForm: {
        outline_name: "",
        outline_time: "",
        outline_num: "",
        name: "",
        region: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
        num: "",
      },
      rules: {
        num: [
          {
            required: true,
            type: "number",
          },
        ],
        name: [
          { required: true, message: "请输入专辑主题", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        region: [
          { required: true, message: "请输入专辑简介", trigger: "change" },
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change",
          },
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" },
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }],
        face: [
          {
            required: true,
            message: "请上传图片",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    deleteTheme() {
      if (this.theme.length > 1) {
        this.$confirm("确定要删除这条信息吗?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        })
          .then(() => {
            this.$message({
              type: "success",
              message: "删除成功!",
            });
            this.theme.pop();
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "已取消删除",
            });
          });
      } else {
        this.$confirm("只剩一条了，再删就没有了，不能继续往下删了", "提示")
          .then(() => {})
          .catch(() => {});
      }
    },
    addTheme() {
      this.theme.push({
        name: "",
        date: "",
        num: "",
      });
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style lang="scss" scoped>
.organizePaidLive {
  background: #fff;
  padding: 20px 30px;
}

.cover {
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  text-align: left;

  p {
    color: rgba(128, 128, 128, 0.774);
    line-height: 20px;
    margin-top: 10px;
  }
}

.outline {
  border-bottom: 1px solid #e4e7ed;
}

.outline_inner {
  padding-right: 500px;
  padding-top: 20px;
  border-top: 1px solid #e4e7ed;

  h3 {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 15px;
  }
}

.price {
  margin-top: 20px;
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  text-align: left;
}

.avatar-uploader {
  width: 120px;
  height: 120px;
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-flow: column;
  justify-content: center;
}
.avatar-uploader:hover {
  border-color: #0dd89e;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>