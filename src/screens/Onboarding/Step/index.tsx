import {
  CheckYourMedicalHistory,
  ChooseYourDoctor,
  ElipseIcon,
  ScheduleYourAppointments,
} from '@assets/index';
import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

type Props = {
  currentStep: number;
  title: string;
  description: string;
  onClick?: () => void;
  onSkip?: () => void;
};

const sourceImage: any = {
  1: ChooseYourDoctor,
  2: ScheduleYourAppointments,
  3: CheckYourMedicalHistory,
};

const Step = ({title, description, onClick, currentStep, onSkip}: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.skipButton} onPress={onSkip}>
        <Text style={styles.skipButtonText}>Skip</Text>
        <MaterialIcons
          size={30}
          name="keyboard-arrow-right"
          color={'#00B5D8'}
        />
      </TouchableOpacity>
      <ImageBackground source={ElipseIcon} style={styles.imageContainer}>
        <Image source={sourceImage[currentStep]} style={styles.image} />
      </ImageBackground>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <View style={styles.pagination}>
        {[1, 2, 3].map(item => {
          return (
            <View
              key={item}
              style={
                item === currentStep
                  ? styles.paginationDotActive
                  : styles.paginationDot
              }
            />
          );
        })}
      </View>
      <TouchableOpacity style={styles.nextButton} onPress={onClick}>
        <Text style={styles.nextButtonText}>
          {currentStep !== 3 ? 'Next' : 'Get Started'}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  skipButton: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
  },
  skipButtonText: {
    fontSize: 16,
    color: '#4C4C4C',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 400,
    height: 400,
    marginTop: 100,
  },
  image: {
    width: 200,
    height: 200,
    position: 'absolute',
    top: 120,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00B5D8',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#6C6C6C',
    textAlign: 'center',
    marginHorizontal: 20,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#E0E0E0',
    marginHorizontal: 4,
  },
  paginationDotActive: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00B5D8',
    marginHorizontal: 4,
  },
  nextButton: {
    width: 196,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#00B5D8',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  nextButtonText: {
    fontSize: 18,
    color: '#FFFFFF',
  },
});

export default Step;
