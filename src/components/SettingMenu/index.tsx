import {useAppNavigation} from '@hooks/navigation';
import {useAppTheme} from '@hooks/theme';
import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import makeStyles from './styles';
import {FormattedMessage} from 'react-intl';

type MenuItem = {
  id: string;
  Icon: any;
  label: string;
  navigateScreen?: string;
  params?: object;
};

type Props = {
  data: MenuItem[];
};

export const SettingMenu = ({data}: Props) => {
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={data}
      renderItem={({item}) => <Item item={item} />}
      keyExtractor={item => item.id}
      style={styles.list}
    />
  );
};

const Item = ({item: {Icon, ...item}}: {item: MenuItem}) => {
  const navigation = useAppNavigation();
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  return (
    <TouchableOpacity
      style={styles.item}
      disabled={!item.navigateScreen}
      onPress={() =>
        item.navigateScreen
          ? navigation.navigate(item.navigateScreen as any, item.params)
          : undefined
      }>
      <View style={styles.itemIcon}>
        <Icon />
      </View>
      <Text style={styles.itemText}>
        <FormattedMessage id={item.label} />
      </Text>
      <FontAwesome
        name="chevron-right"
        size={20}
        color={theme.colors.gradient}
      />
    </TouchableOpacity>
  );
};
