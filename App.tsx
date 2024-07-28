import {DefaultTheme} from '@lib/theme';
import {persistor, store} from '@redux/store';
import HomeScreen from '@screens/Home';
import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider theme={DefaultTheme}>
          <SafeAreaView>
            <Text>Hello, React Native!</Text>

            <HomeScreen />
          </SafeAreaView>
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
