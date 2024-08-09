import NotificationIcon from '@assets/icons/NotificationIcon';
import {
  CarIcon,
  CheckIcon,
  FoodIcon,
  RevenueIcon,
  TotalBalanceIcon,
  TotalExpenseIcon,
} from '@assets/index';
import {Percentage, Text, TouchableOpacity, View} from '@components/index';
import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import Events from './Events';

const HomeScreen = () => {
  const [activeTab, setActiveTab] = useState<string>('Monthly');

  return (
    <View
      allowInset
      backgroundColor="caribbeanGreen"
      flex={1}
      justifyContent="flex-end">
      {/* header */}
      <View paddingVertical={32} paddingHorizontal={38} gap={32}>
        <View justifyContent="space-between" flexDirection="row">
          <View>
            <Text fontSize={20} fontWeight="bold">
              Hi, Welcome Back
            </Text>
            <Text fontSize={14}>Hi, Welcome Back</Text>
          </View>

          <TouchableOpacity
            height={30}
            width={30}
            borderRadius={30}
            justifyContent="center"
            alignItems="center"
            backgroundColor="lightGreen">
            <NotificationIcon size={18} />
          </TouchableOpacity>
        </View>

        {/* Balance */}
        <View gap={15} justifyContent="center" paddingHorizontal={22}>
          <View flexDirection="row" justifyContent="center" gap={5}>
            {/* Balance */}

            {[
              {
                title: 'Total Balance',
                value: '$7,783.00',
                type: 'total_balance',
              },
              {
                title: 'Total Expense',
                value: '$1.187.40',
                type: 'total_expense',
              },
            ].map((item, idx) => (
              <View
                key={idx}
                flex={1}
                justifyContent="center"
                alignItems="center"
                borderRightWidth={idx === 1 ? 0 : 1}
                borderColor="lightGreen">
                <View flexDirection="row" gap={5} alignItems="center">
                  {item.type === 'total_balance' ? (
                    <TotalBalanceIcon />
                  ) : (
                    <TotalExpenseIcon />
                  )}
                  <Text fontSize={14} color="letterAndIcon">
                    Total Balance
                  </Text>
                </View>

                <Text
                  fontSize={24}
                  fontWeight={'bold'}
                  color={item.type === 'total_balance' ? 'white' : 'oceanBlue'}>
                  $7,783.00
                </Text>
              </View>
            ))}
          </View>

          {/* Percentage */}
          <Percentage percentage={40} />

          <View
            flexDirection="row"
            gap={5}
            alignItems="center"
            justifyContent="center">
            <CheckIcon />
            <Text fontSize={15}>40% of your expenses, looks good.</Text>
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
        paddingHorizontal={24}
        paddingVertical={32}>
        {/* Banner */}
        <View flex={1}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View
              flexDirection="row"
              backgroundColor="caribbeanGreen"
              paddingVertical={22}
              paddingHorizontal={24}
              borderRadius={31}>
              <View
                width={'40%'}
                borderRightWidth={2}
                borderColor="lightGreen"
                justifyContent="center"
                alignItems="center"
                gap={10}>
                <View
                  width={68}
                  height={68}
                  borderWidth={3}
                  borderColor="lightGreen"
                  borderRadius={34}
                  justifyContent="center"
                  alignItems="center">
                  <CarIcon />
                </View>
                <Text fontSize={16} lineHeight={17} textAlign="center">
                  {'Savings\nOn Goals'}
                </Text>
              </View>
              <View justifyContent="center">
                <View
                  flexDirection="row"
                  gap={10}
                  alignItems="center"
                  padding={10}>
                  <View height={30} width={30}>
                    <RevenueIcon />
                  </View>
                  <View gap={2} justifyContent="center">
                    <Text fontSize={14}>Revenue Last Week</Text>
                    <Text fontWeight={'bold'} fontSize={15}>
                      $4.000.00
                    </Text>
                  </View>
                </View>
                <View
                  flexDirection="row"
                  gap={10}
                  alignItems="center"
                  padding={10}>
                  <View height={30} width={30}>
                    <FoodIcon />
                  </View>
                  <View gap={2} justifyContent="center">
                    <Text fontSize={14}>Food Last Week</Text>
                    <Text fontWeight={'bold'} fontSize={15} color="oceanBlue">
                      -$100.00
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            {/* Filter tabs */}
            <View
              height={60}
              backgroundColor="lightGreen"
              borderRadius={22}
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between"
              paddingHorizontal={5}
              marginVertical={26}>
              {['Daily', 'Weekly', 'Monthly'].map((item, index) => (
                <TouchableOpacity
                  onPress={() => setActiveTab(item)}
                  key={index}
                  flex={1}
                  height={50}
                  borderRadius={19}
                  justifyContent="center"
                  alignItems="center"
                  backgroundColor={
                    item === activeTab ? 'caribbeanGreen' : undefined
                  }>
                  <Text fontSize={15}>{item}</Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* Events */}
            <Events />
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
