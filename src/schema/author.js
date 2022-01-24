import mongoose from 'mongoose'

const { Schema, ObjectId } = mongoose

const AuthorSchema = new Schema({
  _id: ObjectId,
  name: String,
  age: Number
})

export default AuthorSchema