# 基于vue-cli的vue服务端渲染

>vue-cli, vue-server-renderer, webpack4, koa

## Build Setup

``` bash
# install dependencies
npm install

# 启动开发环境client
npm run dev:client

# 启动开发环境server
npm run dev:server

# 启动开发环境
npm run dev

# 生产环境
npm run build && npm run start

# 打包可视化视图，用于分析打包后的文件
npm run build --report

```

**在使用mini-css-webpack-plugin时，build:server会报错， 因此使用的extract-text-webpack-plugin 4.0.0-beta.0**
