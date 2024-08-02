import {ImageSourcePropType} from 'react-native';

export interface Doctor {
  id: number;
  name: string;
  specialization: string;
  image: ImageSourcePropType;
}
