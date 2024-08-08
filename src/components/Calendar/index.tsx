import {View} from '@components/View';
import {useAppTheme} from '@hooks/theme';
import React from 'react';
import {DateData, Calendar as RnCalendar} from 'react-native-calendars';
import CustomHeader from './CustomHeader';

export const Calendar = () => {
  const theme = useAppTheme();

  return (
    <View flex={1}>
      <RnCalendar
        renderHeader={(date: DateData) => <CustomHeader date={date} />}
        // Initially visible month. Default = Date()
        current={new Date().toDateString()}
        // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
        minDate={'2022-01-01'}
        // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
        maxDate={'2024-12-31'}
        // Handler which gets executed on day press. Default = undefined
        onDayPress={(day: any) => {
          console.log('selected day', day);
        }}
        // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
        monthFormat={'MMMM yyyy'}
        // Handler which gets executed when visible month changes in calendar. Default = undefined
        onMonthChange={(data: any) => {
          console.log('data', data);
        }}
        // Hide month navigation arrows. Default = false
        hideArrows={false}
        // Replace default arrows with custom ones (direction can be 'left' or 'right')
        renderArrow={(_: any) => <View>{/* Custom arrow component */}</View>}
        // Do not show days of other months in month page. Default = false
        hideExtraDays={true}
        // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
        // day from another month that is visible in calendar page. Default = false
        disableMonthChange={false}
        // Enable the option to swipe between months. Default = false
        enableSwipeMonths={true}
        // Specify theme properties to override specific styles for calendar parts. Default = {}
        theme={{
          backgroundColor: 'transparent',
          calendarBackground: 'transparent',
          textSectionTitleColor: theme.colors.oceanBlue,
          selectedDayBackgroundColor: theme.colors.oceanBlue,
          selectedDayTextColor: theme.colors.white,
          todayTextColor: theme.colors.oceanBlue,
          dayTextColor: '#2d4150',
          textDisabledColor: '#d9e1e8',
          dotColor: theme.colors.oceanBlue,
          selectedDotColor: theme.colors.white,
          arrowColor: 'orange',
          monthTextColor: 'blue',
          indicatorColor: 'blue',
          textDayFontFamily: 'Poppins-Regular',
          textMonthFontFamily: 'Poppins-Regular',
          textDayHeaderFontFamily: 'Poppins-Regular',
          textDayFontWeight: '400',
          textMonthFontWeight: 'bold',
          textDayHeaderFontWeight: '300',
          textDayFontSize: 12,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 12,
        }}
      />
    </View>
  );
};
