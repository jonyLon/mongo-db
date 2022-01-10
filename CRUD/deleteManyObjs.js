const deleteManyObj = async (client,{dbName, collectionName}, query) => {
  const result = await client.db(dbName).collection(collectionName)
  .deleteMany(query);
  console.log(`Object(s) was/were deleted: ${result.deletedCount}`)
  console.log(`Result: `)
  console.dir(result)
}
module.exports = deleteManyObj;