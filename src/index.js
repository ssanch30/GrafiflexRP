import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/containers/App';
import registerServiceWorker from './registerServiceWorker';
import ApolloClient from 'apollo-client'
import {ApolloProvider} from 'react-apollo'
import {createHttpLink} from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory';
import { BrowserRouter } from 'react-router-dom'

const client = new ApolloClient({
    link: createHttpLink({uri:'http://192.168.1.1:3300/graphql'}),
    cache: new InMemoryCache({
        addTypename:false
    })
})




ReactDOM.render(

<BrowserRouter  >
    <ApolloProvider client = {client}>
        <App/>
    </ApolloProvider>
</BrowserRouter>

, document.getElementById('root'));
registerServiceWorker();
