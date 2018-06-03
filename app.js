import express from 'express';
import graphqlHTTP from 'express-graphql';
import db from './db';
import schema from './schema';

const app = express();

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
  pretty: true,
  context: {db}
}));

app.listen(4000);