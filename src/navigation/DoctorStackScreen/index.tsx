import {Paths} from '@constant/index';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  DoctorByGender,
  FavouriteDoctor,
  InforDoctor,
  ListDoctor,
  RatingDoctor,
} from '@screens/DoctorStack';
import React from 'react';

const Stack = createNativeStackNavigator();

export const DoctorScreenStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={Paths.ListDoctor}>
      <Stack.Screen name={Paths.ListDoctor} component={ListDoctor} />

      <Stack.Screen name={Paths.InforDoctor} component={InforDoctor} />

      <Stack.Screen name={Paths.FavouriteDoctor} component={FavouriteDoctor} />

      <Stack.Screen name={Paths.RatingDoctor} component={RatingDoctor} />

      <Stack.Screen name={Paths.DoctorByGender} component={DoctorByGender} />
    </Stack.Navigator>
  );
};
