import {Input, Text, TouchableOpacity, View} from '@components/index';
import React from 'react';
import {ScrollView} from 'react-native';

export const SignUp = () => {
  return (
    <View
      allowInset
      backgroundColor="caribbeanGreen"
      flex={1}
      justifyContent="flex-end">
      {/* header */}
      <View flex={1} justifyContent="center" alignItems="center">
        <Text fontSize={30} fontWeight="bold" color="white">
          Create Account
        </Text>
      </View>

      {/* content */}
      <View
        height={'85%'}
        width={'100%'}
        backgroundColor="honeydew"
        borderTopLeftRadius={55}
        borderTopRightRadius={55}
        gap={30}
        paddingHorizontal={37}
        paddingVertical={32}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Form */}
          <View gap={16}>
            <View gap={5}>
              <Text paddingLeft={15}>Email</Text>
              <Input
                backgroundColor="lightGreen"
                placeholderTextColor="cyprus"
                placeholder="example@example.com"
              />
            </View>

            <View gap={5}>
              <Text paddingLeft={15}>Mobile Number</Text>
              <Input
                backgroundColor="lightGreen"
                placeholderTextColor="cyprus"
                placeholder="+ 123 456 789"
              />
            </View>

            <View gap={5}>
              <Text paddingLeft={15}>Date of birth</Text>
              <Input
                backgroundColor="lightGreen"
                placeholderTextColor="cyprus"
                placeholder="DD / MM /YYY"
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

            <View gap={5}>
              <Text paddingLeft={15}>Confirm Password</Text>
              <Input
                backgroundColor="lightGreen"
                placeholderTextColor="cyprus"
                placeholder="Enter password..."
                secureTextEntry={true}
              />
            </View>
          </View>

          {/* Footer */}
          <View
            marginTop={28}
            justifyContent="center"
            alignItems="center"
            gap={13}>
            <Text textAlign="center">
              {'By continuing, you agree to\n'}
              <Text fontWeight={'bold'}>Terms of Use</Text>
              {' and '}
              <Text fontWeight={'bold'}>Privacy Policy</Text>
            </Text>

            <TouchableOpacity
              width={207}
              height={45}
              justifyContent="center"
              alignItems="center"
              backgroundColor="caribbeanGreen"
              borderRadius={30}>
              <Text fontSize={20} fontWeight={'bold'} color="void">
                Sign Up
              </Text>
            </TouchableOpacity>

            <View flexDirection="row" gap={5}>
              <Text>Already have an account?</Text>
              <TouchableOpacity>
                <Text color="vividBlue">Log In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
