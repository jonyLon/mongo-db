const createOneObj = async (client,{dbName, collectionName}, newObj) => {
  const result = await client.db(dbName).collection(collectionName).insertOne(newObj);
  console.log(`New Obj created with following ID: ${result.insertedId}`)
  console.log(`New Obj : ${JSON.stringify(result)}`)
}
module.exports = createOneObj;