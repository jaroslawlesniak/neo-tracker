import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Colors, Containers, Spacing } from '@/styles';

type Props = {
  title: string;
  onPress: () => void;
};

const Button: React.FC<Props> = ({ title, onPress }) => (
  <View style={styles.container}>
    <Pressable onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </Pressable>
  </View>
);

const styles = StyleSheet.create({
  container: {
    ...Containers.fullRadius,
    overflow: 'hidden',
  },
  button: {
    padding: Spacing.medium,
    backgroundColor: Colors.primary,
  },
  title: {
    color: Colors.onPrimary,
    textAlign: 'center',
  },
});

export default Button;
