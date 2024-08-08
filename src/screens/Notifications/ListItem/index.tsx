import {Text, View} from '@components/index';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const dummyData = [
  {
    id: 1,
    title: 'Reminder!',
    description: 'Set up your automatic savings to meet your savings goal...',
    time: '17:00 - April 24',
    icon: 'bell',
  },
  {
    id: 2,
    title: 'New Update',
    description: 'Set up your automatic savings to meet your savings goal...',
    time: '17:00 - April 24',
    icon: 'star',
  },
  {
    id: 3,
    title: 'Transactions',
    description: 'A new transaction has been registered',
    time: '17:00 - April 24',
    icon: 'dollar-sign',
    details: 'Groceries | Pantry | -$100,00',
  },
  {
    id: 4,
    title: 'Reminder!',
    description: 'Set up your automatic savings to meet your savings goal...',
    time: '17:00 - April 24',
    icon: 'bell',
  },
  {
    id: 5,
    title: 'Expense Record',
    description: 'We recommend that you be more attentive to your finances.',
    time: '17:00 - April 24',
    icon: 'arrow-down',
  },
  {
    id: 6,
    title: 'Transactions',
    description: 'A new transaction has been registered',
    time: '17:00 - April 24',
    icon: 'dollar-sign',
    details: 'Food | Dinner | -$70,40',
  },
  // Add more items to make it 15
];

const Item = ({item}: {item: any}) => {
  return (
    <View
      key={item.id}
      borderBottomWidth={1}
      borderColor="caribbeanGreen"
      paddingVertical={13}
      gap={5}>
      <View flexDirection="row" gap={13} alignItems="center">
        <View
          width={37}
          height={37}
          backgroundColor="caribbeanGreen"
          borderRadius={12}
          justifyContent="center"
          alignItems="center">
          <Ionicons name="notifications" size={25} />
        </View>

        <View flexShrink={1} gap={3}>
          <Text fontSize={15} fontWeight={'bold'}>
            {item.title}
          </Text>
          <Text
            fontSize={13}
            fontWeight={'400'}
            numberOfLines={2}
            ellipsizeMode="tail">
            {item.description}
          </Text>
          {item.details && (
            <Text fontSize={13} fontWeight="bold" color="oceanBlue">
              {item.details}
            </Text>
          )}
        </View>
      </View>

      <Text textAlign="right" color="oceanBlue" fontSize={13}>
        {item.time}
      </Text>
    </View>
  );
};

const ListItem = () => {
  return (
    <View gap={25}>
      <View>
        <Text fontSize={20} fontWeight={'bold'}>
          Today
        </Text>
        {dummyData.slice(0, 2).map(item => (
          <Item key={item.id} item={item} />
        ))}
      </View>

      <View>
        <Text fontSize={20} fontWeight={'bold'}>
          Yesterday
        </Text>
        {dummyData.slice(2, 4).map(item => (
          <Item key={item.id} item={item} />
        ))}
      </View>

      <View>
        <Text fontSize={20} fontWeight={'bold'}>
          This Weekend
        </Text>
        {dummyData.slice(4, 6).map(item => (
          <Item key={item.id} item={item} />
        ))}
      </View>
    </View>
  );
};

export default ListItem;
