/* eslint-disable react/no-unstable-nested-components */
import {useAppTheme} from '@hooks/theme';
import {AppTheme} from '@lib/theme';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {TabBarIcon} from '@components/index';
import {Paths} from '@constant/navigation';
import {BottomRootStack} from '@lib/types';
import {Calendar, Chat, Home, Profile} from '@screens/BottomStack';
import React from 'react';
import {StyleSheet} from 'react-native';
import {EdgeInsets, useSafeAreaInsets} from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator<BottomRootStack>();

export const BottomStackScreen = () => {
  const theme = useAppTheme();
  const inset = useSafeAreaInsets();
  const styles = makeStyles(theme, inset);

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: props => <TabBarIcon routeName={route.name} {...props} />,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        headerShown: false,
      })}>
      <Tab.Screen name={Paths.Home}>{() => <Home />}</Tab.Screen>

      <Tab.Screen name={Paths.Chat}>{() => <Chat />}</Tab.Screen>

      <Tab.Screen name={Paths.Schedule}>{() => <Calendar />}</Tab.Screen>

      <Tab.Screen name={Paths.Profile}>{() => <Profile />}</Tab.Screen>
    </Tab.Navigator>
  );
};

const makeStyles = (theme: AppTheme, inset: EdgeInsets) =>
  StyleSheet.create({
    tabBarStyle: {
      backgroundColor: '#E9F6FE',
      height: 70 + inset.bottom,
    },
  });
