import React, {useRef} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import Step from './Step';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {AuthenticationRootStack} from '@lib/types';
import {ON_BOADING_KEY, Paths} from '@constant/navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';

type StepItem = {
  id: number;
  title: string;
  description: string;
};

const steps: StepItem[] = [
  {
    id: 1,
    title: 'Choose your doctor',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
  },
  {
    id: 2,
    title: 'Schedule your appointments',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
  },
  {
    id: 3,
    title: 'Check your medical history',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
  },
];

const OnboardingScreen = () => {
  const flatlistRef = useRef<any>(undefined);

  const navigation = useNavigation<NavigationProp<AuthenticationRootStack>>();

  const linkToWelcome = async () => {
    await AsyncStorage.setItem(ON_BOADING_KEY, 'true');

    navigation.navigate(Paths.Welcome);
  };

  const renderItem = ({item}: {item: StepItem}) => {
    return (
      <Step
        currentStep={item.id}
        title={item.title}
        description={item.description}
        onClick={() => {
          try {
            flatlistRef?.current?.scrollToIndex({
              index: item.id,
            });
          } catch (error) {
            linkToWelcome();
          }
        }}
        onSkip={linkToWelcome}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatlistRef}
        data={steps}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default OnboardingScreen;
