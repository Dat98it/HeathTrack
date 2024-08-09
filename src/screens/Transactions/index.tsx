import {TotalBalanceIcon, TotalExpenseIcon} from '@assets/index';
import {
  AppHeader,
  EventItem,
  Text,
  TouchableOpacity,
  View,
} from '@components/index';
import React, {useState} from 'react';
import {ScrollView} from 'react-native';

enum Tabs {
  INCOME = 'Income',
  EXPENSE = 'Expense',
}

const data = Array.from({length: 20}, (_, i) => ({
  id: i.toString(),
  type: i % 2 === 0 ? 'Expense' : 'Income',
  title: i % 2 === 0 ? 'Rent' : 'Salary',
  time: '18:27',
  date: 'April 30',
  category: 'Monthly',
  amount: `${i % 2 === 0 ? '-' : ''}$${(Math.random() * 1000).toFixed(2)}`,
  icon: 'money',
}));

const TransactionsScreen = () => {
  const [activeTab, setActiveTab] = useState<Tabs | undefined>();

  const [transactions, setTransactions] = useState(data);

  return (
    <View
      allowInset
      backgroundColor="caribbeanGreen"
      flex={1}
      justifyContent="flex-end">
      {/* header */}
      <View
        paddingHorizontal={38}
        gap={24}
        paddingVertical={24}
        justifyContent="space-around">
        <AppHeader title="Transactions" />

        {/* Balance */}
        <View justifyContent="center" gap={17}>
          <View
            backgroundColor="honeydew"
            borderRadius={14}
            justifyContent="center"
            alignItems="center"
            paddingVertical={11}>
            <Text>Total Balance</Text>
            <Text fontSize={24} fontWeight={'bold'}>
              $7,783.00
            </Text>
          </View>
          <View flexDirection="row" gap={15}>
            {[
              {title: Tabs.INCOME, value: '$4,120.00'},
              {title: Tabs.EXPENSE, value: '$1.187.40'},
            ].map(item => (
              <TouchableOpacity
                onPress={() => {
                  setActiveTab(item.title);
                  setTransactions(
                    data.filter(transaction => transaction.type === item.title),
                  );
                }}
                flex={1}
                key={item.title}
                backgroundColor={
                  item.title === activeTab ? 'oceanBlue' : 'honeydew'
                }
                paddingVertical={15}
                justifyContent="center"
                alignItems="center"
                minHeight={50}
                borderRadius={15}>
                {item.title === Tabs.INCOME ? (
                  <TotalBalanceIcon
                    size={25}
                    color={item.title === activeTab ? 'white' : 'oceanBlue'}
                  />
                ) : (
                  <TotalExpenseIcon
                    size={25}
                    color={item.title === activeTab ? 'white' : 'oceanBlue'}
                  />
                )}

                <Text
                  color={item.title === activeTab ? 'white' : 'letterAndIcon'}>
                  {item.title}
                </Text>

                <Text
                  color={item.title === activeTab ? 'white' : 'letterAndIcon'}
                  fontSize={20}
                  fontWeight={'bold'}>
                  {item.value}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>

      {/* content */}
      <View
        flexGrow={1}
        backgroundColor="honeydew"
        borderTopLeftRadius={55}
        borderTopRightRadius={55}
        gap={30}
        paddingHorizontal={37}
        paddingVertical={35}>
        <View flex={1}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View gap={24}>
              {transactions.map((item, index) => (
                <EventItem key={index} {...item} />
              ))}
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default TransactionsScreen;
