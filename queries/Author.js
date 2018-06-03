import {GraphQLID, GraphQLNonNull} from 'graphql';
import AuthorType from '../types/Author';

export default {
  type: AuthorType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve(root, args, {db: {Author}}) {
    return Author.findById(args.id).populate('stories').exec();
  }
}