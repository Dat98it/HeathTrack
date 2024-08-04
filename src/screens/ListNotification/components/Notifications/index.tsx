import {Text} from '@components/Text';
import {useAppTheme} from '@hooks/theme';
import {Notification} from '@lib/types';
import React, {FC} from 'react';
import {View} from 'react-native';
import {Item} from './components';
import makeStyles from './styles';

type Props = {
  notifications: Notification[];
  title?: string;
};

export const Notifications: FC<Props> = ({notifications, title}) => {
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  return (
    <View style={styles.container}>
      {title && (
        <View style={styles.header}>
          <View style={styles.headerButton}>
            <Text style={styles.headerButtonText}>{title}</Text>
          </View>
        </View>
      )}
      {notifications.map((notification, idx) => (
        <Item key={idx} notification={notification} />
      ))}
    </View>
  );
};
