import {
  CheckYourMedicalHistory,
  ChooseYourDoctor,
  ElipseIcon,
  ScheduleYourAppointments,
} from '@assets/index';
import {GradientButton} from '@components/GradientButton';
import {Text} from '@components/Text';
import {useAppTheme} from '@hooks/theme';
import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import makeStyles from './styles';

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
  const theme = useAppTheme();
  const styles = makeStyles(theme);

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

      <GradientButton
        label={currentStep !== 3 ? 'Next' : 'Get Started'}
        style={styles.nextButton}
        onPress={onClick}
      />
    </SafeAreaView>
  );
};

export default Step;
