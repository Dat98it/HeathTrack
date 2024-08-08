import {Text, View} from '@components/index';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

type LifeEvent = {
  id: string;
  type: string;
  title: string;
  time: string;
  date: string;
  category: string;
  amount: string;
  icon: string;
};

export const EventItem = ({
  title,
  time,
  date,
  category,
  amount,
  icon,
  type,
}: LifeEvent) => {
  return (
    <View
      flexDirection="row"
      borderRadius={10}
      alignItems="center"
      justifyContent="space-between"
      gap={5}>
      <View
        width={57}
        height={53}
        borderRadius={25}
        justifyContent="center"
        alignItems="center"
        backgroundColor={type === 'income' ? 'lightBlue' : 'oceanBlue'}>
        <Icon name={icon} size={30} color="#fff" />
      </View>

      <View flexShrink={1} gap={3}>
        <Text fontSize={15}>{title}</Text>
        <Text fontSize={12} color="oceanBlue">{`${time} - ${date}`}</Text>
      </View>

      <View
        alignItems="center"
        justifyContent="center"
        borderColor="caribbeanGreen"
        borderLeftWidth={1}
        borderRightWidth={1}
        minHeight={40}
        paddingHorizontal={10}
        width={80}>
        <Text fontSize={13}>{category}</Text>
      </View>

      <View width={80} alignItems="center">
        <Text
          fontSize={16}
          color={type === 'income' ? 'void' : 'oceanBlue'}
          fontWeight={'bold'}>
          {amount}
        </Text>
      </View>
    </View>
  );
};
