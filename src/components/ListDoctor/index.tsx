import {useAppTheme} from '@hooks/theme';
import {Doctor} from '@lib/types';
import React, {FC} from 'react';
import {FlatList} from 'react-native';
import ListItem from './components/ListItem';
import makeStyles from './styles';

type Props = {
  doctors: Doctor[];
};

export const ListDoctor: FC<Props> = ({doctors}) => {
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={doctors}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => <ListItem doctor={item} />}
      style={styles.container}
    />
  );
};
