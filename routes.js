'use strict';

module.exports = function(app){
    var jsonn = require('./controller');

    app.route('/')
        .get(jsonn.index);
}