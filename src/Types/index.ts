import { IconFamily, SnackType } from './Enums';

export * from './Enums';

export type Theme = {
  backgroundColor?: string;
  iconColor?: string;
  closeButtonBackgroundColor?: string;
  closeIconColor?: string;
  successColor?: string;
  errorColor?: string;
  infoColor?: string;
};

export type SnackConfig = {
  borderColor?: string;
  closeButtonBorderRadius?: number;
  duration?: number;
  hideIcon?: boolean;
  snackType?: SnackType;
  message: string;
  onPress?: () => void;
  subMessage?: string;
  iconFamily?: IconFamily;
  iconName?: string;
} & Theme;

export type SnackInternalConfig = {
  id?: string;
  onClose?: (id: string) => void;
};

export type FullSnackConfig = SnackConfig & SnackInternalConfig;
