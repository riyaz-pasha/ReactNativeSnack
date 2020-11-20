import { IconFamily, SnackType } from './Enums';

export * from './Enums';

export type SnackConfig = {
  accentColor?: string;
  backgroundColor?: string;
  borderColor?: string;
  closeButtonBackgroundColor?: string;
  closeButtonBorderRadius?: number;
  closeIconColor?: string;
  color?: string;
  duration?: number;
  hideIcon?: boolean;
  snackType?: SnackType;
  message: string;
  onPress?: () => void;
  shouldVibrate?: boolean;
  subMessage?: string;
  iconFamily?: IconFamily;
  iconName?: string;
  iconColor?: string;
  successColor?: string;
  errorColor?: string;
  infoColor?: string;
};

export type SnackInternalConfig = {
  id?: string;
  index?: number;
  onClose?: (id: string) => void;
};

export type FullSnackConfig = SnackConfig & SnackInternalConfig;
