import {FilterButtons, ListDoctor, SpecialtiesHeader} from '@components/index';
import {useAppTheme} from '@hooks/theme';
import {Doctor, SpecialtyParams} from '@lib/types';
import {RouteProp, useRoute} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import makeStyles from './styles';
import {DoctorAvatar} from '@assets/index';
import {useAppNavigation} from '@hooks/navigation';
import {Paths} from '@constant/index';

const doctors: Doctor[] = [
  {
    id: 1,
    name: 'Dr. Daniel Rodriguez',
    specialization: 'Interventional Cardiologist',
    image: DoctorAvatar, // Replace with actual image URLs
  },
  {
    id: 2,
    name: 'Dr. Jessica Ramirez',
    specialization: 'Electrophysiologist',
    image: DoctorAvatar,
  },
  {
    id: 3,
    name: 'Dr. Michael Chang',
    specialization: 'Cardiac Imaging Specialist',
    image: DoctorAvatar,
  },
  {
    id: 4,
    name: 'Dr. Michael Davidson, M.D.',
    specialization: 'Cardiology',
    image: DoctorAvatar,
  },
];

type ParamList = {
  params: SpecialtyParams;
};

export const SpecialtyDetail = () => {
  const {params} = useRoute<RouteProp<ParamList, 'params'>>();

  const navigation = useAppNavigation();

  const theme = useAppTheme();
  const styles = makeStyles(theme);

  return (
    <SafeAreaView style={styles.container}>
      <SpecialtiesHeader title={params?.specialty} />

      <FilterButtons
        title="see_all"
        onClickRightButton={() =>
          navigation.navigate(Paths.HealthTrack, {
            screen: Paths.ListDoctor,
          })
        }
      />

      <ListDoctor doctors={doctors} />
    </SafeAreaView>
  );
};
