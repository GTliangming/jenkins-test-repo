### 目录结构

- assets 静态资源
- components 公共组件
- common 公共数据、参数、常量
- network 网络请求
- pages 页面组件
- router 路由配置
- store redux 相关仓库
- utils 封装的工具相关

### 一、css 重置

使用 normalize.css  `yarn add normalize.css`
GiHub：[https://github.com/necolas/normalize.css.git](https://github.com/necolas/normalize.css.git)


### 二、配置别名

使用 ` yarn add @craco/craco`  
创建 ** craco.config.js文件 **
可以在不暴露webpack配置的情况下给项目添加一些配置信息


### 三、配置路由

使用 
    ` yarn add react-router-dom` 
 ` yarn add react-router-config`   将路由统一管理

 ### 四、顶部部分样式

 使用 ` yarn add styled-components` 


 > 查看打包的进度
 > `npm install simple-progress-webpack-plugin --save -dev`
 > 
 ```
plugins: [
        {
            plugin: CracoVtkPlugin()
        }
    ]
 ```
 
  