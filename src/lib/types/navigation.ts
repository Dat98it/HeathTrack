import {Paths} from '@constant/navigation';
import {Notification} from './notification';

export type NotificationParams = {
  notification: Notification;
};

export type SpecialtyParams = {
  specialty: string;
};

export type AppRootStackParams = {
  Authentication: undefined;
  BottomStack:
    | undefined
    | {
        screen: Paths.Home | Paths.Chat | Paths.Schedule | Paths.Profile;
      };
  SpecialtiesStack:
    | undefined
    | {
        screen: Paths.SpecialtyList | Paths.SpecialtyDetail;
        params: SpecialtyParams;
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
        params?: NotificationParams;
      };
  NotificationStack:
    | undefined
    | {
        screen: Paths.ListNotification | Paths.DetailNotification;
        params?: NotificationParams;
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
