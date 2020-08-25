module.exports = {
    // 基本路径  
    publicPath: './',
    // 输出路径   
    outputDir: 'dist',
    // 静态资源    
    assetsDir: './',
    // eslint-loader是否在保存时候检查  
    lintOnSave: true,
    // 服务项配置    
    devServer: {
        // 设置代理proxy
        proxy: {
            "/caseServer": {
                target: "http://its.dev.etongeis.com:38001", // 都昌服务器
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    "^/caseServer": "" // 去掉接口地址中的api字符串
                }
            },
            "/api": {
                target: "http://192.168.50.113:9002", // 钟博观察项
                //target: "http://192.168.50.113:9001", // 钟博补充计费
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    "^/api": "" // 去掉接口地址中的api字符串
                }
            },
            "/inout": {
                target: "http://192.168.50.113:9001", // 钟博出入量，交接班
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    "^/inout": ""
                }
            },
            "/patient": {
                target: "http://192.168.50.151:9004", // 子乔患者列表
                // target: "http://demo.dev.etongeis.com",
                //target: "http://192.168.50.210:9004",
                //target:'http://192.168.50.113:9004',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    "^/patient": "/patient"
                }
            },
            "/case": {
                target: "http://192.168.50.8:9006", // 启康电子病历
                // target: "http://192.168.50.25:9006", // 启康电子病历
                // target: "http://demo.dev.etongeis.com",
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    "^/case": "" // 去掉接口地址中的字符串
                    // "^/case": "/case" // 去掉接口地址中的字符串(demo)
                }
            },
            "/down": {
                // target: "http://192.168.50.43:9001", // 启康电子病历模板
                // target: "http://192.168.50.25:9001", // 启康电子病历
                target: "http://192.168.50.8:9001", // 启康电子病历
                // target: "http://192.168.50.134:9001", // 启康电子病历
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    "^/down": "" // 去掉接口地址中的字符串
                    // "^/down": "/down" // 去掉接口地址中的字符串(demo)
                }
            },
            // "/upload": {
            //   target: "http://192.168.50.43:9001", // 启康上传
            //   changeOrigin: true,
            //   ws:true,
            //   pathRewrite: {
            //     "^/upload": "" // 去掉接口地址中的字符串
            //   }
            // },
            "/pathway": {
                target: "http://demo.dev.etongeis.com",
                // target: "http://192.168.50.116:9003",
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    "^/pathway": "/pathway" // 去掉接口地址中的api字符串
                }
            },
            //医嘱
            "/doctor": {
                target: 'http://192.168.50.24:9002', //谢宇
                //  target:'http://192.168.50.131:9002', //陈龙
                // target: "http://192.168.50.113:9002", // 钟博
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    "^/doctor": ""
                }
            },
            //医嘱会诊
            "/isClass": {
                target: 'http://192.168.50.24:9002', //谢宇
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    "^/isClass": ""
                }
            },
            //科室（桥通）
            "/user": {
                // target: 'http://demo.dev.etongeis.com',
                target: "http://192.168.50.11:9001",
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    // "^/user": "/user"
                    "^/user": ""
                }
            },
            "/feeBilling": {
                // target: "http://192.168.50.113:9002", // 钟博观察项
                target: "http://192.168.50.113:9001", // 钟博补充计费
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    "^/feeBilling": "" // 去掉接口地址中的api字符串
                }
            }
        }
    }
}