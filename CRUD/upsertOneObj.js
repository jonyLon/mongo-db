  // In addition to update we also can use { upsert: true }, like a parameter
  // that allow us to create a new object if no objects matches the query.
  const upsertOneObj = async (client,{dbName, collectionName}, filterbyName, upsertedObj) => {
    const result = await client.db(dbName).collection(collectionName)
    .updateOne({name: filterbyName}, {$set: upsertedObj}, {upsert: true});
    console.log(`Object(s) was/were matched: ${result.matchedCount}`)
    console.log(`Object(s) was/were updated: ${result.modifiedCount}`)
    console.log(`Object(s) was/were inserted: ${result.upsertedCount}`)
    console.log(`Result: `)
    console.dir(result)
  }
  module.exports = upsertOneObj;