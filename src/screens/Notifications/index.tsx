import {BookingIcon, MedicalNotes} from '@assets/index';
import {AuthHeader} from '@components/index';
import {useAppTheme} from '@hooks/theme';
import React from 'react';
import {ScrollView, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ListNotification, SearchNotification} from './components';
import makeStyles from './styles';

const notifications = [
  {
    id: 1,
    title: 'Scheduled Appointment',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    time: '2 M',
    icon: BookingIcon,
  },
  {
    id: 2,
    title: 'Scheduled Change',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    time: '2 H',
    icon: BookingIcon,
  },
  {
    id: 3,
    title: 'Medical Notes',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    time: '3 H',
    icon: MedicalNotes,
  },
];

const Notifications = () => {
  const inset = useSafeAreaInsets();
  const theme = useAppTheme();
  const styles = makeStyles(theme, inset);

  return (
    <View style={styles.container}>
      <AuthHeader title="notifications" />

      <SearchNotification />

      <ScrollView>
        <ListNotification notifications={notifications} />

        <ListNotification notifications={notifications} title="Yesterday" />

        <ListNotification notifications={notifications} title="15 April" />
      </ScrollView>
    </View>
  );
};

export default Notifications;
