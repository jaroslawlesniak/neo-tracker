import React from 'react'
import { Text } from 'react-native';
import { Button } from '../../../components/button';
import { Screen } from '../../../components/screen';
import { OnboardingScreenRouteProps } from '../d';

type Props = OnboardingScreenRouteProps<'Home'>;

const HomeScreen: React.FC<Props> = ({  }) => {
  return (
    <Screen footer={<Button title='Connect' onPress={() => {}} />}>
      <Text>Home</Text>
    </Screen>
  );
}

export default HomeScreen;
