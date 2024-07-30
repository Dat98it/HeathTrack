import {
  BookingIcon,
  HomeIcon,
  MessageIcon,
  UserProfileIcon,
} from '@assets/index';
import {HomeStacks} from '@constant/index';
import {useAppTheme} from '@hooks/theme';
import React from 'react';
import {View} from 'react-native';
import makeStyles from './styles';

interface TabBarIconProps {
  routeName: keyof typeof HomeStacks;
  focused: boolean;
  color: string;
  size: number;
}

const iconMap: Record<keyof typeof HomeStacks, React.ComponentType<any>> = {
  [HomeStacks.Home]: HomeIcon,
  [HomeStacks.Chat]: MessageIcon,
  [HomeStacks.Schedule]: BookingIcon,
  [HomeStacks.Profile]: UserProfileIcon,
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
