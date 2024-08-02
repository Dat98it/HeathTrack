import {DoctorAvatar} from '@assets/index';
import {useAppTheme} from '@hooks/theme';
import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import makeStyles from './styles';
import {Doctor} from '@lib/types';

const doctors = [
  {
    id: 1,
    name: 'Dr. Ava Williams, M.D.',
    specialization: 'Maternal-Fetal Medicine',
    image: DoctorAvatar,
  },
  {
    id: 2,
    name: 'Dr. Daniel Rodriguez',
    specialization: 'Interventional Cardiologist',
    image: DoctorAvatar,
  },
  {
    id: 3,
    name: 'Dr. Emma Hall, M.D.',
    specialization: 'General Doctor',
    image: DoctorAvatar,
  },
  {
    id: 4,
    name: 'Dr. James Taylor, M.D.',
    specialization: 'General Doctor',
    image: DoctorAvatar,
  },
];

const Item = ({item}: {item: Doctor}) => {
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  return (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.professional}>Professional Doctor</Text>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.specialization}>{item.specialization}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Make Appointment</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Icon
          name="heart"
          size={24}
          color={theme.colors.gradient}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

const FavouriteDoctors = () => {
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  return (
    <FlatList
      data={doctors}
      renderItem={({item}) => <Item item={item} />}
      keyExtractor={item => item.id.toString()}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default FavouriteDoctors;
