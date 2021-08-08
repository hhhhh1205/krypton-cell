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
      <!-- 填写机构信息 -->
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
            <el-option label="新闻媒体" value="meiti"></el-option>
            <el-option label="其他机构" value="qita"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="机构名称" prop="name">
          <el-input
            v-model="ruleForm.name"
            placeholder="请填写营业执照上的机构名称"
            style="width: 320px"
          ></el-input>
        </el-form-item>
        <el-form-item label="统一社会信用代码" prop="types">
          <el-input
            v-model="ruleForm.types"
            placeholder="请与营业执照上保持一致"
            style="width: 320px"
          ></el-input>
        </el-form-item>
        <el-form-item label="所在地" prop="area">
          <el-select
            style="margin-right: 10px"
            class="lab"
            label-width="100px"
            v-model="ruleForm.area"
            placeholder="省/直辖市/自治区"
            @change="prochange($event)"
          >
            <el-option
              v-for="(pro, i) in cityAll"
              :key="i"
              :label="pro.name"
              :value="pro.city_id"
            ></el-option>
          </el-select>
          <el-select class="lab" v-model="ruleForm.city" placeholder="市/县/区">
            <el-option
              v-for="(city, j) in proNext"
              :key="j"
              :label="city.name"
              :value="city.city_id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="营业执照" prop="face">
          <p style="margin-bottom: 10px">(或提供住址机构代码)</p>
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
          <p>
            请<el-popover
              placement="right"
              width="200px"
              height="300px"
              trigger="hover"
            >
              <img
                style="width: 300px; height: 385px"
                src="https://xxdd.timing360.com/static/img/license.4784753d.png"
                alt=""
              /><span slot="reference" style="color: #0dd89e; cursor: pointer"
                >参考示意图</span
              ></el-popover
            >拍摄证件，照片信息必须清晰可见，大小不超过3M，仅支持png，jpg
          </p>
        </el-form-item>
        <el-form-item label="机构账号开通授权书" prop="shouquan">
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
            <p>
              运营者身份不是法人，需提供委托证明，点此
              <a href="https://xxdd.timing360.com/static/download/entrust.docx"
                ><span style="color: #0dd89e"
                  >《机构账号开通授权书》下载模板</span
                ></a
              >，完整加盖公章。请
              <span style="height: 200px"
                ><el-popover placement="right-end" width="480" trigger="hover">
                  <img
                    style="width: 540px; height: 600px"
                    src="https://xxdd.timing360.com/static/img/entrust.558d5b67.png"
                    alt=""
                  />
                  <span
                    slot="reference"
                    style="
                      color: #0dd89e;
                      cursor: pointer;
                      position: relative;
                      right: 2px;
                    "
                    >参考示意图</span
                  ></el-popover
                ></span
              >拍摄证件，照片必须清晰可见，大小不超过3M，仅支持png、jpg格式。
            </p>
          </div>
        </el-form-item>
      </el-form>
    </div>

    <div class="secondStep">
      <h3>第二步：运营者信息信息</h3>
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
        <el-form-item label="运营者姓名" prop="names">
          <el-input
            v-model="ruleForm.names"
            placeholder="请输入运营者姓名"
            style="width: 320px"
          ></el-input>
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
          <p>
            请参考示意图拍摄证件，照片信息必须清晰可见，大小不超过3M，仅支持png，jpg
          </p>
        </el-form-item>
      </el-form>
    </div>

    <div class="btn">
      <el-button
        style="width: 150px"
        type="primary"
        @click="submitForm('ruleForm')"
        >提交</el-button
      >
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      cityAll: [],
      proNext: [],
      imageUrl: "",
      ruleForm: {
        zhengjian: "",
        name: "",
        names: "",
        types: "",
        region: "",
        area: "",
        city: "",
        num: "",
        shouquan: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入机构名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        names: [
          { required: true, message: "请输入运营者名称", trigger: "blur" },
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
        city: [
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
        shouquan: [
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
    prochange(val) {
      this.ruleForm.city = "";
      this.cityAll.filter((item) => {
        if (item.city_id == val) {
          this.proNext = item.list;
        }
      });
      //查询数据，然后给该省下面的城市赋值
      // this.$data.citys = getCityByPid($("#provice").val());
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
  mounted() {
    axios.get("/api/proData").then((res) => {
      this.cityAll = res.data.proData;
      console.log(this.cityAll);
    });
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

.secondStep {
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  text-align: left;
  margin-top: 20px;
  padding-bottom: 100px;
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

.btn {
  font-size: 14px;
  width: 400px;
  text-align: center;
  margin: 30px auto 50px;
  line-height: 25px;
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