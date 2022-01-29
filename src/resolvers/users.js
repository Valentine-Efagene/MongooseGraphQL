import UserModel from "../model/user.js"

export const getUsers = async () => {
  try {
    const users = await UserModel.find()
    return users
  } catch (error) {
    console.log(error)
  }

  return null
}

export const addUser = async (_, { input: user }) => {
  try {
    (new UserModel(user)).save()
    const { email, role, token } = user
    return { email, role, token }
  } catch (error) {
    console.log(error)
  }
}