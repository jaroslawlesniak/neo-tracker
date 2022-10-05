import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import onboarding from '@/features/onboarding';

const App = () => <NavigationContainer>{onboarding()}</NavigationContainer>;

export default App;
