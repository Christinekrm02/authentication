//replace <password> with password for Dev_Chrissy
//Replace myFirstDatabase with the name of the database that connections will use by default.
//Ensure any option params are URL encoded.
const MongoClient = require("mongodb").MongoClient;
const uri =
  "mongodb+srv://Dev_Chrissy:<password>@node-auth.t5vpg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
