import {DoctorAvatar} from '@assets/index';
import {Text} from '@components/Text';
import {useAppTheme} from '@hooks/theme';
import React from 'react';
import {FlatList, Image, TouchableOpacity, View} from 'react-native';
import makeStyles from './styles';
import {useAppNavigation} from '@hooks/navigation';
import {Paths} from '@constant/index';

type MessageItem = {
  id: number;
  name: string;
  message: string;
  time: string;
  avatar: typeof DoctorAvatar;
};

type Props = {
  messages: MessageItem[];
};

const MessageList = ({messages}: Props) => {
  const navigation = useAppNavigation();
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={messages}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => (
        <TouchableOpacity
          style={styles.messageContainer}
          onPress={() =>
            navigation.navigate(Paths.HealthTrack, {
              screen: Paths.InforMessage,
              params: {messageId: item.id, username: item.name},
            })
          }>
          <Image source={item.avatar} style={styles.avatar} />
          <View style={styles.textContainer}>
            <View style={styles.header}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.message} numberOfLines={1}>
                {item.message}
              </Text>
            </View>
            <Text style={styles.time}>{item.time}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default MessageList;
