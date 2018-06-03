import {GraphQLNonNull} from 'graphql';
import AuthorType from '../types/Author';
import AuthorInputType from '../types/input/Author';

export default {
  type: AuthorType,
  args: {
    author: {
      name: 'author',
      type: new GraphQLNonNull(AuthorInputType)
    }
  },
  resolve(root, {author}, {db: {Author}}) {
    const newAuthor = new Author(author);
    return newAuthor.save();
  }
}