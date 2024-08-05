import {Paths} from '@constant/index';
import {BottomStackScreen} from '@navigation/HealthTrack/BottomStackScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HelpCenter} from '@screens/HelpCenter';
import {
  DetailNotification,
  DoctorByGender,
  EditProfile,
  FavouriteDoctor,
  InforDoctor,
  InforMessage,
  ListDoctor,
  ListNotification,
  NotificationSetting,
  PasswordManager,
  PrivacyPolicy,
  RatingDoctor,
  Settings,
  SpecialtyDetail,
  SpecialtyList,
} from '@screens/index';
import React from 'react';

const HealthTrackStack = createNativeStackNavigator();

export const HealthTrackStackScreen = () => {
  return (
    <HealthTrackStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={Paths.BottomStack}>
      <HealthTrackStack.Screen
        name={Paths.BottomStack}
        component={BottomStackScreen}
      />

      <HealthTrackStack.Screen
        name={Paths.ListNotification}
        component={ListNotification}
      />

      <HealthTrackStack.Screen
        name={Paths.DetailNotification}
        component={DetailNotification}
      />

      <HealthTrackStack.Screen name={Paths.ListDoctor} component={ListDoctor} />

      <HealthTrackStack.Screen
        name={Paths.InforDoctor}
        component={InforDoctor}
      />

      <HealthTrackStack.Screen
        name={Paths.FavouriteDoctor}
        component={FavouriteDoctor}
      />

      <HealthTrackStack.Screen
        name={Paths.RatingDoctor}
        component={RatingDoctor}
      />

      <HealthTrackStack.Screen
        name={Paths.DoctorByGender}
        component={DoctorByGender}
      />

      <HealthTrackStack.Screen
        name={Paths.SpecialtyList}
        component={SpecialtyList}
      />

      <HealthTrackStack.Screen
        name={Paths.SpecialtyDetail}
        component={SpecialtyDetail}
      />

      <HealthTrackStack.Screen name={Paths.Settings} component={Settings} />

      <HealthTrackStack.Screen
        name={Paths.PasswordManager}
        component={PasswordManager}
      />

      <HealthTrackStack.Screen
        name={Paths.NotificationSetting}
        component={NotificationSetting}
      />
      <HealthTrackStack.Screen
        name={Paths.EditProfile}
        component={EditProfile}
      />

      <HealthTrackStack.Screen
        name={Paths.InforMessage}
        component={InforMessage}
      />

      <HealthTrackStack.Screen
        name={Paths.PrivacyPolicy}
        component={PrivacyPolicy}
      />

      <HealthTrackStack.Screen name={Paths.HelpCenter} component={HelpCenter} />
    </HealthTrackStack.Navigator>
  );
};
