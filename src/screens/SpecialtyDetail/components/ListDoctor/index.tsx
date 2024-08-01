import {DoctorAvatar} from '@assets/index';
import {Text} from '@components/Text';
import {useAppTheme} from '@hooks/theme';
import {Doctor} from '@lib/types';
import React from 'react';
import {FormattedMessage} from 'react-intl';
import {FlatList, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ListItem from './components/ListItem';
import makeStyles from './styles';
import {GradientView} from '@components/GradientView';

const doctors: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Daniel Rodriguez',
    specialization: 'Interventional Cardiologist',
    image: DoctorAvatar, // Replace with actual image URLs
  },
  {
    id: '2',
    name: 'Dr. Jessica Ramirez',
    specialization: 'Electrophysiologist',
    image: DoctorAvatar,
  },
  {
    id: '3',
    name: 'Dr. Michael Chang',
    specialization: 'Cardiac Imaging Specialist',
    image: DoctorAvatar,
  },
  {
    id: '4',
    name: 'Dr. Michael Davidson, M.D.',
    specialization: 'Cardiology',
    image: DoctorAvatar,
  },
];
const ListDoctor = () => {
  const theme = useAppTheme();
  const inset = useSafeAreaInsets();
  const styles = makeStyles(theme, inset);

  const renderHeader = () => (
    <View style={styles.header}>
      <Text style={styles.sortBy}>
        <FormattedMessage id="sort_by" />
      </Text>
      <TouchableOpacity>
        <GradientView style={styles.sortButton}>
          <Text style={styles.sortButtonText}>A</Text>
          <FontAwesome name="long-arrow-right" color={theme.colors.white} />
          <Text style={styles.sortButtonText}>Z</Text>
        </GradientView>
      </TouchableOpacity>
      <TouchableOpacity style={styles.filterButton}>
        <Text style={styles.filterButtonText}>
          <FormattedMessage id="filter" />
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.doctors}>
        <Text style={styles.doctorsLabel}>
          <FormattedMessage id="see_all" />
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={doctors}
      keyExtractor={item => item.id}
      renderItem={({item}) => <ListItem doctor={item} />}
      ListHeaderComponent={renderHeader}
      style={styles.container}
    />
  );
};

export default ListDoctor;
