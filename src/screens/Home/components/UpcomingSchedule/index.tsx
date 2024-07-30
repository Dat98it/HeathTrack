import {DotIcon} from '@assets/index';
import {Text} from '@components/Text';
import {useAppTheme} from '@hooks/theme';
import React from 'react';
import {FormattedMessage} from 'react-intl';
import {FlatList, TouchableOpacity, View} from 'react-native';
import makeStyles from './styles';

const schedules = [
  {id: 1, dateNumber: 9, dateText: 'MON'},
  {id: 2, dateNumber: 10, dateText: 'TUE'},
  {id: 3, dateNumber: 11, dateText: 'WED'},
  {id: 4, dateNumber: 12, dateText: 'THU'},
  {id: 5, dateNumber: 13, dateText: 'FRI'},
  {id: 6, dateNumber: 14, dateText: 'SAT'},
];

export const UpcomingSchedule = () => {
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          <FormattedMessage id="upcoming_schedule" />
        </Text>
        <TouchableOpacity>
          <Text style={styles.month}>
            <FormattedMessage id="month" />
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        style={styles.datesContainer}
        showsHorizontalScrollIndicator={false}
        data={schedules}
        horizontal
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.dateItem}>
            <Text style={styles.dateNumber}>{item.dateNumber}</Text>
            <Text style={styles.dateText}>{item.dateText}</Text>
          </TouchableOpacity>
        )}
      />

      <View style={styles.scheduleContainer}>
        <TouchableOpacity style={styles.scheduleHeader}>
          <Text style={styles.scheduleTitle}>
            <FormattedMessage id="see_all" />
          </Text>
        </TouchableOpacity>
        <View style={styles.scheduleItem}>
          <View style={styles.scheduleTime}>
            <DotIcon />
            <Text style={styles.scheduleTimeLabel}>
              11 Month - Wednesday - Today
            </Text>
          </View>
          <Text style={styles.scheduleDetails}>10:00 am Dr. Olivia Turner</Text>
        </View>
        <View style={styles.scheduleItem}>
          <View style={styles.scheduleTime}>
            <DotIcon />
            <Text style={styles.scheduleTimeLabel}>16 Month - Monday</Text>
          </View>
          <Text style={styles.scheduleDetails}>
            08:00 am Dr. Alexander Bennett
          </Text>
        </View>
      </View>
    </View>
  );
};
