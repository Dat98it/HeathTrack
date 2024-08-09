import {
  AppHeader,
  Calendar,
  Text,
  TouchableOpacity,
  View,
} from '@components/index';
import React from 'react';
import {ScrollView} from 'react-native';
import Expense from './Expense';
import Spend from './Spend';

enum Tabs {
  SPENDS = 'spends',
  EXPENSES = 'expenses',
}

const CalendarScreen = () => {
  const [activeTab, setActiveTab] = React.useState(Tabs.EXPENSES);

  return (
    <View
      allowInset
      backgroundColor="caribbeanGreen"
      flex={1}
      justifyContent="flex-end">
      {/* header */}
      <View
        justifyContent="center"
        alignItems="center"
        paddingHorizontal={38}
        paddingVertical={37}>
        <AppHeader title="Calender" />
      </View>

      {/* content */}
      <View
        flex={1}
        backgroundColor="honeydew"
        borderTopLeftRadius={55}
        borderTopRightRadius={55}
        paddingHorizontal={37}
        paddingVertical={32}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View flex={1} gap={30}>
            <Calendar />

            <View flexDirection="row" justifyContent="space-between" gap={19}>
              {[Tabs.SPENDS, Tabs.EXPENSES].map(tab => (
                <TouchableOpacity
                  key={tab}
                  flex={1}
                  minHeight={36}
                  justifyContent="center"
                  alignItems="center"
                  borderRadius={50}
                  backgroundColor={
                    tab === activeTab ? 'caribbeanGreen' : 'lightGreen'
                  }
                  onPress={() => setActiveTab(tab)}>
                  <Text>{tab}</Text>
                </TouchableOpacity>
              ))}
            </View>

            {activeTab === Tabs.SPENDS ? <Spend /> : <Expense />}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default CalendarScreen;
