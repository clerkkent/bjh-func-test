import {
    Command
} from 'func';

const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const open = require('open');

@Command({
    name: 'init',
    alias: 'i'
})
export class Init {
    constructor() {
        this.init();
    }
    init = () => {
        inquirer.prompt([{
            type: 'input',
            message: '请输入模板文件夹名称（没有将会被新建）:',
            name: 'template'
        }, {
            type: 'input',
            message: '请输入项目目标文件夹路径:',
            name: 'project'
        }, {
            type: "list",
            message: "是否去完成更多文件的替换配置？",
            name: "confirm",
            choices: [
                "yes",
                "no",
            ]
        }]).then(v => {
            const dir = path.join(process.cwd(), '/bjh-temp.json');
            fs.exists(process.cwd() + '/' + v.template, function(res){
                if(!res) {
                    fs.mkdir(
                        process.cwd() + '/' + v.template, {
                            recursive: true
                        },
                        err => {
                            // if (err) throw err;
                        }
                    );
                }
            });

            fs.exists(process.cwd() + '/' + v.project, function(res){
                if(!res) {
                    fs.mkdir(
                        process.cwd() + '/' + v.project, {
                            recursive: true
                        },
                        err => {
                            // if (err) throw err;
                        }
                    );
                }
            });

            fs.writeFile(
                process.cwd() + '/bjh-temp.js', `
                    // name为项目名称，可在此引用
                    exports.deal_others = function deal_others(name) {
                        return [{
                            "path": "",
                            "config": [{
                                "tag": "",
                                "add_content": ""
                            }]
                        }]
                    };`,
            function (err) {
                if(err) {
                    return false;
                } else {
                    v['confirm'] === 'yes' ? open(process.cwd() + '/bjh-temp.js') : null;
                    console.log("bjh-temp.js已产出🍺🍺🍺🍺🍺🍺🍺🍺🍺🍺🍺🍺🍺🍺🍺🍺🔥🐧");
                }
            });

            fs.writeFile(dir, JSON.stringify({
                template: v.template,
                project: v.project,
            }), function (err) {
                if(err) {
                    return false;
                } else {
                    console.log("bjh-temp.json已产出🍺🍺🍺🍺🍺🍺🍺🍺🍺🍺🍺🍺🍺🍺🍺🍺🔥🐧");
                }
            });
        });
    }
}