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
import {GradientView} from '@components/GradientView';
import {Text} from '@components/Text';
import {Paths} from '@constant/index';
import {useAppNavigation} from '@hooks/navigation';
import {useAppTheme} from '@hooks/theme';
import React from 'react';
import {FormattedMessage} from 'react-intl';
import {FlatList, TouchableOpacity, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import makeStyles from './styles';

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

const Categories = () => {
  const navigation = useAppNavigation();
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  const renderHeader = () => (
    <View style={styles.header}>
      <Text style={styles.sortBy}>
        <FormattedMessage id="sort_by" />
      </Text>
      <TouchableOpacity>
        <GradientView style={styles.sortButton}>
          <Text style={styles.sortButtonText}>A</Text>
          <FontAwesome name="long-arrow-right" color={theme.colors.white} />
          <Text style={styles.sortButtonText}>Z</Text>
        </GradientView>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.doctors}
        onPress={() =>
          navigation.navigate(Paths.HealthTrack, {screen: Paths.ListDoctor})
        }>
        <Text style={styles.doctorsLabel}>
          <FormattedMessage id="doctor" />
        </Text>
        <Feather name="arrow-right" size={25} color={theme.colors.gradient} />
      </TouchableOpacity>
    </View>
  );

  return (
    <FlatList
      data={categories}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(_, index) => index.toString()}
      columnWrapperStyle={styles.grid}
      ListHeaderComponent={renderHeader}
      style={styles.container}
      renderItem={({item}) => (
        <TouchableOpacity
          style={styles.categoryButton}
          onPress={() =>
            navigation.navigate(Paths.HealthTrack, {
              screen: Paths.SpecialtyDetail,
              params: {
                specialty: item.name,
              },
            })
          }>
          <View style={styles.categoryIcon}>
            <item.Icon />
          </View>
          <Text style={styles.categoryText}>
            <FormattedMessage id={item.name} />
          </Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default Categories;
