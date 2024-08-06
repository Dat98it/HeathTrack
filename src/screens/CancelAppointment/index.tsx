import {AuthHeader, GradientView, Text} from '@components/index';
import {useAppTheme} from '@hooks/theme';
import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import makeStyles from './styles';
import {FormattedMessage} from 'react-intl';

const reasons = [
  'rescheduling',
  'weather_conditions',
  'unexpected_work',
  'others',
];

export const CancelAppointment = () => {
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  const [selectedReason, setSelectedReason] = useState<string>('rescheduling');

  return (
    <SafeAreaView style={styles.container}>
      <AuthHeader title="cancel_appointment" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>

        {reasons.map((reason, index) => (
          <TouchableOpacity
            key={index}
            style={styles.reasonContainer}
            onPress={() => setSelectedReason(reason)}>
            <Icon
              name={
                selectedReason === reason
                  ? 'radio-button-checked'
                  : 'radio-button-unchecked'
              }
              size={24}
              color={theme.colors.gradient}
            />
            <Text style={styles.reasonText}>
              <FormattedMessage id={reason} />
            </Text>
          </TouchableOpacity>
        ))}

        {selectedReason === 'others' && (
          <>
            <Text style={styles.additionalInfo}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>

            <TextInput
              style={styles.textInput}
              placeholder="Enter Your Reason Here..."
              multiline
            />
          </>
        )}

        <GradientView style={styles.cancelButton}>
          <Text style={styles.cancelButtonText}>Cancel Appointment</Text>
        </GradientView>
      </ScrollView>
    </SafeAreaView>
  );
};
