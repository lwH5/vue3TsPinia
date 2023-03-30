<template>
    <div class="bottomNav">
        <div class="navBtn" @click="changeRoute('Index')">index</div>
        <div class="navBtn" @click="changeRoute('Left')">left</div>
    </div>
</template>
<script lang="ts" setup>
import { inject } from 'vue';
const global:any=inject("global")
const changeRoute=(type:string):void=>{
  global.router.push({
    name:type
  })
}
</script>
<style lang="scss" scoped>
    .bottomNav{
        display: flex;
        width: 375px;
        height: 40px;
        justify-content: space-around;
    }
</style>