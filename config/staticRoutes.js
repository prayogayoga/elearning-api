var path = require('path');

module.exports.staticRoutes = {
    staticFolder1: function(app){
        console.log('Load custom folder 1');
        app.use('/public', require('express')['static']( path.normalize(__dirname + '/../public') ) );
    }
};