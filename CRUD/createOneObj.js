const {dbName, collectionName} = require('../db-config')

const createOneObj = async (client, newObj) => {
  const result = await client.db(dbName).collection(collectionName).insertOne(newObj);
  console.log(`New Obj created with following ID: ${result.insertedId}`)
  console.log(`New Obj : ${result}`)
}
module.exports = createOneObj;