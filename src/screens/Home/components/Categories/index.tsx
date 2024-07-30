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
  },
  {
    id: 5,
    title: 'record',
    Icon: RecordIcon,
  },
];

const Categories = () => {
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Categories</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.menu}>
        {categories.map(category => (
          <TouchableOpacity key={category.id} style={styles.menuItem}>
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
