import {useAppTheme} from '@hooks/theme';
import React, {useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import makeStyles from './styles';
import {GradientView} from '@components/GradientView';
import {FormattedMessage} from 'react-intl';
import {useAppNavigation} from '@hooks/navigation';
import {Paths} from '@constant/index';

const services = [
  {
    name: 'cardiology',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pellentesque congue lorem, vel tincidunt tortor placerat a. Proin ac diam quam. Aenean in sagittis magna, ut feugiat diam.',
  },
  {
    name: 'dermatology',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pellentesque congue lorem, vel tincidunt tortor placerat a. Proin ac diam quam. Aenean in sagittis magna, ut feugiat diam.',
  },
  {
    name: 'general_medicine',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pellentesque congue lorem, vel tincidunt tortor placerat a. Proin ac diam quam. Aenean in sagittis magna, ut feugiat diam.',
  },
  {
    name: 'gynecology',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pellentesque congue lorem, vel tincidunt tortor placerat a. Proin ac diam quam. Aenean in sagittis magna, ut feugiat diam.',
  },
  {
    name: 'odontology',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pellentesque congue lorem, vel tincidunt tortor placerat a. Proin ac diam quam. Aenean in sagittis magna, ut feugiat diam.',
  },
  {
    name: 'oncology',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pellentesque congue lorem, vel tincidunt tortor placerat a. Proin ac diam quam. Aenean in sagittis magna, ut feugiat diam.',
  },
  {
    name: 'ophthalmology',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pellentesque congue lorem, vel tincidunt tortor placerat a. Proin ac diam quam. Aenean in sagittis magna, ut feugiat diam.',
  },
  {
    name: 'orthopedics',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pellentesque congue lorem, vel tincidunt tortor placerat a. Proin ac diam quam. Aenean in sagittis magna, ut feugiat diam.',
  },
];

const FavouriteServices = () => {
  const navigation = useAppNavigation();

  const theme = useAppTheme();
  const styles = makeStyles(theme);

  const [expandedService, setExpandedService] = useState<string | null>(null);

  const toggleExpand = (serviceName: string) => {
    setExpandedService(expandedService === serviceName ? null : serviceName);
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {services.map((service, index) => {
          return (
            <View key={index} style={styles.serviceContainer}>
              <TouchableOpacity onPress={() => toggleExpand(service.name)}>
                <GradientView style={styles.serviceHeader}>
                  <Icon name="heart" size={20} color={theme.colors.white} />
                  <Text style={styles.serviceName}>
                    <FormattedMessage id={service.name} />
                  </Text>
                  <Icon
                    name={
                      expandedService === service.name
                        ? 'chevron-up'
                        : 'chevron-down'
                    }
                    size={20}
                    color={theme.colors.white}
                  />
                </GradientView>
              </TouchableOpacity>

              {expandedService === service.name && (
                <View>
                  <View style={styles.serviceDescriptionContainer}>
                    <Text style={styles.serviceDescription}>
                      {service.description}
                    </Text>
                  </View>

                  <TouchableOpacity
                    style={styles.footer}
                    onPress={() =>
                      navigation.navigate(Paths.HealthTrack, {
                        screen: Paths.SpecialtyDetail,
                        params: {
                          specialty: service.name,
                        },
                      })
                    }>
                    <Text style={styles.footerText}>Looking Doctors</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default FavouriteServices;
