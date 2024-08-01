import {SpecialtiesHeader} from '@components/index';
import {useAppTheme} from '@hooks/theme';
import React from 'react';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import makeStyles from './styles';
import Categories from './components/Categories';

const Specialties = () => {
  const inset = useSafeAreaInsets();
  const theme = useAppTheme();
  const styles = makeStyles(theme, inset);

  return (
    <View style={styles.container}>
      <SpecialtiesHeader />

      <Categories />
    </View>
  );
};

export default Specialties;
