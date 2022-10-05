import React, { PropsWithChildren } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';

import { Colors, Containers, Spacing } from '@/styles';

type Props = PropsWithChildren & {
  footer?: React.ReactElement;
};

const Screen: React.FC<Props> = ({ children, footer }) => (
  <View style={styles.container}>
    <StatusBar barStyle="dark-content" backgroundColor={Colors.background} />

    <SafeAreaView>
      <View style={styles.content}>
        {children}

        {footer}
      </View>
    </SafeAreaView>
  </View>
);

const styles = StyleSheet.create({
  container: {
    ...Containers.fullHeight,
    backgroundColor: Colors.background,
    padding: Spacing.large,
  },
  content: {
    height: '100%',
    justifyContent: 'space-between',
  },
});

export default Screen;
