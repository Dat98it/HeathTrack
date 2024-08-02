import {BookingIcon, ChatIcon, MedicalNotes} from '@assets/index';
import {useAppTheme} from '@hooks/theme';
import React from 'react';
import {ScrollView, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import makeStyles from '../styles';
import {Notifications, SearchNotification} from './components';
import {AuthHeader} from '@components/index';

const notifications = [
  {
    id: 1,
    title: 'Scheduled Appointment',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    time: '2m a go',
    icon: BookingIcon,
    isMarked: true,
  },
  {
    id: 2,
    title: 'Scheduled Change',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    time: '2h a go',
    icon: BookingIcon,
    isMarked: false,
  },
  {
    id: 3,
    title: 'Medical Notes',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    time: '3h a go',
    icon: MedicalNotes,
    isMarked: true,
  },
  {
    id: 4,
    title: 'medical history update',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    time: '3h a go',
    icon: ChatIcon,
    isMarked: true,
  },
];

export const ListNotification = () => {
  const inset = useSafeAreaInsets();
  const theme = useAppTheme();
  const styles = makeStyles(theme, inset);

  return (
    <View style={styles.container}>
      <AuthHeader title="notifications" />

      <SearchNotification />

      <ScrollView>
        <Notifications notifications={notifications} />

        <Notifications notifications={notifications} title="Yesterday" />

        <Notifications notifications={notifications} title="15 April" />
      </ScrollView>
    </View>
  );
};
