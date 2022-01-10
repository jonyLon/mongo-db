const updateOneObj = async (client,{dbName, collectionName}, filterbyName, updatedObj) => {
  const result = await client.db(dbName).collection(collectionName)
  .updateOne({name: filterbyName}, {$set: updatedObj});
  console.log(`Object(s) matched: ${result.matchedCount}`)
  console.log(`Object(s) updated: ${result.modifiedCount}`)
  console.log(`Result: `)
  console.dir(result)
}
module.exports = updateOneObj;