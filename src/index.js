import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Test from './TestC';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

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
      <Test />
    </ApolloProvider>
  </React.StrictMode>
);


