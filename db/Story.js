import mongoose from 'mongoose';

const storySchema = new mongoose.Schema({
  name: String,
  author: {type: mongoose.Schema.Types.ObjectId, ref: 'Author'}
});

export default mongoose.model('Story', storySchema);