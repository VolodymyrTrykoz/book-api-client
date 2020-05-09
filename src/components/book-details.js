import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useMutation } from '@apollo/react-hooks';
import { GET_BOOK_DETAILS, EDIT_AUTHOR } from '../api-requests';

function BookDetails({id}) {
    const {loading, data, refetch} = useQuery(GET_BOOK_DETAILS, {variables: {id}});
    const [editAuthor, { props }] = useMutation(EDIT_AUTHOR);
    
    if(loading){ return null}

    const handleChange = (id) => {
        editAuthor({
            variables: {
                id,
                name: "Quentin Tarantino",
                age: Math.floor(Math.random() * 100)
            }
        });
        refetch();
    }
    
    if(data && data.book){
        return(
            <>
                <p>Book title: {data.book.name}</p>
                <p>Genre: {data.book.genre}</p>
                <p>Author's name: {data.book.author.name}</p>
                <p>Author's age: {data.book.author.age}</p>
                <ul>
                    {data.book.author.books.map(({id, name}) =>(
                        <li key={id}>{name}</li>
                    ))}
                </ul>
                <button onClick={() => handleChange(data.book.author.id)}>Test change Tarantino data</button>
            </>
        )
    }
    return(
        <>
            Click on book to see details...
        </>
    )    
}

export default BookDetails;
