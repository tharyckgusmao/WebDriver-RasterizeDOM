let easyimg = require('easyimage');

module.exports ={

  cropImage: (size,location,source)=>{
    easyimg.crop({
        src: source,
        dst: source,
        cropwidth: size.width,
        cropheight: size.height,
        x: location.x,
        y: location.y,
        gravity: 'NorthWest'
    },
    function(err, stdout, stderr) {
        if (err) throw err;
    });
  },

  checkPrefix : (domEl)=>{

      if(domEl.includes('#')){
        return By.id(`${domEl.replace('#','')}`)
      }
    return By.className(`${domEl.replace('.','')}`)


  }
}
