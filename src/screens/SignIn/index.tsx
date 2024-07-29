import {EmailIcon, PasswordIcon} from '@assets/index';
import {GradientButton, GradientView, Input, Text} from '@components/index';
import {useAppTheme} from '@hooks/theme';
import {AuthenticationRootStack} from '@lib/types';
import {NavigationProp} from '@react-navigation/native';
import React from 'react';
import {useIntl} from 'react-intl';
import {TouchableOpacity, View} from 'react-native';
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
      <GradientView style={styles.header}>
        <Text style={styles.title}>{intl.formatMessage({id: 'sign_in'})}</Text>
      </GradientView>

      <View style={styles.welcome}>
        <Text style={styles.welcomeLabel}>Welcome</Text>
      </View>

      <View style={styles.container}>
        <Input
          label={intl.formatMessage({id: 'email'})}
          placeholder={intl.formatMessage({id: 'email_placeholder'})}
          keyboardType="email-address"
          LeftIcon={EmailIcon}
          inputStyle={styles.input}
          placeholderTextColor={theme.colors.gradient}
        />
        <Input
          label={intl.formatMessage({id: 'password'})}
          placeholder={intl.formatMessage({id: 'password_placeholder'})}
          LeftIcon={PasswordIcon}
          rightIcon
          isPassword
          inputStyle={styles.input}
          placeholderTextColor={theme.colors.gradient}
        />

        <TouchableOpacity
          style={styles.forgotPassword}
          onPress={() => navigation.navigate('ResetPassword')}>
          <Text style={styles.forgotPasswordLabel}>Forget Password</Text>
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

        <View style={styles.signUpLink}>
          <Text>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.signUp}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignIn;
