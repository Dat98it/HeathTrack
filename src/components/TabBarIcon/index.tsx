import {
  BookingIcon,
  HomeIcon,
  MessageIcon,
  UserProfileIcon,
} from '@assets/index';
import {useAppTheme} from '@hooks/theme';
import React from 'react';
import {View} from 'react-native';
import makeStyles from './styles';
import {BottomRootStack} from '@constant/index';

interface TabBarIconProps {
  routeName: keyof typeof BottomRootStack;
  focused: boolean;
  color: string;
  size: number;
}

const iconMap: Record<
  keyof typeof BottomRootStack,
  React.ComponentType<any>
> = {
  [BottomRootStack.Home]: HomeIcon,
  [BottomRootStack.Chat]: MessageIcon,
  [BottomRootStack.Appointment]: BookingIcon,
  [BottomRootStack.Profile]: UserProfileIcon,
};

export const TabBarIcon: React.FC<TabBarIconProps> = ({routeName, focused}) => {
  const theme = useAppTheme();
  const styles = makeStyles(theme, focused);

  const IconComponent = iconMap[routeName];

  return (
    <View style={styles.container}>
      <IconComponent
        color={focused ? theme.colors.white : theme.colors.gradient}
      />
    </View>
  );
};
