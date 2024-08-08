import {Text, View} from '@components/index';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const data = Array.from({length: 20}, (_, i) => ({
  id: i.toString(),
  type: i % 2 === 0 ? 'expense' : 'income',
  title: i % 2 === 0 ? 'Rent' : 'Salary',
  time: '18:27',
  date: 'April 30',
  category: 'Monthly',
  amount: `${i % 2 === 0 ? '-' : ''}$${(Math.random() * 1000).toFixed(2)}`,
  icon: 'money',
}));

const Item = ({title, time, date, category, amount, icon, type}: any) => {
  return (
    <View
      flexDirection="row"
      borderRadius={10}
      alignItems="center"
      justifyContent="space-between">
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
        <Text fontSize={15} color="void">
          {title}
        </Text>
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
        <Text fontSize={13} color="void">
          {category}
        </Text>
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

const Events = () => {
  return (
    <View flex={1} gap={24}>
      {data.map((item, index) => (
        <Item
          key={index}
          title={item.title}
          time={item.time}
          date={item.date}
          category={item.category}
          amount={item.amount}
          icon={item.icon}
          type={item.type}
        />
      ))}
    </View>
  );
};

export default Events;
