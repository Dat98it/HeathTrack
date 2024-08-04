import {Paths} from '@constant/navigation';

export type DoctorParams = {
  doctorId: number;
};

export type SpecialtyParams = {
  specialty: string;
};

export type AppRootStackParams = {
  HealthTrack:
    | undefined
    | {
        screen: Paths;
        params?: object;
      };
  Authentication: undefined;
  BottomStack:
    | undefined
    | {
        screen: Paths;
      };
};

export type AuthenticationRootStack = {
  SignIn: undefined;
  SignUp: undefined;
  ResetPassword: undefined;
  OnBoarding: undefined;
  Welcome: undefined;
};

export type BottomRootStack = {
  Home: undefined;
  Chat: undefined;
  Schedule: undefined;
  Profile: undefined;
};
