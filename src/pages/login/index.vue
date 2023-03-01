<!--
 * @Author: 登录页
 * @Date: 2023-02-28
 * @LastEditors: wumingchao wumingchao@quansantai.com
 * @LastEditTime: 2023-02-28
 * @FilePath: /template1/src/pages/login/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

<template>
    <div class="">
      <div>
        登录页
      </div>
      <el-button type="primary"  @click="jump" >跳转</el-button>
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
    router.push("/");
}

  </script>
  <style scoped lang="scss">
  /*@import url(); 引入公共css类*/
  </style>
  