import {
  EntertainmentIcon,
  FoodIcon,
  GiftsIcon,
  GroceriesIcon,
  MedicineIcon,
  MoreIcon,
  RentIcon,
  SavingsIcon,
  TransportIcon,
} from '@assets/index';
import {
  AppHeader,
  Balancer,
  Text,
  TouchableOpacity,
  View,
} from '@components/index';
import React from 'react';
import {Dimensions} from 'react-native';

const iconMap = {
  Food: FoodIcon,
  Transport: TransportIcon,
  Medicine: MedicineIcon,
  Groceries: GroceriesIcon,
  Rent: RentIcon,
  Gifts: GiftsIcon,
  Savings: SavingsIcon,
  Entertainment: EntertainmentIcon,
  More: MoreIcon,
};

const categories = [
  {name: 'Food'},
  {name: 'Transport'},
  {name: 'Medicine'},
  {name: 'Groceries'},
  {name: 'Rent'},
  {name: 'Gifts'},
  {name: 'Savings'},
  {name: 'Entertainment'},
  {name: 'More'},
];

const CategoriesScreen = () => {
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
        <AppHeader title="Categories" />

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
        <View flex={1} justifyContent="center" alignItems="center">
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
                  <Text fontSize={15} fontWeight="500" color="letterAndIcon">
                    {category.name}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </View>
    </View>
  );
};

export default CategoriesScreen;
