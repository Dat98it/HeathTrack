// CustomHeader.tsx
import {Text} from '@components/Text';
import {View} from '@components/View';
import {format} from 'date-fns';
import React from 'react';
import {DateData} from 'react-native-calendars';

interface CustomHeaderProps {
  date: DateData;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({date}) => {
  return (
    <View>
      <Text color="caribbeanGreen" fontSize={20}>
        {format(new Date(`${date}`), 'MMMM yyyy')}
      </Text>
    </View>
  );
};

export default CustomHeader;
