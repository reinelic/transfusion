import mongoose from 'mongoose'

const alertSchema = mongoose.Schema(
  {
    hopital: {
      type: String,
      required: true,
    },
    alert: { type: String, required: true },
  },
  {
    timestamps: true,
  }
)

const Alert = mongoose.model('Alert', alertSchema)

export default Alert
