import {GraphQLID, GraphQLNonNull} from 'graphql';
import StoryType from '../types/Story';

export default {
  type: StoryType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve(root, args, {db: {Story}}) {
    return Story.findById(args.id).populate('author').exec();
  }
}