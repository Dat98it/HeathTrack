import {DoctorAvatar} from '@assets/index';
import {ListDoctor} from '@components/ListDoctor';
import {Doctor} from '@lib/types';
import React from 'react';

const doctors: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Daniel Rodriguez',
    specialization: 'Interventional Cardiologist',
    image: DoctorAvatar, // Replace with actual image URLs
  },
  {
    id: '2',
    name: 'Dr. Jessica Ramirez',
    specialization: 'Electrophysiologist',
    image: DoctorAvatar,
  },
  {
    id: '3',
    name: 'Dr. Michael Chang',
    specialization: 'Cardiac Imaging Specialist',
    image: DoctorAvatar,
  },
  {
    id: '4',
    name: 'Dr. Michael Davidson, M.D.',
    specialization: 'Cardiology',
    image: DoctorAvatar,
  },
];

export const SearchController = () => {
  return <ListDoctor doctors={doctors} />;
};
