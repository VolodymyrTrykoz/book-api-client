import React, {useState} from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_BOOKS } from '../api-requests';
import BookDetails from './book-details';



function BookList() {
    const {data, loading} = useQuery(GET_BOOKS);
    const [ckickedBook, setClickedBook] = useState(null)
  
    if(loading){
        return<div>Loading...</div>
    }
    const {books} = data;
    return (
        <div>
            <ul className="book-list">
                {
                    books.map(({id, name}) => (
                        <li key={id} onClick={() => setClickedBook(id)}>{name}</li>
                    )) 
                }
            </ul>
            <div className="details">
                <BookDetails id={ckickedBook}/>
            </div>
        </div>
    );
}

export default BookList;
