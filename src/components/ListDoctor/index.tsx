import {useAppTheme} from '@hooks/theme';
import {Doctor} from '@lib/types';
import React, {FC} from 'react';
import {FlatList} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import ListItem from './components/ListItem';
import makeStyles from './styles';

type Props = {
  doctors: Doctor[];
};

export const ListDoctor: FC<Props> = ({doctors}) => {
  const theme = useAppTheme();
  const inset = useSafeAreaInsets();
  const styles = makeStyles(theme, inset);

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={doctors}
      keyExtractor={item => item.id}
      renderItem={({item}) => <ListItem doctor={item} />}
      style={styles.container}
    />
  );
};
