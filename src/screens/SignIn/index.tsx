import {EmailIcon, EyeIcon, PasswordIcon} from '@assets/index';
import {GradientButton, Input} from '@components/index';
import {useAppTheme} from '@hooks/theme';
import {AuthenticationRootStack} from '@lib/types';
import {NavigationProp} from '@react-navigation/native';
import React from 'react';
import {useIntl} from 'react-intl';
import {Text, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {makeStyles} from './style';

type Props = {
  navigation: NavigationProp<AuthenticationRootStack>;
};

const SignIn = ({navigation}: Props) => {
  const intl = useIntl();
  const theme = useAppTheme();
  const inset = useSafeAreaInsets();
  const styles = makeStyles(theme, inset);

  const handleSignIn = () => {
    // Handle sign in logic here
  };

  return (
    <View style={styles.loginPage}>
      <View style={styles.container}>
        <Text style={styles.title}>Hello!</Text>
        <Text style={styles.welcome}>Welcome</Text>

        <Input
          label={intl.formatMessage({id: 'email'})}
          placeholder={intl.formatMessage({id: 'email_placeholder'})}
          keyboardType="email-address"
          LeftIcon={EmailIcon}
        />
        <Input
          label={intl.formatMessage({id: 'password'})}
          placeholder={intl.formatMessage({id: 'password_placeholder'})}
          LeftIcon={PasswordIcon}
          RightIcon={EyeIcon}
          isPassword
        />

        <TouchableOpacity onPress={() => navigation.navigate('ResetPassword')}>
          <Text style={styles.forgotPassword}>Forget Password</Text>
        </TouchableOpacity>

        <GradientButton
          label="Log In"
          style={styles.button}
          onPress={handleSignIn}
        />

        <Text style={styles.or}>or</Text>

        <TouchableOpacity onPress={() => {}} style={styles.fingerprintButton}>
          <Icon name="fingerprint" size={60} color="#00C1D4" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.signUp}>Don't have an account? Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignIn;
