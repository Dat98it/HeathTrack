import {AppLogo} from '@assets/index';
import {Text, TouchableOpacity, View} from '@components/index';
import React from 'react';

const LaunchScreen = () => {
  return (
    <View
      flex={1}
      backgroundColor="honeydew"
      justifyContent="center"
      alignItems="center">
      <AppLogo />
      <Text color="caribbeanGreen" fontSize={52.14} fontWeight={'bold'}>
        finWise
      </Text>
      <Text textAlign="center" fontSize={14} color="gray">
        {
          'Lorem ipsum dolor sit amet, consectetur\n adipiscing elit, sed do eiusmod.'
        }
      </Text>

      <View marginTop={42} gap={12}>
        <TouchableOpacity
          width={207}
          height={45}
          backgroundColor="caribbeanGreen"
          justifyContent="center"
          alignItems="center"
          borderRadius={30}>
          <Text fontWeight="bold" fontSize={20}>
            Log In
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          width={207}
          height={45}
          backgroundColor="lightGreen"
          justifyContent="center"
          alignItems="center"
          borderRadius={30}>
          <Text fontWeight="bold" fontSize={20}>
            Sign Up
          </Text>
        </TouchableOpacity>

        <TouchableOpacity alignItems="center">
          <Text fontSize={14} fontWeight={'bold'}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LaunchScreen;
