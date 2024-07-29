import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import makeStyles from './styles';
import {useAppTheme} from '@hooks/theme';

type Props = {
  label: string;
  onPress?: () => void;
};

export const Button = ({label, onPress}: Props) => {
  const theme = useAppTheme();

  const styles = makeStyles(theme);

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};
