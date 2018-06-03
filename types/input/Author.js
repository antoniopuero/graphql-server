import {GraphQLInputObjectType, GraphQLString, GraphQLList, GraphQLID} from 'graphql';

export default new GraphQLInputObjectType({
  name: 'AuthorInput',
  fields: {
    name: {type: GraphQLString},
    stories: {
      type: new GraphQLList(GraphQLID)
    }
  }
});