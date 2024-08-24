// import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';

import MainStack from './screens/MainStack';

import { ApolloProvider } from '@apollo/client';
import client from './config/apollo';
import AuthProvider from './contexts/AuthContext';
import { RootSiblingParent } from 'react-native-root-siblings';

export default function App() {
  return (
    <RootSiblingParent>
      <AuthProvider>
        <ApolloProvider client={client}>
          <MainStack />
        </ApolloProvider>
      </AuthProvider>
    </RootSiblingParent>
  );
}

const styles = StyleSheet.create({});
