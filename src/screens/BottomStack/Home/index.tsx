import {HomeHeader} from '@components/index';
import {useAppTheme} from '@hooks/theme';
import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import Categories from './components/Categories';
import Specialties from './components/Specialties';
import {UpcomingSchedule} from './components/UpcomingSchedule';
import makeStyles from './styles';

export const Home = () => {
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader />

      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />

        <UpcomingSchedule />

        <Specialties />
      </ScrollView>
    </SafeAreaView>
  );
};
