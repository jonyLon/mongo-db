const {dbName, collectionName} = require('../db-config')

const createManyObjects = async (client, newObjects) => {
  const results = await client.db(dbName).collection(collectionName).insertMany(newObjects);
  console.log(`New objects created with following IDs: ${JSON.stringify(results.insertedIds)}`)
  console.log(JSON.stringify(results))
}
module.exports = createManyObjects;