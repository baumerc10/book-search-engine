const {gql} = require('apollo-server-express');
const typeDefs = gql`
type Book {
    _id: ID!
    bookId: String
    authors: [String]
    # authors: String
    description: String
    title: String
    image: String
    link: String
}

type Query {
    me: User
}

type User {
    _id: ID!
    username: String
    email: [String]
    bookCount: Int
    savedBooks: [Book]
}

input savedBook {
    description: String
    title: String
    bookId: String
    image: String
    link: String
    authors: [String]
}

type Auth {
    token: ID!
    user: User
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: bookInput): User
    removeBook(bookId: String!): User
}
`;

modeule.exports = typeDefs;