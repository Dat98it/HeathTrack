import {Paths} from '@constant/navigation';

export type AppRootStackParams = {
  Authentication: undefined;
  BottomStack: undefined;
  SpecialtiesStack:
    | undefined
    | {
        screen: Paths.SpecialtyList | Paths.SpecialtyDetail;
        params: {
          specialty: string;
        };
      };
  DoctorStack:
    | undefined
    | {
        screen:
          | Paths.ListDoctor
          | Paths.InfoDoctor
          | Paths.RatingDoctor
          | Paths.FavouriteDoctor
          | Paths.DoctorByGender;
        params: {
          doctorId: string;
        };
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
