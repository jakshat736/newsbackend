var express = require('express');
var router = express.Router();
var pool = require('./pool')



router.post('/addSportsNews',function(req,res){
   
    pool.query('insert into `sportsnews` (`authorname`,`sourcename`,`newstitle`,`imageUrl`,`description`,`nexturl`) values ?',[req.body],function(error,result){
        if(error){
            console.log(error)
           return res.status(500).json({status:false,error:error})
        }
        else{
          return  res.status(200).json({status:true})
        }
    })
  })

  router.get('/displaySportsNews', function (req, res, next) {
    console.log(req.body)
    pool.query("select * from sportsnews", function (error, result) {
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
  pool.query("update sportsnews set truecount=? where newsid=?", [req.body.truecount, req.body.newsid], function (error, result) {
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
  pool.query("update sportsnews set falsecount=? where newsid=?", [req.body.falsecount, req.body.newsid], function (error, result) {
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