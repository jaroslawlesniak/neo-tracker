import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type Stack = {
  Home: undefined;
};

export type OnboardingScreenRouteProps<T extends keyof Stack> =
  NativeStackScreenProps<Stack, T>;
