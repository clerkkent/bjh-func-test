## bjh-func-test


[![Node.js Version](https://img.shields.io/badge/node.js-10.5.0-blue.svg)](http://nodejs.org/download)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/clerkkent/bjh-func-test/blob/master/LICENSE)

语言: [English](./README.md) | [简体中文](./README-ZH.md)

A Template for create template&use template fast;

<br/>

## Features

  - easy
  - fast
  - global operation
  - configurable
<br/>

##main command
  - init or i: to init a workspace
  - create or c: choice a template to create a new work
  - help or h: see more details
  - version or v: about the version

## Use 
  - npm i bjh-func-test
  - bjh-func-test init
  - bjh-func-test create
  - bjh-func-test create --origin (use remote template create a work)
  - use BJH-TEMP to replace your key word
  - more keywords to replace, please generate a replace-items.json in your template folder and Configure it!
  - example for replace-items.json

  ```javascript
    [{
        "message": "请输入https",
        "name": "Url"
    }]
  ```

  more file to process, please generate a bjh-temp.js in your workspace and Configure it!
  - example for replace-items.json

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