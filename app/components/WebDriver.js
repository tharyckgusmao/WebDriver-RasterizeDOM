let fs = require('fs'),
utils = require('../utils/utils');
phantomjs_exe = require('phantomjs-prebuilt').path,
selenium = require('selenium-webdriver'),
By = selenium.By,
CLI  = require('clui'),
Spinner = CLI.Spinner,
chalk = require('chalk'),
until = selenium.until,
url = process.argv[2],
domEl = process.argv[3],
customPhantom = selenium.Capabilities.phantomjs();
customPhantom.set("phantomjs.binary.path", phantomjs_exe);


module.exports =  WebDriver = () =>{



  let nameFile = `./images/screenshot-${new Date().toJSON().slice(0,10).replace(/-/g,'-')}.png`;
  let queryDom = `return {x:document.querySelector('${domEl}').offsetLeft, y:document.querySelector('${domEl}').offsetTop}`;

  let spinner = new Spinner(chalk.red.bold('Please Wait and enjoy a coffee ...'));
  spinner.start() ;
  let driver = new selenium.Builder().
  withCapabilities(customPhantom).
  build();

  driver.manage().window().setSize(1600,774);
  driver.get(url);
  driver.manage().timeouts().pageLoadTimeout;

  driver.wait(until.elementLocated(utils.checkPrefix(domEl)),1200000).getSize().then((size)=>{
    driver.executeScript(queryDom).then((location) =>{
      driver.takeScreenshot().then((data)=>{
        fs.writeFile(nameFile, data,'base64', (err) => {
          if (err){
            throw err
          };
          utils.cropImage(size, location, nameFile);
          spinner.stop();
          console.log(chalk.blue.bold('The Image has been saved!'));
        });
      });
    });
  })





}
