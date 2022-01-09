const listDatabases = async (client) => {
  const list = await client.db().admin().listDatabases()
  console.log('Databases:');
  list.databases.forEach(db => {
    console.log(`- ${db.name}`);
  });
}
module.exports = listDatabases