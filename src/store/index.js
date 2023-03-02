/*
 * @Author:  pinia
 * @Date: 2023-03-02
 * @LastEditors: wumingchao wumingchao@quansantai.com
 * @LastEditTime: 2023-03-02
 * @FilePath: /template1/src/store/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineStore} from 'pinia'
export default  defineStore('main',{
    state:()=>{
      return {
        test:'HelloWorld',
      }
    },
    getters:{},
    actions:{}
  })