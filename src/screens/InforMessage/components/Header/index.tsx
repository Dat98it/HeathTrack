import {Text} from '@components/Text';
import {useAppNavigation} from '@hooks/navigation';
import {useAppTheme} from '@hooks/theme';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import makeStyles from '../../styles';

export const Header = ({title}: {title: string}) => {
  const navigation = useAppNavigation();
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={navigation.goBack}>
        <MaterialIcons
          name="keyboard-arrow-left"
          size={35}
          color={theme.colors.white}
        />
      </TouchableOpacity>
      <Text style={styles.headerText} numberOfLines={1}>
        {title}
      </Text>
      <View style={styles.headerIcons}>
        <TouchableOpacity style={styles.headerIcon}>
          <Feather name="phone-call" size={25} color={theme.colors.gradient} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.headerIcon}>
          <Octicons
            name="device-camera-video"
            size={25}
            color={theme.colors.gradient}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
