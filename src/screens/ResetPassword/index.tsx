import {EmailIcon} from '@assets/index';
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
import {Paths} from '@constant/navigation';

type Props = {
  navigation: NavigationProp<AuthenticationRootStack>;
};

const ResetPassword = ({navigation}: Props) => {
  const intl = useIntl();
  const theme = useAppTheme();
  const inset = useSafeAreaInsets();
  const styles = makeStyles(theme, inset);

  return (
    <View style={styles.loginPage}>
      <GradientView style={styles.header}>
        <Text style={styles.title}>
          {intl.formatMessage({id: 'reset_pasword'})}
        </Text>
      </GradientView>

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
        />

        <Text style={styles.or}>or</Text>

        <TouchableOpacity onPress={() => {}} style={styles.fingerprintButton}>
          <Icon name="fingerprint" size={60} color="#00C1D4" />
        </TouchableOpacity>

        <View style={styles.signInLink}>
          <Text>{intl.formatMessage({id: 'aready_account'})}</Text>
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

export default ResetPassword;
