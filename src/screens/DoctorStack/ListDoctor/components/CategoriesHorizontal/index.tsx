import {
  CadiologyIcon,
  DermatologyIcon,
  GeneralMedicineIcon,
  GynecologyIcon,
  OdontologyIcon,
  OncologyIcon,
  OphtamologyIcon,
  OrthopedicsIcon,
} from '@assets/index';
import {Paths} from '@constant/index';
import {useAppNavigation} from '@hooks/navigation';
import {useAppTheme} from '@hooks/theme';
import React, {useRef} from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import makeStyles from './styles';

interface Item {
  name: string;
  Icon: React.ComponentType<any>;
}

const categories = [
  {name: 'cardiology', Icon: CadiologyIcon},
  {name: 'dermatology', Icon: DermatologyIcon},
  {name: 'general_medicine', Icon: GeneralMedicineIcon},
  {name: 'gynecology', Icon: GynecologyIcon},
  {name: 'odontology', Icon: OdontologyIcon},
  {name: 'oncology', Icon: OncologyIcon},
  {name: 'ophthalmology', Icon: OphtamologyIcon},
  {name: 'orthopedics', Icon: OrthopedicsIcon},
];

export const CategoriesHorizontal = () => {
  const navigation = useAppNavigation();
  const flatlistRef = useRef<FlatList<Item>>(null);
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => flatlistRef.current?.scrollToOffset({offset: 0})}>
        <AntDesign size={25} color={theme.colors.gradient} name="left" />
      </TouchableOpacity>

      <View style={styles.lisItem}>
        <FlatList
          ref={flatlistRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={categories}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.itemContainer}
              onPress={() =>
                navigation.navigate(Paths.SpecialtiesStack, {
                  screen: Paths.SpecialtyDetail,
                  params: {
                    specialty: item.name,
                  },
                })
              }>
              <item.Icon />
            </TouchableOpacity>
          )}
          contentContainerStyle={styles.contentContainer}
        />
      </View>

      <TouchableOpacity onPress={() => flatlistRef.current?.scrollToEnd()}>
        <AntDesign size={25} color={theme.colors.gradient} name="right" />
      </TouchableOpacity>
    </View>
  );
};
