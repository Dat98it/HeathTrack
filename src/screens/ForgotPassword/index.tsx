import {FacebookIcon, GoogleIcon} from '@assets/index';
import {Input, Text, TouchableOpacity, View} from '@components/index';
import React from 'react';

const ForgotPassword = () => {
  return (
    <View
      allowInset
      backgroundColor="caribbeanGreen"
      flex={1}
      justifyContent="flex-end">
      {/* header */}
      <View flex={1} justifyContent="center" alignItems="center">
        <Text fontSize={30} fontWeight="bold" color="white">
          Forgot Password
        </Text>
      </View>

      {/* content */}
      <View
        height={'85%'}
        width={'100%'}
        justifyContent="space-between"
        backgroundColor="honeydew"
        borderTopLeftRadius={55}
        borderTopRightRadius={55}
        paddingHorizontal={34}
        paddingVertical={90}
        gap={30}>
        <View gap={14}>
          <Text fontSize={20} fontWeight={'bold'}>
            Reset password?
          </Text>
          <Text fontSize={14}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
          </Text>
        </View>

        <View gap={45}>
          <View gap={8}>
            <Text paddingLeft={15}>Enter email address</Text>
            <Input
              backgroundColor="lightGreen"
              placeholderTextColor="cyprus"
              placeholder="example@example.com"
            />
          </View>

          <TouchableOpacity
            width={207}
            height={45}
            justifyContent="center"
            alignItems="center"
            backgroundColor="caribbeanGreen"
            alignSelf="center"
            borderRadius={30}>
            <Text fontSize={20} fontWeight={'bold'}>
              Next step
            </Text>
          </TouchableOpacity>
        </View>

        <View gap={18}>
          <Text textAlign="center">or sign up with</Text>

          <View gap={10} flexDirection="row" justifyContent="center">
            <TouchableOpacity>
              <FacebookIcon />
            </TouchableOpacity>

            <TouchableOpacity>
              <GoogleIcon />
            </TouchableOpacity>
          </View>

          <View flexDirection="row" justifyContent="center" gap={5}>
            <Text>Don’t have an account?</Text>
            <TouchableOpacity>
              <Text color="vividBlue">Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ForgotPassword;
