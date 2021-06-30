const UserModel = require('./model')('users');
//const timeout = require("./timeout");
const prompt = require('./prompt');

class User  {
  constructor(ma,pass,fi,las,lon,la) { 
    this.mail = ma
    this.password = pass
    this.firstName = fi
    this.lastName = las 
    this.location = {long:lon, lat: la}
    
   }
}

(async () => {
  console.clear();
 // await timeout(500);
  while (true) {
    let user = [];
    console.log();
    user[0] = await prompt("Please enter mail: ");
    user[1] = await prompt('Please enter password: ');
    user[2] = await prompt('Please enter first: ');
    user[3] = await prompt('Please enter last: ');
    user[4] = await prompt('Please enter long: ');
    user[5] = await prompt('Please enter lat: ');
   // let admin = await prompt('Please enter admin status (Y or anything other): ');
    let userDB = new User(user[0],user[1],user[2],user[3],user[4],user[5]) 
    console.log(userDB);
    try {
        //await User.save({});      
        await UserModel.CREATE(userDB);
        
        console.log('User created:' + userDB);
    } catch(err) { throw err; }
  }
})();
