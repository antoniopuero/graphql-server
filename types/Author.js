import {GraphQLObjectType, GraphQLNonNull, GraphQLID, GraphQLString, GraphQLList} from 'graphql';
import StoryType from './Story';
export default new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
      id: {
        type: new GraphQLNonNull(GraphQLID),
      },
      name: {
        type: GraphQLString,
      },
      stories: {
        type: new GraphQLList(StoryType),
      }
    })
  });