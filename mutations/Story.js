import {GraphQLNonNull} from 'graphql';
import StoryType from '../types/Story';
import StoryInputType from '../types/input/Story';

export default {
  type: StoryType,
  args: {
    story: {
      name: 'story',
      type: new GraphQLNonNull(StoryInputType)
    }
  },
  resolve(root, {story}, {db: {Story}}) {
    const newStory = new Story(story);
    return newStory.save();
  }
}