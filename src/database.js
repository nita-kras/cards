const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb+srv://psynk8:comp2002@comp2002nita.tjjzkac.mongodb.net/test'
const client = new MongoClient(url);

await client.connect();



await client.close();