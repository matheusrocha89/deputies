import React from 'react';
import 'react-native-gesture-handler';
import {ApolloProvider} from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

import {GRAPHQL_URI} from './src/config';
import AppRouter from './src/routes';

const client = new ApolloClient({
  uri: GRAPHQL_URI,
  connectToDevTools: true,
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <AppRouter />
    </ApolloProvider>
  );
};

export default App;
