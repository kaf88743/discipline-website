const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-mananger";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to the database");
    }

    const db = client.db(databaseName);

    db.collection("users").insertOne(
      {
        name: "Kevin",
        age: 39
      },
      (error, result) => {
        if (error) {
          return console.log("There was an error");
        }
        console.log(result.ops);
      }
    );
  }
);
