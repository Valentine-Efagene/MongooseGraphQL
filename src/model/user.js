import mongoose from 'mongoose'
import UserSchema from '../schema/user.js'

const UserModel = mongoose.model('user', UserSchema)
export default UserModel