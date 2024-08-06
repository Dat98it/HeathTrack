import {AuthHeader, GradientView} from '@components/index';
import {useAppTheme} from '@hooks/theme';
import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import makeStyles from './styles';

export const ReviewAppointment = () => {
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  return (
    <SafeAreaView style={styles.container}>
      <AuthHeader title="reviews" />

      <ScrollView
        style={styles.contentContainer}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>

        <Image
          source={{uri: 'https://via.placeholder.com/150'}} // Replace with actual image URL
          style={styles.profileImage}
        />
        <Text style={styles.doctorName}>Dr. Emma Hall, M.D.</Text>

        <Text style={styles.doctorTitle}>General Doctor</Text>

        <View style={styles.ratingContainer}>
          <View style={styles.stars}>
            {[...Array(5)].map((_, index) => (
              <Icon
                key={index}
                name="star"
                color={theme.colors.gradient}
                size={17}
              />
            ))}
          </View>
        </View>

        <TextInput
          style={styles.commentInput}
          placeholder="Enter Your Comment Here..."
          multiline
        />

        <GradientView style={styles.button}>
          <Text style={styles.buttonText}>Add Review</Text>
        </GradientView>
      </ScrollView>
    </SafeAreaView>
  );
};
