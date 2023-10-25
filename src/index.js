import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './static/css/index.css';
import Test from './TestC';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import BlogRouter from './BlogRouter';

const root = ReactDOM.createRoot(document.getElementById('root'));
const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

const client = new ApolloClient({
  uri: API_ENDPOINT,
  cache: new InMemoryCache()
})


root.render(
  // <React.StrictMode>
    <ApolloProvider client={client}>
        <BlogRouter />
    </ApolloProvider>
  // </React.StrictMode>
);


