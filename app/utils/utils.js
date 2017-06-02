let Jimp = require('jimp');

module.exports ={

  cropImage: (size,location,source)=>{
    Jimp.read(source).then(function (lenna) {
      lenna.crop( location.x, location.y, size.width, size.height )
      .write(source);
    }).catch(function (err) {
      console.error(err);
    });
  },

  checkPrefix : (domEl)=>{

    if(domEl.includes('#')){
      return By.id(`${domEl.replace('#','')}`)
    }
    return By.className(`${domEl.replace('.','')}`)


  }
}
