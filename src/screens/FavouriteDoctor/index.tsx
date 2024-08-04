import {AuthHeader, FilterButtons, Text} from '@components/index';
import {useAppTheme} from '@hooks/theme';
import React from 'react';
import {SafeAreaView, TouchableOpacity, View} from 'react-native';
import FavouriteDoctors from './components/FavouriteDoctors';
import FavouriteServices from './components/FavouriteServices';
import makeStyles from './styles';

enum Tabs {
  Doctors = 'Doctors',
  Services = 'Services',
}

export const FavouriteDoctor = () => {
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  const [activeTab, setActiveTab] = React.useState(Tabs.Doctors);

  return (
    <SafeAreaView style={styles.container}>
      <AuthHeader title="favorite" />

      <FilterButtons />

      <View style={styles.buttons}>
        {['Doctors', 'Services'].map((item, index) => (
          <TouchableOpacity
            onPress={
              activeTab === Tabs.Doctors
                ? () => setActiveTab(Tabs.Services)
                : () => setActiveTab(Tabs.Doctors)
            }
            key={index}
            style={
              activeTab === item ? styles.activeButton : styles.inActiveButton
            }>
            <Text
              style={
                activeTab === item
                  ? styles.activeButtonText
                  : styles.inActiveButtonText
              }>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {activeTab === Tabs.Doctors ? (
        <FavouriteDoctors />
      ) : (
        <FavouriteServices />
      )}
    </SafeAreaView>
  );
};
