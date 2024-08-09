import {EllipseIcon, Step2Icon} from '@assets/index';
import {Text, View} from '@components/index';
import React from 'react';

const Step2 = () => {
  return (
    <View
      allowInset
      backgroundColor="caribbeanGreen"
      flex={1}
      justifyContent="flex-end">
      {/* header */}
      <View paddingVertical={63} justifyContent="center" alignItems="center">
        <Text fontSize={30} fontWeight="bold" textAlign="center">
          {'Are You Ready To\nTake Control Of\nYour Finaces?'}
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
        paddingHorizontal={25}
        gap={30}>
        <View
          width={200}
          height={200}
          borderRadius={200}
          justifyContent="center"
          alignItems="center"
          backgroundColor="lightGreen">
          <View>
            <Step2Icon />
          </View>
        </View>

        <Text fontSize={30} fontWeight={'bold'}>
          Next
        </Text>

        <View flexDirection="row" gap={16}>
          <EllipseIcon />
          <EllipseIcon active />
        </View>
      </View>
    </View>
  );
};

export default Step2;
