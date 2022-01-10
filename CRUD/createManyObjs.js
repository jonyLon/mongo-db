const createManyObjects = async (client,{dbName, collectionName},newObjects) => {
  const results = await client.db(dbName).collection(collectionName).insertMany(newObjects);
  console.log(`New objects created with following IDs: ${JSON.stringify(results.insertedIds)}`)
  console.log(`New objects:`)
  console.dir(results)
}
module.exports = createManyObjects;