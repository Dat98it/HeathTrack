/* eslint-disable react-native/no-inline-styles */
import {
  AppHeader,
  Input,
  Text,
  TouchableOpacity,
  View,
} from '@components/index';
import {useAppTheme} from '@hooks/theme';
import React from 'react';
import {ScrollView, TextInput} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

const AddSavingScreen = () => {
  const theme = useAppTheme();

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
        <AppHeader title="Add Saving" />
      </View>

      {/* content */}
      <View
        flexGrow={1}
        backgroundColor="honeydew"
        borderTopLeftRadius={55}
        borderTopRightRadius={55}
        paddingHorizontal={37}
        paddingVertical={35}>
        <View flex={1}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View gap={24}>
              {/* Form item */}
              <View gap={2}>
                <Text>Date</Text>
                <View
                  height={45}
                  backgroundColor="lightGreen"
                  borderRadius={20}
                  flexDirection="row"
                  justifyContent="space-between"
                  alignItems="center"
                  paddingHorizontal={10}>
                  <Text>November 15,2024</Text>

                  <TouchableOpacity
                    height={33}
                    width={33}
                    borderRadius={20}
                    backgroundColor="caribbeanGreen"
                    justifyContent="center"
                    alignItems="center">
                    <AntDesign name="calendar" size={20} />
                  </TouchableOpacity>
                </View>
              </View>

              {/* Form item */}
              <View gap={2}>
                <Text>Category</Text>
                <View
                  height={45}
                  backgroundColor="lightGreen"
                  borderRadius={20}
                  flexDirection="row"
                  justifyContent="space-between"
                  alignItems="center"
                  paddingHorizontal={10}>
                  <Text>Wedding</Text>

                  <Entypo
                    name="chevron-down"
                    size={20}
                    color={theme.colors.caribbeanGreen}
                  />
                </View>
              </View>

              {/* Form item */}
              <View gap={2}>
                <Text>Amount</Text>

                <Input
                  placeholder="$87.32"
                  backgroundColor="lightGreen"
                  height={45}
                />
              </View>

              {/* Form item */}
              <View gap={2}>
                <Text>Expense Title</Text>

                <Input
                  placeholder="Wedding deposit"
                  backgroundColor="lightGreen"
                  height={45}
                />
              </View>

              <TextInput
                style={{
                  height: 166,
                  backgroundColor: theme.colors.lightGreen,
                  borderRadius: 10,
                  paddingHorizontal: 24,
                  paddingVertical: 10,
                  color: theme.colors.caribbeanGreen,
                  textAlignVertical: 'top',
                  fontSize: 15,
                }}
                multiline
                placeholder="Enter Message..."
                placeholderTextColor={theme.colors.caribbeanGreen}
              />

              <TouchableOpacity
                width={169}
                height={40}
                backgroundColor="caribbeanGreen"
                alignSelf="center"
                justifyContent="center"
                alignItems="center"
                borderRadius={30}>
                <Text>Save</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default AddSavingScreen;
