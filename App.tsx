import React from 'react';
import { Button } from 'react-native';
import SnackProvider, { useSnack } from './src/Context/SnackProvider';
import { SnackType } from './src/Types';

const App = () => {
  return (
    <SnackProvider>
      <ErrorSnackButton />
      <SuccessSnackButton />
      <InfoSnackButton />
    </SnackProvider>
  );
};

const ErrorSnackButton = () => {
  const { snack } = useSnack();
  return <Button title="failure" onPress={() => snack({ message: 'failure', snackType: SnackType.error })} />;
};

const SuccessSnackButton = () => {
  const { snack } = useSnack();
  return (
    <Button
      title="success"
      onPress={() => snack({ message: 'success', subMessage: 'this is sub message', snackType: SnackType.success })}
    />
  );
};

const InfoSnackButton = () => {
  const { snack } = useSnack();
  return <Button title="info" onPress={() => snack({ message: 'info', snackType: SnackType.info })} />;
};

export default App;
