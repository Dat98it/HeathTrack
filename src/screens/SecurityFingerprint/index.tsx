import {Fingerprint} from '@assets/index';
import {Text, TouchableOpacity, View} from '@components/index';
import React, {FC} from 'react';
const SecurityFingerprint: FC = () => {
  return (
    <View
      allowInset
      backgroundColor="caribbeanGreen"
      flex={1}
      justifyContent="flex-end">
      {/* header */}
      <View flex={1} justifyContent="center" alignItems="center">
        <Text fontSize={30} fontWeight="bold" color="white">
          Security Fingerprint
        </Text>
      </View>

      {/* content */}
      <View
        height={'85%'}
        width={'100%'}
        backgroundColor="honeydew"
        borderTopLeftRadius={55}
        borderTopRightRadius={55}
        paddingHorizontal={37}
        justifyContent="center"
        alignItems="center">
        <View
          alignSelf="center"
          height={150}
          width={150}
          backgroundColor="caribbeanGreen"
          borderRadius={100}
          justifyContent="center"
          alignItems="center">
          <Fingerprint size={100} color="lightWhite" />
        </View>

        <View alignSelf="center" gap={27} marginTop={52}>
          <Text
            textAlign="center"
            fontSize={20}
            fontWeight={'bold'}
            color="void">
            Use fingerprint to access
          </Text>
          <Text textAlign="center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </Text>
        </View>

        <View alignSelf="center" marginTop={52}>
          <TouchableOpacity
            width={207}
            height={45}
            justifyContent="center"
            alignItems="center"
            backgroundColor="lightGreen"
            borderRadius={30}>
            <Text fontSize={20} fontWeight={'bold'} color="void">
              Use Touch id
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SecurityFingerprint;
