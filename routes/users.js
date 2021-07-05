var express = require('express');
var router = express.Router();
const UserModel = require('../Model')('users');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/allUsers', async function(req, res, next) {
  let users = await UserModel.REQUEST()
  res.send(users);
});

module.exports = router;
