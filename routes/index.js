var express = require('express');
var router = express.Router();
var uploads3=require('../middleware/awsupload')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/uploaddata',uploads3.array('img',10),(req,res)=>{
// console.log(req.file)
res.send("uploaded")

})


module.exports = router;
