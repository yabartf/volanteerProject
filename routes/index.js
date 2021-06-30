var express = require('express');
var router = express.Router();
const UserModel = require('../Model')('users');

class User  {
  constructor(ma,pass,fi,las,lon,la) { 
    this.mail = ma
    this.password = pass
    this.firstName = fi
    this.lastName = las 
    this.location = {long:lon, lat: la}    
   }
}

router.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
router.use(express.json());


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login', async function(req, res, next) {
  console.log("login");
  let userReq = req.body
  console.log(userReq);
  let user = await UserModel.REQUEST(userReq.mail,userReq.password)
  
  res.send(user) 
});

module.exports = router;
