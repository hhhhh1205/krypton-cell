<template>
  <div class="personalAuthentication">
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
      <el-breadcrumb-item>个人认证</el-breadcrumb-item>
    </el-breadcrumb>

    <div class="firstStep">
      <h3>第一步：上传证件照</h3>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="150px"
        class="demo-ruleForm"
        label-position="right"
      >
        <el-form-item label="证件类型" prop="zhengjian">
          <el-select
            v-model="ruleForm.zhengjian"
            placeholder="二代身份证"
            style="width: 320px"
          >
            <el-option label="二代身份证" value="erdai"></el-option>
            <el-option label="护照" value="huzhao"></el-option>
            <el-option label="港澳居民来往通行证" value="gangao"></el-option>
            <el-option label="台湾居民来往通行证" value="taiwan"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="证件号码" prop="num">
          <el-input
            v-model="ruleForm.num"
            placeholder="请输入您的证件号"
            style="width: 320px"
          ></el-input>
        </el-form-item>
        <el-form-item label="手持证件照" prop="face">
          <div class="photo" style="display: flex; line-height: 10px">
            <div style="margin-right: 20px">
              <p>示例</p>
              <div class="left">
                <img
                  src="https://xxdd.timing360.com/static/img/handle_license.27615ce2.png"
                  alt=""
                  style="width: 190px; height: 108px"
                />
              </div>
            </div>
            <div>
              <p>手持证件照</p>
              <el-upload
                style="width: 190px; height: 108px"
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
            </div>
          </div>
          <div class="photo" style="display: flex; line-height: 10px">
            <div style="margin-right: 20px">
              <p>示例</p>
              <div class="left">
                <img
                  src="https://xxdd.timing360.com/static/img/handle_front.dfa4c03e.png"
                  alt=""
                  style="width: 190px; height: 108px"
                />
              </div>
            </div>
            <div>
              <p>上传身份证正面</p>
              <el-upload
                style="width: 190px; height: 108px"
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
            </div>
          </div>
          <div class="photo" style="display: flex; line-height: 10px">
            <div style="margin-right: 20px">
              <p>示例</p>
              <div class="left">
                <img
                  src="https://xxdd.timing360.com/static/img/handle_reserve.383929ec.png"
                  alt=""
                  style="width: 190px; height: 108px"
                />
              </div>
            </div>
            <div>
              <p>上传身份证反面</p>
              <el-upload
                style="width: 190px; height: 108px"
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
            </div>
          </div>
        </el-form-item>
      </el-form>
    </div>

    <div class="secondStep">
      <h3>第二步：你的学历/成就/奖励(选填)</h3>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="150px"
        class="demo-ruleForm"
        label-position="right"
      >
        <el-form-item>
          <p style="font-size: 12px; text-align: left">
            如果有多项成就，请用分号隔开
          </p>
          <el-input
            placeholder="例:2019国际英语竞赛一等奖"
            style="text-align: left; width: 500px"
            type="textarea"
            rows="10"
            v-model="ruleForm.desc"
          ></el-input>
        </el-form-item>
        <span
          style="float: left; font-size: 12px; position: relative; left: 80px"
          >上传证明:</span
        >
        <el-form-item>
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
            >请上传以上述的证件信息，最多选择九张</span
          >
        </el-form-item>
      </el-form>
    </div>

    <div class="footer">
      <p>
        为维护安全良好的网络环境，根据《国家网络安全法》的规定，在您进行直播或发布付费内容前需要提供真实的身份信息。
      </p>
      <el-button
        style="width: 200px; margin-top: 20px"
        type="primary"
        @click="submitForm('ruleForm')"
        >提交</el-button
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageUrl: "",
      ruleForm: {
        zhengjian: "",
        name: "",
        types: "",
        region: "",
        area: "",
        num: "",
        desc: "",
      },
      rules: {
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
.personalAuthentication {
  padding: 20px 30px;
  background: #fff;
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

.photo:not(:first-of-type) {
  margin-top: 10px;
}

.secondStep {
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  text-align: left;
  margin-top: 20px;
  padding-bottom: 50px;
  border-bottom: 1px solid #e4e7ed;

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

.footer {
  font-size: 14px;
  width: 400px;
  text-align: center;
  margin: 30px auto 50px;
  line-height: 25px;

  p {
    color: #999999;
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