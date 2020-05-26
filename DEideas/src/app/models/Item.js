import mongoose from 'mongoose';

const ItemSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    shortDescription: String,
    category: [String],
    userId: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model('Item', ItemSchema);
