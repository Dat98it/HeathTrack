import {useAppTheme} from '@hooks/theme';
import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import makeStyles from './styles';
import {AuthHeader} from '@components/index';

export const PrivacyPolicy = () => {
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  return (
    <SafeAreaView style={styles.container}>
      <AuthHeader title="privacy_policy" />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Text style={styles.lastUpdate}>Last Update: 14/08/2024</Text>
          <Text style={styles.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            pellentesque congue lorem, vel tincidunt tortor placerat a. Proin ac
            diam quam. Aenean in sagittis magna, ut feugiat diam. Fusce a
            scelerisque neque, sed accumsan metus.
          </Text>
          <Text style={styles.paragraph}>
            Nunc auctor tortor in dolor luctus, quis euismod urna tincidunt.
            Aenean arcu metus, bibendum at rhoncus at, volutpat ut lacus. Morbi
            pellentesque malesuada eros semper ultrices. Vestibulum lobortis
            enim vel neque auctor, a ultrices ex placerat. Mauris ut lacinia
            justo, sed suscipit tortor. Nam egestas nulla posuere neque
            tincidunt porta.
          </Text>
          <Text style={styles.sectionHeader}>Terms & Conditions</Text>
          <Text style={styles.paragraph}>
            1. Ut lacinia justo sit amet lorem sodales accumsan. Proin malesuada
            eleifend fermentum. Donec condimentum, nunc at rhoncus faucibus, ex
            nisi laoreet ipsum, eu pharetra eros est vitae orci. Morbi quis
            rhoncus mi. Nullam lacinia ornare accumsan. Duis laoreet, ex eget
            rutrum pharetra, lectus nisl posuere risus, vel facilisis nisi
            tellus eu turpis.
          </Text>
          <Text style={styles.paragraph}>
            2. Ut lacinia justo sit amet lorem sodales accumsan. Proin malesuada
            eleifend fermentum. Donec condimentum, nunc at rhoncus faucibus, ex
            nisi laoreet ipsum, eu pharetra eros est vitae orci. Morbi quis
            rhoncus mi. Nullam lacinia ornare accumsan. Duis laoreet, ex eget
            rutrum pharetra, lectus nisl posuere risus, vel facilisis nisi
            tellus eu turpis.
          </Text>
          <Text style={styles.paragraph}>
            3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            pellentesque congue lorem, vel tincidunt tortor placerat a. Proin ac
            diam quam. Aenean in sagittis magna, ut feugiat diam.
          </Text>
          <Text style={styles.paragraph}>
            4. Nunc auctor tortor in dolor luctus, quis euismod urna tincidunt.
            Aenean arcu metus, bibendum at rhoncus at, volutpat ut lacus. Morbi
            pellentesque malesuada eros semper ultrices. Vestibulum lobortis
            enim vel neque auctor, a ultrices ex placerat. Mauris ut lacinia
            justo, sed suscipit tortor. Nam egestas nulla posuere neque.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
