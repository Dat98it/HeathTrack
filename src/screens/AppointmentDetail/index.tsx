import {GradientView} from '@components/GradientView';
import {Text} from '@components/Text';
import {useAppTheme} from '@hooks/theme';
import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import makeStyles from './styles';
import {useAppNavigation} from '@hooks/navigation';

export const AppointmentDetail = () => {
  const navigation = useAppNavigation();
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <GradientView>
          <TouchableOpacity style={styles.header} onPress={navigation.goBack}>
            <Icon name="arrow-back" color={theme.colors.white} size={30} />
            <Text style={styles.headerTitle}>Your Appointment</Text>
          </TouchableOpacity>

          <View style={styles.profileContainer}>
            <Image
              source={{uri: 'https://via.placeholder.com/100'}} // Replace with actual image URL
              style={styles.profileImage}
            />
            <View style={styles.profileDetails}>
              <Text style={styles.profileName}>Dr. Emma Hall, M.D.</Text>
              <Text style={styles.profileSpecialty}>General Doctor</Text>
              <View style={styles.profileStats}>
                <Icon name="star" color={theme.colors.gradient} size={20} />
                <Text style={styles.profileStatText}>5</Text>
                <Icon name="people" color={theme.colors.gradient} size={20} />
                <Text style={styles.profileStatText}>30</Text>
                <Icon name="favorite" color={theme.colors.gradient} size={20} />
              </View>
            </View>
          </View>
        </GradientView>

        <View style={styles.appointmentDetails}>
          <View style={styles.appointmentDate}>
            <GradientView style={styles.appointmentDateGradient}>
              <Text style={styles.appointmentDateText}>Month 24, Year</Text>
            </GradientView>
            <View style={styles.appointmentActions}>
              <TouchableOpacity style={styles.appointmentIconButton}>
                <Icon name="check" color={theme.colors.white} size={30} />
              </TouchableOpacity>

              <TouchableOpacity style={styles.appointmentIconButton}>
                <Icon name="close" color={theme.colors.white} size={30} />
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.appointmentTime}>WED, 10:00 AM</Text>
        </View>

        <View style={styles.infoSection}>
          <View style={styles.infoSectionItem}>
            <Text style={styles.infoLabel}>Booking For</Text>
            <Text style={styles.infoValue}>Another Person</Text>
          </View>

          <View style={styles.infoSectionItem}>
            <Text style={styles.infoLabel}>Full Name</Text>
            <Text style={styles.infoValue}>Jane Doe</Text>
          </View>

          <View style={styles.infoSectionItem}>
            <Text style={styles.infoLabel}>Age</Text>
            <Text style={styles.infoValue}>30</Text>
          </View>

          <View style={styles.infoSectionItem}>
            <Text style={styles.infoLabel}>Gender</Text>
            <Text style={styles.infoValue}>Female</Text>
          </View>
        </View>

        <View style={styles.problemSection}>
          <Text style={styles.problemLabel}>Problem</Text>
          <Text style={styles.problemText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.paymentButton}>
            <Text>Payment</Text>
          </TouchableOpacity>

          <GradientView style={styles.cancelButton}>
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </GradientView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
