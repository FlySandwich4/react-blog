import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './static/css/index.css';
import Test from './TestC';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import BlogRouter from './BlogRouter';

const root = ReactDOM.createRoot(document.getElementById('root'));
const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT
console.log(API_ENDPOINT);

const client = new ApolloClient({
  uri: API_ENDPOINT,
  cache: new InMemoryCache()
})


root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      {/* DisplayBox: Everything display in this box, CSS in 'index.css', set to 100vw, 100vh */}
      <div className='DisplayBox'>
        <BlogRouter />
      </div>
    </ApolloProvider>
  </React.StrictMode>
);


