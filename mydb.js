var MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb://localhost:27017/YourDB", { useNewUrlParser: true })

MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});