import {Text} from '@components/Text';
import {useAppTheme} from '@hooks/theme';
import React from 'react';
import {Image, ScrollView, TouchableOpacity, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
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

export const AppointmentUpcomming: React.FC = () => {
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

          <View style={styles.detailsContainer}>
            <View style={styles.detailsContainerButton}>
              <Text style={styles.dateTime}>{item.date}</Text>
            </View>

            <View style={styles.detailsContainerButton}>
              <Text style={styles.dateTime}>{item.time}</Text>
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.detailButton}>
              <Text style={styles.detailButtonLabel}>
                <FormattedMessage id="details" />
              </Text>
            </TouchableOpacity>

            <View style={styles.icons}>
              <TouchableOpacity style={styles.iconButton}>
                <Entypo name="check" size={20} color={theme.colors.gradient} />
              </TouchableOpacity>

              <TouchableOpacity style={styles.iconButton}>
                <FontAwesome
                  name="close"
                  size={20}
                  color={theme.colors.gradient}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};
