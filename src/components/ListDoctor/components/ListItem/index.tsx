import {Text} from '@components/Text';
import {useAppTheme} from '@hooks/theme';
import {Doctor} from '@lib/types';
import React, {FC} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import makeStyles from './styles';
import {useAppNavigation} from '@hooks/navigation';
import {Paths} from '@constant/navigation';

type Props = {
  doctor: Doctor;
};

const ListItem: FC<Props> = ({doctor}) => {
  const navigation = useAppNavigation();
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  return (
    <View style={styles.doctorContainer}>
      <Image source={doctor.image} style={styles.doctorImage} />
      <View style={styles.doctorDetails}>
        <View style={styles.doctorNameContainer}>
          <Text style={styles.doctorName}>{doctor.name}</Text>
          <Text style={styles.doctorSpecialization}>
            {doctor.specialization}
          </Text>
        </View>

        <View style={styles.iconsContainer}>
          <TouchableOpacity
            style={styles.infoButton}
            onPress={() =>
              navigation.navigate(Paths.HealthTrack, {
                screen: Paths.InforDoctor,
                params: {
                  doctorId: doctor.id,
                },
              })
            }>
            <Text style={styles.infoButtonText}>Info</Text>
          </TouchableOpacity>
          <View style={styles.iconList}>
            <TouchableOpacity>
              <Feather name="calendar" size={20} color="#00bcd4" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Feather name="help-circle" size={20} color="#00bcd4" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Feather name="heart" size={20} color="#00bcd4" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ListItem;
