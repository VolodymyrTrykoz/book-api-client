import React,{useState, useEffect} from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useMutation } from '@apollo/react-hooks';
import { GET_AUTHORS, ADD_BOOK, GET_BOOKS } from '../api-requests';

function AddBook() {
    const data = useQuery(GET_AUTHORS);
    const [addBook, { props }] = useMutation(ADD_BOOK);
    const [title, setBookTitle] = useState(null);
    const [genre, setBookGenre] = useState(null);
    const [authorId, setAuthorId] = useState(null);

    useEffect(()=>{
        if(!data.loading){
            setAuthorId(data.data.authors[0].id) 
        }
	}, [data]);
  
    if(data.loading){
        return<div>Loading...</div>
    }
    const {authors} = data.data;
    
    const handleFormSubmit = e => {
        e.preventDefault();
        addBook({
            variables: {
                name: title,
                genre,
                authorId
            },
            refetchQueries: [{
                query: GET_BOOKS
            }]
        });
        setBookTitle('');
        setBookGenre('');
    }

    return (
        <form onSubmit={e => handleFormSubmit(e)}>
            <div className="field">
                <label>Author:</label>
                <select onChange={e => setAuthorId(e.target.value)}>
                    {
                        authors.map(({id, name}) => (
                            <option 
                                key={id} 
                                value={id}
                            >
                                {name}
                            </option>
                        ))
                    }
                </select>
            </div>
            <div className="field">
                <label>Book name:</label>
                <input value={title} onChange={e => setBookTitle(e.target.value)}/>
            </div>
            <div className="field">
                <label>Genre:</label>
                <input value={genre} onChange={e => setBookGenre(e.target.value)}/>
            </div> 
            <button type="submit">+</button>
        </form>
    );
}

export default AddBook;
