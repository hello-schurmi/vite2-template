<!--
 * @Author: wumingchao wumingchao@quansantai.com
 * @Date: 2023-02-27
 * @LastEditors: wumingchao wumingchao@quansantai.com
 * @LastEditTime: 2023-03-02
 * @FilePath: /template1/src/pages/home/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

<template>
  <div class="">
    <div>
        首页
      </div>
      <div> {{store.test }} </div>
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
import mainStore from "@/store";
import {getDatatest} from '@/api'
import { useRouter } from "vue-router";
const router = useRouter();
const props = defineProps({});
const store = mainStore();
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
