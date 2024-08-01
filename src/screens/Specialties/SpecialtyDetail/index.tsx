import {SpecialtiesHeader} from '@components/index';
import {useAppTheme} from '@hooks/theme';
import {RouteProp, useRoute} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import ListDoctor from './components/ListDoctor';
import makeStyles from './styles';

type ParamList = {
  params: {
    specialty: string;
  };
};

export const SpecialtyDetail = () => {
  const {params} = useRoute<RouteProp<ParamList, 'params'>>();

  const inset = useSafeAreaInsets();
  const theme = useAppTheme();
  const styles = makeStyles(theme, inset);

  return (
    <View style={styles.container}>
      <SpecialtiesHeader title={params?.specialty} />

      <ListDoctor />
    </View>
  );
};
