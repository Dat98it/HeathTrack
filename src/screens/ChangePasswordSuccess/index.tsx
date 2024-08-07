import {CheckProcessIcon} from '@assets/index';
import {Text, TouchableOpacity, View} from '@components/index';
import React from 'react';
const ChangePasswordSuccess: React.FC = () => {
  return (
    <View
      allowInset
      backgroundColor="caribbeanGreen"
      flex={1}
      justifyContent="center"
      alignItems="center"
      gap={32}>
      <CheckProcessIcon />
      <Text
        fontSize={30}
        fontWeight="bold"
        color="lightGreen"
        textAlign="center">
        {'Password Has been\nChanged successfully'}
      </Text>

      <TouchableOpacity
        backgroundColor="white"
        justifyContent="center"
        alignItems="center"
        borderRadius={30}
        marginTop={30}
        height={50}
        width={207}
        alignSelf="center">
        <Text fontWeight={'bold'} fontSize={20} color="caribbeanGreen">
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChangePasswordSuccess;
