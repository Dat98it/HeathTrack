import {PencilRoundIcon, ProfileExample} from '@assets/index';
import {Text} from '@components/Text';
import {useAppTheme} from '@hooks/theme';
import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import makeStyles from './styles';

const Header = () => {
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  return (
    <View style={styles.container}>
      <View style={styles.iconsContainer}>
        <TouchableOpacity style={styles.icon}>
          <Entypo name="bell" size={24} color={theme.colors.black} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <FontAwesome name="cog" size={24} color={theme.colors.black} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <FontAwesome name="search" size={24} color={theme.colors.black} />
        </TouchableOpacity>
      </View>
      <View style={styles.userContainer}>
        <View style={styles.userInfo}>
          <Text style={styles.welcomeText}>Hi, WelcomeBack</Text>
          <Text style={styles.userName}>Jane Doe</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image source={ProfileExample} style={styles.userImage} />
          <TouchableOpacity style={styles.cameraIcon}>
            <PencilRoundIcon />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Header;
