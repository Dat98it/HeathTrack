/* eslint-disable react/no-unstable-nested-components */
import {AuthHeader, SettingMenu} from '@components/index';
import {useAppTheme} from '@hooks/theme';
import React from 'react';
import {SafeAreaView} from 'react-native';
import makeStyles from './styles';
import {Paths} from '@constant/navigation';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useAppNavigation} from '@hooks/navigation';

export const Settings = () => {
  const navigation = useAppNavigation();
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  const profileData = [
    {
      id: '1',
      Icon: () => <Octicons name="light-bulb" size={24} color={'white'} />,
      label: 'notification_settings',
      onPress: () =>
        navigation.navigate(Paths.HealthTrack, {
          screen: Paths.NotificationSetting,
        }),
    },
    {
      id: '2',
      Icon: () => (
        <MaterialCommunityIcons name="key-variant" size={24} color={'white'} />
      ),
      label: 'password_manager',
      onPress: () =>
        navigation.navigate(Paths.HealthTrack, {
          screen: Paths.PasswordManager,
        }),
    },
    {
      id: '3',
      Icon: () => <FontAwesome name="user" size={24} color={'white'} />,
      label: 'delete_account',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <AuthHeader title="settings" />

      <SettingMenu data={profileData} />
    </SafeAreaView>
  );
};
