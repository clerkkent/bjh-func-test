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