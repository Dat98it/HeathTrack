import {ImageSourcePropType} from 'react-native';

export interface Doctor {
  id: string;
  name: string;
  specialization: string;
  image: ImageSourcePropType;
}
