import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { Stack } from './d';
import { HomeScreen } from './screens';

export default () => {
  const { Navigator, Screen } = createNativeStackNavigator<Stack>();

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={HomeScreen} />
    </Navigator>
  );
};
