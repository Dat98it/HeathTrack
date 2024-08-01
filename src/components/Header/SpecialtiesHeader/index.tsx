import {SearchIcon} from '@assets/index';
import {useAppTheme} from '@hooks/theme';
import React from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import makeStyles from './styles';
import {useNavigation} from '@react-navigation/native';
import {Text} from '@components/Text';
import {FormattedMessage} from 'react-intl';

export const SpecialtiesHeader = () => {
  const navigation = useNavigation();
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={navigation.goBack}>
        <Feather name="arrow-left" size={30} color={theme.colors.white} />
      </TouchableOpacity>
      <Text style={styles.title}>
        <FormattedMessage id="specialties" />
      </Text>
      <Text style={styles.subtitle}>
        <FormattedMessage id="find_your_doctor" />
      </Text>
      <View style={styles.searchContainer}>
        <View style={styles.searchIcon}>
          <SearchIcon />
        </View>
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          placeholderTextColor={theme.colors.gradient}
        />
      </View>
    </View>
  );
};
