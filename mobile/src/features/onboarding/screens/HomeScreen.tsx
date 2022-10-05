import React from 'react';
import { Text } from 'react-native';
import { useLazyQuery } from '@apollo/client';

import { Button } from '@/components/button';
import { Screen } from '@/components/screen';

import { AstronomicalPictureOfDayResponse, OnboardingScreenRouteProps } from '../d';
import { FETCH_ASTRONOMICAL_PICTURE_OF_DAY } from '../services';
import { Image } from 'react-native';

type Props = OnboardingScreenRouteProps<'Home'>;

const HomeScreen: React.FC<Props> = ({}) => {
  const [getApod, { loading, data, called, error }] = useLazyQuery<AstronomicalPictureOfDayResponse>(FETCH_ASTRONOMICAL_PICTURE_OF_DAY);

  return (
    <Screen footer={<Button title="Connect" onPress={getApod} />}>
      <Text>Home</Text>

      {called && <Text>Called</Text>}
      {loading ? <Text>Loading</Text> : <Text>Not loading</Text>}

      {data && data.url && (<Image source={{ uri: data.url }} />)}
    </Screen>
  );
};

export default HomeScreen;
