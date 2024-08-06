import {AuthHeader, Text} from '@components/index';
import {useAppTheme} from '@hooks/theme';
import React, {useState} from 'react';
import {SafeAreaView, TouchableOpacity, View} from 'react-native';
import makeStyles from './styles';
import {
  AppointmentCancelled,
  AppointmentCompleted,
  AppointmentUpcomming,
} from './components';
import {FormattedMessage} from 'react-intl';

enum Tabs {
  COMPLETED = 'completed',
  UPCOMING = 'upcoming',
  CANCELLED = 'cancelled',
}

export const Appointment = () => {
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  const [tabSelected, setTabSelected] = useState<Tabs>(Tabs.COMPLETED);

  return (
    <SafeAreaView style={styles.container}>
      <AuthHeader title="all_appointments" />

      <View style={styles.filterContainer}>
        {[Tabs.COMPLETED, Tabs.UPCOMING, Tabs.CANCELLED].map((item, idx) => {
          return (
            <TouchableOpacity
              key={idx}
              onPress={() => setTabSelected(item)}
              style={
                tabSelected === item
                  ? styles.filterButtonActive
                  : styles.filterButton
              }>
              <Text
                style={
                  tabSelected === item
                    ? styles.filterTextActive
                    : styles.filterText
                }>
                <FormattedMessage id={item} />
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {Tabs.COMPLETED === tabSelected && <AppointmentCompleted />}

      {Tabs.UPCOMING === tabSelected && <AppointmentUpcomming />}

      {Tabs.CANCELLED === tabSelected && <AppointmentCancelled />}
    </SafeAreaView>
  );
};
