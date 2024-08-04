import {AuthHeader, Text} from '@components/index';
import {useAppTheme} from '@hooks/theme';
import React, {useState} from 'react';
import {FlatList, SafeAreaView, Switch, View} from 'react-native';
import makeStyles from './styles';

type Item = {
  id: string;
  name: string;
  enabled: boolean;
};

export const NotificationSetting = () => {
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  const [settings, setSettings] = useState([
    {id: '1', name: 'General Notification', enabled: true},
    {id: '2', name: 'Sound', enabled: true},
    {id: '3', name: 'Sound Call', enabled: true},
    {id: '4', name: 'Vibrate', enabled: false},
    {id: '5', name: 'Special Offers', enabled: false},
    {id: '6', name: 'Payments', enabled: false},
    {id: '7', name: 'Promo And Discount', enabled: false},
    {id: '8', name: 'Cashback', enabled: false},
  ]);

  const toggleSwitch = (id: string) => {
    setSettings(prevSettings =>
      prevSettings.map(setting =>
        setting.id === id ? {...setting, enabled: !setting.enabled} : setting,
      ),
    );
  };

  const renderItem = ({item}: {item: Item}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.name}</Text>
      <Switch
        trackColor={{true: theme.colors.gradient}}
        thumbColor={theme.colors.white}
        ios_backgroundColor={theme.colors.lighBlue}
        onValueChange={() => toggleSwitch(item.id)}
        value={item.enabled}
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <AuthHeader title="notification_settings" />

      <FlatList
        data={settings}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};
