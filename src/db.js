import mongoose from 'mongoose'

export const startDB = async () => {
  try {
    // will be replace by atlas url
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    console.log('DB started perfected')
  } catch (err) {
    process.exit(1)
  }

}