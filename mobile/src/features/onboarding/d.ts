import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type Reactions = {
  heart?: number;
}

export type AstronomicalPictureOfDayResponse = {
  date?: string;
  explanation?: string;
  hdurl?: string;
  media_type?: 'image' | 'video';
  service_version?: string;
  title?: string;
  url?: string;
  reaction?: 'heart';
  copyright?: string;
  reactions?: Reactions;
}

export type Stack = {
  Home: undefined;
};

export type OnboardingScreenRouteProps<T extends keyof Stack> =
  NativeStackScreenProps<Stack, T>;
