import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Root } from './navigation/Root';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { styles } from './styles';


export const App = () => {
  return (
      <SafeAreaProvider style={styles.container}>
        <Provider store={store}>
          <Root />
        </Provider>
      </SafeAreaProvider>
  );
}