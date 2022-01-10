
const listCollections = async (client, dbName) => {
  const list = await client.db(dbName).listCollections().toArray()
      list.forEach(element => {
        console.log(`Collections inside ${dbName} database:`);
        console.log(element.name);
      })
  }
module.exports = listCollections