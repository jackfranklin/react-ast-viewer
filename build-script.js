var cheerio = require('cheerio');
var _ = require('lodash');
var fs = require('fs');
var $ = cheerio.load(fs.readFileSync('index.html'));

$('script').each(function(i, elem) {

  if($(elem).attr('src') === undefined || $(elem).attr('src').indexOf('config.js') > -1) {
  } else {
    $(elem).remove();
  }
});

$('script').last().before("<script src='./dist.min.js'></script>");

fs.writeFileSync('dist/config.js', fs.readFileSync('config.js'));
fs.writeFileSync('dist/style.css', fs.readFileSync('style.css'));

fs.writeFileSync('dist/index.html', '<html>' + $('html').html() + '</html>');
