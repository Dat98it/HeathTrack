import NotificationIcon from '@assets/icons/NotificationIcon';
import {Text, TouchableOpacity, View} from '@components/index';
import {useAppTheme} from '@hooks/theme';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ListItem from './ListItem';
import {ScrollView} from 'react-native';

const NotificationsScreen = () => {
  const theme = useAppTheme();

  return (
    <View
      allowInset
      backgroundColor="caribbeanGreen"
      flex={1}
      justifyContent="flex-end">
      {/* header */}
      <View
        paddingVertical={33}
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        paddingHorizontal={38}>
        <TouchableOpacity
          height={30}
          width={30}
          borderRadius={30}
          justifyContent="center"
          alignItems="center">
          <AntDesign name="arrowleft" size={30} color={theme.colors.white} />
        </TouchableOpacity>

        <Text fontSize={20} fontWeight="bold" color="white">
          Notification
        </Text>

        <TouchableOpacity
          height={30}
          width={30}
          borderRadius={30}
          justifyContent="center"
          alignItems="center"
          backgroundColor="lightGreen">
          <NotificationIcon size={18} />
        </TouchableOpacity>
      </View>

      {/* content */}
      <View
        flexGrow={1}
        backgroundColor="honeydew"
        borderTopLeftRadius={55}
        borderTopRightRadius={55}
        gap={30}
        paddingHorizontal={37}
        paddingVertical={32}>
        {/* Banner */}
        <View flex={1}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <ListItem />
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default NotificationsScreen;
