'use strict';

var abLog = require('ab-log');

var Helper = require('./Helper.js');


var Path = {

    Exists: function(file_path)
    {
        var stat = Helper.GetStat(file_path);
        if (stat === null)
            return false;

        return true;
    }

};
module.exports = Path;
