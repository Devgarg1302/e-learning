import express from "express";
import bodyParser from "body-parser";
import { MongoClient } from "mongodb";

const app = express();

app.use(bodyParser.json());

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbName = 'googleProject';

async function main() {
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('documents');

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());


app.get("/", (req, res) => {
    res.send("Hello World!");
});