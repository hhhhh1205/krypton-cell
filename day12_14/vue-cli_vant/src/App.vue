<template>
  <div class="box">
    <transition name="mychange" mode="out-in">
      <router-view class="subchild"></router-view>
    </transition>
  </div>
</template>