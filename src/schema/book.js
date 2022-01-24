import mongoose from 'mongoose'
import AuthorSchema from './author.js'

const { Schema } = mongoose

const BookSchema = new Schema({
  title: String,
  author: AuthorSchema
})

export default BookSchema