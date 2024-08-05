import {GradientView, SpecialtiesHeader, Text} from '@components/index';
import {useAppTheme} from '@hooks/theme';
import React, {useState} from 'react';
import {FlatList, SafeAreaView, TouchableOpacity, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import makeStyles from './styles';
import {FormattedMessage} from 'react-intl';

interface ContactItem {
  id: string;
  label: string;
  icon: () => JSX.Element;
}

const data = [
  {
    id: '1',
    label: 'Customer Service',
    icon: () => <FontAwesome5 name="headphones-alt" size={30} color="white" />,
  },
  {
    id: '2',
    label: 'Website',
    icon: () => <MaterialCommunityIcons name="web" size={30} color="white" />,
  },
  {
    id: '3',
    label: 'Whatsapp',
    icon: () => <Ionicons name="logo-whatsapp" size={30} color="white" />,
  },
  {
    id: '4',
    label: 'Facebook',
    icon: () => <FontAwesome name="facebook" size={30} color="white" />,
  },
  {
    id: '5',
    label: 'Instagram',
    icon: () => <AntDesign name="instagram" size={30} color="white" />,
  },
];

export const HelpCenter = () => {
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  const [selectedTab, setSelectedTab] = useState('FAQ');
  const [selectedCategory, setSelectedCategory] = useState('Popular Topic');
  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  const faqItems = [
    'Lorem Ipsum Dolor Sit Amet?',
    'Lorem Ipsum Dolor Sit Amet?',
    'Lorem Ipsum Dolor Sit Amet?',
    'Lorem Ipsum Dolor Sit Amet?',
    'Lorem Ipsum Dolor Sit Amet?',
  ];

  const toggleExpand = (index: number) => {
    setExpandedItem(expandedItem === index ? null : index);
  };

  const renderItem = ({item}: {item: ContactItem}) => (
    <TouchableOpacity style={styles.itemContainer}>
      <GradientView style={styles.iconContainer}>
        <item.icon />
      </GradientView>
      {/* <item.icon /> */}
      <Text style={styles.label}>{item.label}</Text>
      <MaterialIcons name="keyboard-arrow-right" size={24} color="#00bcd4" />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <SpecialtiesHeader title="help_center" subTitle="how_can_we_help" />

      {/* Tabs */}
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[
            styles.tabButton,
            selectedTab === 'FAQ' && styles.selectedTab,
          ]}
          onPress={() => setSelectedTab('FAQ')}>
          <Text
            style={{
              ...styles.tabText,
              ...(selectedTab === 'FAQ' && styles.selectedTabText),
            }}>
            <FormattedMessage id="faq" />
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tabButton,
            selectedTab === 'Contact Us' && styles.selectedTab,
          ]}
          onPress={() => setSelectedTab('Contact Us')}>
          <Text
            style={{
              ...styles.tabText,
              ...(selectedTab === 'Contact Us' && styles.selectedTabText),
            }}>
            <FormattedMessage id="contact_us" />
          </Text>
        </TouchableOpacity>
      </View>

      {selectedTab === 'FAQ' ? (
        <>
          {/* Categories */}
          <View style={styles.categoriesContainer}>
            {['popular_topic', 'general', 'services'].map(category => (
              <TouchableOpacity
                key={category}
                style={[
                  styles.categoryButton,
                  selectedCategory === category && styles.selectedCategory,
                ]}
                onPress={() => setSelectedCategory(category)}>
                <Text
                  style={{
                    ...styles.categoryText,
                    ...(selectedCategory === category &&
                      styles.selectedCategoryText),
                  }}>
                  <FormattedMessage id={category} />
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* FAQ List */}
          {faqItems.map((item, index) => (
            <View key={index} style={styles.faqItem}>
              <TouchableOpacity
                onPress={() => toggleExpand(index)}
                style={
                  expandedItem === index
                    ? styles.faqQuestionSelected
                    : styles.faqQuestion
                }>
                <Text
                  style={
                    expandedItem === index
                      ? styles.faqQuestionSelectedText
                      : styles.faqQuestionText
                  }>
                  {item}
                </Text>
                <Ionicons
                  name={expandedItem === index ? 'chevron-up' : 'chevron-down'}
                  size={25}
                  color={
                    expandedItem === index
                      ? theme.colors.white
                      : theme.colors.gradient
                  }
                />
              </TouchableOpacity>
              {expandedItem === index && (
                <View style={styles.faqAnswerContainer}>
                  <Text style={styles.faqAnswer}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent pellentesque congue lorem, vel tincidunt tortor
                    placerat a. Proin ac diam quam. Aenean in sagittis magna, ut
                    feugiat diam.
                  </Text>
                </View>
              )}
            </View>
          ))}
        </>
      ) : (
        <>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.list}
          />
        </>
      )}
    </SafeAreaView>
  );
};
