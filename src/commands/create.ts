import {
    Command, SubOptions, CommandArgsProvider
} from 'func';
import { rejects } from 'assert';

const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const chalk = require('chalk');
var spawn = require('child_process').spawn;
const log = (color, txt) => console.log(chalk[color](txt));

function read(src, params: Object, sign: boolean = false) {
    if(src.indexOf(".git") > -1) {
        return;
    }
    fs.readFile(src, 'utf8', (err, data) => {
        if (err) {
            throw err;
        };
        let newData = data;
        Object.keys(params).map(key => {
            let reg = sign ? key : new RegExp(key, 'g');
            newData = newData.replace(reg, params[key])
        })
        write(src, newData);
    });
}

function write(src, data) {
    fs.writeFile(src, data, 'utf8', (err, data) => {
        if (err) {
            throw err;
        }
        log('yellow', `process file ${src} complete!!!!`);
    });
}

@Command({
    name: 'create',
    alias: 'c'
})
@SubOptions([{ name: 'origin' }])
export class Create {
    constructor(
        private arg: CommandArgsProvider,
    ) {
        this.init(~~arg.option['origin']);
    }
    init = async(origin: number) => {
        const root_path = process.cwd();
        let repe = false;
        let more = [];
        let more_con = {};
        let others, other_con, remote_status, remote_choice;
        let remote = origin ? [{
            type: 'input',
            message: '请输入远程git地址:',
            name: 'url'
        }]: [];
        const v = await inquirer.prompt([{
            type: 'input',
            message: '请选择模板类型:',
            name: 'template'
        }, {
            type: 'input',
            message: '请输入项目名称:',
            name: 'name'
        }, ...remote]);

        const d = await new Promise((resolve, reject) => {
            fs.readFile(path.join(root_path, 'bjh-temp.json'),  'utf8', (err, data) => {
                if (err) {
                    throw err;
                    reject(err);
                } else {
                    resolve(JSON.parse(data));
                }
            })
        });

        const packagesDir = process.cwd() + '/' + d['template'] + '/' + v.template;
        const newDir =  process.cwd()  + '/' + d['project'] + '/' + v.name;
        if(origin && fs.existsSync(packagesDir)) {
            remote_choice = await inquirer.prompt([{
                type: "list",
                message: "模板本地已存在，是否执行git pull更新模板后创建项目？（git pull origin master）",
                name: "confirm",
                choices: [
                    "yes",
                    "no",
                ]
            }]);
            if(remote_choice['confirm'] === "yes") {
                remote_status = await this.gitPull(v.url, packagesDir, true);
            }
        }

        if(origin && !fs.existsSync(packagesDir)) {
            remote_status = await this.gitPull(v.url, d['template'], false);
        }

        if(origin && remote_status === 0) {
            log('green', '远程库拉取完毕！');
        } else if(origin && remote_status !== 0) {
            log('red', '远程库拉取/更新异常！');
        }

        if(fs.existsSync(newDir)) {
            repe = await inquirer.prompt([{
                type: "list",
                message: "所输入项目已存在，是否要覆盖？",
                name: "confirm",
                choices: [
                    "yes",
                    "no",
                ],
            }]);
            if(repe['confirm'] === 'no') {
                return;
            }
        }

        if(fs.existsSync(packagesDir + '/replace-items.json')) {
            more = await new Promise((resolve, reject) => {
                try {
                    fs.readFile(packagesDir + '/replace-items.json',  'utf8', (err, data) => {
                        if (err) {
                            throw err;
                            reject(err);
                        } else {
                            resolve(JSON.parse(data));
                        }
                    })
                } catch(err) {
                    console.log(err);
                    log('red', '请确认bjh-temp.json模板配置文件格式正确！');
                }
            });
            more_con = await inquirer.prompt([
                ...more.map(item => {
                    return {type: "input",
                            ...item
                        }
                })
            ]);
        }

        if(fs.existsSync(root_path + '/bjh-temp.js')) {
            others = require(root_path + '/bjh-temp.js');
            other_con = others['deal_others'](v.name);
            other_con.forEach(items => {
                let replace_con = {};
                try{
                    items.config.map(p => {
                        replace_con[p.tag] = `${p.tag}\n${p.add_content}`
                    })
                    fs.existsSync(root_path + items.path) ? this.dealOthers(root_path + items.path, replace_con) : null
                } catch(err) {
                    console.log(err);
                    log('red', '请确认bjh-temp.js配置文件格式正确！');
                }
            });
        }

        try {
            this.deal(packagesDir, newDir, v.name, more_con)
        } catch(err) {
            console.log(err);
            log('red', '模板库不存在，请先初始化模板库，并加入对应类型模板！或检查是否在业务代码文件夹下！');
        }
    }

    dealOthers = (router: String, replace_con: Object) => {
        read(router, replace_con, true);
    }

    deal = (packagesDir, newDir, projectName, more_con) => {
        let that = this;

        // 1、创建文件夹
        fs.mkdir(
            newDir, {
                recursive: true
            },
            err => {
                // if (err) throw err;
            }
        );

        // 2、获取需要复制文件路径信息，并复制
        fs.readdirSync(packagesDir).forEach((name, index, arr) => {
            if(name === 'replace-items.json') return;
            const p = path.join(packagesDir, name);
            fs.stat(p, function(err,stats){
                if(stats.isFile()) {
                    copy(p, path.join(newDir, name));
                } else {
                    that.deal(p, path.join(newDir, name), projectName, more_con);
                }
            })
        });
        
        // 修改文件内名称所需工具函数
        function copy(src, dest) {
            fs.copyFile(src, dest, err => {
                if (err) {
                    throw err;
                }
                log('yellow', `copy ${src} to  ${dest} complete!!!`);
                read(dest, {
                    "BJH-TEMP": projectName,
                    ...more_con
                });
            });
        }
        return;
    }
    gitPull = async (url, target, sign) => {
        const command = 'git';
        const args = sign ? ['pull', 'origin', 'master'] : ['clone', url];
        let r = await new Promise((resolve, rejects) => {
            let s = spawn(command, args, {
                cwd: target
            });
            s.on("close", function(status) {
                resolve(status);
            })
        });
        return r;
    }
}