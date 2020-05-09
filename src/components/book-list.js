import React, {useState} from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_BOOKS, REMOVE_BOOK } from '../api-requests';
import BookDetails from './book-details';
import { useMutation } from '@apollo/react-hooks';


function BookList() {
    const {data, loading} = useQuery(GET_BOOKS);
    const [ckickedBook, setClickedBook] = useState(null);
    const [removeBook, { props }] = useMutation(REMOVE_BOOK);
  
    if(loading){
        return<div>Loading...</div>
    }
    const {books} = data;
    return (
        <div>
            <ul className="book-list">
                {
                    books.map(({id, name}) => (
                        <div className="list-item" key={id}>
                            <li onClick={() => setClickedBook(id)}>
                                {name}
                            </li>
                            <button 
                                title="remove"
                                onClick={
                                    () => removeBook({
                                        variables: {
                                            id
                                        },
                                        refetchQueries: [{
                                            query: GET_BOOKS
                                        }]
                                    })
                                }
                            >+</button>
                        </div>
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
