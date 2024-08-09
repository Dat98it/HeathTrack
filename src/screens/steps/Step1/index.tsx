import {EllipseIcon, Step1Icon} from '@assets/index';
import {Text, View} from '@components/index';
import React from 'react';

const Step1 = () => {
  return (
    <View
      allowInset
      backgroundColor="caribbeanGreen"
      flex={1}
      justifyContent="flex-end">
      {/* header */}
      <View paddingVertical={63} justifyContent="center" alignItems="center">
        <Text fontSize={30} fontWeight="bold" textAlign="center">
          {'Welcome to\nExpense Manager'}
        </Text>
      </View>

      {/* content */}
      <View
        flexGrow={1}
        justifyContent="center"
        alignItems="center"
        backgroundColor="honeydew"
        borderTopLeftRadius={55}
        borderTopRightRadius={55}
        paddingHorizontal={25}>
        <View
          width={200}
          height={200}
          borderRadius={200}
          justifyContent="center"
          alignItems="center"
          backgroundColor="lightGreen">
          <View>
            <Step1Icon />
          </View>
        </View>

        <Text marginTop={67} fontSize={30} fontWeight={'bold'}>
          Next
        </Text>

        <View flexDirection="row" gap={16} marginTop={27}>
          <EllipseIcon active />
          <EllipseIcon />
        </View>
      </View>
    </View>
  );
};

export default Step1;
