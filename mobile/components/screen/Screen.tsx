import React, { PropsWithChildren } from 'react';
import { SafeAreaView, View, StyleSheet, StatusBar } from 'react-native';
import { Colors, Spacing, Containers } from '../../styles';

type Props = PropsWithChildren & {
  footer?: React.ReactElement;
};

const Screen: React.FC<Props> = ({ children, footer }) => (
  <View style={styles.container}>
    <StatusBar barStyle="dark-content" backgroundColor={Colors.background} />

    <SafeAreaView>
      {children}

      {footer}
    </SafeAreaView>
  </View>
)

const styles = StyleSheet.create({
  container: {
    ...Containers.fullHeight,
    backgroundColor: Colors.background,
    padding: Spacing.large,
    justifyContent: 'space-between',
  }
});

export default Screen;
