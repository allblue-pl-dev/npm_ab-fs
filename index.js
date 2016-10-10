'use strict';

var Dir = require('./Lib/Directory.js');
var File = require('./Lib/File.js');
var Path = require('./Lib/Path.js');


exports.Lib = require('./Lib.js');

exports.dir_Create = Dir.Create;
exports.dir_Exists = Dir.Exists;

exports.file_Delete = File.Delete;
exports.file_Exists = File.Exists;
exports.file_GetContents = File.GetContents;
exports.file_GetPathsFromDir = File.GetPathsFromDir;
exports.file_PutContents = File.PutContents;

exports.path_Exists = Path.Exists;
