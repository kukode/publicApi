const Datastore = require('nedb')

db = new Datastore({filename : 'user',autoload: true})


let data = {
    "nama" : "lorem",
    "password" : "1234"
}
db.insert(data)

// db.remove({"_id" : "kopP4AF4mCAiVntc"})

