const findObjByName = async(client, {dbName, collectionName}, objName) => {
  const result = await client.db(dbName).collection(collectionName)
  .findOne({name: objName})
  if(result){
    console.log(`Found an obj with name ${objName}`);
    console.dir(result);
  } else {
    console.log(`No obj found with name ${objName}`);
  }
}
module.exports = findObjByName;