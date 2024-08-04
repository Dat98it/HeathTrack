import {
  FavouriteIcon,
  PhamacyIcon,
  RecordIcon,
  SpecialityIcon,
  StethoscopeIcon,
} from '@assets/index';
import {Paths} from '@constant/navigation';
import {useAppNavigation} from '@hooks/navigation';
import {useAppTheme} from '@hooks/theme';
import React from 'react';
import {FormattedMessage} from 'react-intl';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import makeStyles from './styles';

const Categories = () => {
  const theme = useAppTheme();
  const styles = makeStyles(theme);
  const navigation = useAppNavigation();

  const categories = [
    {
      id: 1,
      title: 'favorite',
      Icon: FavouriteIcon,
      onPress: () =>
        navigation.navigate(Paths.HealthTrack, {
          screen: Paths.FavouriteDoctor,
        }),
    },
    {
      id: 2,
      title: 'doctor',
      Icon: StethoscopeIcon,
      onPress: () =>
        navigation.navigate(Paths.HealthTrack, {
          screen: Paths.ListDoctor,
        }),
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
      onPress: () =>
        navigation.navigate(Paths.HealthTrack, {
          screen: Paths.SpecialtyList,
        }),
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
            disabled={!category.onPress}
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
