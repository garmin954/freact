const proxy = require('http-proxy-middleware');
// import proxy from 'http-proxy-middleware'
module.exports = function (app) {
  app.use(proxy.createProxyMiddleware('/api', {    // 'qwl'  需要转发的请求
    target: 'http://127.0.0.1:3456',  //接口服务器地址
    changeOrigin: true,
    // pathRewrite: {
    //   '^/api': ''
    // },
  }));
};
