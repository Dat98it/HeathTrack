import {GradientView} from '@components/GradientView';
import {Text} from '@components/Text';
import {useAppTheme} from '@hooks/theme';
import React from 'react';
import {View} from 'react-native';
import makeStyles from './styles';

type Props = {
  notifications: any[];
  title?: string;
};

export const ListNotification = ({notifications, title}: Props) => {
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  const renderItem = (item: any) => {
    return (
      <View style={[styles.item, item.id === 2 && styles.highlightedItem]}>
        <GradientView style={styles.icon}>
          <item.icon color={theme.colors.white} />
        </GradientView>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>

        <Text style={styles.time}>{item.time}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {title && (
        <View style={styles.header}>
          <View style={styles.headerButton}>
            <Text style={styles.headerButtonText}>{title}</Text>
          </View>
        </View>
      )}
      {notifications.map((item, idx) => {
        return <View key={idx}>{renderItem(item)}</View>;
      })}
    </View>
  );
};
