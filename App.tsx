import HomeScreen from '@screens/Home';
import React from 'react';
import {SafeAreaView, Text} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <Text>Hello, React Native!</Text>

      <HomeScreen />
    </SafeAreaView>
  );
};

export default App;
