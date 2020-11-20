import React from 'react';
import { Animated, StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native';

type SnackContainerType = {
  style: Animated.AnimatedProps<ViewStyle>;
  children: React.ReactNode;
  onPress?: () => void;
};

export const SnackContainer = ({ style, onPress, children }: SnackContainerType) => {
  return (
    <Animated.View style={[styles.mainContainer, style]}>
      <View>
        <TouchableOpacity style={styles.buttonContainerStyle} onPress={onPress}>
          {children}
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 4,
  },
  buttonContainerStyle: {
    flexDirection: 'row',
  },
});
