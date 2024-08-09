import {useAppTheme} from '@hooks/theme';
import React from 'react';
import {NotificationIcon} from '@assets/index';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {View} from '@components/View';
import {TouchableOpacity} from '@components/TouchableOpacity';
import {Text} from '@components/Text';

interface AppHeaderProps {
  title: string;
}

export const AppHeader: React.FC<AppHeaderProps> = ({title}) => {
  const theme = useAppTheme();

  return (
    <View
      width={'100%'}
      justifyContent="space-between"
      flexDirection="row"
      alignItems="center"
      maxHeight={50}>
      <TouchableOpacity
        height={30}
        width={30}
        borderRadius={30}
        justifyContent="center"
        alignItems="center">
        <AntDesign name="arrowleft" size={30} color={theme.colors.white} />
      </TouchableOpacity>

      <Text fontSize={20} fontWeight={'bold'}>
        {title}
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
  );
};
