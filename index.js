const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

const { MONGODB_URL, PORT } = require('./config/config')



const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req })
});


mongoose.connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB is Successfully Connected')
    return server.listen({ port: PORT })
  })
  .then(res => {
    console.log(`Server is running at ${res.url}`)
  })
  .catch(err => {
    console.error(err)
  })
