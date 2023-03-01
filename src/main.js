/*
 * @Author: wumingchao wumingchao@quansantai.com
 * @Date: 2023-02-27
 * @LastEditors: wumingchao wumingchao@quansantai.com
 * @LastEditTime: 2023-02-27
 * @FilePath: /template1/src/main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router";
// import * as ElementPlusIconsVue from "@element-plus/icons-vue";
const app = createApp(App);
app.use(router);
// for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
//   app.component(key, component);
// }
app.mount("#app");
