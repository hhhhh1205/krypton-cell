<template>
  <div class="createRoom">
    <!-- <ChildrenHeader show="true"></ChildrenHeader>
    <Personal></Personal> -->
    <!-- <Discussion></Discussion> -->
    <!-- <UpMic></UpMic> -->
    <transition name="mychange" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.createRoom {
  overflow: auto;
  overflow-x: hidden;
}
</style>