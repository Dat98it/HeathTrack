import {ON_BOADING_KEY, Paths} from '@constant/index';
import {AuthenticationRootStack} from '@lib/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import OnboardingScreen from '@screens/Onboarding';
import ResetPassword from '@screens/ResetPassword';
import SignIn from '@screens/SignIn';
import SignUp from '@screens/SignUp';
import Welcome from '@screens/Welcome';
import React, {useEffect, useState} from 'react';
import {View} from 'react-native';

const AuthenticationStack =
  createNativeStackNavigator<AuthenticationRootStack>();

export const Authentication = () => {
  const [initialRouteName, setInitialRouteName] = useState<
    keyof AuthenticationRootStack | undefined
  >();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkInitialRoute = async () => {
      try {
        const isActiveBoading =
          (await AsyncStorage.getItem(ON_BOADING_KEY)) ?? 'false';
        setInitialRouteName(
          !isActiveBoading || isActiveBoading === 'false'
            ? Paths.OnBoarding
            : Paths.SignIn,
        );
      } catch (error) {
        console.log('error', error);
      } finally {
        setLoading(false);
      }
    };

    checkInitialRoute();
  });

  if (loading) {
    return <View />;
  }

  return (
    <AuthenticationStack.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{headerShown: false}}>
      <AuthenticationStack.Screen
        name={Paths.OnBoarding}
        component={OnboardingScreen}
      />
      <AuthenticationStack.Screen name={Paths.Welcome} component={Welcome} />

      <AuthenticationStack.Screen name={Paths.SignIn} component={SignIn} />

      <AuthenticationStack.Screen name={Paths.SignUp} component={SignUp} />

      <AuthenticationStack.Screen
        name={Paths.ResetPassword}
        component={ResetPassword}
      />
    </AuthenticationStack.Navigator>
  );
};
