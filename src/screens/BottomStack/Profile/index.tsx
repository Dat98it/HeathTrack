/* eslint-disable react/no-unstable-nested-components */
import {ProfileExample} from '@assets/index';
import {GradientView} from '@components/GradientView';
import {SettingMenu} from '@components/SettingMenu';
import {Text} from '@components/Text';
import {Paths} from '@constant/navigation';
import {useAppNavigation} from '@hooks/navigation';
import {useAppTheme} from '@hooks/theme';
import React from 'react';
import {Image, SafeAreaView, TouchableOpacity, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import makeStyles from './styles';
import {Modal} from '@components/index';

export const Profile = () => {
  const navigation = useAppNavigation();
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  const [visible, setVisible] = React.useState(false);

  const profileData = [
    {
      id: '1',
      Icon: () => <FontAwesome name="user" size={24} color="white" />,
      label: 'profile',
      onPress: () =>
        navigation.navigate(Paths.HealthTrack, {
          screen: Paths.EditProfile,
        }),
    },
    {
      id: '2',
      Icon: () => <AntDesign name="hearto" size={24} color="white" />,
      label: 'favorite',
      onPress: () =>
        navigation.navigate(Paths.HealthTrack, {
          screen: Paths.FavouriteDoctor,
        }),
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
      onPress: () =>
        navigation.navigate(Paths.HealthTrack, {
          screen: Paths.PrivacyPolicy,
        }),
    },
    {
      id: '5',
      Icon: () => <Feather name="settings" size={24} color="white" />,
      label: 'settings',
      onPress: () =>
        navigation.navigate(Paths.HealthTrack, {
          screen: Paths.Settings,
        }),
    },
    {
      id: '6',
      Icon: () => <Entypo name="help" size={24} color="white" />,
      label: 'help',
      onPress: () =>
        navigation.navigate(Paths.HealthTrack, {
          screen: Paths.HelpCenter,
        }),
    },
    {
      id: '7',
      Icon: () => <MaterialIcons name="logout" size={24} color="white" />,
      label: 'logout',
      onPress: () => setVisible(true),
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
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

      <Modal
        position="bottom"
        visible={visible}
        onClose={() => setVisible(false)}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>Are you sure you want to log out?</Text>

          <View style={styles.buttons}>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => setVisible(false)}>
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>

            <GradientView
              style={styles.submitButton}
              onPress={() => setVisible(false)}>
              <Text style={styles.submitButtonText}>Yes, Logout</Text>
            </GradientView>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};
