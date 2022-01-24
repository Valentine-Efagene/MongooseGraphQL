import mongoose from "mongoose";
import AuthorSchema from "../schema/author.js";

const { model } = mongoose

const AuthorModel = model('author', AuthorSchema)
export default AuthorModel