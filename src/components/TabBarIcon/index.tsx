import React from 'react';
import {View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import makeStyles from './styles';
import {HomeStacks} from '@constant/index';
import {useAppTheme} from '@hooks/theme';

interface TabBarIconProps {
  routeName: keyof typeof HomeStacks;
  focused: boolean;
  color: string;
  size: number;
}

const iconMap: Record<keyof typeof HomeStacks, React.ComponentType<any>> = {
  [HomeStacks.Home]: Entypo,
  [HomeStacks.Chat]: Ionicons,
  [HomeStacks.Schedule]: MaterialCommunityIcons,
  [HomeStacks.Profile]: FontAwesome,
};

const iconNameMap: Record<keyof typeof HomeStacks, string> = {
  [HomeStacks.Home]: 'home',
  [HomeStacks.Chat]: 'chatbubbles-sharp',
  [HomeStacks.Schedule]: 'calendar-month',
  [HomeStacks.Profile]: 'user',
};

export const TabBarIcon: React.FC<TabBarIconProps> = ({
  routeName,
  focused,
  size,
}) => {
  const theme = useAppTheme();
  const styles = makeStyles(theme, focused);

  const IconComponent = iconMap[routeName];
  const iconName = iconNameMap[routeName];

  return (
    <View style={styles.container}>
      <IconComponent
        name={iconName}
        size={routeName === HomeStacks.Schedule ? 21 : size}
        color={focused ? theme.colors.primary : theme.colors.white}
      />
      <View style={styles.lineBottom} />
    </View>
  );
};
