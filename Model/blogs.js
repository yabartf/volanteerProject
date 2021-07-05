const debug = require("debug")("mongo:model-blog");
const mongo = require("mongoose");



module.exports = function (db) {
    // create a schema
    let schema = new mongo.Schema({
        title: { type: String, required: true },
        date: { type: Date, required: true },
        body: { type: String, required: true },
        }, { autoIndex: true });


    schema.statics.CREATE = async function (blog) {
        return this.create({
            title: blog.title,
            date: blog.date,
            body: blog.body
        });
    };
    // on every save, add the date
    schema.pre('save', function (next) {        
        next();
    });
    schema.statics.REQUEST = async function () {
        return await this.find().exec();
    };

    // the schema is useless so far
    // we need to create a model using it
    db.model('blogs', schema); // (model, schema, collection)
    //db.model('Users', schema); // if model name === collection name
    debug("Blogs model created");
};

