import mongoose from "mongoose";
import BookSchema from "../schema/book.js";

const { model } = mongoose

const BookModel = model('book', BookSchema)
export default BookModel