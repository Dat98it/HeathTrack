import {Paths} from '@constant/index';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DetailNotification, ListNotification} from '@screens/NotificationStack';
import React from 'react';

const Stack = createNativeStackNavigator();

export const NotificationStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={Paths.ListNotification}>
      <Stack.Screen
        name={Paths.ListNotification}
        component={ListNotification}
      />

      <Stack.Screen
        name={Paths.DetailNotification}
        component={DetailNotification}
      />
    </Stack.Navigator>
  );
};
