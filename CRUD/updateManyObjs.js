const updateManyObj = async (client,{dbName, collectionName}, query, updatedObj) => {
  const result = await client.db(dbName).collection(collectionName)
  .updateMany(query, updatedObj);
  console.log(`Object(s) was/were matched: ${result.matchedCount}`)
  console.log(`Object(s) was/were updated: ${result.modifiedCount}`)
  console.log(`Result: `)
  console.dir(result)
}
module.exports = updateManyObj;