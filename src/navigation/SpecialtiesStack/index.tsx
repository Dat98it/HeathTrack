import {Paths} from '@constant/index';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Specialties from '@screens/Specialties';
import SpecialtyDetail from '@screens/SpecialtyDetail';
import React from 'react';

const Stack = createNativeStackNavigator();

export const SpecialtiesStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={Paths.Specialties}>
      <Stack.Screen name={Paths.Specialties} component={Specialties} />
      <Stack.Screen name={Paths.SpecialtyDetail} component={SpecialtyDetail} />
    </Stack.Navigator>
  );
};
