import { NavigationContainer } from '@react-navigation/native';
import { ApolloProvider } from '@apollo/client';
import React from 'react';

import onboarding from '@/features/onboarding';
import { client } from '@/lib/graphql';

const App = () => (
  <ApolloProvider client={client}>
    <NavigationContainer>{onboarding()}</NavigationContainer>
  </ApolloProvider>
);

export default App;
