import mongoose from 'mongoose'
import AuthorSchema from './author.js'

const { Schema, ObjectId } = mongoose

const BookSchema = new Schema({
  _id: ObjectId,
  title: String,
  author: AuthorSchema
})

export default BookSchema