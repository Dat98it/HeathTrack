import {EmailIcon, PasswordIcon} from '@assets/index';
import {AuthHeader, GradientButton, Input, Text} from '@components/index';
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
      <AuthHeader title="sign_in" />

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
          <Text style={styles.forgotPasswordLabel}>
            {intl.formatMessage({id: 'forgot_password'})}
          </Text>
        </TouchableOpacity>

        <GradientButton
          label={intl.formatMessage({id: 'sign_in'})}
          onPress={handleSignIn}
          rightIcon
        />

        <Text style={styles.or}>or</Text>

        <TouchableOpacity onPress={() => {}} style={styles.fingerprintButton}>
          <Icon name="fingerprint" size={60} color="#00C1D4" />
        </TouchableOpacity>

        <View style={styles.signUpLink}>
          <Text style={styles.label}>
            {intl.formatMessage({id: 'dont_have_account'})}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.signUp}>
              {intl.formatMessage({id: 'sign_up'})}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignIn;
