const createMultyListing = async (client, newLists) => {
  const results = await client.db('sample_airbnb').collection('listingAndReviews').insertMany(newLists);
  console.log(`New lists created with following IDs: ${JSON.stringify(results.insertedIds)}`)
  console.log(JSON.stringify(results))
}
module.exports = createMultyListing;