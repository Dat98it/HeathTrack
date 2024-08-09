import {Input, Text, TouchableOpacity, View} from '@components/index';
import React from 'react';
const NewPasswordScreen: React.FC = () => {
  return (
    <View
      allowInset
      backgroundColor="caribbeanGreen"
      flex={1}
      justifyContent="flex-end">
      {/* header */}
      <View flex={1} justifyContent="center" alignItems="center">
        <Text fontSize={30} fontWeight="bold" color="white">
          New password
        </Text>
      </View>

      {/* content */}
      <View
        height={'60%'}
        width={'100%'}
        backgroundColor="honeydew"
        borderTopLeftRadius={55}
        borderTopRightRadius={55}
        paddingHorizontal={37}
        paddingVertical={87}
        gap={30}>
        {/* Form */}
        <View gap={16}>
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
        <TouchableOpacity
          width={'100%'}
          height={45}
          alignSelf="center"
          justifyContent="center"
          alignItems="center"
          backgroundColor="caribbeanGreen"
          borderRadius={30}>
          <Text fontSize={20} fontWeight={'bold'}>
            Change Password
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NewPasswordScreen;
