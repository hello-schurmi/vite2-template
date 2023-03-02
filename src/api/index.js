/*
 * @Author:  接口
 * @Date: 2023-02-28
 * @LastEditors: wumingchao wumingchao@quansantai.com
 * @LastEditTime: 2023-03-02
 * @FilePath: /template1/src/api/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { axiosGet, axiosPost, axiosPostJson } from "@/assets/js/axios";

export const getDatatest = data => axiosGet("zhiniu-server/dynamic/getAllCateLevelOne", data);
