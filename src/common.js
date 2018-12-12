const env = process.env || {};
const domain = 'https://api.dev.xiepinhui.com.cn'

let path = '/'
let debug = true

// 设置参数默认值
let config = Object.assign({
  debug,
  path,
  domain
}, env);

console.log(`what is config.debug : ${config.debug}`);
if(!config.debug){
  if(!window.console) window.console = {};
  var methods = ["log", "debug", "warn", "info"];
  for(var i=0;i<methods.length;i++){
    console[methods[i]] = function(){};
  }
}

export default config
