/*
 * @Author: wumingchao wumingchao@quansantai.com
 * @Date: 2023-02-27
 * @LastEditors: wumingchao wumingchao@quansantai.com
 * @LastEditTime: 2023-02-28
 * @FilePath: /template1/src/router/routerList.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 路由
export default [
  {
    path: "/",
    name: "Home",
    component: () => import("@/pages/home/index.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/pages/login/index.vue"),
  },
];
