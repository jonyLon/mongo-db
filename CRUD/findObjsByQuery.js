const {dbName, collectionName} = require('../db-config')

const findObjsByQuery = async(client, {
  minAge,
  maxNumberOfResults = Number.MAX_SAFE_INTEGER
} = {}) => {
  const cursor = client.db(dbName).collection(collectionName).find({
    age: { $gte: minAge }
  }).limit(maxNumberOfResults)
  const results = await cursor.toArray();
  console.log(results);
}
module.exports=findObjsByQuery