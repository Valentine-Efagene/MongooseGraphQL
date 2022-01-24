// https://www.apollographql.com/docs/apollo-server/getting-started/

import { getBooks, addBook } from "./books.js";

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
// https://www.apollographql.com/docs/apollo-server/data/resolvers/
// (parent, args, context, info)


const resolvers = {
  Query: {
    books: getBooks,
  },
  Mutation: {
    addBook,
    test: (_, { value }) => { return value }
  }
};

export default resolvers