require('dotenv').config({ path: 'secrets.env' })
const { MongoClient } = require('mongodb');
const { dbName, collectionName } = require('./db-config');
const listDatabases = require('./listDBs')
const listCollection = require('./listCollection')
const password = process.env.PASS
const createOneObj = require('./CRUD/createOneObj')
const createManyObjects = require('./CRUD/createManyObjs')
const findOneObj = require('./CRUD/findOneObj');
const findManyObjs = require('./CRUD/findManyObjs');
const updateOneObj = require('./CRUD/updateOneObj');
const upsertOneObj = require('./CRUD/upsertOneObj');
const updateManyObj = require('./CRUD/updateManyObjs');
const deleteOneObj = require('./CRUD/deleteOneObj');
const deleteManyObj = require('./CRUD/deleteManyObjs');

const connect = async () => {
  const uri = `mongodb+srv://masterlordgoker:${password}@cluster0.ekxqw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
  const client = new MongoClient(uri);
  try {
    await client.connect();
    // await listDatabases(client);
    // await listCollection(client, dbName)
    // await createOneObj(client,{ dbName, collectionName }, { name:'Vlad', age:'21'})
    // await createManyObjects(client,{ dbName, collectionName }, [{name:'Kolia', age:'13'},{name: 'Sveta', age:'13'}, {name: 'Roma', age: '11'}])
    // await findOneObj(client,{ dbName, collectionName }, {name:'Sveta'})
    // await findManyObjs(client,{ dbName, collectionName }, {age:'13'})
    // await updateOneObj(client,{dbName,collectionName},{name:'Kolia'},{$set: {age: '15'}})
    // await upsertOneObj(client,{dbName,collectionName},{name: 'Sasha'},{$set:{age: 21}})
    // await updateManyObj(client,{dbName, collectionName}, {type: {$exists: false}}, {$set: {type: 'person'}})
    // await deleteOneObj(client,{dbName, collectionName}, {name: 'Vlad'})
    // await deleteManyObj(client,{dbName, collectionName}, { age: '13' })
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}
connect().catch(console.error);
