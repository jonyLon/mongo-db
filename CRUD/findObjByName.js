const {dbName, collectionName} = require('../db-config')

const findObjByName = async(client, objName) => {
  const result = await client.db(dbName).collection(collectionName)
  .findOne({name: objName})
  if(result){
    console.log(`Found an obj with name ${objName}`);
    console.log(result);
  } else {
    console.log(`No obj found with name ${objName}`);
  }
}
module.exports = findObjByName;