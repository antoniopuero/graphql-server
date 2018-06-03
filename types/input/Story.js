import {GraphQLInputObjectType, GraphQLString, GraphQLID} from 'graphql';

export default new GraphQLInputObjectType({
  name: 'StoryInput',
  fields: {
    name: {type: GraphQLString},
    author: {type: GraphQLID}
  }
});