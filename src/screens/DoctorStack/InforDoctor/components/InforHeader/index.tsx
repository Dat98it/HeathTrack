import {DoctorAvatar} from '@assets/index';
import {Text} from '@components/Text';
import {useAppTheme} from '@hooks/theme';
import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import makeStyles from './styles';
import {useAppNavigation} from '@hooks/navigation';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const InfoHeader = () => {
  const navigation = useAppNavigation();
  const inset = useSafeAreaInsets();
  const theme = useAppTheme();
  const styles = makeStyles(theme, inset);

  return (
    <View style={styles.container}>
      <View style={styles.headerIcons}>
        <TouchableOpacity onPress={navigation.goBack}>
          <FontAwesome5
            name="chevron-left"
            size={20}
            color={theme.colors.white}
          />
        </TouchableOpacity>
        <View style={styles.rightIcons}>
          <View style={styles.rightIconsItem}>
            <TouchableOpacity style={styles.scheduleButton}>
              <AntDesign
                name="calendar"
                size={20}
                color={theme.colors.gradient}
              />
              <Text style={styles.scheduleButtonText}>Schedule</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconsButton}>
              <Feather
                name="phone-call"
                size={20}
                color={theme.colors.gradient}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconsButton}>
              <FontAwesome5
                name="video"
                size={20}
                color={theme.colors.gradient}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconsButton}>
              <Ionicons
                name="chatbubbles-sharp"
                size={20}
                color={theme.colors.gradient}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.rightIconsItem}>
            <TouchableOpacity style={styles.iconsButtonOutline}>
              <AntDesign name="question" size={20} color={theme.colors.white} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconsButtonOutline}>
              <AntDesign name="hearto" size={20} color={theme.colors.white} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.profileSection}>
        <Image
          source={DoctorAvatar} // Replace with actual image URL
          style={styles.profileImage}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>Dr. Jacob Lopez, M.D.</Text>
          <Text style={styles.title}>Surgical Dermatology</Text>
          <View style={styles.rating}>
            <View style={styles.ratingButton}>
              <MaterialIcons
                name="star"
                size={20}
                color={theme.colors.gradient}
              />
              <Text style={styles.ratingText}>5</Text>
            </View>

            <View style={styles.ratingButton}>
              <MaterialIcons
                name="people"
                size={20}
                color={theme.colors.gradient}
              />
              <Text style={styles.ratingText}>40</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.additionalInfo}>
        <View style={styles.infoBox}>
          <FontAwesome5 name="medal" size={16} color={theme.colors.gradient} />
          <Text style={styles.infoText}>{'15 years \nexperience'}</Text>
        </View>
        <View style={styles.infoBox}>
          <FontAwesome5 name="clock" size={16} color={theme.colors.gradient} />
          <Text style={styles.infoText}>Mon-Sat / 9:00AM - 5:00PM</Text>
        </View>
      </View>
    </View>
  );
};

export default InfoHeader;
