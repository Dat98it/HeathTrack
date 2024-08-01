import {Paths} from '@constant/index';
import {SpecialtyStack} from '@lib/types';
import {createStackNavigator} from '@react-navigation/stack';
import Specialties from '@screens/Specialties';
import SpecialtyDetail from '@screens/SpecialtyDetail';
import * as React from 'react';

// Create the stack navigator
const Stack = createStackNavigator<SpecialtyStack>();

// Define the stack navigator component
const SpecialtiesStack = () => (
  <Stack.Navigator
    screenOptions={{headerShown: false}}
    initialRouteName={Paths.Specialties}>
    <Stack.Screen name={Paths.Specialties} component={Specialties} />

    <Stack.Screen name={Paths.SpecialtyDetail} component={SpecialtyDetail} />
  </Stack.Navigator>
);

export default SpecialtiesStack;
