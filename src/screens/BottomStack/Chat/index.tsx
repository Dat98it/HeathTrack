import {AuthHeader} from '@components/index';
import {useAppTheme} from '@hooks/theme';
import React from 'react';
import {SafeAreaView} from 'react-native';
import makeStyles from './styles';
import MessageList from './MessageList';
import {DoctorAvatar} from '@assets/index';

const messages = [
  {
    id: 1,
    name: 'Ronald Richards',
    message: "So, what's your plan this weekend?",
    time: '15:41',
    avatar: DoctorAvatar,
  },
  {
    id: 2,
    name: 'Jane Cooper',
    message: 'I hope it goes well.',
    time: '16:41',
    avatar: DoctorAvatar,
  },
  {
    id: 3,
    name: 'Annette Black',
    message: "What's the progress on that task?",
    time: '08:39',
    avatar: DoctorAvatar,
  },
  {
    id: 4,
    name: 'Robert Fox',
    message: 'IDK what else is there to do',
    time: 'Yesterday',
    avatar: DoctorAvatar,
  },
  {
    id: 5,
    name: 'Wade Warren',
    message: 'Go to hell',
    time: 'Friday',
    avatar: DoctorAvatar,
  },
  {
    id: 6,
    name: 'Cody Fisher',
    message: "No, I can't come tomorrow.",
    time: 'Thursday',
    avatar: DoctorAvatar,
  },
  {
    id: 7,
    name: 'Darlene Robertson',
    message: "Yeah! You're right.",
    time: 'Tuesday',
    avatar: DoctorAvatar,
  },
  {
    id: 8,
    name: 'Marvin McKinney',
    message: 'I went there yesterday',
    time: '8/2/19',
    avatar: DoctorAvatar,
  },
  {
    id: 9,
    name: 'Ralph Edwards',
    message: "What's the progress on that task?",
    time: '7/11/19',
    avatar: DoctorAvatar,
  },
  {
    id: 10,
    name: 'Savannah Nguyen',
    message: "Yeah! You're right.",
    time: '6/21/19',
    avatar: DoctorAvatar,
  },
];

export const Chat = () => {
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  return (
    <SafeAreaView style={styles.container}>
      <AuthHeader title="messages" />

      <MessageList messages={messages} />
    </SafeAreaView>
  );
};
