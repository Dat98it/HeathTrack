import {useAppTheme} from '@hooks/theme';
import React from 'react';
import {View} from 'react-native';
import makeStyles from './styles';
import {Text} from '@components/Text';

const contents = [
  {
    id: 1,
    title: 'Profile',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: 2,
    title: 'Career Path',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: 3,
    title: 'Highlights',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
];

const InforContent = () => {
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  return (
    <View style={styles.container}>
      <View style={styles.focusContainer}>
        <Text style={styles.focusText}>
          <Text style={styles.boldText}>Focus:</Text> The impact of hormonal
          imbalances on skin conditions, specializing in acne, hirsutism, and
          other skin disorders.
        </Text>
      </View>

      {contents.map((content, index) => (
        <View key={index} style={styles.section}>
          <View style={styles.sectionTitle}>
            <Text style={styles.sectionTitleText}>{content.title}</Text>
          </View>
          <Text style={styles.sectionContent}>{content.description}</Text>
        </View>
      ))}
    </View>
  );
};

export default InforContent;
