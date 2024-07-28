// AI
// define OnboardingScreen react native with Stylesheet
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const OnboardingScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to the Onboarding Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default OnboardingScreen;
