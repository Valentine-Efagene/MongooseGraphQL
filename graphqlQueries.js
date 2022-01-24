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

const withParams = {
  addBook: {
    query:
      `mutation CreateBook ($input: BookInput!) {
      addBook(input: $input) {
        title
        author {
          name
        }
      }
    }`,
    params:
      `mutation CreateBook ($input: BookInput!) {
      addBook(input: $input) {
        title
        author {
          name
        }
      }
    }`
  }
}