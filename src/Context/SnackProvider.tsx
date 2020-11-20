import React, { useState } from 'react';
import { LayoutAnimation, StyleSheet, UIManager, View } from 'react-native';
import { Snack } from '../Snack';
import { FullSnackConfig, SnackConfig, Theme } from '../Types';
import uuid from '../utils/UUID';

type SnackContextType = {
  snack: (options: SnackConfig) => void;
};

export const SnackContext = React.createContext<SnackContextType>({
  snack: () => null,
});

export const useSnack = () => React.useContext(SnackContext);

UIManager && UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

type SnackProviderProps = {
  children: React.ReactNode;
  theme?: Theme;
};
const SnackProvider = ({ children, theme }: SnackProviderProps) => {
  const [snacks, setSnacks] = useState<FullSnackConfig[]>([]);

  const hideSnack = (id: string) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setSnacks((prevSnacks) => prevSnacks.filter((el) => el.id !== id));
  };

  const snack = (snackConfig: SnackConfig) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const newSnack = {
      ...theme,
      ...snackConfig,
      id: uuid(),
      onClose: hideSnack,
    };
    setSnacks((prevSnacks: FullSnackConfig[]) => [...prevSnacks, newSnack]);
  };

  return (
    <SnackContext.Provider value={{ snack }}>
      {children}
      <View style={style.toastsContainer}>
        {snacks.map((config) => {
          return <Snack key={config.id} {...config} />;
        })}
      </View>
    </SnackContext.Provider>
  );
};

export default SnackProvider;

const style = StyleSheet.create({
  toastsContainer: {
    position: 'absolute',
    bottom: 0,
    flex: 1,
    width: '100%',
  },
});
