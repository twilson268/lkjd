/ **
 *入口文件
 * /

/ **
 *开发依赖
 * /
let path =  require（' path '）
let util =  require（' ./ util '）
让 base64 =  util。BASE64
让 readSync =  util。readSync
让 writeSync =  util。writeSync

让 BUILD_DIR  =  ' dist '  //构建目录
让 ENTRY_FILE  =  '。/ node.txt '  // SS（R）入口
let str =  readSync（ENTRY_FILE）

let  checker  =  item  => {
    return  item  =>  item。包括（' ssr：// '）||  项目。包括（' ss“// '）
}

//映射所有项目包括`ssr：//`并序列化这些项目
让 result =  str。拆分（' \ n \ n '）
                。filter（item  =>  checker（item））
                。加入（' \ r \ n '）

writeSync（路径。解决（__dirname，BUILD_DIR，'的index.html '）的base64（结果））
