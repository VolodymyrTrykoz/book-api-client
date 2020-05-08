import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import BookList from './book-list';
import AddBook from './add-book';

// apollo client setup
const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
  });
  
class App extends Component {
    render () {
        return (
            <ApolloProvider client={client}>
                <div className="app">
                    <h1>GraphQL/Apollo client reading list</h1>
                    <BookList />
                    <AddBook/>
                </div>
            </ApolloProvider>
        ); 
    }
}

export default App; 
