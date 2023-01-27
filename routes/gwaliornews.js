var express = require('express');
var router = express.Router();
var pool = require('./pool')



router.post('/addGwaliorNews',function(req,res){
   
    pool.query('insert into `gwaliornews` (`authorname`,`sourcename`,`newstitle`,`imageUrl`,`description`,`nexturl`) values ?',[req.body],function(error,result){
        if(error){
            console.log(error)
           return res.status(500).json({status:false,error:error})
        }
        else{
          return  res.status(200).json({status:true})
        }
    })
  })

  router.get('/displayGwaliorNews', function (req, res, next) {
    console.log(req.body)
    pool.query("select * from gwaliornews", function (error, result) {
        if (error) {
            return res.status(500).json({ status: false, error: error })
        }
        else {
            return res.status(200).json({ data: result })
        }
    })
  });

  router.post('/updateTrueCount', function (req, res, next) {
    console.log(req.body)
    pool.query("update gwaliornews set truecount=? where newsid=?", [req.body.truecount, req.body.newsid], function (error, result) {
        if (error) {
            console.log(error)
            return res.status(500).json({ status: false, error: error })
        }
        else {
            return res.status(200).json({ status: true })
        }
    })
  });
  
router.post('/updateFalseCount', function (req, res, next) {
  console.log(req.body)
  pool.query("update gwaliornews set falsecount=? where newsid=?", [req.body.falsecount, req.body.newsid], function (error, result) {
      if (error) {
          console.log(error)
          return res.status(500).json({ status: false, error: error })
      }
      else {
          return res.status(200).json({ status: true })
      }
  })
});
module.exports = router;