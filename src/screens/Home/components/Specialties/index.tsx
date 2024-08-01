import {useAppTheme} from '@hooks/theme';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import makeStyles from './styles';
import {Text} from '@components/Text';
import {
  CadiologyIcon,
  DermatologyIcon,
  GeneralMedicineIcon,
  GynecologyIcon,
  OdontologyIcon,
  OncologyIcon,
} from '@assets/index';
import {FormattedMessage} from 'react-intl';
import {useAppNavigation} from '@hooks/navigation';
import {Paths} from '@constant/index';

const specialties = [
  {name: 'cardiology', Icon: CadiologyIcon},
  {name: 'dermatology', Icon: DermatologyIcon},
  {name: 'general_medicine', Icon: GeneralMedicineIcon},
  {name: 'gynecology', Icon: GynecologyIcon},
  {name: 'odontology', Icon: OdontologyIcon}, // You may need to install @expo/vector-icons or change to an appropriate icon
  {name: 'oncology', Icon: OncologyIcon},
];
const Specialties = () => {
  const navigation = useAppNavigation();
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          <FormattedMessage id="specialties" />
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate(Paths.Specialties)}>
          <Text style={styles.seeAll}>
            <FormattedMessage id="see_all" />
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.grid}>
        {specialties.map((specialty, index) => (
          <TouchableOpacity
            key={index}
            style={styles.gridItem}
            onPress={() =>
              navigation.navigate(Paths.SpecialtyDetail, {
                category: specialty.name,
              })
            }>
            <View style={styles.gridIcon}>
              <specialty.Icon />
            </View>
            <Text style={styles.gridText}>
              <FormattedMessage id={specialty.name} />
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Specialties;
