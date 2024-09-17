// import { ApolloClient, InMemoryCache } from '@apollo/client';

// const client = new ApolloClient({
//   uri: 'https://4894-2001-448a-50e0-988a-f03a-8c47-927d-1a79.ngrok-free.app',
//   cache: new InMemoryCache(),
// });

import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

import { setContext } from '@apollo/client/link/context';

import * as SecureStore from 'expo-secure-store';

const httpLink = new createHttpLink({
  uri: 'https://cdf9-2001-448a-50e0-29a-c010-dc67-d729-bbf1.ngrok-free.app',
  // uri: 'http://localhost:4000/'
  // uri: 'https://twitter-clone.anantair.my.id',
});

const authLink = setContext(async (_, { headers }) => {
  const token = await SecureStore.getItemAsync('access_token');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
