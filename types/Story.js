import {GraphQLObjectType, GraphQLNonNull, GraphQLID, GraphQLString} from 'graphql';
import AuthorType from './Author';
export default new GraphQLObjectType({
    name: 'Story',
    fields: () => ({
      id: {
        type: new GraphQLNonNull(GraphQLID),
      },
      name: {
        type: GraphQLString,
      },
      author: {
        type: AuthorType
      }
    })
  });