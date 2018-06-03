import mongoose from 'mongoose';

const authorSchema = new mongoose.Schema({
  name: String,
  stories: [{type: mongoose.Schema.Types.ObjectId, ref: 'Story'}],
});

export default mongoose.model('Author', authorSchema);