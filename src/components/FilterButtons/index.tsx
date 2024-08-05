import {GradientView} from '@components/GradientView';
import {useAppTheme} from '@hooks/theme';
import React, {FC, useState} from 'react';
import {FormattedMessage} from 'react-intl';
import {View, Text, TouchableOpacity} from 'react-native';
import makeStyles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {FilterModal} from '@screens/index';

type Props = {
  title?: string;
  onClickRightButton?: () => void;
};

export const FilterButtons: FC<Props> = ({title, onClickRightButton}) => {
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.header}>
      <Text style={styles.sortBy}>
        <FormattedMessage id="sort_by" />
      </Text>
      <GradientView style={styles.sortButton}>
        <Text style={styles.sortButtonText}>A</Text>
        <FontAwesome name="long-arrow-right" color={theme.colors.white} />
        <Text style={styles.sortButtonText}>Z</Text>
      </GradientView>
      <TouchableOpacity
        style={styles.filterButton}
        onPress={() => setVisible(true)}>
        <Text style={styles.filterButtonText}>
          <FormattedMessage id="filter" />
        </Text>
      </TouchableOpacity>

      {title && (
        <TouchableOpacity style={styles.doctors} onPress={onClickRightButton}>
          <Text style={styles.doctorsLabel}>
            <FormattedMessage id={title} />
          </Text>
        </TouchableOpacity>
      )}

      <FilterModal visible={visible} onRequestClose={() => setVisible(false)} />
    </View>
  );
};
