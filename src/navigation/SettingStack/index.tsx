import {Paths} from '@constant/index';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  NotificationSetting,
  PasswordManager,
  Settings,
} from '@screens/SettingStack';
import React from 'react';

const Stack = createNativeStackNavigator();

export const SettingStackScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={Paths.Settings}>
      <Stack.Screen name={Paths.Settings} component={Settings} />

      <Stack.Screen
        name={Paths.NotificationSetting}
        component={NotificationSetting}
      />

      <Stack.Screen name={Paths.PasswordManager} component={PasswordManager} />
    </Stack.Navigator>
  );
};
