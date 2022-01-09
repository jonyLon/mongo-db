const createListing = async (client, newList) => {
  const result = await client.db('sample_airbnb').collection('listingAndReviews').insertOne(newList);
  console.log(`New list created with following ID: ${result.insertedId}`)
  console.log(`New list : ${result}`)
}
module.exports = createListing;