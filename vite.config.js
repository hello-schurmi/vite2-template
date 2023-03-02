/*
 * @Author:  配置项
 * @Date: 2023-02-27
 * @LastEditors: wumingchao wumingchao@quansantai.com
 * @LastEditTime: 2023-03-02
 * @FilePath: /template1/vite.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// import { defineConfig } from "vite";

// import importToCDN, { autoComplete } from "vite-plugin-cdn-import";

// import AutoImport from "unplugin-auto-import/vite";
// import Icons from "unplugin-icons/vite";
// import IconsResolver from "unplugin-icons/resolver";
// import Components from "unplugin-vue-components/vite";
// import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
// import viteCompression from "vite-plugin-compression";

// import { visualizer } from "rollup-plugin-visualizer";
// import vue from "@vitejs/plugin-vue";
// import { resolve } from "path";
// export default defineConfig({
//   base: "/",
//   terserOptions: {
//     compress: {
//       // warnings: false,
//       drop_console: true, //打包时删除console
//       drop_debugger: true, //打包时删除 debugger
//       pure_funcs: ["console.log"],
//     },
//     output: {
//       // 去掉注释内容
//       comments: true,
//     },
//   },

//   resolve: {
//     alias: {
//       "@": resolve(__dirname, "src"), //设置别名
//     },
//   },
//   build: {
//     //兼容浏览器
//     target: ["chrome78"],
//     cssTarget: ["chrome78"],
//   },
//   optimizedeps: {
//     esbuildoptions: {
//       target: ["chrome78"],
//       cssTarget: ["chrome78"],
//     },
//   },
//   plugins: [
//     vue(),
//     importToCDN({
//       prodUrl: 'https://unpkg.com/{name}@{version}/{path}',
//       modules: [
//         autoComplete("vue"),
//         autoComplete("axios"),
//         {
//           name: 'vue-demi',
//           var: 'VueDemi', //根据main.js中定义的来
//           version: '0.13.11',
//           path: 'lib/index.iife.js'
//         },
//         // {
//         //   name: 'element-plus',
//         //   var: 'ElementPlus', //根据main.js中定义的来
//         //   version: '2.2.32',
//         //   path: 'dist/index.full.min.js',
//         //   css: 'dist/index.css'
//         // },
//         // {
//         //   name: '@element-plus/icons-vue',
//         //   var: 'ElementPlusIconsVue', //根据main.js中定义的来
//         //   version: '2.0.9',
//         //   path: 'dist/index.iife.min.js'
//         // },
//         // {
//         //   name:'vue-router',
//         //   var:'VueRouter',
//         //   version:'4.1.6',
//         //   path:'dist/vue-router.global.js'
//         // }
//       ],
//     }),
//     //压缩
//     viteCompression(),
//     //打包分析
//     visualizer({ open: true, gzipSize: true, brotliSize: true }),

//     AutoImport({
//       resolvers: [
//           ElementPlusResolver(),
//         // 自动导入图标组件
//         IconsResolver({
//           prefix: "Icon",
//         }),
//       ],
//     }),
//     Components({
//       resolvers: [
//           ElementPlusResolver(),
//         IconsResolver({
//           enabledCollections: ["ep"],
//         }),
//       ],
//     }),
//     Icons({
//       autoInstall: true,
//     }),
//   ],

//   server: {
//     // proxy: {
//     //   '/api': {
//     //     target: 'http://zgateway.kuaiban.cn/', // 需要跨域的地址 从配置获取
//     //     changeOrigin: true, // 是否要跨域
//     //     rewrite: path => path.replace(/^\/api/, '')
//     //   }
//     // },
//     host: "0.0.0.0",
//   },
// });

import { defineConfig } from "vite";

import importToCDN, { autoComplete } from "vite-plugin-cdn-import";

import AutoImport from "unplugin-auto-import/vite";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import viteCompression from "vite-plugin-compression";

import { visualizer } from "rollup-plugin-visualizer";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
export default defineConfig({
  base: "/",
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"), //设置别名
    },
  },
  build: {
    //兼容浏览器
    target: ["chrome78"],
    cssTarget: ["chrome78"],
    rollupOptions: {
      output: {
        manualChunks: {
          echarts: ["echarts"],
        },
      },
    },
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
      prodUrl: "https://unpkg.com/{name}@{version}/{path}",
      modules: [
        // {
        //   name: "axios",
        //   var: "axios",
        //   version: "1.3.4",
        //   path: "dist/axios.min.js",
        // },
        // {
        //   name: "echarts",
        //   var: "echarts",
        //   version: "5.4.1",
        //   path: "dist/axios.min.js",
        // },
        // {
        //   name:'vue-router',
        //   var:'VueRouter',
        //   path:'https://cdnjs.cloudflare.com/ajax/libs/vue-router/4.1.6/vue-router.global.prod.min.js'
        // }
      ],
    }),
    //压缩
    viteCompression({deleteOriginFile:false}),
    //打包分析
    visualizer({ open: true, gzipSize: true, brotliSize: true, }),

    AutoImport({
      resolvers: [
        ElementPlusResolver(),
        // 自动导入图标组件
        IconsResolver({
          prefix: "Icon",
        }),
      ],
    }),
    Components({
      resolvers: [
        ElementPlusResolver(),
        IconsResolver({
          enabledCollections: ["ep"],
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
