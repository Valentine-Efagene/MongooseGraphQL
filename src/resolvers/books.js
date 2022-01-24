import BookModel from "../model/book.js"

export const getBooks = async () => {
  try {
    const books = await BookModel.find()
    return books
  } catch (error) {
    console.log(error)
  }

  return null
}

export const addBook = async (_, { input: book }) => {
  try {
    (new BookModel(book)).save()
    const { title, author } = book
    return { title, author }
  } catch (error) {
    console.log(error)
  }
}