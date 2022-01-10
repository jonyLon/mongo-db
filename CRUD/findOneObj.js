const findOneObj = async(client, {dbName, collectionName}, query) => {
  const result = await client.db(dbName).collection(collectionName)
  .findOne(query)
  if(result){
    console.log(`Found an obj with ${JSON.stringify(query)}`);
    console.dir(result);
  } else {
    console.log(`No obj found with ${JSON.stringify(query)}`);
  }
}
module.exports = findOneObj;