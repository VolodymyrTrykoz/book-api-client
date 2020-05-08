import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_BOOK_DETAILS } from '../api-requests';

function BookDetails({id}) {
    const {loading, data} = useQuery(GET_BOOK_DETAILS, {variables: {id}});
    
    if(loading){ return null}
    
    if(data && data.book){
        console.log(data.book);
        return(
            <>
                <p>Book title: {data.book.name}</p>
                <p>Genre: {data.book.genre}</p>
                <p>Author's name: {data.book.author.name}</p>
                <ul>
                    {data.book.author.books.map(({id, name}) =>(
                        <li key={id}>{name}</li>
                    ))}
                </ul>
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
