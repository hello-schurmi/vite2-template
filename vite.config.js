/*
 * @Author:  配置项
 * @Date: 2023-02-27
 * @LastEditors: wumingchao wumingchao@quansantai.com
 * @LastEditTime: 2023-03-01
 * @FilePath: /template1/vite.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from "vite";

import importToCDN, { autoComplete } from 'vite-plugin-cdn-import'

import AutoImport from "unplugin-auto-import/vite";
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import viteCompression from "vite-plugin-compression";

import { visualizer } from "rollup-plugin-visualizer";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
export default defineConfig({ 
  base: '/',
  resolve: {  
    alias: {
      "@": resolve(__dirname, "src"), //设置别名
    },
  },
  build: {
    //兼容浏览器
    target: ["chrome78"],
    cssTarget: ["chrome78"],
  },
  optimizedeps: {
    esbuildoptions: {
      target: ["chrome78"],
      cssTarget: ["chrome78"],
    },
  },
  plugins: [
    vue(), 
    importToCDN({
      modules:[
        
        {
          name:'axios',
          var:'axios',
          path:'https://cdn.bootcdn.net/ajax/libs/axios/1.3.4/axios.min.js'
        },
       
        // {
        //   name:'vue-router',
        //   var:'VueRouter',
        //   path:'https://cdnjs.cloudflare.com/ajax/libs/vue-router/4.1.6/vue-router.global.prod.min.js'
        // } 
      ]
    
    }),
    //压缩
    viteCompression(),
    //打包分析
    visualizer({ open: true, gzipSize: true, brotliSize: true }),
   
    AutoImport({
      resolvers: [
        ElementPlusResolver(),
       // 自动导入图标组件
       IconsResolver({
        prefix: 'Icon',
      }),
      
      ],
    }),
    Components({
      resolvers: [
        ElementPlusResolver(),
        IconsResolver({
          enabledCollections: ['ep'],
        }),
      ],
    }),
    Icons({
      autoInstall: true,
    }),
  ],

  server: {
    // proxy: {
    //   '/api': {
    //     target: 'http://zgateway.kuaiban.cn/', // 需要跨域的地址 从配置获取
    //     changeOrigin: true, // 是否要跨域
    //     rewrite: path => path.replace(/^\/api/, '')
    //   }
    // },
    host: "0.0.0.0",
  },
});
