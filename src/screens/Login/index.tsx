import {FacebookIcon, GoogleIcon} from '@assets/index';
import {Input, Text, TouchableOpacity, View} from '@components/index';
import React from 'react';
import {Dimensions} from 'react-native';

const LoginScreen = () => {
  const dimensionHeight = Dimensions.get('screen').height;

  return (
    <View
      allowInset
      backgroundColor="caribbeanGreen"
      flex={1}
      justifyContent="flex-end">
      {/* header */}
      <View flex={1} justifyContent="center" alignItems="center">
        <Text fontSize={30} fontWeight="bold" color="white">
          Welcome
        </Text>
      </View>

      {/* content */}
      <View
        height={dimensionHeight > 667 ? '70%' : '85%'}
        justifyContent="center"
        backgroundColor="honeydew"
        borderTopLeftRadius={55}
        borderTopRightRadius={55}
        paddingHorizontal={25}
        gap={30}>
        <View gap={5}>
          <Text paddingLeft={15}>Username or email</Text>
          <Input
            backgroundColor="lightGreen"
            placeholderTextColor="cyprus"
            placeholder="example@example.com"
          />
        </View>

        <View gap={5}>
          <Text paddingLeft={15}>Password</Text>
          <Input
            backgroundColor="lightGreen"
            placeholderTextColor="cyprus"
            placeholder="Enter password..."
            secureTextEntry={true}
          />
        </View>

        <View gap={15}>
          <TouchableOpacity
            backgroundColor="caribbeanGreen"
            justifyContent="center"
            alignItems="center"
            borderRadius={30}
            marginTop={30}
            height={50}
            width={207}
            alignSelf="center">
            <Text fontWeight={'bold'} fontSize={20}>
              Login
            </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text color="caribbeanGreen" alignSelf="center">
              Forgot password?
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            backgroundColor="lightGreen"
            justifyContent="center"
            alignItems="center"
            borderRadius={20}
            width={207}
            height={50}
            alignSelf="center">
            <Text fontWeight={'bold'} fontSize={20}>
              Sign Up
            </Text>
          </TouchableOpacity>

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

export default LoginScreen;
