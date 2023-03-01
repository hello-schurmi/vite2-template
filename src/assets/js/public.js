/*
 * @Author: 公共方法
 * @Date: 2023-02-28
 * @LastEditors: wumingchao wumingchao@quansantai.com
 * @LastEditTime: 2023-02-28
 * @FilePath: /template1/src/assets/js/public.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { reactive, ref } from "vue";
import { ElLoading } from "element-plus";
// import { ElNotification, ElMessage, ElMessageBox } from "element-plus";

// 提示弹框
export function showMsg(msgInfo, type, time) {
    ElMessage.closeAll();
    ElMessage({
      type: type || "success",
      showClose: false,
      dangerouslyUseHTMLString: true,
      message: msgInfo,
      duration: time || 3000,
    });
  }

//删除空对象属性
export function deleteEmpty(o, arr, i) {
    removeNullItem(o, arr, i);
  
    function isEmptyObj(o) {
      for (var attr in o) return !1;
      return !0;
    }
  
    function processArray(arr) {
      for (var i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === null || arr[i] === undefined) arr.splice(i, 1);
        else if (typeof arr[i] == "object") removeNullItem(arr[i], arr, i);
      }
      return arr.length == 0;
    }
  
    function proccessObject(o) {
      for (var attr in o) {
        if (o[attr] === null || o[attr] === undefined || o[attr] === "") delete o[attr];
        else if (typeof o[attr] == "object") {
          removeNullItem(o[attr]);
          if (isEmptyObj(o[attr])) delete o[attr];
        }
      }
    }
  
    function removeNullItem(o, arr, i) {
      var s = {}.toString.call(o);
      if (s == "[object Array]") {
        if (processArray(o) === true) {
          //o也是数组，并且删除完子项，从所属数组中删除
          if (arr) arr.splice(i, 1);
        }
      } else if (s == "[object Object]") {
        proccessObject(o);
        if (arr && isEmptyObj(o)) arr.splice(i, 1);
      }
    }
  }