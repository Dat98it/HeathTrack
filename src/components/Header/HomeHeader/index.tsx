import {PencilRoundIcon, ProfileExample, SearchIcon} from '@assets/index';
import {Text} from '@components/Text';
import {useAppTheme} from '@hooks/theme';
import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import makeStyles from './styles';
import {useAppNavigation} from '@hooks/navigation';
import {Paths} from '@constant/navigation';

export const HomeHeader = () => {
  const theme = useAppTheme();
  const styles = makeStyles(theme);
  const navigation = useAppNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.iconsContainer}>
        <TouchableOpacity
          style={styles.icon}
          onPress={() =>
            navigation.navigate(Paths.HealthTrack, {
              screen: Paths.ListNotification,
            })
          }>
          <Entypo name="bell" size={24} color={theme.colors.black} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.icon}
          onPress={() =>
            navigation.navigate(Paths.HealthTrack, {
              screen: Paths.Settings,
            })
          }>
          <FontAwesome name="cog" size={24} color={theme.colors.black} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <SearchIcon color={theme.colors.black} />
        </TouchableOpacity>
      </View>
      <View style={styles.userContainer}>
        <View style={styles.userInfo}>
          <Text style={styles.welcomeText}>Hi, WelcomeBack</Text>
          <Text style={styles.userName}>Jane Doe</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image source={ProfileExample} style={styles.userImage} />
          <TouchableOpacity
            style={styles.cameraIcon}
            onPress={() =>
              navigation.navigate(Paths.HealthTrack, {
                screen: Paths.EditProfile,
              })
            }>
            <PencilRoundIcon />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
