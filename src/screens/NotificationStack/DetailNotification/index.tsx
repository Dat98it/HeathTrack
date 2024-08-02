import {AuthHeader} from '@components/index';
import {useAppTheme} from '@hooks/theme';
import {NotificationParams} from '@lib/types';
import {RouteProp, useRoute} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import makeStyles from '../styles';
import makeInnerStyles from './styles';

type ParamList = {
  params: NotificationParams;
};

export const DetailNotification = () => {
  const {
    params: {notification},
  } = useRoute<RouteProp<ParamList, 'params'>>();

  const inset = useSafeAreaInsets();
  const theme = useAppTheme();
  const styles = makeStyles(theme, inset);
  const innerStyles = makeInnerStyles(theme);

  return (
    <View style={styles.container}>
      <AuthHeader title="notification" />

      <View style={innerStyles.innerContainer}>
        <Text style={innerStyles.time}>{notification.time}</Text>
        <Text style={innerStyles.title}>{notification.title}</Text>
        <Text style={innerStyles.description}>{notification.description}</Text>
      </View>
    </View>
  );
};
