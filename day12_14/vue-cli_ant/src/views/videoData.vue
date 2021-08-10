<template>
  <div class="videoData">
    <div>
      <img src="@/assets/nothing.png" alt="" />
      <p>暂无数据</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.videoData {
  height: 100%;
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
  }
}
</style>