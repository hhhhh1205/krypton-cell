<template>
  <div>
    <div class="link">
      <router-link
        class="button button-glow button-border button-rounded button-primary"
        :to="{ name: 'informantList' }"
      >
        举报页面
      </router-link>
      <router-link
        class="button button-glow button-border button-rounded button-primary"
        :to="{ name: 'labelList' }"
      >
        标签页面
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    // console.log(this.$route.path);
  },
};
</script>

<style scoped>
@import "./styles/buttons.css";
.link {
  width: 500px;
  margin: 20px auto 10px;
  display: flex;
  justify-content: space-between;
}

.router-link-exact-active {
  background: #5eb8fa;
  color: #fff;
  font-weight: 600;
}
/* router-link-exact-active router-link-active */
</style>