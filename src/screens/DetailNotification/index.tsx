import {AuthHeader, Text} from '@components/index';
import {useAppTheme} from '@hooks/theme';
import {RouteProp, useRoute} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, View} from 'react-native';
import makeStyles from './styles';

type ParamList = {
  params: {notificationId: string};
};

export const DetailNotification = () => {
  const {
    params: {notificationId},
  } = useRoute<RouteProp<ParamList, 'params'>>();
  console.log('notificationId', notificationId);

  const theme = useAppTheme();
  const styles = makeStyles(theme);

  return (
    <SafeAreaView style={styles.container}>
      <AuthHeader title="notification" />

      <View style={styles.innerContainer}>
        <Text style={styles.time}>2m</Text>
        <Text style={styles.title}>Scheduled appointment</Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </View>
    </SafeAreaView>
  );
};
