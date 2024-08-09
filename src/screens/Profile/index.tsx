import {ProfileAvatar} from '@assets/index';
import {AppHeader, Text, TouchableOpacity, View} from '@components/index';
import React from 'react';
import {ScrollView} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const items = [
  {
    icon: () => <Feather name="user" color={'white'} size={25} />,
    label: 'Edit Profile',
  },
  {
    icon: () => (
      <MaterialCommunityIcons name="security" color={'white'} size={25} />
    ),
    label: 'Security',
  },
  {
    icon: () => <Feather name="settings" color={'white'} size={25} />,
    label: 'Setting',
  },
  {
    icon: () => <Ionicons name="help" color={'white'} size={25} />,
    label: 'Help',
  },
  {
    icon: () => <Feather name="log-out" color={'white'} size={25} />,
    label: 'Logout',
  },
];

const ProfileScreen = () => {
  return (
    <View
      allowInset
      backgroundColor="caribbeanGreen"
      flex={1}
      justifyContent="flex-end">
      {/* header */}
      <View
        paddingHorizontal={38}
        gap={24}
        paddingTop={24}
        paddingBottom={90}
        justifyContent="space-around">
        <AppHeader title="Profile" />
      </View>

      {/* content */}
      <View
        flexGrow={1}
        backgroundColor="honeydew"
        borderTopLeftRadius={55}
        borderTopRightRadius={55}
        paddingHorizontal={37}
        paddingTop={76}
        paddingBottom={35}>
        <View flex={1}>
          <View position="absolute" top={-136} left={'32%'}>
            <ProfileAvatar />
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View gap={24}>
              <View alignItems="center">
                <Text fontSize={20} fontWeight="bold" color="letterAndIcon">
                  John Smith
                </Text>
                <Text>ID: 25030024</Text>
              </View>

              <View gap={15}>
                {items.map((item, index) => (
                  <TouchableOpacity
                    key={index}
                    flexDirection="row"
                    alignItems="center"
                    gap={13}>
                    <View
                      width={57}
                      height={53}
                      backgroundColor="lightBlue"
                      borderRadius={18}
                      justifyContent="center"
                      alignItems="center">
                      {item.icon()}
                    </View>
                    <Text fontSize={15} fontWeight={'bold'}>
                      {item.label}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;
