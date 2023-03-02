<!--
 * @Author: 折线图
 * @Date: 2023-03-02
 * @LastEditors: wumingchao wumingchao@quansantai.com
 * @LastEditTime: 2023-03-02
 * @FilePath: /template1/src/components/echart-line.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
myChart.vue
<template>
  <div ref="chartRef" class="my-chart"></div>
</template>
<script setup lang="ts">
import { defineProps, onBeforeUnmount, onMounted, ref } from "vue";
import echarts from "@/assets/js/echart";
const props = defineProps(["options"]);
const chartRef = ref(null);
let chart = null;
const resizeHandler = () => {
  chart?.resize();
};
onMounted(() => {
  setTimeout(() => {
    initChart();
  }, 20);
  window.addEventListener("resize", resizeHandler);
});

const initChart = () => {
  chart = echarts.init(chartRef.value);
  chart.setOption({
    title: {
      text: "ECharts 入门示例",
    },
    tooltip: {},
    xAxis: {
      data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
    },
    yAxis: {},
    series: [
      {
        name: "销量",
        type: "bar",
        data: [5, 20, 36, 10, 10, 20],
      },
    ],
  });
};

onBeforeUnmount(() => {
  window.removeEventListener("resize", resizeHandler);
  chart?.dispose();
});
</script>

<style lang="scss" scoped>
.my-chart{
    width: 300px;
    height: 300px;
}

</style>
