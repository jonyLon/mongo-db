require('dotenv').config({ path: 'secrets.env' })
const { MongoClient } = require('mongodb');
const listDatabases = require('./listDBs')
const password = process.env.PASS
const createListing = require('./createList')
const main = async () => {
  const uri = `mongodb+srv://masterlordgoker:${password}@cluster0.ekxqw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
  const client = new MongoClient(uri);
  try {
    await client.connect();
    // await listDatabases(client);
    await createListing(client, { firstName: 'Vlad', secondName: 'Shkliaruk' })
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}
main().catch(console.error);
