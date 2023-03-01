 <template>
  <div class="">
    <h1 @click="clickDo" >这是一个组件</h1> 
  </div>
</template>

<script setup>
import { reactive, ref,onMounted } from "vue";
const props = defineProps({});
function clickDo(){
  console.log('点击事件')
}
onMounted(() => {
  
})

</script>
<style scoped lang="scss">
/*@import url(); 引入公共css类*/
</style>
