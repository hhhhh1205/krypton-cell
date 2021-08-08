<template>
  <div class="answerQuestions">
    <el-breadcrumb
      separator="/"
      style="
        border-bottom: 1px solid #e4e7ed;
        padding-bottom: 15px;
        margin-bottom: 15px;
      "
    >
      <el-breadcrumb-item to=""> 答疑 </el-breadcrumb-item>
      <el-breadcrumb-item>填写答疑的基本信息</el-breadcrumb-item>
    </el-breadcrumb>

    <div class="firstStep">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="150px"
        class="demo-ruleForm"
        label-position="right"
      >
        <el-form-item label="答疑主题" prop="name">
          <el-input
            placeholder="起个吸引人的主题，更能激发用户向你进行提问"
            v-model="ruleForm.name"
            style="width: 350px"
          ></el-input>
        </el-form-item>
        <el-form-item label="结束时间" prop="date1">
          <div class="block">
            <el-date-picker
              v-model="date1"
              type="datetime"
              placeholder="选择日期时间"
            >
            </el-date-picker>
          </div>
        </el-form-item>

        <el-form-item label="自习室封面" prop="face">
          <div>
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
                  style="
                    width: 42px;
                    height: 42px;
                    position: relative;
                    top: 5px;
                  "
                />
                <p style="color: #aaaaab; position: relative; bottom: 5px">
                  请上传图片
                </p>
              </template>
            </el-upload>
            <p>建议尺寸374*544，JPG、PNG格式，图片小于10M</p>
          </div>
        </el-form-item>

        <el-form-item label="曝光标签" prop="region">
          <el-select
            v-model="ruleForm.region"
            placeholder="本次答疑主要曝光给那个学习标签的用户"
            style="width: 350px"
          >
            <el-option label="标签一" value="shanghai"></el-option>
            <el-option label="标签二" value="beijing"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item prop="type">
          <el-checkbox-group v-model="ruleForm.type">
            <el-checkbox style="display: block" name="type"
              >开始答疑即代表同意并支持<a style="color: #0dd89e"
                >《猩猩点灯文明公约》</a
              >
            </el-checkbox>
          </el-checkbox-group>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >开始答疑</el-button
          >
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pickerOptions: {
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            },
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            },
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            },
          },
        ],
      },
      date1: "",
      imageUrl: "",
      ruleForm: {
        zhengjian: "",
        name: "",
        types: "",
        region: "",
        area: "",
        num: "",
        desc: "",
        type: [],
      },
      rules: {
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期时间",
            trigger: "change",
          },
        ],
        name: [
          { required: true, message: "请输入机构名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        types: [
          {
            required: true,
            type: "number",
            message: "请输入统一社会信用代码",
          },
        ],
        num: [
          {
            required: true,
            type: "number",
            message: "请输入证件号",
          },
        ],
        region: [
          { required: true, message: "请选择证件类型", trigger: "change" },
        ],
        area: [
          { required: true, message: "请选择证件类型", trigger: "change" },
        ],
        zhengjian: [
          { required: true, message: "请选择证件类型", trigger: "change" },
        ],
        face: [
          {
            required: true,
            message: "请上传图片",
            trigger: "blur",
          },
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请先勾选协议",
            trigger: "change",
          },
        ],
      },
    };
  },
  methods: {
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
  },
};
</script>


<style lang="scss" scoped>
.answerQuestions {
  padding: 20px 30px;
  background: #fff;
  height: 100%;
}

.firstStep {
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  text-align: left;

  p {
    color: rgba(128, 128, 128, 0.774);
    line-height: 20px;
    margin-top: 10px;
  }

  h3 {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 15px;
  }
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
  border-color: #24e4ae;
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