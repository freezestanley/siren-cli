var logger = require('./logger');
var cors = require('cors');
var path = require('path');
var httpProxy = require('http-proxy');
var filter = require('./filter');
var expressTemplate = require('./express');
var express = require('express');

module.exports = function (app) {
    var expressproxy = require('express-http-proxy');
    var proxy = httpProxy.createProxyServer();

   proxy.on('error', function(e) {
     logger.error(e);
   });
   expressTemplate(app);

   app.use(cors({
           origin:['http://localhost:8080'],
          methods:['GET','POST'],
    alloweHeaders:['Conten-Type', 'Authorization']
   }));

   app.use('/static', express.static(path.join(__dirname , 'views/static')));

    var allowCrossDomain = function(req, res, next) {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
      res.header('Access-Control-Allow-Headers', 'Content-Type');
      res.header('Access-Control-Allow-Credentials','true');
      next();
    };
    app.use(allowCrossDomain);


    // app.get('/',function(req, res){
    //   res.send('Hello world!')
    // })
    app.get('/share', function(req, res) {
      res.render('share/index', { title: '测试11111' });
    });
    app.get('/', function(req, res) {
      res.render('index', { title: '测试11111' });
    });
    // app.get('/first',function(req, res){
    //   console.log('------------------')
    //   res.send('this is first!')
    // })
    // app.get('/save', function(req, res, next) {
    //     res.json({name:'aaa',pwd:'123'});
    // });
    app.use('/local', function (req, res, next){
      let path = filter(req, res)
      path = '../mock' + path + '.json'
      res.send(require(path));
    });
    app.use('/cross', expressproxy('hq-jdt-dev.zhongan.com', {
      proxyReqPathResolver: function(req) {
        return require('url').parse(req.url).path;
      }
    }));
}
