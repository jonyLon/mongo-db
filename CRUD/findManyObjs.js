const findManyObjs = async(client, { dbName, collectionName }, query) => {
  const options = {
  // sort returned documents in ascending order by name (A->Z)
  sort: { name: 1 },
  // Include only the `name` and `age` fields in each returned document
  projection: { _id: 0, name: 1, age: 1 },
  };

  const cursor = client.db(dbName).collection(collectionName)
  .find(query,options);
  if (await cursor.count() === 0) {
    console.log("No documents found!");
  }
  // replace console.dir with your callback to access individual elements
  await cursor.forEach(console.dir);
}
module.exports=findManyObjs