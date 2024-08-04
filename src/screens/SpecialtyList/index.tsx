import {SpecialtiesHeader} from '@components/index';
import {useAppTheme} from '@hooks/theme';
import React from 'react';
import {SafeAreaView} from 'react-native';
import makeStyles from './styles';
import Categories from './components/Categories';

export const SpecialtyList = () => {
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  return (
    <SafeAreaView style={styles.container}>
      <SpecialtiesHeader />

      <Categories />
    </SafeAreaView>
  );
};
