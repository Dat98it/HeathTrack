import {GradientView} from '@components/GradientView';
import {Text} from '@components/Text';
import {useAppTheme} from '@hooks/theme';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useIntl} from 'react-intl';
import {TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import makeStyles from './styles';

type AuthHeaderProps = {
  title: string;
};

export const AuthHeader = ({title}: AuthHeaderProps) => {
  const navigation = useNavigation();
  const intl = useIntl();
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  return (
    <GradientView style={styles.header}>
      {navigation.canGoBack() && (
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <MaterialIcons
            name="keyboard-arrow-left"
            size={30}
            color={theme.colors.white}
          />
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{intl.formatMessage({id: title})}</Text>
    </GradientView>
  );
};
