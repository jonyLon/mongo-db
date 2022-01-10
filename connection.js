require('dotenv').config({ path: 'secrets.env' })
const { MongoClient } = require('mongodb');
const { dbName, collectionName } = require('./db-config');
const listDatabases = require('./listDBs')
const listCollection = require('./listCollection')
const password = process.env.PASS
const createOneObj = require('./CRUD/createOneObj')
const createManyObjects = require('./CRUD/createManyObjs')
const findObjByName = require('./CRUD/findObjByName');
const findObjsByQuery = require('./CRUD/findObjsByQuery');

const connect = async () => {
  const uri = `mongodb+srv://masterlordgoker:${password}@cluster0.ekxqw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
  const client = new MongoClient(uri);
  try {
    await client.connect();
    // await listDatabases(client);
    // await listCollection(client, dbName)
    // await createOneObj(client,{ dbName, collectionName }, { name:'Vlad', age:'21'})
    // await createManyObjects(client,{ dbName, collectionName }, [{name:'Kolia', age:'13'},{name: 'Sveta', age:'13'}, {name: 'Roma', age: '11'}])
    // await findObjByName(client,{ dbName, collectionName }, 'Sveta')
    await findObjsByQuery(client,{ dbName, collectionName })
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}
connect().catch(console.error);
