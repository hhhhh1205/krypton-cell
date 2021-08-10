<template>
  <van-nav-bar
    class="header"
    :title="title"
    @click-left="onClickLeft"
    @click-right="onClickRight"
    fixed
  >
    <template #left v-if="show">
      <van-icon name="arrow-left" size="22" />
    </template>
    <template #right v-if="flag">
      <van-icon name="search" size="24" />
    </template>
  </van-nav-bar>
</template>
<script>
export default {
  props: {
    title: String,
    show: {
      type: Boolean,
      default: false,
    },
    flag: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      this.$router.push({ name: "search" });
    },
  },
};
</script>

<style scoped>
/* .header {
  border-bottom: 1px solid #ccc;
} */

::v-deep .van-nav-bar__content {
  background-color: #f1f2f4;
}

::v-deep .van-nav-bar__title {
  font-weight: 900;
}
</style>