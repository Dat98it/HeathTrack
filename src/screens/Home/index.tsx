import {GoogleIcon} from '@assets/index';
import React from 'react';
import {useIntl} from 'react-intl';
import {SafeAreaView, Text} from 'react-native';

const HomeScreen = () => {
  const intl = useIntl();
  return (
    <SafeAreaView>
      <Text>{intl.formatMessage({id: 'app_version'})}</Text>
      <GoogleIcon />
      <Text>Welcome to the Home Screen!</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
