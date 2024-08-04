import {FilterButtons, SpecialtiesHeader} from '@components/index';
import {Paths} from '@constant/index';
import {useAppNavigation} from '@hooks/navigation';
import {useAppTheme} from '@hooks/theme';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {CategoriesHorizontal, SearchController} from './components';
import makeStyles from './styles';

export const ListDoctor = () => {
  const navigation = useAppNavigation();
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  return (
    <SafeAreaView style={styles.container}>
      <SpecialtiesHeader title="doctor" />

      <CategoriesHorizontal />

      <FilterButtons
        title="top_rating"
        onClickRightButton={() =>
          navigation.navigate(Paths.HealthTrack, {
            screen: Paths.RatingDoctor,
          })
        }
      />

      <SearchController />
    </SafeAreaView>
  );
};
