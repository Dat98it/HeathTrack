/* eslint-disable react/no-unstable-nested-components */
import {DrawerContentComponentProps} from '@react-navigation/drawer';
import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {Avatar, List} from 'react-native-paper';
import {useCustomDrawerContent} from './hook';
import makeStyles from './styles';
import {useIntl} from 'react-intl';
import {LocaleSwitcher} from '../LocaleSwitcher';
import {useAppTheme} from '@hooks/theme';

export const CustomDrawerContent = (_: DrawerContentComponentProps) => {
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  const intl = useIntl();
  const {onLogout, user} = useCustomDrawerContent();

  const menuItems = [
    {label: intl.formatMessage({id: 'notifications'}), icon: 'bell-badge'},
    {label: intl.formatMessage({id: 'events'}), icon: 'calendar-check'},
    {label: intl.formatMessage({id: 'groups'}), icon: 'account-group'},
    {label: intl.formatMessage({id: 'chats'}), icon: 'chat'},
    {
      label: intl.formatMessage({id: 'sign_out'}),
      icon: 'logout',
      onPress: onLogout,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Header */}
        <View style={styles.userWrapper}>
          <Avatar.Icon size={60} icon="account" />

          <View style={styles.userInfo}>
            <Text>{user?.first_name}</Text>
            <Text>{user?.email}</Text>
          </View>
        </View>

        {/* List menu */}
        <List.Section>
          {menuItems.map((item, idx) => {
            return (
              <List.Item
                key={idx}
                title={item.label}
                left={props => (
                  <List.Icon
                    {...props}
                    icon={item.icon}
                    color={theme.colors.primary}
                  />
                )}
                onPress={item.onPress}
              />
            );
          })}
        </List.Section>
      </ScrollView>

      {/* App version */}
      <View style={styles.appVersion}>
        <Text style={styles.appVersionText}>
          {intl.formatMessage({id: 'app_version'})}
        </Text>
        <LocaleSwitcher />
      </View>
    </SafeAreaView>
  );
};
