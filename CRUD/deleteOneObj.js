const deleteOneObj = async (client,{dbName, collectionName}, filterbyName) => {
  const result = await client.db(dbName).collection(collectionName)
  .deleteOne({name: filterbyName});
  console.log(`Object(s) was/were deleted: ${result.deletedCount}`)
  console.log(`Result: `)
  console.dir(result)
}
module.exports = deleteOneObj;