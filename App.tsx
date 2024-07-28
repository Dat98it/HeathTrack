import {DefaultTheme} from '@lib/theme';
import HomeScreen from '@screens/Home';
import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {PaperProvider} from 'react-native-paper';

const App = () => {
  return (
    <PaperProvider theme={DefaultTheme}>
      <SafeAreaView>
        <Text>Hello, React Native!</Text>

        <HomeScreen />
      </SafeAreaView>
    </PaperProvider>
  );
};

export default App;
