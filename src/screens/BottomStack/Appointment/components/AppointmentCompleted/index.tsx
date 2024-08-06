import {useAppTheme} from '@hooks/theme';
import {AppointmentItem} from '@lib/types';
import React, {FC} from 'react';
import {Image, ScrollView, TouchableOpacity, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import makeStyles from './styles';
import {FormattedMessage} from 'react-intl';
import {Text} from '@components/Text';

const appointments = Array.from({length: 20}, (_, index) => ({
  id: index,
  name: `Dr. ${
    ['Emma Hall', 'Jacob Lopez', 'Quinn Cooper', 'Lucy Perez'][index % 4]
  }, M.D.`,
  specialty: [
    'General Doctor',
    'Surgical Dermatology',
    'Menopausal and Geriatric Gynecology',
    'Clinical Dermatology',
  ][index % 4],
  rating: Math.floor(Math.random() * 5) + 1,
  image: 'https://via.placeholder.com/50', // Placeholder image URL
  doctorId: 1,
  bookedId: 1,
}));

const Appointment = ({data}: {data: AppointmentItem}) => {
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  return (
    <View style={styles.itemContainer}>
      <View style={styles.infoContainer}>
        <Image source={{uri: data.image}} style={styles.image} />

        <View style={styles.info}>
          <Text style={styles.name}>{data.name}</Text>

          <Text style={styles.specialty}>{data.specialty}</Text>

          <View style={styles.icons}>
            <Text style={styles.iconLabel}>
              <TouchableOpacity>
                <AntDesign
                  size={20}
                  color={theme.colors.gradient}
                  name="star"
                />
              </TouchableOpacity>
              {data.rating}
            </Text>

            <TouchableOpacity>
              <AntDesign size={20} color={theme.colors.gradient} name="heart" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
            <FormattedMessage id="rebook" />
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
            <FormattedMessage id="add_review" />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const AppointmentCompleted: FC = () => {
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {appointments.map((item, index) => (
        <Appointment key={index} data={item} />
      ))}
    </ScrollView>
  );
};
