import {EmailIcon} from '@assets/index';
import {AuthHeader, GradientButton, Input, Text} from '@components/index';
import {Paths} from '@constant/navigation';
import {useAppTheme} from '@hooks/theme';
import {AuthenticationRootStack} from '@lib/types';
import {NavigationProp} from '@react-navigation/native';
import React from 'react';
import {useIntl} from 'react-intl';
import {TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {makeStyles} from './style';

type Props = {
  navigation: NavigationProp<AuthenticationRootStack>;
};

export const ResetPassword = ({navigation}: Props) => {
  const intl = useIntl();
  const theme = useAppTheme();
  const inset = useSafeAreaInsets();
  const styles = makeStyles(theme, inset);

  return (
    <View style={styles.loginPage}>
      <AuthHeader title="reset_pasword" />

      <View style={styles.container}>
        <Input
          label={intl.formatMessage({id: 'email'})}
          placeholder={intl.formatMessage({id: 'email_placeholder'})}
          keyboardType="email-address"
          LeftIcon={EmailIcon}
          inputStyle={styles.input}
          placeholderTextColor={theme.colors.gradient}
        />

        <GradientButton
          label={intl.formatMessage({id: 'reset_pasword'})}
          style={styles.button}
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
    </View>
  );
};
