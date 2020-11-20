import React, { useState } from 'react';
import { LayoutAnimation, StyleSheet, UIManager, View } from 'react-native';
import Snack, { FullSnackConfig, SnackConfig } from '../Component/Snack';
import uuid from '../utils/UUID';

type SnackContextType = {
  snack: (options: SnackConfig) => void;
};

export const SnackContext = React.createContext<SnackContextType>({
  snack: () => null,
});

export const useSnack = () => React.useContext(SnackContext);

UIManager && UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

const SnackProvider = ({ children }) => {
  const [snacks, setSnacks] = useState<FullSnackConfig[]>([]);

  const hideSnack = (id: string) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setSnacks((prevSnacks) => prevSnacks.filter((el) => el.id !== id));
  };

  const snack = (newSnack: SnackConfig) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setSnacks((prevSnacks: FullSnackConfig[]) => [
      ...prevSnacks,
      {
        ...newSnack,
        index: prevSnacks.length,
        id: uuid(),
        onClose: hideSnack,
      },
    ]);
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