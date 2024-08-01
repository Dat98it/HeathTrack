import {
  FavouriteIcon,
  PhamacyIcon,
  RecordIcon,
  SpecialityIcon,
  StethoscopeIcon,
} from '@assets/index';
import {useAppTheme} from '@hooks/theme';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import makeStyles from './styles';
import {FormattedMessage} from 'react-intl';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {AppRootStackParams} from '@lib/types';
import {Paths} from '@constant/navigation';

const Categories = () => {
  const theme = useAppTheme();
  const styles = makeStyles(theme);
  const navigation = useNavigation<NavigationProp<AppRootStackParams>>();

  const categories = [
    {
      id: 1,
      title: 'favorite',
      Icon: FavouriteIcon,
    },
    {
      id: 2,
      title: 'doctor',
      Icon: StethoscopeIcon,
    },
    {
      id: 3,
      title: 'pharmacy',
      Icon: PhamacyIcon,
    },
    {
      id: 4,
      title: 'specialties',
      Icon: null,
      onPress: () => navigation.navigate(Paths.Specialties),
    },
    {
      id: 5,
      title: 'record',
      Icon: RecordIcon,
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          <FormattedMessage id="categories" />
        </Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>
            <FormattedMessage id="see_all" />
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.menu}>
        {categories.map(category => (
          <TouchableOpacity
            key={category.id}
            style={styles.menuItem}
            onPress={category.onPress}>
            {category.Icon ? (
              <category.Icon />
            ) : (
              <Image source={SpecialityIcon} style={styles.category} />
            )}
            <Text
              style={styles.menuText}
              numberOfLines={1}
              ellipsizeMode="tail">
              <FormattedMessage id={category.title} />
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Categories;
