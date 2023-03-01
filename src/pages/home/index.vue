
<template>
  <div class="">
    <div>
        首页
      </div>
    <el-button type="primary" @click="jump" >跳转</el-button>
    <el-button type="primary" @click="getData" >
    <el-icon style="vertical-align: middle">
        <i-ep-search /> 
    </el-icon>
    <span style="vertical-align: middle"> Search </span>
  </el-button>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import {getDatatest} from '@/api'
import { useRouter } from "vue-router";
const router = useRouter();
const props = defineProps({});
 
async function  getData(){
  let res=await getDatatest()
  console.log(res.result);
}

  
function jump(){
    router.push("/login?id=11&type=2");
}

  



</script>
<style scoped lang="scss">
/*@import url(); 引入公共css类*/
</style>
