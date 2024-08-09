import {FoodIcon, RadioIcon} from '@assets/index';
import {
  AppHeader,
  Input,
  Text,
  TouchableOpacity,
  View,
} from '@components/index';
import React from 'react';
import {ScrollView} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

const SearchScreen = () => {
  return (
    <View allowInset backgroundColor="caribbeanGreen" flex={1}>
      {/* header */}
      <View
        justifyContent="center"
        paddingVertical={37}
        paddingHorizontal={38}
        gap={15}>
        <AppHeader title="Search" />

        <Input
          placeholder="Search..."
          backgroundColor="lightGreen"
          height={40}
        />
      </View>

      {/* content */}
      <View
        flexGrow={1}
        backgroundColor="honeydew"
        borderTopLeftRadius={55}
        borderTopRightRadius={55}
        paddingHorizontal={37}
        paddingVertical={32}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View flex={1} gap={30}>
            <View gap={5}>
              <Text fontSize={16}>Categories</Text>
              <View
                height={41}
                backgroundColor="lightGreen"
                borderRadius={18}
                flexDirection="row"
                alignItems="center"
                justifyContent="space-between"
                paddingLeft={21}
                paddingRight={10}>
                <Text>Select the category</Text>

                <Entypo name="chevron-down" size={20} />
              </View>
            </View>

            <View gap={5}>
              <Text fontSize={16}>Date</Text>
              <View
                height={41}
                backgroundColor="lightGreen"
                borderRadius={18}
                flexDirection="row"
                alignItems="center"
                justifyContent="space-between"
                paddingLeft={21}
                paddingRight={10}>
                <Text>30 /APR/2023</Text>

                <View
                  backgroundColor="caribbeanGreen"
                  padding={5}
                  borderRadius={10}>
                  <Entypo name="calendar" size={17} />
                </View>
              </View>
            </View>

            <View gap={12}>
              <Text fontSize={16}>Report</Text>

              <View flexDirection="row" gap={55}>
                <View flexDirection="row" alignItems="center" gap={12}>
                  <RadioIcon />
                  <Text fontSize={16}>Income</Text>
                </View>

                <View flexDirection="row" alignItems="center" gap={12}>
                  <RadioIcon checked />
                  <Text fontSize={16}>Expense</Text>
                </View>
              </View>
            </View>

            <TouchableOpacity
              width={169}
              height={36}
              borderRadius={20}
              backgroundColor="caribbeanGreen"
              justifyContent="center"
              alignItems="center"
              alignSelf="center">
              <Text>Search</Text>
            </TouchableOpacity>

            {/* Results */}

            <View marginTop={10} gap={10}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, index) => (
                <View
                  key={index}
                  backgroundColor="lightGreen"
                  borderRadius={18}
                  flexDirection="row"
                  alignItems="center"
                  paddingHorizontal={14}
                  paddingVertical={18}
                  gap={19}>
                  <View
                    width={57}
                    height={53}
                    justifyContent="center"
                    alignItems="center"
                    backgroundColor="lightBlue"
                    borderRadius={18}>
                    <FoodIcon />
                  </View>

                  <View flex={1}>
                    <Text>Dinner</Text>
                    <Text fontSize={12} color="oceanBlue">
                      18:27 - April 30
                    </Text>
                  </View>
                  <Text color="oceanBlue" fontWeight={'bold'}>
                    -$26,00
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default SearchScreen;
