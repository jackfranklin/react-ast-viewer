var cheerio = require('cheerio');
var _ = require('lodash');
var fs = require('fs');
var $ = cheerio.load(fs.readFileSync('index.html'));

$('script').remove();

$('body').append("<script src='./traceur-runtime.js'></script><script src='./dist.min.js'></script>");

fs.writeFileSync('dist/style.css', fs.readFileSync('style.css'));
fs.writeFileSync('dist/index.html', '<html>' + $('html').html() + '</html>');
