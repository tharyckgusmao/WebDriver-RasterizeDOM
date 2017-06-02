let clear = require('clear');
 figlet = require('figlet'),
 chalk = require('chalk');

let test = require('./components/WebDriver');

clear();
console.log(
  chalk.blue.bold(
    figlet.textSync('WebDriver Rasterize', { horizontalLayout: 'full' })
  )
);


WebDriver();
