import {Text, View} from '@components/index';
import React from 'react';

export type PercentageProps = {
  percentage: number;
};

export const Percentage: React.FC<PercentageProps> = ({percentage}) => {
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
          right={0}
          borderRadius={15}
          height={27}
          paddingHorizontal={21}
          width={`${100 - percentage}%`}
          backgroundColor="lightGreen"
          justifyContent="center"
          alignItems="flex-end">
          <Text fontWeight={'bold'} color="void">
            {100 - percentage}%
          </Text>
        </View>
      )}
    </View>
  );
};
