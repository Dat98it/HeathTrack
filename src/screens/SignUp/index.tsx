import {EmailIcon, PasswordIcon} from '@assets/index';
import {GradientButton, GradientView, Input, Text} from '@components/index';
import {useAppTheme} from '@hooks/theme';
import React, {FC} from 'react';
import {useIntl} from 'react-intl';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {makeStyles} from './styles';
import {NavigationProp} from '@react-navigation/native';
import {AuthenticationRootStack} from '@lib/types';

// email, password, first_name, last_name, dob_year, gender

type Props = {
  navigation: NavigationProp<AuthenticationRootStack>;
};

const SignUp: FC<Props> = ({navigation}) => {
  const intl = useIntl();
  const theme = useAppTheme();
  const inset = useSafeAreaInsets();
  const styles = makeStyles(theme, inset);

  return (
    <View style={styles.signUpPage}>
      <GradientView style={styles.header}>
        <Text style={styles.title}>{intl.formatMessage({id: 'sign_up'})}</Text>
      </GradientView>
      <ScrollView>
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

          <Input
            label={intl.formatMessage({id: 'full_name'})}
            placeholder={intl.formatMessage({id: 'full_name_description'})}
            inputStyle={styles.input}
            placeholderTextColor={theme.colors.gradient}
          />

          <Input
            label={intl.formatMessage({id: 'last_name'})}
            placeholder={intl.formatMessage({id: 'last_name_description'})}
            inputStyle={styles.input}
            placeholderTextColor={theme.colors.gradient}
          />

          <View style={styles.terms}>
            <Text>By continuing, you agree to</Text>
            <View style={styles.termsLink}>
              <TouchableOpacity>
                <Text style={styles.link}>Terms of Use</Text>
              </TouchableOpacity>
              <Text>and</Text>
              <TouchableOpacity>
                <Text style={styles.link}>Privacy Policy</Text>
              </TouchableOpacity>
            </View>
          </View>

          <GradientButton
            label={intl.formatMessage({id: 'sign_up'})}
            style={styles.signUpButton}
          />

          <Text style={styles.orText}>or sign up with</Text>

          <TouchableOpacity onPress={() => {}} style={styles.fingerprintButton}>
            <MaterialIcons name="fingerprint" size={60} color="#00C1D4" />
          </TouchableOpacity>

          <View style={styles.signInLink}>
            <Text>{intl.formatMessage({id: 'aready_account'})}</Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
              <Text style={styles.signIn}>
                {intl.formatMessage({id: 'sign_in'})}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUp;
