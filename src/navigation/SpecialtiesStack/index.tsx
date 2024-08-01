import {Paths} from '@constant/index';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SpecialtyDetail, SpecialtyList} from '@screens/Specialties';
import React from 'react';

const Stack = createNativeStackNavigator();

export const SpecialtiesStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={Paths.SpecialtyList}>
      <Stack.Screen name={Paths.SpecialtyList} component={SpecialtyList} />

      <Stack.Screen name={Paths.SpecialtyDetail} component={SpecialtyDetail} />
    </Stack.Navigator>
  );
};
