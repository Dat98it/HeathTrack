import {Text} from '@components/Text';
import {useAppTheme} from '@hooks/theme';
import React from 'react';
import {Image, ScrollView, TouchableOpacity, View} from 'react-native';
import makeStyles from './styles';
import {FormattedMessage} from 'react-intl';

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
  image: 'https://via.placeholder.com/50',
  doctorId: 1,
  bookedId: 1,
  date: new Date().toDateString(),
  time: '9:30 AM - 10:00 AM',
}));

export const AppointmentCancelled: React.FC = () => {
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {appointments.map(item => (
        <View key={item.id} style={styles.itemContainer}>
          <View style={styles.infoContainer}>
            <Image source={{uri: item.image}} style={styles.image} />

            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.specialty}>{item.specialty}</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.detailButton}>
            <Text style={styles.detailButtonLabel}>
              <FormattedMessage id="add_review" />
            </Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};
