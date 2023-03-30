<template>
    <div>
        <div class="homeTitle">{{store.newText}}</div> 
        <div class="homeTitle">{{text}}</div> 
        <div class="btn" @click="updateText1">Press1</div>
        <div class="btn" @click="updateText2">Press2</div>
        <div class="btn" @click="resetData">Reset</div>
        <div class="btn" @click="laterSecond">5sLater</div>
    </div>
</template>
<script setup lang="ts">
import { userStore } from '../store';
import { storeToRefs } from 'pinia';
let store=userStore()
let {text}=storeToRefs(store)
const updateText1=()=>{
    store.updateText()
}

const updateText2=()=>{
    store.$patch({
        text:"press2Change"
    })
}

const resetData=()=>{
    store.$reset()
}

//监听
const subData=store.$subscribe((param,state)=>{
    console.log("param:",param)
    console.log("state:",state)
})

const laterSecond=()=>{
    store.online()
}

</script>
<style lang="scss" scoped>
    .homePage {
        width: 375px;
        height:200px;
        .homeTitle{
            line-height: 32px;
            font-size: 16px;
        }
    }
    
</style>
