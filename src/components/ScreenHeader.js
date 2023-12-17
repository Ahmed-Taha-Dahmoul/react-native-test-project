import React from 'react';
import {Text, View} from 'react-native';
import {sizes, spacing} from '../constants/theme';
import { StyleSheet } from 'react-native';

const ScreenHeader = ({mainTitle, secondTitle}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>{mainTitle}</Text>
      <Text style={styles.secondTitle}>{secondTitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.l,
    paddingVertical: spacing.l,
  },
  mainTitle: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 24,
    letterSpacing: 0.18,
    
  },
  secondTitle: {
    fontSize: sizes.title,
  },
});

export default ScreenHeader;
