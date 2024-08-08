import {EventItem, View} from '@components/index';
import React from 'react';

const data = Array.from({length: 10}, (_, i) => ({
  id: i.toString(),
  type: i % 2 === 0 ? 'expense' : 'income',
  title: i % 2 === 0 ? 'Rent' : 'Salary',
  time: '18:27',
  date: 'April 30',
  category: 'Monthly',
  amount: `${i % 2 === 0 ? '-' : ''}$${(Math.random() * 1000).toFixed(2)}`,
  icon: 'money',
}));

const Spend = () => {
  return (
    <View flex={1} gap={24}>
      {data.map((item, index) => (
        <EventItem key={index} {...item} />
      ))}
    </View>
  );
};

export default Spend;
