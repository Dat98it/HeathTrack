import {GradientView} from '@components/GradientView';
import {Text} from '@components/Text';
import {useAppTheme} from '@hooks/theme';
import {Notification} from '@lib/types';
import React, {FC} from 'react';
import {TouchableOpacity, View} from 'react-native';
import makeStyles from './styles';
import {useAppNavigation} from '@hooks/navigation';
import {Paths} from '@constant/index';

type Props = {
  notification: Notification;
};

export const Item: FC<Props> = ({notification}) => {
  const navigation = useAppNavigation();
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  return (
    <TouchableOpacity
      style={[styles.item, !notification.isMarked && styles.highlightedItem]}
      onPress={() =>
        navigation.navigate(Paths.HealthTrack, {
          screen: Paths.DetailNotification,
          params: {
            notificationId: notification.id,
          },
        })
      }>
      <GradientView style={styles.icon}>
        <notification.icon color={theme.colors.white} />
      </GradientView>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{notification.title}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {notification.description}
        </Text>
      </View>

      <Text style={styles.time}>{notification.time}</Text>
    </TouchableOpacity>
  );
};
