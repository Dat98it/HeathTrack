import {ProfileExample} from '@assets/index';
import {GradientView} from '@components/GradientView';
import {Text} from '@components/Text';
import {useAppNavigation} from '@hooks/navigation';
import {useAppTheme} from '@hooks/theme';
import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Input} from '@components/Fields';
import makeStyles from './styles';

export const EditProfile = () => {
  const navigation = useAppNavigation();
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
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
            <Text style={styles.headerText}>Profile</Text>
          </View>

          <View style={styles.profileInfo}>
            <ImageBackground
              source={ProfileExample}
              style={styles.profileImage}>
              <TouchableOpacity style={styles.editButton}>
                <Icon name="edit" size={20} color={theme.colors.gradient} />
              </TouchableOpacity>
            </ImageBackground>
          </View>
        </GradientView>

        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Full Name</Text>
            <Input placeholder="Jane Doe" />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Phone Number</Text>
            <Input placeholder="+123 567 89000" keyboardType="phone-pad" />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email</Text>
            <Input
              placeholder="janedoe@example.com"
              keyboardType="email-address"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Date Of Birth</Text>
            <Input placeholder="DD / MM / YYYY" />
          </View>

          <TouchableOpacity style={styles.buttonContainer}>
            <GradientView style={styles.button}>
              <Text style={styles.buttonText}>Update Profile</Text>
            </GradientView>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
