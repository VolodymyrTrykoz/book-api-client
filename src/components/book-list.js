import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_BOOKS } from '../api-requests';



function BookList() {
    const data = useQuery(GET_BOOKS);
  
    if(!data.data){
        return<div>Loading...</div>
    }
    const {books} = data.data;
    return (
        <div>
            <ul id="book-list">
                {
                    books.map(({id, name}) => (
                        <li key={id}>{name}</li>
                    )) 
                }
            </ul>
        </div>
    );
}

export default BookList;
