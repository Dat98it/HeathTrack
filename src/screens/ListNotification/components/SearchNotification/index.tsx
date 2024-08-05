import {SearchIcon} from '@assets/index';
import {GradientView} from '@components/GradientView';
import {Text} from '@components/Text';
import {useAppTheme} from '@hooks/theme';
import React from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import makeStyles from './styles';

export const SearchNotification = () => {
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  return (
    <View style={styles.container}>
      <GradientView style={styles.button}>
        <Text style={styles.buttonText}>Today</Text>
      </GradientView>

      <View style={styles.searchContainer}>
        <SearchIcon />
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          placeholderTextColor="#00C6D7"
        />
      </View>

      <TouchableOpacity>
        <Text style={styles.markAllText}>Mark all</Text>
      </TouchableOpacity>
    </View>
  );
};
