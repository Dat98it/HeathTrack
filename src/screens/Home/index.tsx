import React from 'react';
import {ScrollView, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import makeStyles from './styles';
import {useAppTheme} from '@hooks/theme';
import Categories from './components/Categories';
import {UpcomingSchedule} from './components/UpcomingSchedule';
import Specialties from './components/Specialties';
import {HomeHeader} from '@components/index';

const Home = () => {
  const inset = useSafeAreaInsets();
  const theme = useAppTheme();
  const styles = makeStyles(theme, inset);

  return (
    <View style={styles.container}>
      <HomeHeader />
      <ScrollView>
        <Categories />

        <UpcomingSchedule />

        <Specialties />
      </ScrollView>
    </View>
  );
};

export default Home;
