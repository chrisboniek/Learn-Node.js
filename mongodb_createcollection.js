var MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb://localhost:27017/YourDB", { useNewUrlParser: true })

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.createCollection("customers", { useNewUrlParser: true }, function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
}); 