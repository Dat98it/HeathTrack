import {
  CircularProgress,
  GoalIconIcon,
  TotalBalanceIcon,
  TravelIcon,
} from '@assets/index';
import {
  AppHeader,
  HistoryGoal,
  Percentage,
  Text,
  View,
} from '@components/index';
import {useAppTheme} from '@hooks/theme';
import React from 'react';
import {ScrollView} from 'react-native';

const data = [
  {
    id: '1',
    title: 'Dinner',
    time: '18:27 - April 30',
    amount: '-$26,00',
  },
  {
    id: '2',
    title: 'Delivery Pizza',
    time: '15:00 - April 24',
    amount: '-$18,35',
  },
  {
    id: '3',
    title: 'Lunch',
    time: '12:30 - April 15',
    amount: '-$15,40',
  },
  {
    id: '4',
    title: 'Brunch',
    time: '9:30 - April 08',
    amount: '-$12,13',
  },
];

const DetailSaving = () => {
  const theme = useAppTheme();

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
        <AppHeader title="Travel" />
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
            <View gap={33}>
              {/* Goal information */}
              <View
                flexDirection="row"
                justifyContent="space-between"
                minHeight={167}>
                <View flexGrow={1} justifyContent="center">
                  <View>
                    <View flexDirection="row" alignItems="center" gap={6}>
                      <GoalIconIcon />
                      <Text>Goal</Text>
                    </View>
                    <Text
                      fontSize={24}
                      fontWeight={'bold'}
                      color="letterAndIcon">
                      $1,962.93
                    </Text>
                  </View>
                  <View>
                    <View flexDirection="row" alignItems="center" gap={6}>
                      <TotalBalanceIcon />
                      <Text>Amount Saved</Text>
                    </View>
                    <Text
                      fontSize={24}
                      fontWeight={'bold'}
                      color="caribbeanGreen">
                      $653.31
                    </Text>
                  </View>
                </View>

                <View
                  width={167}
                  height={167}
                  justifyContent="center"
                  alignItems="center"
                  backgroundColor="lightBlue"
                  borderRadius={40}>
                  <CircularProgress
                    size={100}
                    strokeWidth={10}
                    progress={0.35} // 75% progress
                    color={theme.colors.oceanBlue}
                    backgroundColor={theme.colors.honeydew}
                    content={<TravelIcon />}
                  />
                </View>
              </View>

              {/* Percentage */}
              <View gap={10}>
                <Percentage color="caribbeanGreen" percentage={40} />
                <View flexDirection="row" alignItems="center" gap={6}>
                  <TotalBalanceIcon />
                  <Text>30% of your expenses, looks good.</Text>
                </View>
              </View>

              {/* History */}

              <HistoryGoal data={data} />
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default DetailSaving;
