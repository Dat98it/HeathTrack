import {
  CheckIcon,
  CircularProgress,
  TotalBalanceIcon,
  TotalExpenseIcon,
} from '@assets/index';
import {
  AppHeader,
  Percentage,
  Text,
  TouchableOpacity,
  View,
} from '@components/index';
import {useAppTheme} from '@hooks/theme';
import React, {useState} from 'react';
import {Dimensions, ScrollView} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AnalysisChart from './AnalysisChart';

const AnalysisScreen = () => {
  const theme = useAppTheme();

  const [activeTab, setActiveTab] = useState<string>('Monthly');

  return (
    <View
      allowInset
      backgroundColor="caribbeanGreen"
      flex={1}
      justifyContent="flex-end">
      {/* header */}
      <View
        paddingVertical={22}
        paddingHorizontal={38}
        justifyContent="space-around"
        alignItems="center"
        gap={30}>
        <AppHeader title="Analysis" />

        {/* Balance */}
        <View gap={15} justifyContent="center" paddingHorizontal={22}>
          <View flexDirection="row" justifyContent="center" gap={5}>
            {/* Balance */}
            <View
              flex={1}
              justifyContent="center"
              alignItems="center"
              borderRightWidth={1}
              borderColor="lightGreen">
              <View flexDirection="row" gap={5} alignItems="center">
                <TotalBalanceIcon />
                <Text fontSize={14} color="letterAndIcon">
                  Total Balance
                </Text>
              </View>
              <Text fontSize={24} fontWeight={'bold'} color="white">
                $7,783.00
              </Text>
            </View>

            {/* Expense */}
            <View flex={1} justifyContent="center" alignItems="center">
              <View flexDirection="row" gap={5} alignItems="center">
                <TotalExpenseIcon />
                <Text fontSize={14} color="letterAndIcon">
                  Total Expense
                </Text>
              </View>
              <Text fontSize={24} fontWeight={'bold'} color="oceanBlue">
                -$1.187.40
              </Text>
            </View>
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
        paddingHorizontal={37}
        paddingVertical={35}>
        {/* Banner */}
        <View flex={1} gap={30}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View gap={30}>
              {/* Filter tabs */}
              <View
                height={60}
                backgroundColor="lightGreen"
                borderRadius={22}
                flexDirection="row"
                alignItems="center"
                justifyContent="space-between"
                paddingHorizontal={5}>
                {['Daily', 'Weekly', 'Monthly', 'Yearly'].map((item, index) => (
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

              {/* Chart container */}
              <View
                minHeight={247}
                backgroundColor="lightGreen"
                borderRadius={50}
                paddingVertical={21}
                gap={10}>
                {/* Header */}
                <View
                  flexDirection="row"
                  justifyContent="space-between"
                  alignItems="center"
                  paddingHorizontal={29}>
                  <Text fontWeight={'bold'}>income & Expenses</Text>

                  <View flexDirection="row" gap={4}>
                    {/* Search and calendar icon */}
                    {['search', 'calendar'].map((item, index) => (
                      <TouchableOpacity
                        key={index}
                        width={32}
                        height={30}
                        borderRadius={12}
                        backgroundColor="caribbeanGreen"
                        justifyContent="center"
                        alignItems="center">
                        <Feather
                          name={item}
                          size={20}
                          color={theme.colors.letterAndIcon}
                        />
                      </TouchableOpacity>
                    ))}
                  </View>
                </View>

                {/* Chart */}
                <View flex={1}>
                  <AnalysisChart />
                </View>
              </View>

              {/* Balancer */}
              <View
                paddingHorizontal={40}
                flexDirection="row"
                justifyContent="space-between">
                <View justifyContent="center" alignItems="center">
                  <TotalBalanceIcon size={30} color="caribbeanGreen" />
                  <Text fontSize={15} fontWeight={'bold'}>
                    Income
                  </Text>
                  <Text
                    fontSize={20}
                    fontWeight={'bold'}
                    color="caribbeanGreen">
                    $4,120.00
                  </Text>
                </View>
                <View justifyContent="center" alignItems="center">
                  <TotalExpenseIcon size={30} color="oceanBlue" />
                  <Text fontSize={15} fontWeight={'bold'}>
                    Expense
                  </Text>
                  <Text fontSize={20} fontWeight={'bold'} color="oceanBlue">
                    $1.187.40
                  </Text>
                </View>
              </View>

              {/* My tartget */}

              <View gap={15}>
                <Text fontSize={20}>My targets</Text>

                <View
                  flexDirection="row"
                  justifyContent="space-between"
                  flexWrap="wrap"
                  gap={10}>
                  {['Travel', 'Car', 'Grocery'].map((item, index) => (
                    <View
                      key={index}
                      width={(Dimensions.get('screen').width - 74) / 2 - 5}
                      height={(Dimensions.get('screen').width - 74) / 2 - 5}
                      minHeight={100}
                      backgroundColor="lightBlue"
                      borderRadius={40}
                      justifyContent="center"
                      alignItems="center"
                      paddingVertical={15}
                      gap={5}>
                      <CircularProgress
                        size={100}
                        strokeWidth={10}
                        progress={0.35} // 75% progress
                        color={theme.colors.oceanBlue}
                        backgroundColor={theme.colors.honeydew}
                      />

                      <Text color="white" fontSize={15} fontWeight={'bold'}>
                        {item}
                      </Text>
                    </View>
                  ))}
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default AnalysisScreen;
