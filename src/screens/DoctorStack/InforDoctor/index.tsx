import {useAppTheme} from '@hooks/theme';
import React from 'react';
import {View, ScrollView} from 'react-native';
import InforContent from './components/InforContent';
import InfoHeader from './components/InforHeader';
import makeStyles from './styles';

export const InforDoctor = () => {
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <InfoHeader />
        <InforContent />
      </ScrollView>
    </View>
  );
};
