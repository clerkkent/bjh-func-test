## bjh-func-test


[![Node.js Version](https://img.shields.io/badge/node.js-10.5.0-blue.svg)](http://nodejs.org/download)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/clerkkent/bjh-func-test/blob/master/LICENSE)

语言: [English](./README.md) | [简体中文](./README-ZH.md)

A Template for create template&use template fast;

<br/>

## 特征

  - 简单
  - 快速
  - 全局可控
  - 配置性高
<br/>

##主要命令
  - init or i: 初始化一个工作空间
  - create or c: 选择一个模板产出业务文件
  - help or h: 更多
  - version or v: 版本

## 用法
  - npm i bjh-func-test
  - bjh-func-test init
  - bjh-func-test create
  - 使用Temp关键词替代你的项目名
  - 更多关键词替换请在模板文件夹下建立replace-items.json，进行配置
  - 例子 replace-items.json

  ```javascript
    [{
        "message": "请输入https",
        "name": "Url"
    }]
  ```

  有更多需要特别处理的文件，如路由，入口文件等，在replace-items.js中进行配置
  - 例子 replace-items.js

  ```javascript
    // name为项目名称，可在此引用
    exports.deal_others = function deal_others(name) {
        return [{
            "path": "/layout.jsx",
            "config": [{
                "tag": "{/* replace */}",
                "add_content": `<Route exact path="/activity/m/rc/${name}" component={${name}} />`
            }]
        }]
    };
  ```