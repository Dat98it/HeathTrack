import {useAppTheme} from '@hooks/theme';
import {RouteProp, useRoute} from '@react-navigation/native';
import React, {useRef} from 'react';
import {
  FlatList,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Header, MessageBubble, TypingIndicator} from './components';
import makeStyles from './styles';

type ParamList = {
  params: {messageId: string; username: string};
};

type MessageItem = {
  id: number;
  text: string;
  isUser: boolean;
  time: string;
};

const messages = [
  {
    id: 1,
    text: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    isUser: false,
    time: '09:00',
  },
  {
    id: 2,
    text: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    isUser: true,
    time: '09:20',
  },
  {
    id: 3,
    text: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    isUser: false,
    time: '09:40',
  },
  {
    id: 4,
    text: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    isUser: true,
    time: '09:55',
  },
  {
    id: 5,
    text: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    isUser: false,
    time: '10:05',
  },
  {
    id: 6,
    text: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    isUser: true,
    time: '10:15',
  },
];

export const InforMessage = () => {
  const flatlistRef = useRef<FlatList<MessageItem>>(null);

  const {params} = useRoute<RouteProp<ParamList, 'params'>>();

  const theme = useAppTheme();
  const styles = makeStyles(theme);

  return (
    <SafeAreaView style={styles.container}>
      <Header title={params.username} />

      <View style={styles.messageList}>
        <FlatList
          ref={flatlistRef}
          showsVerticalScrollIndicator={false}
          data={messages}
          renderItem={({item}) => <MessageBubble {...item} />}
          onLayout={() => flatlistRef?.current?.scrollToEnd({animated: true})}
        />
      </View>

      <TypingIndicator />

      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.InpuIcon}>
          <Entypo name="attachment" size={25} color={theme.colors.gradient} />
        </TouchableOpacity>

        <TextInput style={styles.input} placeholder="Write Here..." />

        <TouchableOpacity style={styles.InpuIcon}>
          <Ionicons name="send" size={25} color={theme.colors.gradient} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
