import mongoose, { Schema, schema } from 'mongoose'
import modelOptions from './model.options'

export default mongoose.model(
  'Review',
  mongoose.Schema(
    {
      user: {
        type: Schema.Type.ObjectId,
        ref: 'User',
        required: true,
      },
      content: {
        type: String,
        required: true,
      },
      mediaType: {
        type: String,
        enum: ['tv', 'movie'],
        required: true,
      },
      mediaId: {
        type: String,
        required: true,
      },
      mediaTitle: {
        Type: String,
        required: true,
      },
      mediaPoster: {
        type: String,
        required: true,
      },
    },
    modelOptions
  )
)
