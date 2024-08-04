import {ProfileExample} from '@assets/index';
import {GradientView} from '@components/GradientView';
import {SettingMenu} from '@components/SettingMenu';
import {Text} from '@components/Text';
import {Paths} from '@constant/navigation';
import {useAppNavigation} from '@hooks/navigation';
import {useAppTheme} from '@hooks/theme';
import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import makeStyles from './styles';

const profileData = [
  {
    id: '1',
    Icon: () => <FontAwesome name="user" size={24} color="white" />,
    label: 'profile',
    navigateScreen: Paths.EditProfile,
  },
  {
    id: '2',
    Icon: () => <AntDesign name="hearto" size={24} color="white" />,
    label: 'favorite',
    navigateScreen: Paths.DoctorStack,
    params: {screen: Paths.FavouriteDoctor},
  },
  {
    id: '3',
    Icon: () => <FontAwesome name="credit-card" size={24} color="white" />,
    label: 'payment_method',
  },
  {
    id: '4',
    Icon: () => <SimpleLineIcons name="lock" size={24} color="white" />,
    label: 'privacy_policy',
  },
  {
    id: '5',
    Icon: () => <Feather name="settings" size={24} color="white" />,
    label: 'settings',
    navigateScreen: Paths.SettingStack,
  },
  {
    id: '6',
    Icon: () => <Entypo name="help" size={24} color="white" />,
    label: 'help',
  },
  {
    id: '7',
    Icon: () => <MaterialIcons name="logout" size={24} color="white" />,
    label: 'logout',
  },
];

export const Profile = () => {
  const navigation = useAppNavigation();
  const inset = useSafeAreaInsets();
  const theme = useAppTheme();
  const styles = makeStyles(theme, inset);

  return (
    <View style={styles.container}>
      <GradientView>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={navigation.goBack}>
            <FontAwesome
              name="chevron-left"
              size={20}
              color={theme.colors.white}
            />
          </TouchableOpacity>
          <Text style={styles.headerText}>My Profile</Text>
        </View>

        <View style={styles.profileInfo}>
          <Image source={ProfileExample} style={styles.profileImage} />
          <View style={styles.profileDetails}>
            <Text style={styles.profileName}>Jane Doe</Text>
            <Text style={styles.profilePhone}>+123 567 89000</Text>
            <Text style={styles.profileEmail}>janedoe@example.com</Text>
          </View>
        </View>
      </GradientView>

      <SettingMenu data={profileData} />
    </View>
  );
};
