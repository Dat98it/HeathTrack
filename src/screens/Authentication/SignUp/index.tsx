import {EmailIcon, PasswordIcon} from '@assets/index';
import {AuthHeader, GradientButton, Input, Text} from '@components/index';
import {useAppTheme} from '@hooks/theme';
import {AuthenticationRootStack} from '@lib/types';
import {NavigationProp} from '@react-navigation/native';
import React, {FC} from 'react';
import {useIntl} from 'react-intl';
import {SafeAreaView, ScrollView, TouchableOpacity, View} from 'react-native';
import {makeStyles} from './styles';
import {Paths} from '@constant/navigation';

// email, password, first_name, last_name, dob_year, gender

type Props = {
  navigation: NavigationProp<AuthenticationRootStack>;
};

export const SignUp: FC<Props> = ({navigation}) => {
  const intl = useIntl();
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  return (
    <SafeAreaView style={styles.signUpPage}>
      <AuthHeader title="sign_up" />

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
            <Text style={styles.label}>
              {intl.formatMessage({id: 'i_agree'})}
            </Text>
            <View style={styles.termsLink}>
              <TouchableOpacity>
                <Text style={styles.link}>
                  {intl.formatMessage({id: 'terms_of_use'})}
                </Text>
              </TouchableOpacity>
              <Text style={styles.label}>
                {intl.formatMessage({id: 'and'})}
              </Text>
              <TouchableOpacity>
                <Text style={styles.link}>
                  {intl.formatMessage({id: 'privacy_policy'})}
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <GradientButton
            label={intl.formatMessage({id: 'sign_up'})}
            rightIcon
          />

          <View style={styles.signInLink}>
            <Text style={styles.label}>
              {intl.formatMessage({id: 'aready_account'})}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate(Paths.SignIn)}>
              <Text style={styles.signIn}>
                {intl.formatMessage({id: 'sign_in'})}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
