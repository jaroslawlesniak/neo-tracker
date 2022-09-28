import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Stack } from './d';
import HomeScreen from './screens/HomeScreen';

export default () => {
  const { Navigator, Screen } = createNativeStackNavigator<Stack>();

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={HomeScreen} />
    </Navigator>
  );
}
