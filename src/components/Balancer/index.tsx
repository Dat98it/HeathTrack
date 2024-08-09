import {CheckIcon, TotalBalanceIcon, TotalExpenseIcon} from '@assets/index';
import {Percentage} from '@components/Percentage';
import {Text} from '@components/Text';
import {View} from '@components/View';
import React from 'react';

interface BalancerProps {}

export const Balancer: React.FC<BalancerProps> = () => {
  return (
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
                {item.title}
              </Text>
            </View>

            <Text
              fontSize={24}
              fontWeight={'bold'}
              color={item.type === 'total_balance' ? 'white' : 'oceanBlue'}>
              {item.value}
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
  );
};
