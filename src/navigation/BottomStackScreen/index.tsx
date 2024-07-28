/* eslint-disable react/no-unstable-nested-components */
import {useAppTheme} from '@hooks/theme';
import {AppTheme} from '@lib/theme';
import {BottomRootStack} from '@lib/types';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeStacks} from '@constant/index';

import React from 'react';
import {StyleSheet} from 'react-native';
import {EdgeInsets, useSafeAreaInsets} from 'react-native-safe-area-context';
import {TabBarIcon} from '@components/index';
import Home from '@screens/Home';
import Chat from '@screens/Chat';
import Profile from '@screens/Profile';
import Calendar from '@screens/Calendar';

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
      <Tab.Screen name={HomeStacks.Home}>{() => <Home />}</Tab.Screen>

      <Tab.Screen name={HomeStacks.Chat}>{() => <Chat />}</Tab.Screen>

      <Tab.Screen name={HomeStacks.Profile}>{() => <Profile />}</Tab.Screen>

      <Tab.Screen name={HomeStacks.Schedule}>{() => <Calendar />}</Tab.Screen>
    </Tab.Navigator>
  );
};

const makeStyles = (theme: AppTheme, inset: EdgeInsets) =>
  StyleSheet.create({
    tabBarStyle: {
      backgroundColor: theme.colors.primary,
      height: 70 + inset.bottom,
    },
  });
