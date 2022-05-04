const mongo = require("mongodb").MongoClient;
let _db;

class ConfigDataBase {
    
    mongoDBConnect() {
        const url = "mongodb+srv://dba_mongo:1UjJXuN6vKWKt6CX@cluster0.jk1e2.mongodb.net/briefcase?retryWrites=true&w=majority";
        mongo.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }, (err, client) => {
            if (err) {
                console.error(err)
                return
            }

            _db = client.db("briefcase")
        })
    }

    getDb() {
        return _db;
    };

}

module.exports = ConfigDataBase
