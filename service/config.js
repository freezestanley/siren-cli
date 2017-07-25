var path = require('path');
var extend = require('util')._extend;

module.exports = {
        dev:{
              port: 8999,
              root: '/'
            }
    }[process.env.NODE_ENV || 'dev']
