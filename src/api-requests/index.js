import gql from 'graphql-tag';

export const GET_BOOKS = gql`
{
    books {
        id
        name
    }
}
`