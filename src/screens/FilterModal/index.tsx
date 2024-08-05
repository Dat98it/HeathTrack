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
import {Text} from '@components/Text';
import {useAppTheme} from '@hooks/theme';
import Slider from '@react-native-community/slider';
import React, {useRef, useState} from 'react';
import {FlatList, Modal, Switch, TouchableOpacity, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Ionicons';
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

type Props = {
  visible: boolean;
  onRequestClose: () => void;
};

export const FilterModal = ({visible, onRequestClose}: Props) => {
  const flatlistRef = useRef<FlatList<Item>>(null);

  const theme = useAppTheme();
  const styles = makeStyles(theme);

  const [isAvailableToday, setIsAvailableToday] = useState(false);
  const [gender, setGender] = useState('Male');
  const [rating, setRating] = useState(3);
  const [workExperience, setWorkExperience] = useState(1);
  const [specialtySelected, setSpecialtySelected] = useState<string | null>(
    null,
  );
  const [age, setAge] = useState(25);

  const handleReset = () => {
    setIsAvailableToday(false);
    setGender('Male');
    setRating(3);
    setWorkExperience(1);
    setSpecialtySelected(null);
    setAge(15);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onRequestClose}>
      <View style={styles.container}>
        <View style={styles.modalContent}>
          <Text style={styles.header}>Filters</Text>

          <TouchableOpacity onPress={handleReset} style={styles.resetButton}>
            <Text style={styles.resetText}>Reset</Text>
          </TouchableOpacity>

          <View style={styles.row}>
            <Text style={styles.label}>Availability Today</Text>
            <Switch
              trackColor={{true: theme.colors.gradient}}
              thumbColor={theme.colors.white}
              ios_backgroundColor={theme.colors.lighBlue}
              value={isAvailableToday}
              onValueChange={setIsAvailableToday}
            />
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Gender</Text>
            <View style={styles.genderContainer}>
              <TouchableOpacity
                onPress={() => setGender('Male')}
                style={[
                  styles.genderButton,
                  gender === 'Male' && styles.selectedButton,
                ]}>
                <Text
                  style={
                    gender === 'Male'
                      ? styles.selectedText
                      : styles.unselectedText
                  }>
                  Male
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setGender('Female')}
                style={[
                  styles.genderButton,
                  gender === 'Female' && styles.selectedButton,
                ]}>
                <Text
                  style={
                    gender === 'Female'
                      ? styles.selectedText
                      : styles.unselectedText
                  }>
                  Female
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Top Rated</Text>
            <View style={styles.ratingContainer}>
              {[1, 2, 3, 4, 5].map(star => (
                <TouchableOpacity key={star} onPress={() => setRating(star)}>
                  <Icon
                    name="star"
                    size={24}
                    color={star <= rating ? theme.colors.gradient : '#C4C4C4'}
                  />
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View style={styles.colum}>
            <Text style={styles.label}>Work Experience (Years)</Text>
            <View style={styles.experienceContainer}>
              {[1, 2, 3].map(exp => (
                <TouchableOpacity
                  key={exp}
                  onPress={() => setWorkExperience(exp)}
                  style={[
                    styles.experienceButton,
                    workExperience === exp && styles.selectedButton,
                  ]}>
                  <Text
                    style={
                      workExperience === exp
                        ? styles.selectedText
                        : styles.unselectedText
                    }>
                    {exp === 1 ? '1 - 5' : exp === 2 ? '6 - 9' : '10 >'}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View style={styles.colum}>
            <Text style={styles.label}>Specialty</Text>
            <View style={styles.specialtyContainer}>
              <TouchableOpacity
                onPress={() =>
                  flatlistRef.current?.scrollToOffset({offset: 0})
                }>
                <AntDesign
                  size={25}
                  color={theme.colors.gradient}
                  name="left"
                />
              </TouchableOpacity>

              <FlatList
                ref={flatlistRef}
                horizontal
                showsHorizontalScrollIndicator={false}
                data={categories}
                renderItem={({item}) => (
                  <TouchableOpacity
                    style={[
                      styles.itemContainer,
                      specialtySelected === item.name &&
                        styles.selectedItemContainer,
                    ]}
                    onPress={() => setSpecialtySelected(item.name)}>
                    <item.Icon
                      color={
                        specialtySelected === item.name
                          ? theme.colors.white
                          : theme.colors.gradient
                      }
                    />
                  </TouchableOpacity>
                )}
                contentContainerStyle={styles.contentContainer}
              />

              <TouchableOpacity
                onPress={() => flatlistRef.current?.scrollToEnd()}>
                <AntDesign
                  size={25}
                  color={theme.colors.gradient}
                  name="right"
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.colum}>
            <Text style={styles.label}>Age</Text>
            <Slider
              style={styles.slider}
              minimumValue={15}
              maximumValue={100}
              minimumTrackTintColor={theme.colors.gradient}
              maximumTrackTintColor="#C4C4C4"
              thumbTintColor={theme.colors.gradient}
              value={age}
              onValueChange={setAge}
              step={1}
            />
            <Text style={styles.ageText}>{age}</Text>
          </View>

          <View style={styles.footer}>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={onRequestClose}>
              <Text style={styles.cancelButtonLabel}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.submitButton}
              onPress={onRequestClose}>
              <Text style={styles.submitButtonLabel}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};
