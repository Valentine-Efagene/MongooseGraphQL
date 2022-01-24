const queries = {
  books:
    `query GetBooks {
    books {
      title
      author {
        name
      }
    }
  }`,
  addBook:
    `mutation CreateBook {
      addBook(input: {
          title: "Fox in Socks", 
          author: {
              name: "Dr. Seuss",
              age: 54
            }
        }) {
        title
        author {
          name
        }
      }
    }`
}