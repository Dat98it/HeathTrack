import {AppIcon} from '@assets/index';
import {GradientButton} from '@components/GradientButton';
import {Paths} from '@constant/navigation';
import {useAppTheme} from '@hooks/theme';
import {AuthenticationRootStack} from '@lib/types';
import {NavigationProp} from '@react-navigation/native';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import makeStyles from './styles';

type Props = {
  navigation: NavigationProp<AuthenticationRootStack>;
};

export const Welcome = ({navigation}: Props) => {
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  return (
    <View style={styles.container}>
      <Image source={AppIcon} style={styles.logo} />

      <Text style={styles.title}>HealthTrack</Text>

      <Text style={styles.subtitle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Text>

      <View style={styles.groupButton}>
        <GradientButton
          style={styles.button}
          label="Log In"
          onPress={() => navigation.navigate(Paths.SignIn)}
        />
        <TouchableOpacity
          style={[styles.button, styles.signupButton]}
          onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.signupButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
