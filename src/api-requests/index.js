import gql from 'graphql-tag';

export const GET_BOOKS = gql`
    query{
        books {
            id
            name
        }
    }
`
export const GET_BOOK_DETAILS = gql`
    query($id: ID){
        book(id: $id){
            name
            genre
                author {
                    id
                    name
                    age
                    books {
                        id
                        name
                    }
                }
        }
    }
`

export const GET_AUTHORS = gql`
    query{
        authors {
            id
            name
        }
    }
`

export const EDIT_AUTHOR = gql`
    mutation($id:ID!, $name: String!, $age: Int){
        editAuthor(id:$id, name:$name, age:$age ){
            id
            name
            age
        }
    }
`

export const ADD_BOOK = gql`
    mutation($name: String!, $genre: String!, $authorId: ID!) {
        addBook(name:$name, genre:$genre, authorId:$authorId){
            name
            id
        }
    }
`

export const REMOVE_BOOK = gql`
    mutation($id: ID!) {
        removeBook(id:$id){
            id
        }
    }
`
  