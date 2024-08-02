import {ProfileExample} from '@assets/index';
import {GradientView} from '@components/GradientView';
import {Text} from '@components/Text';
import {useAppNavigation} from '@hooks/navigation';
import {useAppTheme} from '@hooks/theme';
import React from 'react';
import {FlatList, Image, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import makeStyles from './styles';

type MenuItem = {
  id: string;
  icon: string;
  label: string;
};

const profileData = [
  {id: '1', icon: 'user', label: 'Profile'},
  {id: '2', icon: 'heart', label: 'Favorite'},
  {id: '3', icon: 'credit-card', label: 'Payment Method'},
  {id: '4', icon: 'lock', label: 'Privacy Policy'},
  {id: '5', icon: 'cog', label: 'Settings'},
  {id: '6', icon: 'question-circle', label: 'Help'},
  {id: '7', icon: 'sign-out', label: 'Logout'},
];

const Item = ({item}: {item: MenuItem}) => {
  const inset = useSafeAreaInsets();
  const theme = useAppTheme();
  const styles = makeStyles(theme, inset);

  return (
    <TouchableOpacity style={styles.item}>
      <View style={styles.itemIcon}>
        <FontAwesome name={item.icon} size={24} color={theme.colors.white} />
      </View>
      <Text style={styles.itemText}>{item.label}</Text>
      <FontAwesome
        name="chevron-right"
        size={20}
        color={theme.colors.gradient}
      />
    </TouchableOpacity>
  );
};

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

      <FlatList
        showsVerticalScrollIndicator={false}
        data={profileData}
        renderItem={({item}) => <Item item={item} />}
        keyExtractor={item => item.id}
        style={styles.list}
      />
    </View>
  );
};
