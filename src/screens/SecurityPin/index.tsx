import {FacebookIcon, GoogleIcon} from '@assets/index';
import {Input, Text, TouchableOpacity, View} from '@components/index';
import React from 'react';

/**
 * Create an array of numbers from 1 to n
 * @param {number} n
 * @returns {number[]}
 */
export const range = (n: number): number[] =>
  Array.from({length: n}, (_, i) => i + 1);

const SecurityPinScreen = () => {
  return (
    <View
      allowInset
      backgroundColor="caribbeanGreen"
      flex={1}
      justifyContent="flex-end">
      {/* header */}
      <View flex={1} justifyContent="center" alignItems="center">
        <Text fontSize={30} fontWeight="bold" color="white">
          Security pin
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
        paddingHorizontal={60}
        paddingVertical={90}
        gap={30}>
        <View gap={68}>
          <Text textAlign="center" fontSize={20} fontWeight={'bold'}>
            Enter security pin
          </Text>

          <View flexDirection="row" alignSelf="center" gap={5}>
            {range(6).map(item => (
              <View
                key={item}
                width={50}
                height={50}
                borderRadius={50}
                justifyContent="center"
                alignItems="center"
                borderWidth={2.98}
                borderColor={'caribbeanGreen'}>
                <Input
                  initialPadding={false}
                  maxLength={1}
                  fontSize={25}
                  textAlign="center"
                  keyboardType="number-pad"
                />
              </View>
            ))}
          </View>
        </View>
        <View gap={12} alignSelf="center">
          <TouchableOpacity
            width={207}
            height={45}
            backgroundColor="caribbeanGreen"
            justifyContent="center"
            alignItems="center"
            borderRadius={30}>
            <Text fontWeight="bold" fontSize={20}>
              Accept
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
              Send again
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

export default SecurityPinScreen;
