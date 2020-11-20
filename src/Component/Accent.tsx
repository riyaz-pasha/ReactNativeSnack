import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';

const Accent = ({ color, ...props }: { color: string } & ViewProps) => (
  <View style={[styles.borderStyle, { borderColor: color }]} {...props} />
);

export default Accent;

const styles = StyleSheet.create({
  borderStyle: {
    borderStartWidth: 4,
    borderTopLeftRadius: 2,
    borderBottomLeftRadius: 2,
  },
});
