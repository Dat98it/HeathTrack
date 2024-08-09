import {Text, View} from '@components/index';
import {DefaultTheme} from '@lib/theme';
import React from 'react';

export type PercentageProps = {
  percentage: number;
  color?: keyof (typeof DefaultTheme)['colors'];
};

export const Percentage: React.FC<PercentageProps> = ({percentage, color}) => {
  return (
    <View height={27} flexDirection="row" borderRadius={15}>
      <View
        position="absolute"
        top={0}
        left={0}
        width={'100%'}
        borderRadius={15}
        height={27}
        paddingHorizontal={21}
        alignItems={percentage < 100 ? 'flex-start' : 'center'}
        backgroundColor={percentage >= 100 ? 'lightGreen' : 'void'}
        justifyContent="center">
        <Text fontWeight={'bold'} color={percentage >= 100 ? 'void' : 'white'}>
          {percentage}%
        </Text>
      </View>

      {percentage < 100 && (
        <View
          position="absolute"
          top={0}
          right={-1}
          borderRadius={15}
          height={27}
          paddingHorizontal={21}
          width={`${100 - percentage}%`}
          backgroundColor={color ?? 'lightGreen'}
          justifyContent="center"
          alignItems="flex-end">
          <Text fontWeight={'bold'}>{100 - percentage}%</Text>
        </View>
      )}
    </View>
  );
};
