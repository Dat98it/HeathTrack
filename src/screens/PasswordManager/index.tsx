import {AuthHeader, Text} from '@components/index';
import {useAppTheme} from '@hooks/theme';
import React from 'react';
import {SafeAreaView, TextInput, TouchableOpacity, View} from 'react-native';
import makeStyles from './styles';

export const PasswordManager = () => {
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  return (
    <SafeAreaView style={styles.container}>
      <AuthHeader title="password_manager" />

      <View style={styles.contentWrapper}>
        <View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Current Password</Text>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder="********"
              />
              <TouchableOpacity style={styles.icon}>
                {/* Add your eye icon here */}
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>New Password</Text>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder="********"
              />
              <TouchableOpacity style={styles.icon}>
                {/* Add your eye icon here */}
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Confirm New Password</Text>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder="********"
              />
              <TouchableOpacity style={styles.icon}>
                {/* Add your eye icon here */}
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.changePasswordButton}>
          <Text style={styles.changePasswordButtonText}>Change Password</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
