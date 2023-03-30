<script setup lang="ts">
import bottomNav from './components/bottomNav.vue'
</script>

<template>
  <router-view class="mainStage"></router-view>
  <bottomNav />
</template>

<style lang="scss" scoped>
.mainStage{
  width: 375px;
  overflow-x: hidden;
  overflow-y: scroll;
  height: calc(100% - 40px);
}
</style>
