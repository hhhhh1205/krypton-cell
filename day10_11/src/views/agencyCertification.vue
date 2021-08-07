<template>
  <div class="agencyCertification">
    <el-breadcrumb
      separator="/"
      style="
        border-bottom: 1px solid #e4e7ed;
        padding-bottom: 15px;
        margin-bottom: 15px;
      "
    >
      <el-breadcrumb-item :to="{ name: 'classification' }">
        认证
      </el-breadcrumb-item>
      <el-breadcrumb-item>机构认证</el-breadcrumb-item>
    </el-breadcrumb>

    <div class="firstStep">
      <h3>第一步：填写机构信息</h3>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="150px"
        class="demo-ruleForm"
        label-position="right"
      >
        <el-form-item label="机构类型" prop="region">
          <el-select
            v-model="ruleForm.region"
            placeholder="企业"
            style="width: 320px"
          >
            <el-option label="企业" value="qiye"></el-option>
            <el-option label="新闻媒体" value="xinwenmeiti"></el-option>
            <el-option label="其他机构" value="qitajigou"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="机构名称" prop="name">
          <el-input
            v-model="ruleForm.name"
            placeholder="请填写营业执照上的机构名称"
            style="width: 320px"
          ></el-input>
        </el-form-item>
        <el-form-item label="统一社会信用代码" prop="name">
          <el-input
            v-model="ruleForm.name"
            placeholder="请与营业执照上保持一致"
            style="width: 320px"
          ></el-input>
        </el-form-item>
        <el-form-item label="所在地" prop="region">
          <el-select
            v-model="ruleForm.region"
            placeholder="企业"
            style="width: 320px"
          >
            <el-option label="企业" value="qiye"></el-option>
            <el-option label="新闻媒体" value="xinwenmeiti"></el-option>
            <el-option label="其他机构" value="qitajigou"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="营业执照" prop="type">
          <p>(或提供住址机构代码)</p>
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
          <p style="display: flex; align-items: center">
            请<el-link type="primary">参考示意图</el-link
            >拍摄证件，照片信息必须清晰可见，大小不超过3M，仅支持png、jpg
          </p>
        </el-form-item>
        <el-form-item label="机构账号开通授权书" prop="resource">
          <div style="margin-top: 12px">
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
                    top: 10px;
                  "
                />
                <p style="color: #aaaaab; position: relative; bottom: 10px">
                  请上传图片
                </p>
              </template>
            </el-upload>
            <p style="display: flex; align-items: center">
              运营者身份不是法人，需提供委托证明，点此<el-link type="primary"
                >《机构账号开通授权书》</el-link
              >下载模板，完整加盖公章。请<el-link type="primary"
                >参考示意图</el-link
              >拍摄证件，照片必须清晰可见，大小不超过3M，仅支持png、jpg格式。
            </p>
          </div>
        </el-form-item>
      </el-form>
    </div>

    <div class="secondStep">
      <h3>第一步：运营者信息信息</h3>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageUrl: "",
      ruleForm: {
        name: "",
        region: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" },
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
.agencyCertification {
  padding: 20px 30px;
  background: #fff;
}

.firstStep {
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  text-align: left;

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
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
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