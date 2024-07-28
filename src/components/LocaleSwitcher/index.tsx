import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Menu} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import makeStyles from './styles';
import {localeSelector, setLocale} from '@redux/reducer/locale';
import {useAppTheme} from '@hooks/theme';
import {LOCALES} from '@lib/types';

export const LocaleSwitcher = () => {
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  const dispatch = useDispatch();
  const currentLocale = useSelector(localeSelector);

  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const handleLocaleChange = (locale: string) => {
    dispatch(setLocale(locale));
    closeMenu();
  };

  return (
    <View style={styles.container}>
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchorPosition="bottom"
        anchor={
          <TouchableOpacity onPress={openMenu} style={styles.menuButton}>
            <Text style={styles.menuButtonLabel}>{currentLocale}</Text>
          </TouchableOpacity>
        }
        contentStyle={styles.menuContentStyle}>
        {Object.values(LOCALES).map(locale => (
          <Menu.Item
            disabled={locale === currentLocale}
            key={locale}
            onPress={() => handleLocaleChange(locale)}
            title={locale}
            style={[locale === currentLocale && styles.menuSelected]}
          />
        ))}
      </Menu>
    </View>
  );
};
