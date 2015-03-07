var cheerio = require('cheerio');
var _ = require('lodash');
var fs = require('fs');
var $ = cheerio.load(fs.readFileSync('index.html'));

$('script').each(function(i, elem) {
  if($(elem).attr('src') === undefined) {
    $(elem).text("System.import('./dist.min.js')");
  } else {
    var path = $(elem).attr('src');
    var contents = fs.readFileSync(path);
    fs.writeFileSync('dist/' + _.last(path.split('/')), contents);
    $(elem).attr('src', _.last(path.split('/')));
  }
});

fs.writeFileSync('dist/index.html', '<html>' + $('html').html() + '</html>');
