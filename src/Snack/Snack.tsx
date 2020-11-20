import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Accent, Icon, SnackContainer } from '../Component';
import { FullSnackConfig, SnackType } from '../Types';

export const Snack = ({
  message,
  subMessage,
  onClose,
  onPress,
  id,
  duration = 3000,
  hideIcon = false,
  iconName,
  iconFamily = 'Feather',
  iconColor,
  backgroundColor = '#F0F1F3',
  closeButtonBackgroundColor = '#FFF',
  closeIconColor = '#0A0A0A',
  snackType = SnackType.success,
  successColor = '#7DBE31',
  errorColor = '#FC0021',
  infoColor = '#FF8C00',
}: FullSnackConfig) => {
  const animation = useRef(new Animated.Value(0)).current;

  const isDurationProvided = () => duration !== 0;

  const hideSnack = () => id && onClose && onClose(id);

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 0.5,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      if (isDurationProvided()) {
        setTimeout(hideSnack, duration);
      }
    });
  }, []);

  const scale = animation.interpolate({
    inputRange: [0, 0.5],
    outputRange: [0.8, 1],
    extrapolate: 'clamp',
  });

  const translateY = animation.interpolate({
    inputRange: [0, 0.5],
    outputRange: [60, 0],
  });

  const getIconColor = () => {
    if (iconColor) {
      return iconColor;
    }
    switch (snackType) {
      case SnackType.error:
        return errorColor;
      case SnackType.info:
        return infoColor;
      default:
        return successColor;
    }
  };

  const getIconName = () => {
    if (iconName) {
      return iconName;
    }
    switch (snackType) {
      case SnackType.error:
        return 'x-circle';
      case SnackType.info:
        return 'alert-circle';
      default:
        return 'check-circle';
    }
  };

  return (
    <SnackContainer style={{ transform: [{ scale }, { translateY }], backgroundColor }} onPress={onPress}>
      <Accent color={getIconColor()} />

      {!hideIcon && (
        <View style={styles.iconContainer}>
          <Icon family={iconFamily} name={getIconName()} size={20} color={getIconColor()} />
        </View>
      )}

      <View style={[styles.messageContainer, hideIcon && styles.extraMargin]}>
        <Text style={styles.message}>{message}</Text>
        {subMessage && <Text style={styles.subMessage}>{subMessage}</Text>}
      </View>

      <TouchableOpacity style={styles.closeButtonContainer} onPress={hideSnack}>
        <View style={[styles.closeButton, { backgroundColor: closeButtonBackgroundColor }]}>
          <Icon family="Feather" name="x" size={20} color={closeIconColor} />
        </View>
      </TouchableOpacity>
    </SnackContainer>
  );
};

export default Snack;

const styles = StyleSheet.create({
  iconContainer: {
    marginStart: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageContainer: {
    marginHorizontal: 8,
    marginVertical: 12,
    flex: 1,
  },
  message: {
    fontSize: 16,
  },
  subMessage: {
    fontSize: 12,
  },

  closeButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {
    padding: 4,
    marginHorizontal: 8,
  },
  extraMargin: {
    marginStart: 16,
  },
});
