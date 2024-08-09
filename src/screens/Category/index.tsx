import {CarIcon, NewHouseIcon, TravelIcon, WeddingIcon} from '@assets/index';
import {
  AppHeader,
  Balancer,
  Text,
  TouchableOpacity,
  View,
} from '@components/index';
import {useAppTheme} from '@hooks/theme';
import React from 'react';
import {Dimensions, ScrollView} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

const data = [
  {
    id: '1',
    title: 'Dinner',
    time: '18:27 - April 30',
    amount: '-$26,00',
  },
  {
    id: '2',
    title: 'Delivery Pizza',
    time: '15:00 - April 24',
    amount: '-$18,35',
  },
  {
    id: '3',
    title: 'Lunch',
    time: '12:30 - April 15',
    amount: '-$15,40',
  },
  {
    id: '4',
    title: 'Brunch',
    time: '9:30 - April 08',
    amount: '-$12,13',
  },
];

const iconMap = {
  Travel: TravelIcon,
  'New House': NewHouseIcon,
  Car: CarIcon,
  Wedding: WeddingIcon,
};

const categories = [
  {name: 'Travel'},
  {name: 'New House'},
  {name: 'Car'},
  {name: 'Wedding'},
];

const type = false;

const ListItem = ({title, time, amount}: any) => {
  const theme = useAppTheme();

  return (
    <View flexDirection="row" alignItems="center" gap={10} paddingVertical={10}>
      <View
        width={57}
        height={57}
        backgroundColor="lightBlue"
        borderRadius={18}
        justifyContent="center"
        alignItems="center">
        <Ionicons name="fast-food" size={30} color={theme.colors.white} />
      </View>
      <View flexGrow={1}>
        <Text>{title}</Text>
        <Text color="gray">{time}</Text>
      </View>
      <Text color="gray">{amount}</Text>
    </View>
  );
};

const CategoryScreen = () => {
  return (
    <View
      allowInset
      backgroundColor="caribbeanGreen"
      flex={1}
      justifyContent="flex-end">
      {/* header */}
      <View
        paddingHorizontal={38}
        gap={24}
        paddingVertical={24}
        justifyContent="space-around">
        <AppHeader title="Food" />

        <Balancer />
      </View>

      {/* content */}
      <View
        flexGrow={1}
        backgroundColor="honeydew"
        borderTopLeftRadius={55}
        borderTopRightRadius={55}
        gap={30}
        paddingHorizontal={37}
        paddingVertical={35}>
        <View flex={1}>
          {/* Header */}
          {type ? (
            <ScrollView showsVerticalScrollIndicator={false}>
              <View gap={16}>
                <View gap={17}>
                  <View
                    flexDirection="row"
                    justifyContent="space-between"
                    alignItems="center">
                    <Text fontWeight={'bold'}>April</Text>

                    <TouchableOpacity
                      height={33}
                      width={33}
                      borderRadius={10}
                      backgroundColor="caribbeanGreen"
                      justifyContent="center"
                      alignItems="center">
                      <AntDesign name="calendar" size={20} />
                    </TouchableOpacity>
                  </View>

                  {/* History */}
                  <View gap={10}>
                    {data.map(item => (
                      <ListItem key={item.id} {...item} />
                    ))}
                  </View>
                </View>

                <TouchableOpacity
                  width={169}
                  height={40}
                  backgroundColor="caribbeanGreen"
                  alignSelf="center"
                  justifyContent="center"
                  alignItems="center"
                  borderRadius={30}>
                  <Text>Add Expense</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          ) : (
            <View flex={1} justifyContent="space-between">
              <View
                flexDirection="row"
                flexWrap="wrap"
                gap={5}
                justifyContent="space-between">
                {categories.map((category, index) => {
                  const Icon = (iconMap as any)[category.name];

                  return (
                    <TouchableOpacity key={index} alignItems="center">
                      <View
                        width={(Dimensions.get('window').width - 74) / 3 - 10}
                        height={(Dimensions.get('window').width - 74) / 3 - 10}
                        justifyContent="center"
                        alignItems="center"
                        backgroundColor="lightBlue"
                        borderRadius={20}>
                        <Icon />
                      </View>
                      <Text
                        fontSize={15}
                        fontWeight="500"
                        color="letterAndIcon">
                        {category.name}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>

              <TouchableOpacity
                width={169}
                height={40}
                backgroundColor="caribbeanGreen"
                alignSelf="center"
                justifyContent="center"
                alignItems="center"
                borderRadius={30}>
                <Text>Add Expense</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default CategoryScreen;
