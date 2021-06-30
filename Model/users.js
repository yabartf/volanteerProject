const debug = require("debug")("mongo:model-user");
const mongo = require("mongoose");



module.exports = function (db)  {
    // create a schema
    let schema = new mongo.Schema({        
        mail: { type: String, required: true, unique: true, index: true },
        password: { type: String, required: true },
        firstName:{type: String, required: true },
        lastName:{type: String, required: true },
        admin: {type: Boolean, required: true},
        location: {type: {
            long: Number,
            lat: Number
        }, required: true},
    }, { autoIndex: false });


    schema.statics.CREATE = async function(user) {
        return this.create({
            mail: user.mail,
            password: user.password,
            firstName: user.firstName,
            lastName: user.lastName,
            location: user.location,
            admin: false            
        });
    };
     // on every save, add the date
     schema.pre('save', function(next) {
        // get the current date
        
        // change the updated_at field to current date
        
        // if created_at doesn't exist, add to that field
      
        next();
    });
    schema.statics.REQUEST = async function() {
        // no arguments - bring all at once
        const args = Array.from(arguments); // [...arguments]
        
        if (args.length === 0) {
            debug("request: no arguments - bring all at once");
            return this.find().exec();
        }
        if (args.length == 2){        
            debug("request: by username and password");
            let res = await this.find({mail:args[0], password:args[1]}).exec()                     
            return res;
        }

        // There is no callback - bring requested at once
        debug(`request: somthing wrong`);
        return;
    };

    // the schema is useless so far
    // we need to create a model using it
    db.model('users', schema); // (model, schema, collection)
    //db.model('Users', schema); // if model name === collection name
    debug("Users model created");
};

